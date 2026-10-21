import React from 'react';
import { ShieldCheck, Camera, FileCode, AlertCircle } from 'lucide-react';

interface Step4Props {
  formData: {
    acceptedCodeOfConduct: boolean;
    acceptedMediaConsent: boolean;
    acceptedRules: boolean;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step4Terms: React.FC<Step4Props> = ({
  formData,
  errors,
  onChange,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Rules, Terms & Code of Conduct
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Review our community guidelines to ensure an inclusive, fair hackathon.
        </p>
      </div>

      <div className="space-y-4">
        {/* Term 1: Code of Conduct */}
        <label
          className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
            formData.acceptedCodeOfConduct
              ? 'border-brand-500 bg-brand-50/40'
              : 'border-slate-200 bg-white hover:bg-slate-50'
          }`}
        >
          <input
            type="checkbox"
            checked={formData.acceptedCodeOfConduct}
            onChange={(e) => onChange('acceptedCodeOfConduct', e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>I agree to the TECHTONIC '26 Code of Conduct *</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              I agree to foster a harassment-free, collaborative environment for all participants regardless of background, gender, or technical skill level.
            </p>
          </div>
        </label>
        {errors.acceptedCodeOfConduct && (
          <p className="text-rose-600 text-xs font-medium pl-1">{errors.acceptedCodeOfConduct}</p>
        )}

        {/* Term 2: Originality & Event Rules */}
        <label
          className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
            formData.acceptedRules
              ? 'border-brand-500 bg-brand-50/40'
              : 'border-slate-200 bg-white hover:bg-slate-50'
          }`}
        >
          <input
            type="checkbox"
            checked={formData.acceptedRules}
            onChange={(e) => onChange('acceptedRules', e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <FileCode className="w-4 h-4 text-purple-600" />
              <span>Original Work & Fair Competition Confirmation *</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              All code and design prototypes submitted will be developed during the official 24-hour hackathon window. Open-source libraries are permitted; pre-built full applications are prohibited.
            </p>
          </div>
        </label>
        {errors.acceptedRules && (
          <p className="text-rose-600 text-xs font-medium pl-1">{errors.acceptedRules}</p>
        )}

        {/* Term 3: Media Consent */}
        <label
          className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
            formData.acceptedMediaConsent
              ? 'border-brand-500 bg-brand-50/40'
              : 'border-slate-200 bg-white hover:bg-slate-50'
          }`}
        >
          <input
            type="checkbox"
            checked={formData.acceptedMediaConsent}
            onChange={(e) => onChange('acceptedMediaConsent', e.target.checked)}
            className="mt-1 w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>Photography & Social Media Consent *</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              I consent to event photographs and livestream recordings capturing workshops, team presentations, and valedictory moments for GDG IARE media.
            </p>
          </div>
        </label>
        {errors.acceptedMediaConsent && (
          <p className="text-rose-600 text-xs font-medium pl-1">{errors.acceptedMediaConsent}</p>
        )}

        <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-xs text-blue-800 leading-relaxed">
            Intellectual Property (IP) remains 100% owned by the creators and teams. Neither GDG IARE nor DS Corporation claims ownership over your solutions.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all"
        >
          ← Back: Preferences
        </button>
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-7 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
        >
          <span>Next: Confirmation</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
