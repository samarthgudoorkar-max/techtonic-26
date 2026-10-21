import React, { useState } from 'react';
import { isFirebaseConfigured, getFirebaseConfig } from '../services/firebase';
import { X, Database, Cloud, Check, Key } from 'lucide-react';

interface FirebaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigUpdated: () => void;
}

export const FirebaseConfigModal: React.FC<FirebaseConfigModalProps> = ({
  isOpen,
  onClose,
  onConfigUpdated
}) => {
  const currentConfig = getFirebaseConfig();

  const [apiKey, setApiKey] = useState(currentConfig.apiKey || '');
  const [projectId, setProjectId] = useState(currentConfig.projectId || '');
  const [authDomain, setAuthDomain] = useState(currentConfig.authDomain || '');
  const [appId, setAppId] = useState(currentConfig.appId || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const configToSave = {
      apiKey: apiKey.trim(),
      projectId: projectId.trim(),
      authDomain: authDomain.trim() || `${projectId.trim()}.firebaseapp.com`,
      storageBucket: `${projectId.trim()}.appspot.com`,
      messagingSenderId: "123456789",
      appId: appId.trim() || "1:123456789:web:abcdef"
    };

    localStorage.setItem('techtonic_firebase_custom_config', JSON.stringify(configToSave));
    setSavedSuccess(true);
    setTimeout(() => {
      onConfigUpdated();
      onClose();
      window.location.reload();
    }, 1000);
  };

  const handleResetToDemo = () => {
    localStorage.removeItem('techtonic_firebase_custom_config');
    onConfigUpdated();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Backend Storage Configuration
              </h3>
              <p className="text-xs text-slate-500">
                Toggle between Demo Mode and Live Firebase Firestore
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Status banner */}
          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
            isFirebaseConfigured
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-indigo-50 border-indigo-200 text-indigo-900'
          }`}>
            {isFirebaseConfigured ? (
              <Cloud className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Database className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-bold">
                Current Status: {isFirebaseConfigured ? 'Live Firebase Firestore Connected' : 'Demo Mode (Offline / LocalStorage)'}
              </div>
              <p className="mt-1 text-slate-600 leading-relaxed">
                {isFirebaseConfigured
                  ? 'All registrations are being sent to your Firestore collection.'
                  : 'In Demo Mode, registrations are saved locally in the browser with full ID generation and pass generation. Enter your Firebase project keys below to enable live cloud writes.'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Firebase Project ID
              </label>
              <input
                type="text"
                placeholder="my-techtonic-project"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Firebase Auth Domain (Optional)
              </label>
              <input
                type="text"
                placeholder="project.firebaseapp.com"
                value={authDomain}
                onChange={(e) => setAuthDomain(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Firebase Web API Key
              </label>
              <input
                type="text"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                App ID (Optional)
              </label>
              <input
                type="text"
                placeholder="1:123456789:web:abcdef"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-brand-500"
              />
            </div>

            {savedSuccess && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Configuration saved! Reloading application...</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleResetToDemo}
                className="text-xs text-slate-500 hover:text-rose-600 underline font-medium"
              >
                Reset to Demo Mode
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-semibold rounded-xl hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-xs"
                >
                  Save & Connect
                </button>
              </div>
            </div>
          </form>

          <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-3">
            Tip: You can also define environment variables in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">.env</code>: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">VITE_FIREBASE_API_KEY</code> and <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">VITE_FIREBASE_PROJECT_ID</code>.
          </div>
        </div>

      </div>
    </div>
  );
};
