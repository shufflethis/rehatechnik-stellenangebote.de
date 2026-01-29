
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import ApplicationModal from './components/ApplicationModal';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import { JobListing } from './types';
import { searchSection, employerSection, applicantSection, aboutSection } from './data/content';
import { Search, MapPin, Filter, Settings, Truck } from 'lucide-react';

const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Rehatechnik-Fachberater im Außendienst (m/w/d)',
    company: 'Sanitätshaus Müller & Sohn',
    location: 'Hamburg / Schleswig-Holstein',
    type: 'Vollzeit',
    tags: ['Aktiv-Reha', 'Außendienst', 'Hilfsmittelberatung'],
    postedAt: 'Heute'
  },
  {
    id: '2',
    title: 'Orthopädietechnik-Mechaniker / Sonderbau',
    company: 'Vitalis Reha-Zentrum',
    location: 'Köln',
    type: 'Vollzeit',
    tags: ['Sitzschalenbau', 'Sonderbau', 'CAD/CAM'],
    postedAt: 'Vor 3 Stunden'
  },
  {
    id: '3',
    title: 'Servicetechniker für Rehatechnik (m/w/d)',
    company: 'Medizintechnik Nord',
    location: 'Bremen',
    type: 'Teilzeit',
    tags: ['Wartung', 'Rollstühle', 'Führerschein B'],
    postedAt: 'Vor 2 Tagen'
  },
  {
    id: '4',
    title: 'Fachkraft für Kinder-Rehatechnik',
    company: 'Kids-Mobility GmbH',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Pädiatrie', 'Sonderbau', 'Einfühlungsvermögen'],
    postedAt: 'Vor 5 Tagen'
  },
  {
    id: '5',
    title: 'Quereinsteiger Hilfsmittel-Logistik',
    company: 'Logistik-Center Gesundheit',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Auslieferung', 'Montage', 'Patientenkontakt'],
    postedAt: 'Vor 1 Woche'
  }
];

const App: React.FC = () => {
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

export default App;
