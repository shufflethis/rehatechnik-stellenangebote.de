
import React from 'react';
import { ArrowRight, Settings, Truck, HeartHandshake, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfdfe]">
      {/* Soft Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-reha-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-care-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-reha-600 shadow-sm animate-fade-in">
              <HeartHandshake className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">Expertise & Empathie vereint</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Technik, die <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-reha-600 to-care-500">Menschen bewegt.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              Finden Sie Ihren Traumjob in der Rehatechnik und Orthopädietechnik. Verbinden Sie handwerkliches Können mit modernster Hilfsmittelversorgung.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-reha-600 hover:bg-reha-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-reha-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Jobs finden <ArrowRight size={22} />
              </button>
              <button onClick={() => document.getElementById('employer')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-white border border-slate-200 text-slate-700 hover:border-reha-400 rounded-2xl font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2">
                 Für Arbeitgeber
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3 text-slate-500 font-semibold">
                <CheckCircle className="text-care-500 w-5 h-5" />
                <span>850+ Sanitätshäuser</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-semibold">
                <CheckCircle className="text-care-500 w-5 h-5" />
                <span>Spezialisierte Fachrollen</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1000" 
                alt="Rehatechnik Profi" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-reha-600 flex items-center justify-center shadow-lg">
                    <Truck className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">Hilfsmittelversorgung</p>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Vor Ort beim Kunden</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-reha-200/40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
