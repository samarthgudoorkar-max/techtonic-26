import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { RegistrationData } from '../../types';
import { TechtonicLogo } from '../TechtonicLogo';
import { EVENT_DETAILS, TRACKS } from '../../data/eventData';
import { CheckCircle2, Printer, Calendar, Copy, Check, Info, ShieldCheck } from 'lucide-react';

interface TicketViewProps {
  registration: RegistrationData;
  onReset: () => void;
  onGoHome: () => void;
}

export const TicketView: React.FC<TicketViewProps> = ({
  registration,
  onReset,
  onGoHome
}) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [copiedId, setCopiedId] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Generate QR Code with attendee payload
    const qrPayload = JSON.stringify({
      id: registration.id,
      name: registration.fullName,
      roll: registration.rollNumber,
      college: registration.university,
      track: registration.selectedTrack,
      event: "TECHTONIC '26",
      venue: "IARE Hyderabad"
    });

    QRCode.toDataURL(qrPayload, {
      width: 180,
      margin: 1,
      color: {
        dark: '#0F172A',
        light: '#FFFFFF'
      }
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error("Error generating QR code:", err));
  }, [registration]);

  const handleCopyId = () => {
    navigator.clipboard.writeText(registration.id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const trackObj = TRACKS.find((t) => t.id === registration.selectedTrack);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("TECHTONIC '26 — IARE Technical Event");
    const details = encodeURIComponent(
      `Where Innovation Breaks Boundaries. Registered Pass ID: ${registration.id}\nVenue: IARE Campus, Hyderabad`
    );
    const location = encodeURIComponent("Institute of Aeronautical Engineering (IARE), Hyderabad");
    const dates = "20260215T033000Z/20260216T113000Z"; // UTC for 9:00 AM IST Feb 15 to 5:00 PM IST Feb 16

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn pb-12">
      
      {/* Confirmation Heading */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2 shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {EVENT_DETAILS.confirmationHeading}
        </h2>
        <p className="text-slate-600 text-base max-w-lg mx-auto">
          Congratulations, your pass has been generated. Please keep your Pass ID handy for campus gate entry and check-in.
        </p>
      </div>

      {/* Demonstration Mode Warning / Storage Notification Banner */}
      <div className={`p-4 rounded-2xl border text-sm flex items-start gap-3.5 ${
        registration.storageMode === 'firestore'
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
          : 'bg-amber-50/90 border-amber-200/90 text-amber-900'
      }`}>
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-xs uppercase tracking-wider">
            {registration.storageMode === 'firestore'
              ? 'Cloud Firestore Synced'
              : 'Demonstration Mode Notice'}
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {registration.storageMode === 'firestore'
              ? 'Your registration has been successfully saved to Google Cloud Firestore database.'
              : 'This registration has been saved to your browser session (LocalStorage) for this GDG IARE selection demonstration. It was not stored online. You can view all test records in the Submissions dashboard or connect Firebase anytime.'}
          </p>
        </div>
      </div>

      {/* Ticket / ID Badge Card */}
      <div
        ref={ticketRef}
        className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden print:shadow-none print:border-black"
      >
        {/* Top Header of Ticket */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <TechtonicLogo size="sm" showPoweredBy={false} dark={true} />
            <div className="text-xs text-slate-300 mt-1 font-medium">
              Official Attendee & Hackathon Gate Pass
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Pass ID
            </div>
            <div className="text-xl sm:text-2xl font-mono font-black text-amber-300 tracking-wider">
              {registration.id}
            </div>
          </div>
        </div>

        {/* Ticket Body: Attendee Details & QR Code */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left: Attendee Info */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Attendee Name
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {registration.fullName}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {registration.university}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Roll Number</span>
                <span className="text-xs font-bold font-mono text-slate-800">{registration.rollNumber}</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Branch & Year</span>
                <span className="text-xs font-bold text-slate-800">{registration.branch} ({registration.yearOfStudy})</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase block">Mode</span>
                <span className="text-xs font-bold text-slate-800 capitalize">
                  {registration.participationType === 'team' ? `Team (${registration.teamName || 'Squad'})` : 'Solo Hacker'}
                </span>
              </div>
            </div>

            <div className="p-3 bg-brand-50/60 rounded-xl border border-brand-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-brand-600 uppercase block">Registered Track</span>
                <span className="text-xs font-black text-brand-900">{trackObj?.title || registration.selectedTrack}</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Confirmed
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-slate-500 pt-1 font-medium">
              <div>📅 Feb 15–16, 2026 • 9:00 AM</div>
              <div>📍 IARE Campus, Hyderabad</div>
            </div>
          </div>

          {/* Right: Scannable QR Code */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200/90 text-center">
            {qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt="Ticket QR Code"
                className="w-36 h-36 rounded-lg shadow-xs mix-blend-multiply"
              />
            ) : (
              <div className="w-36 h-36 bg-slate-200 animate-pulse rounded-lg flex items-center justify-center text-xs text-slate-500">
                Generating QR...
              </div>
            )}
            <div className="text-[10px] font-bold font-mono text-slate-500 mt-2 uppercase tracking-wider">
              Scan for Check-in
            </div>
          </div>

        </div>

        {/* Ticket Footer / Security Barcode Strip */}
        <div className="px-6 sm:px-8 py-3 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Authorized by GDG IARE Selection Committee</span>
          </div>
          <div className="font-mono text-[10px] text-slate-400">
            SEC-HASH: {registration.id}-2026-X
          </div>
        </div>

      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={handleCopyId}
          className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-xs flex items-center gap-2 transition-all"
        >
          {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-400" />}
          <span>{copiedId ? "Pass ID Copied!" : "Copy Pass ID"}</span>
        </button>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-xs flex items-center gap-2 transition-all"
        >
          <Printer className="w-4 h-4 text-slate-500" />
          <span>Print / Save PDF</span>
        </button>

        <button
          onClick={handleAddToCalendar}
          className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shadow-xs flex items-center gap-2 transition-all"
        >
          <Calendar className="w-4 h-4 text-brand-600" />
          <span>Add to Google Calendar</span>
        </button>

        <button
          onClick={onReset}
          className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
        >
          <span>Register Another Person</span>
        </button>
      </div>

      {/* Return to Home Link */}
      <div className="text-center pt-2">
        <button
          onClick={onGoHome}
          className="text-xs font-semibold text-slate-500 hover:text-brand-600 transition-colors"
        >
          ← Return to TECHTONIC '26 Homepage
        </button>
      </div>

    </div>
  );
};
