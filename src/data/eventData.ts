import { Track, ScheduleItem, FAQItem } from '../types';

export const EVENT_DETAILS = {
  name: "TECHTONIC '26",
  tagline: "Where Innovation Breaks Boundaries.",
  shortDescription: "A 24-hour technical event to ideate, build and showcase innovative solutions with real-world impact.",
  heroDescription: "Explore emerging technologies, collaborate with creative minds, and transform bold ideas into real-world innovations at TECHTONIC '26.",
  registrationHeading: "Register for TECHTONIC '26",
  registrationSubtitle: "Your journey into innovation starts here. Join TECHTONIC '26 and be part of the next generation of technology creators.",
  confirmationHeading: "You're Registered for TECHTONIC '26!",
  poweredBy: "DS Corporation",
  organizer: "GDG IARE Technical Team (Demonstration)",
  dates: "Feb 15 – 16, 2026",
  timing: "9:00 AM onwards",
  venue: "IARE Campus, Hyderabad",
  venueAddress: "Institute of Aeronautical Engineering, Dundigal, Hyderabad, Telangana 500043",
  eligibility: "Open to all College Students",
  contactEmail: "techtonic26@iare.ac.in",
  countdownTarget: "2026-02-15T09:00:00+05:30",
  totalPrizes: "₹5 Lakhs+",
  expectedParticipants: "500+",
  hackathonDuration: "24 Hours",
};

export const TRACKS: Track[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    icon: "Bot",
    color: "from-blue-500 to-indigo-600",
    description: "Harness generative AI, agentic systems, computer vision, and NLP to address complex challenges in healthcare, education, and accessibility.",
    popularThemes: ["Agentic Workflows", "Healthcare Diagnostics", "Multimodal GenAI", "Edge AI"],
    prizePool: "₹1,20,000"
  },
  {
    id: "web-app",
    title: "Web & App Development",
    icon: "Code",
    color: "from-indigo-500 to-purple-600",
    description: "Build blazing-fast, responsive web applications, progressive web apps, and native mobile experiences using modern frameworks and cloud architectures.",
    popularThemes: ["Full-Stack SaaS", "Accessibility Tools", "Micro-Frontends", "Real-Time Collaboration"],
    prizePool: "₹1,00,000"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Privacy",
    icon: "ShieldCheck",
    color: "from-emerald-500 to-teal-600",
    description: "Develop defensive security utilities, vulnerability scanners, zero-trust architectures, and cryptographic protocols that safeguard users and enterprises.",
    popularThemes: ["Zero-Trust Tooling", "Threat Detection", "Privacy-Preserving Tech", "Secure Auth"],
    prizePool: "₹90,000"
  },
  {
    id: "open-innovation",
    title: "Open Innovation & Social Good",
    icon: "Lightbulb",
    color: "from-amber-500 to-orange-600",
    description: "No restrictions — bring any cross-disciplinary solution tackling environmental sustainability, smart cities, disaster management, or fintech.",
    popularThemes: ["CleanTech & Green Energy", "Smart Agriculture", "Financial Inclusion", "Disaster Resilience"],
    prizePool: "₹90,000"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Infrastructure",
    icon: "Cloud",
    color: "from-cyan-500 to-blue-600",
    description: "Build resilient cloud-native systems, automated CI/CD pipelines, container orchestration solutions, and serverless architectures.",
    popularThemes: ["Serverless Platforms", "Kubernetes Automation", "Cost Optimization", "Observability"],
    prizePool: "₹60,000"
  },
  {
    id: "iot-robotics",
    title: "IoT & Hardware Prototyping",
    icon: "Cpu",
    color: "from-rose-500 to-pink-600",
    description: "Bridge the physical and digital divide with embedded systems, smart sensors, drone telemetry, and industrial IoT automation.",
    popularThemes: ["Smart Campus Systems", "Industrial Telemetry", "Autonomous Rovers", "Wearable Health"],
    prizePool: "₹60,000"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: "08:30 AM - 09:30 AM",
    title: "Check-in & Welcome Breakfast",
    description: "Badge collection, swag distribution, networking breakfast, and system setup at the main auditorium.",
    location: "Auditorium Foyer",
    day: "day1",
    tag: "Registration",
    tagColor: "blue"
  },
  {
    time: "09:30 AM - 10:30 AM",
    title: "Grand Opening Ceremony & Keynote",
    description: "Welcome address by GDG IARE leads, keynote on 'Where Innovation Breaks Boundaries', rules & track reveals.",
    location: "Main Auditorium",
    day: "day1",
    tag: "Ceremony",
    tagColor: "purple"
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins! (24-Hour Timer Starts)",
    description: "Teams set up in their designated hack rooms. Problem statements activated and API credits distributed.",
    location: "Innovation Hub Labs",
    day: "day1",
    tag: "Hackathon",
    tagColor: "emerald"
  },
  {
    time: "01:30 PM - 02:30 PM",
    title: "Lunch & Networking Break",
    description: "Buffet lunch provided for all registered participants. Informal mentor meet & greet.",
    location: "Campus Dining Hall",
    day: "day1",
    tag: "Meals",
    tagColor: "amber"
  },
  {
    time: "03:30 PM - 05:30 PM",
    title: "Mentorship Round 1: Idea Validation & Tech Stack",
    description: "Industry mentors rotate across teams to critique architecture, suggest APIs, and validate feasibility.",
    location: "Team Pods",
    day: "day1",
    tag: "Mentorship",
    tagColor: "indigo"
  },
  {
    time: "08:00 PM - 09:30 PM",
    title: "Dinner & Lightning Tech Talks",
    description: "Hot dinner followed by optional 10-minute lightning tech talks by Google Developer Experts.",
    location: "Dining Hall & Amphitheatre",
    day: "day1",
    tag: "Meals",
    tagColor: "amber"
  },
  {
    time: "11:30 PM - 12:30 AM",
    title: "Midnight Snacks & Esports Mini-Challenge",
    description: "Chai, energy drinks, gaming mini-games to recharge tired minds!",
    location: "Student Lounge",
    day: "day1",
    tag: "Fun",
    tagColor: "rose"
  },
  {
    time: "03:00 AM - 05:00 AM",
    title: "Mentorship Round 2: Prototype Review & Polish",
    description: "Late-night mentor desk open for debugging, deployment assistance, and mock presentation coaching.",
    location: "Innovation Labs",
    day: "day2",
    tag: "Mentorship",
    tagColor: "indigo"
  },
  {
    time: "07:30 AM - 08:30 AM",
    title: "Sunrise Yoga & Breakfast",
    description: "Quick stretch, coffee, and hearty breakfast before final submissions.",
    location: "Lawn & Dining Hall",
    day: "day2",
    tag: "Meals",
    tagColor: "amber"
  },
  {
    time: "10:30 AM",
    title: "Soft Code Freeze & Git Repo Lock",
    description: "All code must be committed to GitHub repositories with README and video demo links.",
    location: "Submission Portal",
    day: "day2",
    tag: "Deadline",
    tagColor: "rose"
  },
  {
    time: "11:00 AM - 01:30 PM",
    title: "Judging Expo & Final Pitches",
    description: "Teams demonstrate working prototypes live to panels of industry judges and GDG leads.",
    location: "Exhibition Hall",
    day: "day2",
    tag: "Judging",
    tagColor: "purple"
  },
  {
    time: "03:00 PM - 04:30 PM",
    title: "Grand Valedictory & Prize Distribution",
    description: "Announcement of winners, trophy ceremony, certificate distribution, and closing remarks.",
    location: "Main Auditorium",
    day: "day2",
    tag: "Awards",
    tagColor: "emerald"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "general",
    question: "What is TECHTONIC '26?",
    answer: "TECHTONIC '26 is the flagship 24-hour college technical event hosted at the IARE Campus, Hyderabad. It brings together ambitious student developers, designers, and innovators to solve pressing challenges across multiple domains."
  },
  {
    category: "registration",
    question: "Is there any registration fee to participate?",
    answer: "No! Registration for TECHTONIC '26 is 100% free of charge for all college students. Food, high-speed Wi-Fi, mentorship, and swags are fully provided."
  },
  {
    category: "teams",
    question: "Can I participate individually or do I need a team?",
    answer: "You can participate either as an individual (Solo) or in a team of 2 to 4 members. If you don't have a team yet, you can register solo and connect with other participants during the opening networking session."
  },
  {
    category: "general",
    question: "Who is eligible to participate?",
    answer: "Any student currently enrolled in an undergraduate or postgraduate program (B.Tech, B.E., M.Tech, MCA, BCA, B.Sc, etc.) with a valid college ID card is welcome to participate."
  },
  {
    category: "logistics",
    question: "Will food and accommodation be provided?",
    answer: "Yes, complimentary meals (lunch, dinner, midnight snacks, and breakfast) are provided throughout the 24 hours. Dedicated resting zones and basic rest facilities are arranged on campus for shortlisted participants."
  },
  {
    category: "logistics",
    question: "What should I bring to the event?",
    answer: "Bring your laptop, charger, extension box (recommended), college ID card, government photo ID, water bottle, and any hardware/sensors you plan to use for IoT tracks."
  },
  {
    category: "teams",
    question: "Can team members be from different colleges or years?",
    answer: "Yes! Inter-college and inter-branch teams are strongly encouraged. Cross-disciplinary collaboration often leads to the most creative solutions."
  },
  {
    category: "registration",
    question: "How does the registration and selection process work?",
    answer: "After submitting your registration form on this portal, you will instantly receive your digital pass. Our technical evaluation team will review submissions and confirm shortlisted teams via email."
  }
];

