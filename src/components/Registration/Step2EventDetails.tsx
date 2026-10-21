import React from 'react';
import { TRACKS } from '../../data/eventData';
import { Users, User, Lightbulb, Link2, Plus, Trash2 } from 'lucide-react';

interface Step2Props {
  formData: {
    participationType: 'solo' | 'team';
    teamName?: string;
    teamSize?: number;
    teamMembers?: { name: string; email: string; rollNumber: string }[];
    selectedTrack: string;
    projectIdeaSummary?: string;
    githubUrl?: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2EventDetails: React.FC<Step2Props> = ({
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

  const handleAddMember = () => {
    const currentMembers = formData.teamMembers || [];
    if (currentMembers.length < 3) {
      onChange('teamMembers', [...currentMembers, { name: '', email: '', rollNumber: '' }]);
    }
  };

  const handleRemoveMember = (index: number) => {
    const currentMembers = formData.teamMembers || [];
    onChange('teamMembers', currentMembers.filter((_, i) => i !== index));
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    const currentMembers = [...(formData.teamMembers || [])];
    if (currentMembers[index]) {
      currentMembers[index] = { ...currentMembers[index], [field]: value };
      onChange('teamMembers', currentMembers);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Event Details
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Specify your participation mode, hackathon track, and project idea.
        </p>
      </div>

      <div className="space-y-5">
        {/* Participation Type (Solo vs Team) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Participation Mode <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onChange('participationType', 'solo')}
              className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                formData.participationType === 'solo'
                  ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20 text-brand-900 font-semibold'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                formData.participationType === 'solo' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold">Solo Participant</div>
                <div className="text-[11px] text-slate-500">Individual hacker</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                onChange('participationType', 'team');
                if (!formData.teamMembers || formData.teamMembers.length === 0) {
                  onChange('teamMembers', [{ name: '', email: '', rollNumber: '' }]);
                }
              }}
              className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                formData.participationType === 'team'
                  ? 'border-brand-500 bg-brand-50/50 ring-2 ring-brand-500/20 text-brand-900 font-semibold'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                formData.participationType === 'team' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold">Team (2 - 4 Members)</div>
                <div className="text-[11px] text-slate-500">Form a squad</div>
              </div>
            </button>
          </div>
        </div>

        {/* Team Details (Conditional) */}
        {formData.participationType === 'team' && (
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Team Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. ByteBusters"
                value={formData.teamName || ''}
                onChange={(e) => onChange('teamName', e.target.value)}
                className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm focus:outline-none placeholder:text-slate-400 ${
                  errors.teamName ? 'border-rose-400' : 'border-slate-200 focus:border-brand-500'
                }`}
              />
              {errors.teamName && (
                <p className="text-rose-600 text-xs mt-1">{errors.teamName}</p>
              )}
            </div>

            {/* Team Members List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">
                  Additional Team Members (Leader is specified in Step 1)
                </span>
                {(formData.teamMembers || []).length < 3 && (
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Teammate</span>
                  </button>
                )}
              </div>

              {(formData.teamMembers || []).map((member, index) => (
                <div key={index} className="p-3 bg-white rounded-xl border border-slate-200/90 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">
                      Member #{index + 2}
                    </span>
                    {(formData.teamMembers || []).length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(index)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove member"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Roll Number"
                      value={member.rollNumber}
                      onChange={(e) => handleMemberChange(index, 'rollNumber', e.target.value.toUpperCase())}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs uppercase font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Track Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Select Track <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TRACKS.map((t) => (
              <label
                key={t.id}
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  formData.selectedTrack === t.id
                    ? 'border-brand-500 bg-brand-50/40 ring-1 ring-brand-500/30'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="selectedTrack"
                  value={t.id}
                  checked={formData.selectedTrack === t.id}
                  onChange={(e) => onChange('selectedTrack', e.target.value)}
                  className="mt-1 text-brand-600 focus:ring-brand-500"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.title}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{t.popularThemes.slice(0, 2).join(' • ')}</div>
                </div>
              </label>
            ))}
          </div>
          {errors.selectedTrack && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.selectedTrack}</p>
          )}
        </div>

        {/* Project Idea Summary (Optional) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
            <span>Project Pitch / Idea Summary (Optional)</span>
            <span className="text-[11px] text-slate-400">Can be refined later</span>
          </label>
          <div className="relative">
            <Lightbulb className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <textarea
              rows={2}
              placeholder="Briefly describe what problem you aim to solve or what prototype you plan to build..."
              value={formData.projectIdeaSummary || ''}
              onChange={(e) => onChange('projectIdeaSummary', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* GitHub / Portfolio */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            GitHub / Portfolio Profile (Optional)
          </label>
          <div className="relative">
            <Link2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              placeholder="https://github.com/your-username"
              value={formData.githubUrl || ''}
              onChange={(e) => onChange('githubUrl', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-all"
        >
          ← Back: Basic Info
        </button>
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-7 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
        >
          <span>Next: Preferences</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
