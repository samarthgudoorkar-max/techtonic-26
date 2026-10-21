import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyParticipate } from './components/WhyParticipate';
import { EventTracks } from './components/EventTracks';
import { PrizesSection } from './components/PrizesSection';
import { EventSchedule } from './components/EventSchedule';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RegistrationPage } from './components/Registration/RegistrationPage';
import { TicketView } from './components/Registration/TicketView';
import { AdminModal } from './components/AdminModal';
import { FirebaseConfigModal } from './components/FirebaseConfigModal';
import { isFirebaseConfigured } from './services/firebase';
import { RegistrationData } from './types';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'admin'>('home');
  const [selectedTrack, setSelectedTrack] = useState<string>('ai-ml');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isFirebaseModalOpen, setIsFirebaseModalOpen] = useState(false);
  const [ticketToView, setTicketToView] = useState<RegistrationData | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: 'home' | 'register' | 'admin', sectionId?: string) => {
    if (page === 'admin') {
      setIsAdminOpen(true);
      return;
    }

    setTicketToView(null);
    setCurrentPage(page);

    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTrackForRegistration = (trackId: string) => {
    setSelectedTrack(trackId);
    setCurrentPage('register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* Sticky Header / Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isFirebaseConnected={isFirebaseConfigured}
        onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1">
        {/* If viewing a single ticket from Admin */}
        {ticketToView ? (
          <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
            <TicketView
              registration={ticketToView}
              onReset={() => setTicketToView(null)}
              onGoHome={() => {
                setTicketToView(null);
                setCurrentPage('home');
              }}
            />
          </div>
        ) : currentPage === 'register' ? (
          /* Dedicated Registration Page (matches right side of reference image) */
          <RegistrationPage
            onGoHome={() => setCurrentPage('home')}
            preselectedTrack={selectedTrack}
            isFirebaseConfigured={isFirebaseConfigured}
          />
        ) : (
          /* Landing Page (matches left side of reference image) */
          <>
            <HeroSection
              onRegisterClick={() => handleNavigate('register')}
              onExploreClick={() => {
                const el = document.getElementById('why-participate');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <WhyParticipate />

            <EventTracks
              onSelectTrackForRegistration={handleSelectTrackForRegistration}
            />

            <PrizesSection />

            <EventSchedule />

            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Admin Dashboard Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onViewTicket={(reg) => {
          setTicketToView(reg);
          setCurrentPage('register');
        }}
      />

      {/* Firebase Backend Config Modal */}
      <FirebaseConfigModal
        isOpen={isFirebaseModalOpen}
        onClose={() => setIsFirebaseModalOpen(false)}
        onConfigUpdated={() => {
          // Handled via reload or re-init
        }}
      />

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white text-slate-700 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-brand-600" />
        </button>
      )}
    </div>
  );
};
export default App;
