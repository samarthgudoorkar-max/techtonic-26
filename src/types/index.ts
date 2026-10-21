export interface RegistrationData {
  id: string;
  createdAt: string;
  // Step 1: Basic Info
  fullName: string;
  email: string;
  phone: string;
  university: string;
  rollNumber: string;
  yearOfStudy: string;
  branch: string;
  // Step 2: Event Details
  participationType: 'solo' | 'team';
  teamName?: string;
  teamSize?: number;
  teamMembers?: { name: string; email: string; rollNumber: string }[];
  selectedTrack: string;
  projectIdeaSummary?: string;
  githubUrl?: string;
  // Step 3: Preferences
  workshops: string[];
  dietaryPreference: 'veg' | 'non-veg' | 'jain';
  tshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  laptopRequirement: boolean;
  priorExperience: 'beginner' | 'intermediate' | 'advanced';
  // Step 4: Terms
  acceptedCodeOfConduct: boolean;
  acceptedMediaConsent: boolean;
  acceptedRules: boolean;
  // Storage Mode
  storageMode: 'demo_local' | 'firestore';
}

export interface Track {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  popularThemes: string[];
  prizePool: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  day: 'day1' | 'day2';
  tag: string;
  tagColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'registration' | 'teams' | 'logistics';
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}
