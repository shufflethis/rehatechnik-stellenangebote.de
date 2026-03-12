// HR-UPDATER: v1.0
import React from 'react';
import { MapPin } from 'lucide-react';

interface StadtInfo {
  name: string;
  slug: string;
  beschreibung: string;
}

const STAEDTE: StadtInfo[] = [
  { name: 'Berlin', slug: 'berlin', beschreibung: 'Rehatechnik-Jobs in der Hauptstadt: Sanitaetshaeuser, Kliniken und Reha-Zentren suchen Fachkraefte fuer Orthopaedie- und Rehabilitationstechnik.' },
  { name: 'Hamburg', slug: 'hamburg', beschreibung: 'Hamburg bietet vielfaeltige Stellen in der Rehatechnik: Von Homecare-Versorgung bis zur Werkstattleitung in fuehrenden Sanitaetshaeusern.' },
  { name: 'Muenchen', slug: 'muenchen', beschreibung: 'Karriere in der Rehatechnik in Muenchen: Innovative Medizintechnik-Unternehmen und Sanitaetshaeuser mit modernster Ausstattung.' },
  { name: 'Koeln', slug: 'koeln', beschreibung: 'Rehatechnik-Stellenangebote in Koeln und im Rheinland: Fachberater, Servicetechniker und Orthopaedie-Mechaniker gesucht.' },
  { name: 'Frankfurt am Main', slug: 'frankfurt', beschreibung: 'Jobs in der Rehatechnik in Frankfurt: Grosse Sanitaetshaeuser und Reha-Fachbetriebe suchen qualifizierte Mitarbeiter.' },
  { name: 'Stuttgart', slug: 'stuttgart', beschreibung: 'Rehatechnik-Karriere in Stuttgart und Baden-Wuerttemberg: Starker Mittelstand mit Spezialisierung auf Kinder-Reha und Sonderbau.' },
  { name: 'Duesseldorf', slug: 'duesseldorf', beschreibung: 'Stellenangebote in der Rehatechnik in Duesseldorf: Aussendienst, Innendienst und Werkstatt-Positionen bei etablierten Fachbetrieben.' },
  { name: 'Dortmund', slug: 'dortmund', beschreibung: 'Rehatechnik-Jobs im Ruhrgebiet: Dortmund als Standort fuer Intensivpflege-Beratung und Hilfsmittelversorgung.' },
  { name: 'Essen', slug: 'essen', beschreibung: 'Karrierechancen in der Rehatechnik in Essen: Fachberatung, Aussendienst und technische Positionen bei fuehrenden Anbietern.' },
  { name: 'Leipzig', slug: 'leipzig', beschreibung: 'Rehatechnik-Stellen in Leipzig: Tourenplanung, Innendienst und Orthopaedie-Mechanik in wachsenden Unternehmen.' },
  { name: 'Bremen', slug: 'bremen', beschreibung: 'Jobs in der Rehatechnik in Bremen und Norddeutschland: Sanitaetshaeuser und Homecare-Anbieter suchen Fachpersonal.' },
  { name: 'Dresden', slug: 'dresden', beschreibung: 'Rehatechnik-Stellenangebote in Dresden: Innovative Versorgungskonzepte und moderne Werkstaetten bieten attraktive Karrierechancen.' },
  { name: 'Hannover', slug: 'hannover', beschreibung: 'Karriere in der Rehatechnik in Hannover: Messestadt mit starker Medizintechnik-Branche und vielen Fachbetrieben.' },
  { name: 'Nuernberg', slug: 'nuernberg', beschreibung: 'Rehatechnik-Jobs in Nuernberg und Franken: Key Account Management, Fachberatung und technischer Service.' },
  { name: 'Chemnitz', slug: 'chemnitz', beschreibung: 'Stellenangebote in der Rehatechnik in Chemnitz: Etablierte Reha-Fachbetriebe suchen Buero- und Verwaltungskraefte sowie Techniker.' },
  { name: 'Freiburg', slug: 'freiburg', beschreibung: 'Rehatechnik-Karriere in Freiburg und Suedbaden: Sanitaetshaeuser mit Schwerpunkt Orthopaedie und Aktivrollstuhl-Versorgung.' },
  { name: 'Augsburg', slug: 'augsburg', beschreibung: 'Jobs in der Rehatechnik in Augsburg: Bayerische Sanitaetshaeuser mit traditionsreicher Handwerkskunst und moderner Technik.' },
  { name: 'Bonn', slug: 'bonn', beschreibung: 'Rehatechnik-Stellen in Bonn: Bundesstadt mit Kliniken, Reha-Zentren und spezialisierten Hilfsmittelanbietern.' },
  { name: 'Mannheim', slug: 'mannheim', beschreibung: 'Karrierechancen in der Rehatechnik in der Metropolregion Rhein-Neckar: Mannheim als Standort fuer Medizintechnik-Fachkraefte.' },
  { name: 'Karlsruhe', slug: 'karlsruhe', beschreibung: 'Rehatechnik-Stellenangebote in Karlsruhe: Technologiestandort mit innovativen Ansaetzen in der Hilfsmittelversorgung.' },
];

const GeoStaedte: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-reha-600 mb-3 font-bold uppercase tracking-widest text-xs">
            <MapPin size={16} />
            Rehatechnik-Jobs nach Standort
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 mb-4">
            Stellenangebote in Ihrer Region
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Finden Sie Rehatechnik-Jobs in den groessten Staedten Deutschlands. Sanitaetshaeuser, Reha-Zentren und Medizintechnik-Unternehmen suchen qualifizierte Fachkraefte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {STAEDTE.map((stadt) => (
            <a
              key={stadt.slug}
              href={`#jobs`}
              className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-reha-300 hover:bg-reha-50/50 hover:shadow-lg transition-all duration-300"
              title={stadt.beschreibung}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-reha-600 group-hover:border-reha-600 transition-all">
                  <MapPin size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-reha-700 transition-colors text-sm">
                    Rehatechnik-Jobs {stadt.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          {STAEDTE.map((stadt) => (
            <div key={stadt.slug}>
              <h3>Rehatechnik Stellenangebote {stadt.name}</h3>
              <p>{stadt.beschreibung}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoStaedte;
