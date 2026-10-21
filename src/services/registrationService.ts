import { RegistrationData } from '../types';
import { initFirebase } from './firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const LOCAL_STORAGE_KEY = 'techtonic_26_registrations';

// Pre-seeded demo registrations for an authentic demonstration
const SEED_REGISTRATIONS: RegistrationData[] = [
  {
    id: "TT26-HYD-9102",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    fullName: "Aarav Sharma",
    email: "aarav.sharma@iare.ac.in",
    phone: "+91 98450 12345",
    university: "Institute of Aeronautical Engineering",
    rollNumber: "22951A0501",
    yearOfStudy: "3rd Year",
    branch: "Computer Science and Engineering",
    participationType: "team",
    teamName: "NeuralSentinels",
    teamSize: 3,
    teamMembers: [
      { name: "Priya Varma", email: "priya.v@iare.ac.in", rollNumber: "22951A0542" },
      { name: "Karthik Reddy", email: "karthik.r@iare.ac.in", rollNumber: "22951A0518" }
    ],
    selectedTrack: "ai-ml",
    projectIdeaSummary: "Autonomous agricultural drone diagnostic agent with edge vision inference for early crop disease detection.",
    githubUrl: "https://github.com/aaravsharma/neural-sentinels",
    workshops: ["Agentic AI Systems with Gemini", "Cloud-Native Deployments"],
    dietaryPreference: "veg",
    tshirtSize: "L",
    laptopRequirement: true,
    priorExperience: "advanced",
    acceptedCodeOfConduct: true,
    acceptedMediaConsent: true,
    acceptedRules: true,
    storageMode: "demo_local"
  },
  {
    id: "TT26-HYD-7824",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    fullName: "Sneha Patel",
    email: "sneha.patel@cbit.ac.in",
    phone: "+91 99887 65432",
    university: "CBIT Hyderabad",
    rollNumber: "160121733055",
    yearOfStudy: "4th Year",
    branch: "Information Technology",
    participationType: "team",
    teamName: "CipherShield",
    teamSize: 2,
    teamMembers: [
      { name: "Rahul Deshmukh", email: "rahul.d@cbit.ac.in", rollNumber: "160121733062" }
    ],
    selectedTrack: "cybersecurity",
    projectIdeaSummary: "Zero-Knowledge identity verification protocol for student campus verification without leaking PII.",
    githubUrl: "https://github.com/snehapatel/ciphershield",
    workshops: ["Defensive Security & Threat Hunting"],
    dietaryPreference: "veg",
    tshirtSize: "M",
    laptopRequirement: true,
    priorExperience: "intermediate",
    acceptedCodeOfConduct: true,
    acceptedMediaConsent: true,
    acceptedRules: true,
    storageMode: "demo_local"
  }
];

export const getStoredRegistrations = (): RegistrationData[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_REGISTRATIONS));
    return SEED_REGISTRATIONS;
  }
  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("Error parsing stored registrations:", err);
    return SEED_REGISTRATIONS;
  }
};

export const generateRegistrationId = (): string => {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `TT26-IARE-${randomSuffix}`;
};

export const submitRegistration = async (
  formData: Omit<RegistrationData, 'id' | 'createdAt' | 'storageMode'>
): Promise<{ success: boolean; data: RegistrationData; mode: 'firestore' | 'demo_local'; error?: string }> => {
  const newId = generateRegistrationId();
  const registrationRecord: RegistrationData = {
    ...formData,
    id: newId,
    createdAt: new Date().toISOString(),
    storageMode: 'demo_local'
  };

  const { isConfigured, db } = initFirebase();

  // If Firebase is configured, attempt writing to Firestore
  if (isConfigured && db) {
    try {
      registrationRecord.storageMode = 'firestore';
      const docRef = await addDoc(collection(db, 'techtonic_registrations'), {
        ...registrationRecord,
        submittedAt: new Date().toISOString()
      });
      console.log("Saved to Firebase Firestore with Document ID:", docRef.id);
      
      // Also cache locally for immediate offline/display consistency
      const localList = getStoredRegistrations();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([registrationRecord, ...localList]));

      return {
        success: true,
        data: registrationRecord,
        mode: 'firestore'
      };
    } catch (err: any) {
      console.warn("Firestore write failed, falling back to LocalStorage demo storage:", err);
      registrationRecord.storageMode = 'demo_local';
    }
  }

  // Fallback to LocalStorage Demo Mode
  try {
    const localList = getStoredRegistrations();
    const updated = [registrationRecord, ...localList];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

    return {
      success: true,
      data: registrationRecord,
      mode: 'demo_local'
    };
  } catch (err: any) {
    return {
      success: false,
      data: registrationRecord,
      mode: 'demo_local',
      error: err?.message || "Failed to save registration locally"
    };
  }
};

export const fetchAllRegistrations = async (): Promise<{ registrations: RegistrationData[]; source: 'firestore' | 'demo_local' }> => {
  const { isConfigured, db } = initFirebase();

  if (isConfigured && db) {
    try {
      const q = query(collection(db, 'techtonic_registrations'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const docs: RegistrationData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc.data() as RegistrationData);
      });
      if (docs.length > 0) {
        return { registrations: docs, source: 'firestore' };
      }
    } catch (err) {
      console.warn("Could not fetch from Firestore, falling back to local:", err);
    }
  }

  return { registrations: getStoredRegistrations(), source: 'demo_local' };
};
