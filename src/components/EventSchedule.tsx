import React, { useState } from 'react';
import { SCHEDULE } from '../data/eventData';
import { Clock, MapPin, CalendarDays } from 'lucide-react';

export const EventSchedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const filteredSchedule = SCHEDULE.filter((item) => item.day === activeDay);

  const getTagBadge = (tagColor: string) => {
    switch (tagColor) {
      case 'blue':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'amber':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'rose':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
  };

  return (
    <section id="schedule" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 mb-3">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>24-Hour Itinerary</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Event Schedule
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl font-normal">
              Two intense, exhilarating days of brainstorming, building, mentoring, and pitching.
            </p>
          </div>

          {/* Day Switcher Tabs */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 self-start sm:self-auto">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                activeDay === 'day1'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Day 1 • Feb 15 (Ideation & Build)
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                activeDay === 'day2'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Day 2 • Feb 16 (Judging & Awards)
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {filteredSchedule.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-600 group-hover:scale-125 transition-transform" />

              {/* Schedule Item Card */}
              <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-card transition-all hover:border-brand-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-600 font-mono">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getTagBadge(item.tagColor)}`}>
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-medium bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
