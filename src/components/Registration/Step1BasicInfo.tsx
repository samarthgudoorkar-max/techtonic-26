import React from 'react';
import { User, Mail, Phone, Building2, IdCard, GraduationCap, Layers } from 'lucide-react';

interface Step1Props {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    university: string;
    rollNumber: string;
    yearOfStudy: string;
    branch: string;
  };
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
  onNext: () => void;
}

export const Step1BasicInfo: React.FC<Step1Props> = ({
  formData,
  errors,
  onChange,
  onNext
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
          Basic Information
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Enter your details to get started.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/70 border rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-400 ${
                errors.fullName
                  ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => onChange('email', e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-400 ${
                  errors.email
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-rose-600 text-xs mt-1 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => onChange('phone', e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-400 ${
                  errors.phone
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-rose-600 text-xs mt-1 font-medium">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* University / College */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            University/College <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Enter your university name"
              value={formData.university}
              onChange={(e) => onChange('university', e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-400 ${
                errors.university
                  ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
              }`}
            />
          </div>
          {errors.university && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.university}</p>
          )}
        </div>

        {/* Roll Number & Year of Study Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Roll Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Roll Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <IdCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. 26951A1228"
                value={formData.rollNumber}
                onChange={(e) => onChange('rollNumber', e.target.value.toUpperCase())}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm uppercase font-mono tracking-wider focus:outline-none transition-all placeholder:text-slate-400 ${
                  errors.rollNumber
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                    : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
                }`}
              />
            </div>
            {errors.rollNumber && (
              <p className="text-rose-600 text-xs mt-1 font-medium">{errors.rollNumber}</p>
            )}
          </div>

          {/* Year of Study */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Year of Study <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={formData.yearOfStudy}
                onChange={(e) => onChange('yearOfStudy', e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
                  errors.yearOfStudy
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                    : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
                }`}
              >
                <option value="">Select year</option>
                <option value="1st Year">1st Year (Freshman)</option>
                <option value="2nd Year">2nd Year (Sophomore)</option>
                <option value="3rd Year">3rd Year (Junior)</option>
                <option value="4th Year">4th Year (Senior)</option>
                <option value="Postgraduate">Postgraduate (M.Tech / MCA / MS)</option>
              </select>
            </div>
            {errors.yearOfStudy && (
              <p className="text-rose-600 text-xs mt-1 font-medium">{errors.yearOfStudy}</p>
            )}
          </div>
        </div>

        {/* Branch / Department */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Branch/Department <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Computer Science"
              value={formData.branch}
              onChange={(e) => onChange('branch', e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-400 ${
                errors.branch
                  ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white'
              }`}
            />
          </div>
          {errors.branch && (
            <p className="text-rose-600 text-xs mt-1 font-medium">{errors.branch}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-7 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <span>Next: Event Details</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
};
