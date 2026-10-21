import React from 'react';

interface TechtonicLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showPoweredBy?: boolean;
  className?: string;
  dark?: boolean;
}

export const TechtonicLogo: React.FC<TechtonicLogoProps> = ({
  size = 'md',
  showPoweredBy = true,
  className = '',
  dark = false
}) => {
  const isHero = size === 'hero';
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Circuit Trace & Main Wordmark Container */}
      <div className="relative inline-block">
        {/* Subtle orange/red tech circuit wire matching reference image */}
        {(isHero || isLg) && (
          <svg
            className="absolute -top-3 -left-3 w-[108%] h-10 pointer-events-none overflow-visible"
            viewBox="0 0 380 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Orange connection line */}
            <path
              d="M 5,28 L 3,28 A 2,2 0 0,1 1,26 L 1,6 A 2,2 0 0,1 3,4 L 330,4"
              stroke="#EA580C"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Start Node */}
            <circle cx="5" cy="28" r="3.5" fill="#F97316" stroke="#C2410C" strokeWidth="1.5" />
            {/* Upper Node */}
            <circle cx="330" cy="4" r="3" fill="#F97316" />
          </svg>
        )}

        {/* Wordmark Text */}
        <div className="flex items-baseline tracking-tight font-display font-black">
          <span
            className={`tracking-tighter transition-colors ${
              dark ? 'text-white' : 'text-[#0F172A]'
            } ${
              isHero
                ? 'text-4xl sm:text-5xl md:text-6xl font-extrabold'
                : isLg
                ? 'text-3xl sm:text-4xl font-extrabold'
                : isSm
                ? 'text-xl font-bold'
                : 'text-2xl font-extrabold'
            }`}
          >
            TECHT
            <span className="relative inline-block text-brand-600">
              O
              {/* Circuit core dot in the 'O' */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
            </span>
            NIC
          </span>

          {/* Indigo/Blue '26 Accent */}
          <span
            className={`ml-1.5 font-black text-brand-600 ${
              isHero
                ? 'text-4xl sm:text-5xl md:text-6xl'
                : isLg
                ? 'text-3xl sm:text-4xl'
                : isSm
                ? 'text-xl'
                : 'text-2xl'
            }`}
          >
            '26
          </span>
        </div>
      </div>

      {/* Powered by DS Corporation Sub-brand */}
      {showPoweredBy && (
        <div
          className={`flex items-center gap-1.5 mt-0.5 tracking-normal font-sans ${
            dark ? 'text-slate-300' : 'text-slate-600'
          } ${isHero ? 'text-sm font-semibold' : isSm ? 'text-[10px] font-medium' : 'text-xs font-semibold'}`}
        >
          {/* Hexagonal / 3D DS Corporation cube icon */}
          <svg
            className={`${isHero ? 'w-4 h-4' : isSm ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-brand-600`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="opacity-80">powered by</span>
          <span className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
            DS Corporation
          </span>
        </div>
      )}
    </div>
  );
};
