import React from 'react';
import { Utensils, Shirt, Laptop, CheckSquare, Square } from 'lucide-react';

interface Step3Props {
  formData: {
    workshops: string[];
    dietaryPreference: 'veg' | 'non-veg' | 'jain';
    tshirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
    laptopRequirement: boolean;
    priorExperience: 'beginner' | 'intermediate' | 'advanced';
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step3Preferences: React.FC<Step3Props> = ({
  formData,
  onChange,
  onNext,
  onBack
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const workshopOptions = [
    "Agentic AI Systems with Google Gemini",
    "Cloud-Native Deployments & Kubernetes",
    "Defensive Security & Threat Hunting",
    "Hardware Prototyping with Micro-controllers"
  ];

  const toggleWorkshop = (ws: string) => {
    const list = formData.workshops || [];
    if (list.includes(ws)) {
      onChange('workshops', list.filter((item) => item !== ws));
    } else {
      onChange('workshops', [...list, ws]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Preferences & Amenities
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Customize your workshop attendance, food choices, and event swag fit.
        </p>
      </div>

      <div className="space-y-5">
        {/* Workshop Interest */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Interested Lightning Workshops (Optional)
          </label>
          <div className="space-y-2">
            {workshopOptions.map((ws) => {
              const isSelected = (formData.workshops || []).includes(ws);
              return (
                <div
                  key={ws}
                  onClick={() => toggleWorkshop(ws)}
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-brand-500 bg-brand-50/40 text-brand-900 font-semibold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {isSelected ? (
                    <CheckSquare className="w-4 h-4 text-brand-600 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-300 shrink-0" />
                  )}
                  <span className="text-xs">{ws}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dietary Preference & T-Shirt Size Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Dietary Preference */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-slate-400" />
              <span>Dietary Preference</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'veg', label: 'Vegetarian' },
                { id: 'non-veg', label: 'Non-Veg' },
                { id: 'jain', label: 'Jain' }
              ].map((diet) => (
                <button
                  key={diet.id}
                  type="button"
                  onClick={() => onChange('dietaryPreference', diet.id)}
                  className={`py-2 px-1 text-xs rounded-xl border font-medium text-center transition-all ${
                    formData.dietaryPreference === diet.id
                      ? 'border-brand-500 bg-brand-50 text-brand-700 font-bold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {diet.label}
                </button>
              ))}
            </div>
          </div>

          {/* T-Shirt Size */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Shirt className="w-3.5 h-3.5 text-slate-400" />
              <span>Event T-Shirt Size</span>
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {(['S', 'M', 'L', 'XL', 'XXL'] as const).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => onChange('tshirtSize', size)}
                  className={`py-2 text-xs rounded-xl border font-bold text-center transition-all ${
                    formData.tshirtSize === size
                      ? 'border-brand-500 bg-brand-600 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Prior Experience Level */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Prior Hackathon Experience
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { id: 'beginner', title: 'Beginner', desc: '1st Hackathon' },
              { id: 'intermediate', title: 'Intermediate', desc: '1 - 2 Events' },
              { id: 'advanced', title: 'Experienced', desc: '3+ Hackathons' }
            ].map((exp) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => onChange('priorExperience', exp.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  formData.priorExperience === exp.id
                    ? 'border-brand-500 bg-brand-50/50 ring-1 ring-brand-500/30'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">{exp.title}</div>
                <div className="text-[11px] text-slate-500">{exp.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Hardware / Laptop Checkbox */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">I will bring my own laptop & charger</div>
              <div className="text-[11px] text-slate-500">Power strips & Wi-Fi will be provided at every desk</div>
            </div>
          </div>
          <input
            type="checkbox"
            checked={formData.laptopRequirement}
            onChange={(e) => onChange('laptopRequirement', e.target.checked)}
            className="w-4 h-4 text-brand-600 rounded-md border-slate-300 focus:ring-brand-500"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all"
        >
          ← Back: Event Details
        </button>
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-7 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
        >
          <span>Next: Rules & Terms</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