export const PRIZES = [
  {
    rank: "1st Place",
    title: "Grand Champion",
    amount: "₹1,50,000",
    perks: "Exclusive Trophy, GDG Mentorship Fast-Track, Tech Goodies, Cloud Credits",
    badgeColor: "bg-amber-500 text-white"
  },
  {
    rank: "2nd Place",
    title: "First Runner-Up",
    amount: "₹1,00,000",
    perks: "Silver Trophy, Premium Dev Tools Subscriptions, Cloud Vouchers",
    badgeColor: "bg-slate-400 text-white"
  },
  {
    rank: "3rd Place",
    title: "Second Runner-Up",
    amount: "₹75,000",
    perks: "Bronze Trophy, Digital Badges, Goodie Kits",
    badgeColor: "bg-amber-700 text-white"
  },
  {
    rank: "Special",
    title: "Best All-Girls Team",
    amount: "₹35,000",
    perks: "Women in Tech Award & Mentorship Program access",
    badgeColor: "bg-purple-600 text-white"
  },
  {
    rank: "Special",
    title: "Best Freshman/Beginner Team",
    amount: "₹25,000",
    perks: "Rising Star Trophy & Starter Dev Toolkits",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    rank: "Track Bounties",
    title: "Track Category Winners",
    amount: "₹1,15,000",
    perks: "₹20K+ per track category winner + Sponsor perks",
    badgeColor: "bg-emerald-600 text-white"
  }
];
