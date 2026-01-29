
import React, { useState, useEffect } from 'react';
import { Menu, X, Settings, ShieldCheck, Truck, Search, Briefcase } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stellenmarkt', icon: Search, href: '#jobs' },
    { name: 'Sanitätshäuser', icon: ShieldCheck, href: '#employer' },
    { name: 'Fachbereiche', icon: Settings, href: '#career' },
    { name: 'Über uns', icon: Briefcase, href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-reha-600 p-2 rounded-xl shadow-lg shadow-reha-600/20 group-hover:scale-105 transition-transform">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-xl text-slate-800 tracking-tight leading-none">
                Reha<span className="text-reha-600">Jobs</span>
              </span>
              <span className="font-sans text-[10px] text-slate-500 tracking-[0.1em] font-bold uppercase">
                rehatechnik-stellenangebote.de
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-bold text-slate-600 hover:text-reha-600 transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-reha-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-slate-900 hover:bg-reha-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center gap-2 shadow-lg shadow-slate-200">
              Anmelden
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-reha-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 rounded-xl text-base font-bold text-slate-700 hover:text-reha-600 hover:bg-reha-50 transition-all flex items-center space-x-4"
              >
                <link.icon size={20} className="text-reha-600" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
