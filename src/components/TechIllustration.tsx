import React, { useState } from 'react';
import { Lightbulb, Users, Code, Trophy, Sparkles } from 'lucide-react';

export const TechIllustration: React.FC = () => {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4 select-none">
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-blue-500/10 blur-3xl -z-10 animate-pulse-glow" />

      {/* Isometric 3D Scene Container */}
      <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
        
        {/* Isometric SVG Artwork */}
        <svg
          className="w-full h-full drop-shadow-2xl overflow-visible"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#312E81" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#312E81" />
            </linearGradient>
            <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="planeGrid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.05" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Isometric Ground Mesh Lines */}
          <g opacity="0.35" stroke="#818CF8" strokeWidth="1">
            <line x1="120" y1="360" x2="380" y2="210" />
            <line x1="80" y1="390" x2="420" y2="190" />
            <line x1="160" y1="420" x2="450" y2="250" />
            <line x1="200" y1="180" x2="440" y2="320" />
            <line x1="100" y1="240" x2="340" y2="380" />
            <line x1="70" y1="300" x2="310" y2="440" />
          </g>

          {/* Secondary Sub-cubes (Background) */}
          <g opacity="0.75" transform="translate(40, -30)">
            {/* Small cube top */}
            <polygon points="340,150 380,130 420,150 380,170" fill="#4338CA" opacity="0.8" />
            {/* Small cube left */}
            <polygon points="340,150 380,170 380,210 340,190" fill="#312E81" />
            {/* Small cube right */}
            <polygon points="380,170 420,150 420,190 380,210" fill="#4F46E5" />
          </g>

          <g opacity="0.6" transform="translate(-50, 40)">
            {/* Left background cube */}
            <polygon points="120,240 160,220 200,240 160,260" fill="#4F46E5" opacity="0.5" />
            <polygon points="120,240 160,260 160,300 120,280" fill="#1E1B4B" />
            <polygon points="160,260 200,240 200,280 160,300" fill="#3730A3" />
          </g>

          {/* Main Central Giant Isometric Cube */}
          <g id="mainCube" className="transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
            {/* Bottom Glow / Shadow */}
            <ellipse cx="250" cy="385" rx="140" ry="40" fill="#4F46E5" opacity="0.3" filter="url(#softGlow)" />

            {/* Cube Top Face */}
            <polygon
              points="250,150 360,215 250,280 140,215"
              fill="url(#cubeTop)"
              stroke="#6366F1"
              strokeWidth="1.5"
            />

            {/* Glowing Circuit Lines on Top Face */}
            <path
              d="M 210,195 L 250,220 L 290,195 M 250,220 L 250,260"
              stroke="#818CF8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
            <circle cx="250" cy="220" r="4" fill="#C7D2FE" filter="url(#softGlow)" />

            {/* Cube Left Face */}
            <polygon
              points="140,215 250,280 250,405 140,340"
              fill="url(#cubeLeft)"
              stroke="#4F46E5"
              strokeWidth="1.5"
            />

            {/* Glowing "AI" text on Left Face (Isometric skew simulated) */}
            <g transform="translate(160, 260) skewY(30) scale(1, 0.85)">
              <text
                x="15"
                y="55"
                fill="#818CF8"
                fontSize="52"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                opacity="0.85"
                filter="url(#softGlow)"
              >
                AI
              </text>
            </g>

            {/* Cube Right Face */}
            <polygon
              points="250,280 360,215 360,340 250,405"
              fill="url(#cubeRight)"
              stroke="#6366F1"
              strokeWidth="1.5"
            />

            {/* Glowing "AI" text on Right Face (Isometric skew simulated) */}
            <g transform="translate(265, 345) skewY(-30) scale(1, 0.85)">
              <text
                x="10"
                y="-15"
                fill="#60A5FA"
                fontSize="52"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                opacity="0.85"
                filter="url(#softGlow)"
              >
                AI
              </text>
            </g>

            {/* Edge Bevel Highlighting */}
            <line x1="250" y1="280" x2="250" y2="405" stroke="#A5B4FC" strokeWidth="2.5" opacity="0.7" />
            <line x1="140" y1="215" x2="250" y2="280" stroke="#818CF8" strokeWidth="1.5" opacity="0.6" />
            <line x1="360" y1="215" x2="250" y2="280" stroke="#818CF8" strokeWidth="1.5" opacity="0.6" />
          </g>

          {/* Surrounding Geometric Floating Crystals */}
          <polygon points="110,160 125,145 135,160 120,175" fill="#38BDF8" opacity="0.75" />
          <polygon points="400,280 415,268 425,282 410,295" fill="#C084FC" opacity="0.8" />
          <circle cx="390" cy="180" r="3" fill="#60A5FA" />
          <circle cx="130" cy="330" r="3.5" fill="#A855F7" />
        </svg>

        {/* Floating Pill Badges exactly like the reference image */}
        {/* 1. Innovate (Top Left) */}
        <div
          onMouseEnter={() => setActiveBadge('innovate')}
          onMouseLeave={() => setActiveBadge(null)}
          className={`absolute top-8 left-6 sm:left-8 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:shadow-brand-500/20 ${
            activeBadge === 'innovate' ? 'ring-2 ring-brand-500 scale-105' : 'animate-float-1'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
            <Lightbulb className="w-3.5 h-3.5" />
          </div>
          <span>Innovate</span>
        </div>

        {/* 2. Collaborate (Top Right) */}
        <div
          onMouseEnter={() => setActiveBadge('collaborate')}
          onMouseLeave={() => setActiveBadge(null)}
          className={`absolute top-24 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:shadow-brand-500/20 ${
            activeBadge === 'collaborate' ? 'ring-2 ring-brand-500 scale-105' : 'animate-float-2'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Users className="w-3.5 h-3.5" />
          </div>
          <span>Collaborate</span>
        </div>

        {/* 3. Build (Middle Left) */}
        <div
          onMouseEnter={() => setActiveBadge('build')}
          onMouseLeave={() => setActiveBadge(null)}
          className={`absolute bottom-32 left-4 sm:left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:shadow-brand-500/20 ${
            activeBadge === 'build' ? 'ring-2 ring-brand-500 scale-105' : 'animate-float-1'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <Code className="w-3.5 h-3.5" />
          </div>
          <span>Build</span>
        </div>

        {/* 4. Compete (Bottom Right) */}
        <div
          onMouseEnter={() => setActiveBadge('compete')}
          onMouseLeave={() => setActiveBadge(null)}
          className={`absolute bottom-16 right-6 sm:right-10 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:border-brand-500 hover:shadow-brand-500/20 ${
            activeBadge === 'compete' ? 'ring-2 ring-brand-500 scale-105' : 'animate-float-2'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
            <Trophy className="w-3.5 h-3.5" />
          </div>
          <span>Compete</span>
        </div>

        {/* Subtle decorative Sparkle badge */}
        <div className="absolute top-1/2 right-0 -translate-y-12 opacity-80 pointer-events-none">
          <Sparkles className="w-6 h-6 text-brand-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
