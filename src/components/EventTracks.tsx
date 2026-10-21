import React, { useState } from 'react';
import { TRACKS } from '../data/eventData';
import { Track } from '../types';
import { Bot, Code, ShieldCheck, Lightbulb, Cloud, Cpu, ArrowRight, Sparkles, X, CheckCircle2 } from 'lucide-react';

interface EventTracksProps {
  onSelectTrackForRegistration: (trackId: string) => void;
}

export const EventTracks: React.FC<EventTracksProps> = ({ onSelectTrackForRegistration }) => {
  const [selectedTrackModal, setSelectedTrackModal] = useState<Track | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getTrackThemeBadge = (trackId: string) => {
    switch (trackId) {
      case 'ai-ml':
        return { bg: 'bg-blue-50 text-blue-700 border-blue-200', iconBg: 'bg-blue-100 text-blue-600' };
      case 'web-app':
        return { bg: 'bg-purple-50 text-purple-700 border-purple-200', iconBg: 'bg-purple-100 text-purple-600' };
      case 'cybersecurity':
        return { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', iconBg: 'bg-emerald-100 text-emerald-600' };
      case 'open-innovation':
        return { bg: 'bg-amber-50 text-amber-700 border-amber-200', iconBg: 'bg-amber-100 text-amber-600' };
      case 'cloud-devops':
        return { bg: 'bg-cyan-50 text-cyan-700 border-cyan-200', iconBg: 'bg-cyan-100 text-cyan-600' };
      default:
        return { bg: 'bg-rose-50 text-rose-700 border-rose-200', iconBg: 'bg-rose-100 text-rose-600' };
    }
  };

  return (
    <section id="tracks" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Event Tracks
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl font-normal">
              Choose a track or work on your own idea. Interdisciplinary solutions are encouraged!
            </p>
          </div>

          <a
            href="#tracks"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group shrink-0"
          >
            <span>View All Tracks</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((track) => {
            const styling = getTrackThemeBadge(track.id);

            return (
              <div
                key={track.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Prize Pool */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styling.iconBg}`}>
                      {getIcon(track.icon)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Prize: {track.prizePool}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {track.description}
                  </p>

                  {/* Popular Themes Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {track.popularThemes.slice(0, 3).map((theme) => (
                      <span
                        key={theme}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedTrackModal(track)}
                    className="text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onSelectTrackForRegistration(track.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:text-brand-700 hover:underline"
                  >
                    <span>Choose Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Track Detail Modal */}
      {selectedTrackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedTrackModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100"
              aria-label="Close track details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                {getIcon(selectedTrackModal.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedTrackModal.title}
                </h3>
                <span className="text-xs font-semibold text-brand-600">
                  Track Prize Pool: {selectedTrackModal.prizePool}
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedTrackModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Suggested Focus Areas & Themes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedTrackModal.popularThemes.map((theme) => (
                  <div key={theme} className="flex items-center gap-2 text-xs text-slate-700 font-medium p-2 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedTrackModal(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const trackId = selectedTrackModal.id;
                  setSelectedTrackModal(null);
                  onSelectTrackForRegistration(trackId);
                }}
                className="px-5 py-2 text-sm font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl shadow-xs"
              >
                Register for this Track
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
