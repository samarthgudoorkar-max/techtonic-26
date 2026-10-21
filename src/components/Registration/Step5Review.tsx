import React from 'react';
import { TRACKS } from '../../data/eventData';
import { Cloud, Database, Edit3, Loader2 } from 'lucide-react';

interface Step5Props {
  formData: any;
  isSubmitting: boolean;
  isFirebaseConfigured: boolean;
  onEditStep: (stepNumber: number) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const Step5Review: React.FC<Step5Props> = ({
  formData,
  isSubmitting,
  isFirebaseConfigured,
  onEditStep,
  onSubmit,
  onBack
}) => {
  const selectedTrackObj = TRACKS.find((t) => t.id === formData.selectedTrack);

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Review & Confirmation
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Verify your registration details before final submission.
        </p>
      </div>

      {/* Backend / Storage Mode Badge */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 ${
        isFirebaseConfigured
          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
          : 'bg-amber-50/70 border-amber-200 text-amber-900'
      }`}>
        {isFirebaseConfigured ? (
          <Cloud className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
        ) : (
          <Database className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
        )}
        <div className="text-xs">
          <div className="font-bold">
            {isFirebaseConfigured
              ? 'Firebase Firestore Backend Active'
              : 'Demonstration Mode (Local Storage)'}
          </div>
          <p className="mt-0.5 text-slate-600 leading-relaxed">
            {isFirebaseConfigured
              ? 'Your registration will be securely saved into Google Cloud Firestore.'
              : 'Registrations are stored locally in your browser session for this assignment demo. You can configure Firebase credentials at any time via the top navigation bar.'}
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="space-y-4">
        
        {/* Basic Info Summary */}
        <div className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-4">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/60">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Participant Information
            </span>
            <button
              onClick={() => onEditStep(1)}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs">
            <div>
              <span className="text-slate-400 block">Name:</span>
              <span className="font-bold text-slate-800">{formData.fullName}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Roll Number:</span>
              <span className="font-bold font-mono text-slate-800">{formData.rollNumber}</span>
            </div>
            <div>
              <span className="text-slate-400 block">College:</span>
              <span className="font-medium text-slate-800">{formData.university}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Branch & Year:</span>
              <span className="font-medium text-slate-800">{formData.branch} • {formData.yearOfStudy}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Email:</span>
              <span className="font-medium text-slate-800">{formData.email}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Phone:</span>
              <span className="font-medium text-slate-800">{formData.phone}</span>
            </div>
          </div>
        </div>

        {/* Event Details Summary */}
        <div className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-4">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/60">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Track & Participation
            </span>
            <button
              onClick={() => onEditStep(2)}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs">
            <div>
              <span className="text-slate-400 block">Selected Track:</span>
              <span className="font-bold text-brand-700">
                {selectedTrackObj?.title || formData.selectedTrack}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Mode:</span>
              <span className="font-bold text-slate-800 capitalize">
                {formData.participationType === 'team'
                  ? `Team: ${formData.teamName || 'Squad'}`
                  : 'Solo Participant'}
              </span>
            </div>
            {formData.participationType === 'team' && (formData.teamMembers || []).length > 0 && (
              <div className="sm:col-span-2 pt-1">
                <span className="text-slate-400 block">Team Members:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(formData.teamMembers || []).map((m: any, idx: number) => (
                    <span key={idx} className="bg-white px-2 py-1 rounded-md border border-slate-200 text-slate-700">
                      {m.name || `Member ${idx + 2}`} ({m.rollNumber || 'N/A'})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preferences Summary */}
        <div className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-4">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/60">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Preferences & Logistics
            </span>
            <button
              onClick={() => onEditStep(3)}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block">Diet:</span>
              <span className="font-bold capitalize text-slate-800">{formData.dietaryPreference}</span>
            </div>
            <div>
              <span className="text-slate-400 block">T-Shirt Size:</span>
              <span className="font-bold text-slate-800">{formData.tshirtSize}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Experience:</span>
              <span className="font-bold capitalize text-slate-800">{formData.priorExperience}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all disabled:opacity-50"
        >
          ← Back: Rules
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Pass...</span>
            </>
          ) : (
            <>
              <span>Confirm & Generate Pass</span>
              <span>🎉</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
