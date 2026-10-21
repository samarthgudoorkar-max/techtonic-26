import React, { useState, useEffect } from 'react';
import { RegistrationData } from '../types';
import { fetchAllRegistrations } from '../services/registrationService';
import { TRACKS } from '../data/eventData';
import { X, Search, Download, Database, Cloud, RefreshCw, Eye } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewTicket: (reg: RegistrationData) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onViewTicket }) => {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<'firestore' | 'demo_local'>('demo_local');
  const [search, setSearch] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState('all');

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchAllRegistrations();
      setRegistrations(res.registrations);
      setSource(res.source);
    } catch (err) {
      console.error("Failed to load registrations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = registrations.filter((r) => {
    const matchTrack = selectedTrackFilter === 'all' || r.selectedTrack === selectedTrackFilter;
    const matchSearch =
      r.fullName.toLowerCase().includes(search.toLowerCase()) ||
      r.rollNumber.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      r.university.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      (r.teamName && r.teamName.toLowerCase().includes(search.toLowerCase()));
    return matchTrack && matchSearch;
  });

  const exportCSV = () => {
    const headers = ["Pass ID", "Full Name", "Roll Number", "Email", "Phone", "College", "Branch", "Year", "Mode", "Team Name", "Track", "Storage Mode", "Submitted At"];
    const rows = filtered.map((r) => [
      r.id,
      `"${r.fullName}"`,
      r.rollNumber,
      r.email,
      r.phone,
      `"${r.university}"`,
      `"${r.branch}"`,
      r.yearOfStudy,
      r.participationType,
      `"${r.teamName || 'N/A'}"`,
      r.selectedTrack,
      r.storageMode,
      r.createdAt
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `techtonic26_registrations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filtered, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `techtonic26_registrations_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-slate-900">
                TECHTONIC '26 — Registration Submissions
              </h3>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                source === 'firestore'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}>
                {source === 'firestore' ? <Cloud className="w-3 h-3" /> : <Database className="w-3 h-3" />}
                <span>{source === 'firestore' ? 'Cloud Firestore' : 'Local Demo Storage'}</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Review and export all participant entries registered for TECHTONIC '26.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters and Actions Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-white">
          <div className="flex flex-wrap items-center gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, roll, college, pass ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <select
              value={selectedTrackFilter}
              onChange={(e) => setSelectedTrackFilter(e.target.value)}
              className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none text-slate-700"
            >
              <option value="all">All Tracks</option>
              {TRACKS.map((t) => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs flex items-center gap-1.5"
              title="Refresh"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={exportCSV}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={exportJSON}
              className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto">
          {filtered.length > 0 ? (
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead className="sticky top-0 bg-slate-100 text-slate-600 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Pass ID</th>
                  <th className="py-3 px-4">Attendee Name</th>
                  <th className="py-3 px-4">College & Roll</th>
                  <th className="py-3 px-4">Track</th>
                  <th className="py-3 px-4">Mode / Team</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-brand-600 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {item.fullName}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-slate-800 line-clamp-1">{item.university}</div>
                      <div className="font-mono text-[11px] text-slate-400">{item.rollNumber} • {item.branch}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-medium text-slate-800">
                        {TRACKS.find((t) => t.id === item.selectedTrack)?.title || item.selectedTrack}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {item.participationType === 'team' ? (
                        <div>
                          <span className="font-bold text-purple-700">{item.teamName || 'Team'}</span>
                          <span className="text-[10px] text-slate-400 block">{(item.teamMembers?.length || 0) + 1} Members</span>
                        </div>
                      ) : (
                        <span className="text-slate-500 font-medium">Solo Hacker</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-500">
                      <div>{item.email}</div>
                      <div className="text-[11px] text-slate-400">{item.phone}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          onClose();
                          onViewTicket(item);
                        }}
                        className="p-1.5 rounded-lg text-brand-600 hover:bg-brand-50 border border-brand-200 transition-colors"
                        title="View & Print Ticket Pass"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-12 text-center text-slate-400 text-sm">
              No registrations found matching criteria.
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div>
            Showing <strong className="text-slate-800">{filtered.length}</strong> of {registrations.length} total registrations
          </div>
          <div>
            TECHTONIC '26 • GDG IARE
          </div>
        </div>

      </div>
    </div>
  );
};
