import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Optional Firebase configuration from environment or localStorage overrides
export const getFirebaseConfig = () => {
  const localConfigStr = typeof window !== 'undefined' ? localStorage.getItem('techtonic_firebase_custom_config') : null;
  if (localConfigStr) {
    try {
      return JSON.parse(localConfigStr);
    } catch {
      // fallback
    }
  }

  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  };
};

let app: FirebaseApp | null = null;
let firestoreDb: Firestore | null = null;

export const initFirebase = (): { isConfigured: boolean; db: Firestore | null } => {
  const config = getFirebaseConfig();
  
  // Validate that essential keys exist
  if (!config.apiKey || !config.projectId) {
    return { isConfigured: false, db: null };
  }

  try {
    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }
    firestoreDb = getFirestore(app);
    return { isConfigured: true, db: firestoreDb };
  } catch (error) {
    console.warn("Firebase initialization skipped or failed; operating in Demo Mode:", error);
    return { isConfigured: false, db: null };
  }
};

export const { isConfigured: isFirebaseConfigured, db } = initFirebase();
