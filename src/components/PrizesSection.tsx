import React from 'react';
import { Trophy, Gift, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="py-16 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Trophy className="w-3.5 h-3.5" />
            <span>₹5,00,000+ Total Prize Pool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Prizes, Perks & Recognition
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Win big, gain recognition from top industry leaders, and elevate your tech portfolio with cash rewards and premium goodies.
          </p>
        </div>

        {/* Podium Top 3 Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          
          {/* 2nd Place */}
          <div className="order-2 md:order-1 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 mb-4">
                2nd Place
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                First Runner-Up
              </h3>
              <div className="text-3xl font-black text-slate-900 font-display mt-2 mb-4">
                ₹1,00,000
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Silver Trophy, Premium Dev Tools Subscriptions, Cloud Vouchers and GDG merchandise.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Award className="w-4 h-4 text-slate-400" />
              <span>National Certificate of Merit</span>
            </div>
          </div>

          {/* 1st Place (Grand Champion) - Elevated */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#0B1329] text-white rounded-2xl border-2 border-amber-400/60 p-8 flex flex-col justify-between shadow-xl relative -translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Grand Champion</span>
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Overall Winner
                </span>
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">
                TECHTONIC '26 Champion
              </h3>
              <div className="text-4xl font-black text-amber-300 font-display mt-2 mb-4">
                ₹1,50,000
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Exclusive Champion Trophy, GDG Mentorship Fast-Track, Direct Interview Opportunities, ₹50,000 Cloud Credits, and Grand Swag Kit.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-300/80 font-medium">
              <Award className="w-4 h-4" />
              <span>Direct VC / Incubation Pitch Opportunity</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 mb-4">
                3rd Place
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Second Runner-Up
              </h3>
              <div className="text-3xl font-black text-slate-900 font-display mt-2 mb-4">
                ₹75,000
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Bronze Trophy, Digital Badges, Goodie Kits, and Cloud credits.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Award className="w-4 h-4 text-amber-600" />
              <span>National Certificate of Merit</span>
            </div>
          </div>

        </div>

        {/* Special Category Awards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">
              Special Category
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-2">
              Best All-Girls Team
            </h4>
            <div className="text-xl font-black text-purple-600 mt-1 mb-2">₹35,000</div>
            <p className="text-xs text-slate-600">
              Dedicated award celebrating women in technology and engineering leadership.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
              Freshman Award
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-2">
              Best Beginner Team
            </h4>
            <div className="text-xl font-black text-blue-600 mt-1 mb-2">₹25,000</div>
            <p className="text-xs text-slate-600">
              Awarded to the most promising 1st or 2nd year student team making their hackathon debut.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
              Domain Tracks
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-2">
              6x Track Category Winners
            </h4>
            <div className="text-xl font-black text-emerald-600 mt-1 mb-2">₹1,15,000 Pool</div>
            <p className="text-xs text-slate-600">
              Special prizes awarded to the top standout implementation in each individual track.
            </p>
          </div>
        </div>

        {/* Perks for Every Participant */}
        <div className="bg-brand-50/60 border border-brand-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Guaranteed Perks for ALL Registered Participants
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Participation certificate, event badge, stickers, GDG swag kit, complimentary meals & high-speed hackathon internet.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-brand-700 bg-white px-4 py-2 rounded-xl border border-brand-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Entry Fee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
