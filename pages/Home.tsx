// HR-UPDATER: v1.0

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import ApplicationModal from '../components/ApplicationModal';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import GeoStaedte from '../components/geo/GeoStaedte';
import { JobListing } from '../types';
import { searchSection, employerSection, applicantSection, aboutSection } from '../data/content';
import { Search, MapPin, Filter, Settings, Truck, ChevronDown } from 'lucide-react';

const SAMPLE_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    tags: [],
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'Servicefahrer / Auslieferungsfahrer (m/w/d) für Rehatechnik',
    company: 'Zimmermann Sanitäts- und Orthopädiehaus GmbH',
    location: 'Straubing',
    type: 'Vollzeit',
    tags: ['Servicefahrer/in'],
    postedAt: '2026-03-04'
  },
  {
    id: '7',
    title: 'Teilbereichsleitung (m/w/d) Innendienst Rehatechnik',
    company: 'Zimmermann Sanitäts- und Orthopädiehaus GmbH',
    location: 'Straubing',
    type: 'Vollzeit',
    tags: ['Gruppen-, Teamleiter/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '8',
    title: 'Intensivpflegekraft - Beratung / Hausbesuche / Rehatechnik (m/w/d)',
    company: 'Workwise GmbH',
    location: 'Dortmund',
    type: 'Vollzeit',
    tags: ['Fachkrankenpfleger/in - Intensivpflege/Anästhesie'],
    postedAt: '2026-03-02'
  },
  {
    id: '9',
    title: 'Außendienstmitarbeiter (m/w/d) –– Vollzeit– Rehatechnik',
    company: 'SC Sanitätshaus Carstens GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-27'
  },
  {
    id: '10',
    title: 'Sachbearbeiter Innendienst Rehatechnik (m/w/d)',
    company: 'LICURA-Gruppe',
    location: 'Hessisch Lichtenau',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    postedAt: '2026-02-27'
  },
  {
    id: '11',
    title: 'Servicetechniker*in/Fahrer-in für Rehatechnik (m/w/d)',
    company: 'Moises Markus',
    location: 'Ratingen',
    type: 'Vollzeit',
    tags: ['Instandhaltungstechniker/in'],
    postedAt: '2026-02-26'
  },
  {
    id: '12',
    title: 'Servicetechniker*in/Fahrer-in für Rehatechnik (m/w/d)',
    company: 'Moises Markus',
    location: 'Erlangen',
    type: 'Vollzeit',
    tags: ['Fachkraft - Möbel-, Küchen- und Umzugsservice'],
    postedAt: '2026-02-26'
  },
  {
    id: '13',
    title: 'Außendienstberater (m/w/d) Rehatechnik, LUT - LiBo 55',
    company: 'Luttermann GmbH',
    location: 'Essen, Ruhr',
    type: 'Vollzeit',
    tags: ['Fachmann/-frau - Rehatechnik/Sanitätshauswaren'],
    postedAt: '2026-02-25'
  },
  {
    id: '14',
    title: 'Fahrer/in für Orthopädie-, Rehatechnik gesucht',
    company: 'Orthopädie-Technik Kächele GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Auslieferungsfahrer/in (nicht Verkaufsfahrer/in)'],
    postedAt: '2026-02-23'
  },
  {
    id: '15',
    title: 'Rehatechnik-Berater/-in (m/w/d) in Böblingen',
    company: 'Schaible GmbH',
    location: 'Böblingen',
    type: 'Vollzeit',
    tags: ['Altenpfleger/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '16',
    title: 'Rehatechnik-Berater/-in (m/w/d) in Nagold',
    company: 'Schaible GmbH',
    location: 'Nagold',
    type: 'Vollzeit',
    tags: ['Altenpfleger/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '17',
    title: 'Monteur:in (m/w/d) Rehatechnik Außendienst',
    company: 'Mitschke Health + Life GmbH',
    location: 'Gütersloh',
    type: 'Vollzeit',
    tags: ['Kundendienstmonteur/in, -techniker/in'],
    postedAt: '2026-02-18'
  },
  {
    id: '18',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Lambert Sanitätshaus GmbH',
    location: 'Salzburg',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2026-02-17'
  },
  {
    id: '19',
    title: 'Disponent Rehatechnik (m/w/d)',
    company: 'Sanitätshaus Reutter Thomas Gockenbach',
    location: 'Calw',
    type: 'Vollzeit',
    tags: ['Fachmann/-frau - Rehatechnik/Sanitätshauswaren'],
    postedAt: '2026-02-16'
  },
  {
    id: '20',
    title: 'Mitarbeiter Innendienst Rehatechnik (m/w/d)',
    company: 'Reha-aktiv GmbH Chemnitz',
    location: 'Chemnitz, Sachsen',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Büromanagement'],
    postedAt: '2026-02-13'
  },
  {
    id: '21',
    title: 'Verwaltungsmitarbeiter /-in m/w/d - Rehatechnik',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Gesundheitswesen'],
    postedAt: '2026-02-12'
  },
  {
    id: '22',
    title: 'Technische Mitarbeiter (m/w/d) im Innendienst für Rehatechnik',
    company: 'Daniel Landschulz pro-biz',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Orthopädiemechaniker/in und Bandagist/in'],
    postedAt: '2026-02-09'
  },
  {
    id: '23',
    title: 'Mitarbeiter in Rehatechnik',
    company: 'Elbe-Orthopädie GmbH',
    location: 'Hemmoor',
    type: 'Vollzeit',
    tags: ['Rehabilitationsmitteltechniker/in'],
    postedAt: '2026-02-02'
  },
  {
    id: '24',
    title: 'Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik',
    company: 'Bandagist Heindl GmbH',
    location: 'Linz',
    type: 'Vollzeit',
    tags: ['Orthopädietechnik-Mechaniker/in - Individuelle Rehatechnik'],
    postedAt: '2026-01-27'
  },
  {
    id: '25',
    title: 'Tourenplaner*in (m/w/d) für die Rehatechnik',
    company: 'Orthopädie- und Reha-Technik Wolf GmbH & Co.KG Das Sanitätshaus',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Kaufmann/-frau - Gesundheitswesen'],
    postedAt: '2026-01-22'
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

        {/* Geo SEO - Staedte */}
        <GeoStaedte />

        {/* FAQ & Karriere-Info Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 mb-4">
                Haeufig gestellte Fragen zur Karriere in der Rehatechnik
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                Alles Wichtige rund um Berufe, Einstieg und Karrierechancen in der Rehabilitationstechnik.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  frage: 'Welche Berufe gibt es in der Rehatechnik?',
                  antwort: 'Die Rehatechnik bietet vielfaeltige Berufsbilder: Orthopaedie-Mechaniker/in, Rehatechnik-Fachberater/in, Servicetechniker/in, Aussendienst-Berater/in, Disponent/in, Tourenplaner/in, Werkstattleiter/in sowie Kaufleute im Gesundheitswesen. Auch Pflegefachkraefte mit Beratungsschwerpunkt finden hier Karrierechancen.',
                },
                {
                  frage: 'Welche Qualifikationen brauche ich fuer einen Job in der Rehatechnik?',
                  antwort: 'Je nach Position sind unterschiedliche Qualifikationen gefragt. Fuer technische Rollen ist eine Ausbildung als Orthopaedie-Mechaniker/in oder Rehabilitationsmitteltechniker/in ideal. Fuer Beratung und Vertrieb sind kaufmaennische Ausbildungen im Gesundheitswesen oder Erfahrung in der Hilfsmittelbranche hilfreich. Quereinsteiger mit handwerklichem Geschick haben ebenfalls gute Chancen.',
                },
                {
                  frage: 'Wie sind die Gehaltsaussichten in der Rehatechnik?',
                  antwort: 'Die Gehaelter in der Rehatechnik variieren je nach Position, Region und Erfahrung. Einstiegsgehaelter fuer Fachkraefte liegen typischerweise zwischen 30.000 und 38.000 Euro brutto pro Jahr. Mit Berufserfahrung und Spezialisierung sind 40.000 bis 55.000 Euro moeglich. Fuehrungspositionen und spezialisierte Aussendienstrollen koennen noch hoeher verguetet werden.',
                },
                {
                  frage: 'Was macht ein/e Rehatechnik-Berater/in?',
                  antwort: 'Rehatechnik-Berater/innen beraten Patienten, Angehoerige und Pflegeeinrichtungen zur optimalen Hilfsmittelversorgung. Sie fuehren Hausbesuche durch, ermitteln den individuellen Bedarf, passen Rollstuehle, Pflegebetten und weitere Hilfsmittel an und koordinieren die Versorgung mit Kostentraegern und Aerzten.',
                },
                {
                  frage: 'Welche Weiterbildungsmoeglichkeiten gibt es?',
                  antwort: 'In der Rehatechnik gibt es zahlreiche Weiterbildungsmoeglichkeiten: Meisterpruefung in der Orthopaedie-Technik, Spezialisierung auf Kinder-Reha oder Sonderbau, Fortbildungen im Bereich 3D-Druck und digitale Fertigung, Schulungen zu neuen Hilfsmitteln sowie betriebswirtschaftliche Weiterbildungen fuer Fuehrungspositionen.',
                },
                {
                  frage: 'Ist rehatechnik-stellenangebote.de kostenlos fuer Bewerber?',
                  antwort: 'Ja, die Nutzung von rehatechnik-stellenangebote.de ist fuer Bewerber vollstaendig kostenlos. Sie koennen alle Stellenangebote einsehen, sich ueber Unternehmen informieren und sich direkt auf passende Positionen bewerben - ohne Gebuehren oder versteckte Kosten.',
                },
                {
                  frage: 'In welchen Regionen gibt es die meisten Rehatechnik-Jobs?',
                  antwort: 'Rehatechnik-Stellen finden sich deutschlandweit, besonders konzentriert in Grossstaedten und Ballungsraeumen wie Berlin, Hamburg, Muenchen, Koeln, Stuttgart, Frankfurt am Main und dem Ruhrgebiet. Aber auch in mittelgrossen Staedten und laendlichen Regionen gibt es attraktive Positionen bei lokalen Sanitaetshaeusern und Reha-Fachbetrieben.',
                },
                {
                  frage: 'Wie bewerbe ich mich auf eine Stelle?',
                  antwort: 'Klicken Sie einfach auf "Job ansehen" bei der gewuenschten Stelle und nutzen Sie unser Bewerbungsformular fuer eine Direkt-Bewerbung. Laden Sie Ihren Lebenslauf als PDF hoch und geben Sie Ihre fachlichen Schwerpunkte an. Das Unternehmen erhaelt Ihre Unterlagen und meldet sich zeitnah bei Ihnen.',
                },
              ].map((item, index) => (
                <details key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-reha-300 transition-colors">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-900 text-lg list-none">
                    <span className="pr-4">{item.frage}</span>
                    <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                    {item.antwort}
                  </div>
                </details>
              ))}
            </div>

            {/* Karriere-Info */}
            <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Karriere in der Rehatechnik - Ihr Einstieg</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                <p>
                  Die Rehatechnik-Branche waechst stetig. Durch den demografischen Wandel und steigende Ansprueche an individuelle Hilfsmittelversorgung werden qualifizierte Fachkraefte dringend gesucht. Ob Sie als erfahrener Orthopaedie-Mechaniker eine neue Herausforderung suchen oder als Quereinsteiger in die Branche wechseln moechten - die Moeglichkeiten sind vielfaeltig.
                </p>
                <p>
                  Sanitaetshaeuser, Reha-Zentren und Medizintechnik-Unternehmen in ganz Deutschland bieten sichere Arbeitsplaetze mit Sinn. In der Rehatechnik arbeiten Sie direkt am Menschen und tragen taeglich dazu bei, die Lebensqualitaet und Mobilitaet von Patienten zu verbessern.
                </p>
                <p>
                  rehatechnik-stellenangebote.de ist Ihr spezialisiertes Jobportal fuer die gesamte Bandbreite der Rehatechnik-Berufe. Wir verbinden Fachkraefte mit den besten Arbeitgebern der Branche - kostenfrei, gezielt und uebersichtlich.
                </p>
              </div>
            </div>
          </div>
        </section>
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
