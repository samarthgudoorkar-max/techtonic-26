import React, { useState } from 'react';
import { Step1BasicInfo } from './Step1BasicInfo';
import { Step2EventDetails } from './Step2EventDetails';
import { Step3Preferences } from './Step3Preferences';
import { Step4Terms } from './Step4Terms';
import { Step5Review } from './Step5Review';
import { TicketView } from './TicketView';
import { RegistrationData } from '../../types';
import { submitRegistration } from '../../services/registrationService';
import {
  Home,
  Tag,
  Award,
  UtensilsCrossed,
  Users2,
  FileCheck2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface RegistrationPageProps {
  onGoHome: () => void;
  preselectedTrack?: string;
  isFirebaseConfigured: boolean;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({
  onGoHome,
  preselectedTrack = 'ai-ml',
  isFirebaseConfigured
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [completedRegistration, setCompletedRegistration] = useState<RegistrationData | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    phone: '',
    university: '',
    rollNumber: '',
    yearOfStudy: '',
    branch: '',
    // Step 2: Event Details
    participationType: 'solo' as 'solo' | 'team',
    teamName: '',
    teamSize: 2,
    teamMembers: [] as { name: string; email: string; rollNumber: string }[],
    selectedTrack: preselectedTrack,
    projectIdeaSummary: '',
    githubUrl: '',
    // Step 3: Preferences
    workshops: [] as string[],
    dietaryPreference: 'veg' as 'veg' | 'non-veg' | 'jain',
    tshirtSize: 'M' as 'S' | 'M' | 'L' | 'XL' | 'XXL',
    laptopRequirement: true,
    priorExperience: 'intermediate' as 'beginner' | 'intermediate' | 'advanced',
    // Step 4: Terms
    acceptedCodeOfConduct: false,
    acceptedMediaConsent: false,
    acceptedRules: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Validation per step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = "Please enter a valid name";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }

      if (!formData.university.trim()) {
        newErrors.university = "University/College name is required";
      }

      if (!formData.rollNumber.trim()) {
        newErrors.rollNumber = "Roll number is required";
      } else if (formData.rollNumber.trim().length < 4) {
        newErrors.rollNumber = "Please enter a valid college roll number (e.g. 26951A1228)";
      }

      if (!formData.yearOfStudy) {
        newErrors.yearOfStudy = "Please select your year of study";
      }

      if (!formData.branch.trim()) {
        newErrors.branch = "Branch/Department is required";
      }
    }

    if (step === 2) {
      if (formData.participationType === 'team' && !formData.teamName?.trim()) {
        newErrors.teamName = "Please provide your team name";
      }
      if (!formData.selectedTrack) {
        newErrors.selectedTrack = "Please choose a track";
      }
    }

    if (step === 4) {
      if (!formData.acceptedCodeOfConduct) {
        newErrors.acceptedCodeOfConduct = "You must agree to the Code of Conduct";
      }
      if (!formData.acceptedRules) {
        newErrors.acceptedRules = "You must agree to the original work competition rules";
      }
      if (!formData.acceptedMediaConsent) {
        newErrors.acceptedMediaConsent = "Please acknowledge the photography consent";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await submitRegistration(formData);
      if (res.success) {
        setCompletedRegistration(res.data);
      } else {
        alert(res.error || "Failed to submit registration");
      }
    } catch (err: any) {
      alert("Submission error: " + (err?.message || "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsMeta = [
    { number: 1, title: 'Basic Information', desc: 'Your personal details' },
    { number: 2, title: 'Event Details', desc: 'Team and track info' },
    { number: 3, title: 'Preferences', desc: 'Workshops & amenities' },
    { number: 4, title: 'Terms & Conditions', desc: 'Rules and guidelines' },
    { number: 5, title: 'Confirmation', desc: 'Review and submit' }
  ];

  // If already registered and pass is generated, render the pass directly
  if (completedRegistration) {
    return (
      <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <TicketView
          registration={completedRegistration}
          onReset={() => {
            setCompletedRegistration(null);
            setCurrentStep(1);
          }}
          onGoHome={onGoHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <button
            onClick={onGoHome}
            className="flex items-center gap-1 hover:text-brand-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>›</span>
          <span className="text-slate-800 font-semibold">Registration</span>
        </div>

        {/* Page Header with Notebook Graphic matching reference image */}
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Event Registration
            </h1>
            <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal max-w-2xl">
              Join TECHTONIC '26 and be a part of an exciting 24-hour innovation journey.
            </p>
          </div>

          {/* Isometric Notebook Graphic / Visual Pill */}
          <div className="hidden lg:flex items-center gap-3 bg-white/90 border border-slate-200/90 rounded-2xl p-3 shadow-xs rotate-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono leading-tight text-slate-700">
              <span className="block font-black text-brand-700">Ideas • Build</span>
              <span className="block text-slate-500">Collaborate • Impact</span>
            </div>
          </div>
        </div>

        {/* Two-Column Registration Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stepper Card & Security Card */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Stepper Navigation Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Registration Steps
              </div>

              <div className="space-y-4">
                {stepsMeta.map((s) => {
                  const isActive = currentStep === s.number;
                  const isDone = currentStep > s.number;

                  return (
                    <div
                      key={s.number}
                      className={`flex items-start gap-3.5 p-2 rounded-xl transition-all ${
                        isActive ? 'bg-brand-50/70 border border-brand-200' : ''
                      }`}
                    >
                      {/* Step Number Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#2563EB] text-white shadow-xs'
                            : isDone
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.number}
                      </div>

                      {/* Step Labels */}
                      <div className="text-left">
                        <div
                          className={`text-sm font-bold ${
                            isActive
                              ? 'text-brand-900'
                              : isDone
                              ? 'text-slate-800'
                              : 'text-slate-600'
                          }`}
                        >
                          {s.title}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust & Privacy Security Card matching reference image */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Your information is safe with us
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  We only use your details for event-related communication and badge printing.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Active Form Step Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
              {currentStep === 1 && (
                <Step1BasicInfo
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                  onNext={handleNext}
                />
              )}

              {currentStep === 2 && (
                <Step2EventDetails
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {currentStep === 3 && (
                <Step3Preferences
                  formData={formData}
                  onChange={handleFieldChange}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {currentStep === 4 && (
                <Step4Terms
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {currentStep === 5 && (
                <Step5Review
                  formData={formData}
                  isSubmitting={isSubmitting}
                  isFirebaseConfigured={isFirebaseConfigured}
                  onEditStep={(step) => setCurrentStep(step)}
                  onSubmit={handleSubmit}
                  onBack={handleBack}
                />
              )}
            </div>
          </div>

        </div>

        {/* Bottom 4 Feature Callouts matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Free Registration</div>
              <div className="text-[11px] text-slate-500">No fees to participate</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Certificates</div>
              <div className="text-[11px] text-slate-500">For all participants</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Food & Accommodation</div>
              <div className="text-[11px] text-slate-500">Provided for shortlisted teams</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Networking</div>
              <div className="text-[11px] text-slate-500">Connect with industry experts</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
