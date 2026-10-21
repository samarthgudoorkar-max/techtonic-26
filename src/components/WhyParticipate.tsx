import React from 'react';
import { BookOpen, Code2, Users2, TrendingUp, Trophy, Clock, UserCheck, ArrowRight } from 'lucide-react';

export const WhyParticipate: React.FC = () => {
  const cards = [
    {
      title: "Learn",
      description: "Gain hands-on experience with cutting-edge technologies and tools.",
      icon: BookOpen,
      iconBg: "bg-blue-100 text-blue-600",
      cardBg: "bg-[#EFF6FF] border-blue-200/70 hover:border-blue-300",
      tagColor: "text-blue-700"
    },
    {
      title: "Build",
      description: "Turn your ideas into working prototypes with mentor support.",
      icon: Code2,
      iconBg: "bg-purple-100 text-purple-600",
      cardBg: "bg-[#FAF5FF] border-purple-200/70 hover:border-purple-300",
      tagColor: "text-purple-700"
    },
    {
      title: "Connect",
      description: "Network with fellow innovators, industry experts and potential collaborators.",
      icon: Users2,
      iconBg: "bg-emerald-100 text-emerald-600",
      cardBg: "bg-[#F0FDF4] border-emerald-200/70 hover:border-emerald-300",
      tagColor: "text-emerald-700"
    },
    {
      title: "Grow",
      description: "Win exciting prizes and gain recognition for your work.",
      icon: TrendingUp,
      iconBg: "bg-amber-100 text-amber-600",
      cardBg: "bg-[#FFFBEB] border-amber-200/70 hover:border-amber-300",
      tagColor: "text-amber-700"
    }
  ];

  return (
    <section id="why-participate" className="py-16 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Why Participate?
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl font-normal">
              A 24-hour technical event to ideate, build and showcase innovative solutions with real-world impact.
            </p>
          </div>

          <a
            href="#tracks"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group shrink-0"
          >
            <span>IARE Technical Event</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${card.cardBg}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${card.tagColor}`}>
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dark Stats Banner matching reference image */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#162746] border border-slate-800 text-white p-8 sm:p-10 shadow-xl">
          {/* Subtle circuit background lines */}
          <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 text-center">
            
            {/* Stat 1: 500+ Participants */}
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                <Users2 className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                500+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Participants Expected
              </div>
            </div>

            {/* Stat 2: ₹5 Lakhs+ */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-amber-300">
                ₹5 Lakhs+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Total Prizes
              </div>
            </div>

            {/* Stat 3: Expert Industry Mentors */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                Expert
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Industry Mentors
              </div>
            </div>

            {/* Stat 4: 24 Hours */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                24 Hours
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Of Innovation
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
