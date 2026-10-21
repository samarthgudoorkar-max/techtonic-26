import React, { useState } from 'react';
import { TechtonicLogo } from './TechtonicLogo';
import { Menu, X, Database, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'register' | 'admin';
  onNavigate: (page: 'home' | 'register' | 'admin', sectionId?: string) => void;
  isFirebaseConnected: boolean;
  onOpenFirebaseModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isFirebaseConnected,
  onOpenFirebaseModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home', sectionId: 'hero' },
    { label: 'About', page: 'home', sectionId: 'why-participate' },
    { label: 'Tracks', page: 'home', sectionId: 'tracks' },
    { label: 'Prizes', page: 'home', sectionId: 'prizes' },
    { label: 'Schedule', page: 'home', sectionId: 'schedule' },
    { label: 'FAQs', page: 'home', sectionId: 'faqs' },
  ];

  const handleLinkClick = (page: 'home' | 'register' | 'admin', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
    if (page === 'home' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-brand-500/50 rounded-lg p-1 transition-transform hover:scale-[1.02]"
          aria-label="TECHTONIC '26 Home"
        >
          <TechtonicLogo size="md" showPoweredBy={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.page as any, item.sectionId)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home' && item.label === 'Home'
                  ? 'text-brand-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Storage Mode Status Indicator */}
          <button
            onClick={onOpenFirebaseModal}
            title={isFirebaseConnected ? "Connected to Cloud Firestore" : "Running in Demo Mode (Local Storage)"}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              isFirebaseConnected
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                : 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100'
            }`}
          >
            {isFirebaseConnected ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Firestore Live</span>
              </>
            ) : (
              <>
                <Database className="w-3.5 h-3.5 text-brand-600" />
                <span>Demo Mode</span>
              </>
            )}
          </button>

          {/* Admin Records Link */}
          <button
            onClick={() => onNavigate('admin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors ${
              currentPage === 'admin' ? 'border-brand-500 text-brand-600 font-semibold' : ''
            }`}
          >
            Submissions
          </button>

          {/* Primary CTA: Register Now */}
          {currentPage !== 'register' ? (
            <button
              onClick={() => onNavigate('register')}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              Register Now
            </button>
          ) : (
            <button
              onClick={() => onNavigate('home')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-4 py-2 rounded-xl transition-all"
            >
              Back to Home
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {currentPage !== 'register' && (
            <button
              onClick={() => onNavigate('register')}
              className="bg-[#2563EB] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Register
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.page as any, item.sectionId)}
              className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-600"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('admin');
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 flex items-center justify-between"
            >
              <span>View Submissions Dashboard</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFirebaseModal();
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Backend Config: {isFirebaseConnected ? 'Firestore' : 'Demo Local'}</span>
              <Database className="w-4 h-4 text-brand-600" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
