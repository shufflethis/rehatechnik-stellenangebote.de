// HR-UPDATER: v1.0

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import { JobListing } from '../types';
import { searchSection, employerSection, applicantSection, aboutSection } from '../data/content';
import { Search, MapPin, Filter, Settings, Truck } from 'lucide-react';

const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Teilbereichsleitung (m/w/d) Innendienst Rehatechnik',
    company: 'Zimmermann Sanitäts- und Orthopädiehaus GmbH',
    location: 'Straubing',
    type: 'Vollzeit',
    tags: ['Gruppen-, Teamleiter/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '2',
    title: 'Intensivpflegekraft - Beratung / Hausbesuche / Rehatechnik (m/w/d)',
    company: 'Workwise GmbH',
    location: 'Dortmund',
    type: 'Vollzeit',
    tags: ['Fachkrankenpfleger/in - Intensivpflege/Anästhesie'],
    postedAt: '2026-03-02'
  },
  {
    id: '3',
    title: 'Außendienstmitarbeiter (m/w/d) –– Vollzeit– Rehatechnik',
    company: 'SC Sanitätshaus Carstens GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-27'
  },
  {
    id: '4',
    title: 'Sachbearbeiter Innendienst Rehatechnik (m/w/d)',
    company: 'LICURA-Gruppe',
    location: 'Hessisch Lichtenau',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    postedAt: '2026-02-27'
  },
  {
    id: '5',
    title: 'Servicetechniker*in/Fahrer-in für Rehatechnik (m/w/d)',
    company: 'Moises Markus',
    location: 'Ratingen',
    type: 'Vollzeit',
    tags: ['Instandhaltungstechniker/in'],
    postedAt: '2026-02-26'
  },
  {
    id: '6',
    title: 'Servicetechniker*in/Fahrer-in für Rehatechnik (m/w/d)',
    company: 'Moises Markus',
    location: 'Erlangen',
    type: 'Vollzeit',
    tags: ['Fachkraft - Möbel-, Küchen- und Umzugsservice'],
    postedAt: '2026-02-26'
  },
  {
    id: '7',
    title: 'Außendienstberater (m/w/d) Rehatechnik, LUT - LiBo 55',
    company: 'Luttermann GmbH',
    location: 'Essen, Ruhr',
    type: 'Vollzeit',
    tags: ['Fachmann/-frau - Rehatechnik/Sanitätshauswaren'],
    postedAt: '2026-02-25'
  },
  {
    id: '8',
    title: 'Fahrer/in für Orthopädie-, Rehatechnik gesucht',
    company: 'Orthopädie-Technik Kächele GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Auslieferungsfahrer/in (nicht Verkaufsfahrer/in)'],
    postedAt: '2026-02-23'
  },
  {
    id: '9',
    title: 'Rehatechnik-Berater/-in (m/w/d) in Böblingen',
    company: 'Schaible GmbH',
    location: 'Böblingen',
    type: 'Vollzeit',
    tags: ['Altenpfleger/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '10',
    title: 'Rehatechnik-Berater/-in (m/w/d) in Nagold',
    company: 'Schaible GmbH',
    location: 'Nagold',
    type: 'Vollzeit',
    tags: ['Altenpfleger/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '11',
    title: 'Monteur:in (m/w/d) Rehatechnik Außendienst',
    company: 'Mitschke Health + Life GmbH',
    location: 'Gütersloh',
    type: 'Vollzeit',
    tags: ['Kundendienstmonteur/in, -techniker/in'],
    postedAt: '2026-02-18'
  },
  {
    id: '12',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Lambert Sanitätshaus GmbH',
    location: 'Salzburg',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2026-02-17'
  },
  {
    id: '13',
    title: 'Disponent Rehatechnik (m/w/d)',
    company: 'Sanitätshaus Reutter Thomas Gockenbach',
    location: 'Calw',
    type: 'Vollzeit',
    tags: ['Fachmann/-frau - Rehatechnik/Sanitätshauswaren'],
    postedAt: '2026-02-16'
  },
  {
    id: '14',
    title: 'Mitarbeiter Innendienst Rehatechnik (m/w/d)',
    company: 'Reha-aktiv GmbH Chemnitz',
    location: 'Chemnitz, Sachsen',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    postedAt: '2026-02-13'
  },
  {
    id: '15',
    title: 'Verwaltungsmitarbeiter /-in m/w/d - Rehatechnik',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Gesundheitswesen'],
    postedAt: '2026-02-12'
  },
  {
    id: '16',
    title: 'Mitarbeiter in Rehatechnik',
    company: 'Elbe-Orthopädie GmbH',
    location: 'Hemmoor',
    type: 'Vollzeit',
    tags: ['Rehabilitationsmitteltechniker/in'],
    postedAt: '2026-02-02'
  },
  {
    id: '17',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Bandagist Heindl GmbH',
    location: 'Linz',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2026-01-27'
  },
  {
    id: '18',
    title: 'Tourenplaner*in (m/w/d) für die Rehatechnik',
    company: 'Orthopädie- und Reha-Technik Wolf GmbH & Co.KG Das Sanitätshaus',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Gesundheitswesen'],
    postedAt: '2026-01-22'
  },
  {
    id: '19',
    title: 'Montiererhelfer Rehatechnik (m/w/d)',
    company: 'S&B Personalservice GmbH',
    location: 'Seddiner See',
    type: 'Vollzeit',
    tags: ['Montagemechaniker/in, Anlagenmonteur/in'],
    postedAt: '2026-01-18'
  },
  {
    id: '20',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Kerkoc GmbH',
    location: 'Brunn am Gebirge',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2025-12-16'
  },
  {
    id: '21',
    title: 'Außendienstmitarbeiter (m/w/d) Sitzsonderbau/Rehatechnik',
    company: 'Stolle Sanitätshaus GmbH & Co. KG',
    location: 'Schwerin, Mecklenburg',
    type: 'Vollzeit',
    tags: ['Rehabilitationsmitteltechniker/in'],
    postedAt: '2025-12-15'
  },
  {
    id: '22',
    title: 'Außendienstmitarbeiter (m/w/d) – Medizinprodukte & Rehatechnik',
    company: 'Sanitätshaus Fuchs & Möller GmbH',
    location: 'Mannheim',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in'],
    postedAt: '2025-11-24'
  },
  {
    id: '23',
    title: 'Bürofachkraft/ Berater/in im Bereich der Rehatechnik (m/w/d)',
    company: 'Biedermann Orthopädie- Technik GmbH',
    location: 'Rottweil',
    type: 'Vollzeit',
    tags: ['Fachmann/-frau - Rehatechnik/Sanitätshauswaren'],
    postedAt: '2025-11-05'
  },
  {
    id: '24',
    title: 'Ausbildung zum Orthopädietechnik-Mechaniker (m/w/d), Schwerpunkt RehaTechnik',
    company: 'Sanitätshaus Lang GmbH',
    location: 'Dinslaken',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in'],
    postedAt: '2025-10-24'
  },
  {
    id: '25',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Bandagist Heindl GmbH',
    location: 'Innsbruck',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2025-10-20'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 font-sans selection:bg-reha-200 selection:text-reha-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Search & Filter Bar */}
        <div id="jobs" className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200 py-6 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 w-full relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-reha-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Berufsbild oder Fachrichtung (z.B. Orthopädietechnik)..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-reha-400 focus:outline-none focus:ring-4 focus:ring-reha-500/10 transition-all font-medium"
                />
              </div>
              <div className="w-full lg:w-1/4 relative group">
                <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-reha-600 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Region" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-reha-400 focus:outline-none focus:ring-4 focus:ring-reha-500/10 transition-all font-medium"
                />
              </div>
              <button className="w-full lg:w-auto bg-reha-600 hover:bg-reha-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-reha-600/20 active:scale-95 flex items-center justify-center gap-2">
                Stellen suchen
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-reha-600 mb-2 font-bold uppercase tracking-widest text-xs">
                  <Settings size={16} />
                  Top-Angebote
                </div>
                <h2 className="text-4xl font-sans font-extrabold text-slate-900">Karriere-Chancen</h2>
              </div>
              <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                <button className="px-6 py-2 rounded-full bg-reha-600 text-white font-bold text-sm">Aktuell</button>
                <button className="px-6 py-2 rounded-full text-slate-500 font-bold text-sm hover:text-reha-600">Umkreis</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {SAMPLE_JOBS.map(job => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="font-bold text-slate-500 hover:text-reha-600 transition-colors border-b-2 border-slate-200 hover:border-reha-600 pb-2">
                Alle Vakanzen in der Rehatechnik laden
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="bg-white">
          <ContentSection id="search-info" content={searchSection} />
          <ContentSection id="employer" content={employerSection} className="bg-slate-50/50" />
          <ContentSection id="career" content={applicantSection} />
          <ContentSection id="about" content={aboutSection} className="bg-slate-50/50" />
        </div>
      </main>

      <Footer />

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />
    </div>
  );
};

export default Home;
