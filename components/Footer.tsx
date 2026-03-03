
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-reha-600 p-2 rounded-xl">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <span className="font-sans font-bold text-xl text-white tracking-tight leading-none">
                RehaJobs
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Das Fachportal für Recruiting in der Rehatechnik, Orthopädietechnik und Hilfsmittelbranche.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-reha-600 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-reha-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-reha-600 hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Kontakt</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-reha-400 flex-shrink-0" />
                <span>Versorgungsweg 88<br />20457 Hamburg<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-reha-400 flex-shrink-0" />
                <span>+49 (0) 40 555-888</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-reha-400 flex-shrink-0" />
                <a href="mailto:info@socialmediaventure.com" className="hover:text-reha-400 transition-colors">info@rehajobs.de</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Spezialisierungen</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-reha-400 transition-colors">Kinder-Rehatechnik</a></li>
              <li><a href="#" className="hover:text-reha-400 transition-colors">Orthopädietechnik</a></li>
              <li><a href="#" className="hover:text-reha-400 transition-colors">Homecare & Pflege</a></li>
              <li><a href="#" className="hover:text-reha-400 transition-colors">Sonderbau & Werkstatt</a></li>
              <li><a href="#" className="hover:text-reha-400 transition-colors">Reha-Fachberatung</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/impressum" className="hover:text-reha-400 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-reha-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link></li>
              <li><a href="#" className="hover:text-reha-400 transition-colors">Nutzungsbedingungen</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © 2024 rehatechnik-stellenangebote.de // Gemeinsam für mehr Mobilität.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-600">
            <span className="flex items-center gap-1.5"><Heart size={10} className="text-red-500" /> Inklusion</span>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
