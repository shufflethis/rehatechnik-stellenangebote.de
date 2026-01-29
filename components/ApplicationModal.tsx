
import React, { useState } from 'react';
import { X, Send, CheckCircle, Briefcase, Paperclip } from 'lucide-react';
import { ModalProps } from '../types';

const ApplicationModal: React.FC<ModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="bg-reha-600 p-2 rounded-xl">
              <Briefcase size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-none">Direkt-Bewerbung</h3>
              <p className="text-reha-600 text-xs font-bold mt-1 uppercase tracking-wider">{jobTitle || 'Initiativbewerbung'}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-white rounded-xl shadow-sm border border-slate-100">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Vorname</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-reha-400 outline-none transition-all" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nachname</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-reha-400 outline-none transition-all" placeholder="Mustermann" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">E-Mail Adresse</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-reha-400 outline-none transition-all" placeholder="max@rehatechnik.de" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Fachliche Schwerpunkte</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:bg-white focus:border-reha-400 outline-none transition-all" placeholder="z.B. Sonderbau, Aktiv-Reha, etc." />
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 hover:border-reha-400 transition-all cursor-pointer bg-slate-50 text-center relative">
                <Paperclip className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                <p className="text-slate-700 font-bold text-sm">Unterlagen hochladen</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">PDF bevorzugt</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sichere Übertragung</span>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-reha-600 hover:bg-reha-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-reha-600/20 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Bewerbung senden'} <Send size={18} />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-20 h-20 bg-care-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-care-500" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Erfolgreich gesendet!</h4>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto font-medium">
                Vielen Dank für Ihr Interesse. Das Unternehmen wird Ihre Unterlagen sichten und sich zeitnah bei Ihnen melden.
              </p>
              <button 
                onClick={onClose}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-2xl transition-all"
              >
                Fenster schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
