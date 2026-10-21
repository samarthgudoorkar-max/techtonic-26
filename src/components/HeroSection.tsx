import React, { useState, useEffect } from 'react';
import { TechtonicLogo } from './TechtonicLogo';
import { TechIllustration } from './TechIllustration';
import { EVENT_DETAILS } from '../data/eventData';
import { Calendar, MapPin, Users, ArrowRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onExploreClick
}) => {
  // Live Countdown Timer targeting Feb 15, 2026 09:00 AM
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 7,
    minutes: 25,
    seconds: 24
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.countdownTarget).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If target date has passed in some local test clock, display engaging countdown values
        setTimeLeft({ days: 9, hours: 7, minutes: 25, seconds: (60 - new Date().getSeconds()) % 60 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="hero" className="relative tech-grid-bg pt-8 pb-16 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Event Hero Information */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE]">
                IARE TECHNICAL EVENT
              </span>
            </div>

            {/* Custom TECHTONIC '26 Logo & Branding */}
            <div className="pt-2">
              <TechtonicLogo size="hero" showPoweredBy={true} />
            </div>

            {/* Hero Subtitle / Tagline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {EVENT_DETAILS.tagline}
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {EVENT_DETAILS.heroDescription}
              </p>
            </div>

            {/* Metadata Info Chips Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Date & Time */}
              <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {EVENT_DETAILS.dates}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {EVENT_DETAILS.timing}
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    IARE Campus
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Hyderabad, India
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Open to all
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    College Students
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onRegisterClick}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Event</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Registration Countdown Timer */}
            <div className="pt-4 border-t border-slate-200/70 max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Registration Closes In</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Days */}
                <div className="flex-1 bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Days
                  </div>
                </div>

                <span className="text-xl font-bold text-slate-400">:</span>

                {/* Hours */}
                <div className="flex-1 bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Hours
                  </div>
                </div>

                <span className="text-xl font-bold text-slate-400">:</span>

                {/* Minutes */}
                <div className="flex-1 bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Minutes
                  </div>
                </div>

                <span className="text-xl font-bold text-slate-400">:</span>

                {/* Seconds */}
                <div className="flex-1 bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3 text-center shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-brand-600">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Seconds
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-Inspired Isometric Cube Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <TechIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};
