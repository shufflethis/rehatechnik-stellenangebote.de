
import React from 'react';
import { MapPin, Briefcase, Settings, ChevronRight, Tool } from 'lucide-react';
import { JobListing } from '../types';

interface Props {
  job: JobListing;
  onApply: (title: string) => void;
}

const JobCard: React.FC<Props> = ({ job, onApply }) => {
  return (
    <div className="group relative bg-white border border-slate-200 p-8 rounded-[2rem] transition-all duration-500 hover:border-reha-300 hover:shadow-2xl hover:shadow-reha-600/5 hover:-translate-y-1">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
              {job.type}
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              ID: REHA-{job.id.padStart(4, '0')}
            </span>
          </div>
          
          <h3 className="text-2xl font-sans font-bold text-slate-900 mb-3 group-hover:text-reha-600 transition-colors">
            {job.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-6 font-medium">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-reha-600" />
              {job.company}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-reha-600" />
              {job.location}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1.5 text-xs px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full border border-slate-100 font-bold group-hover:bg-reha-50 group-hover:text-reha-700 transition-all">
                <Settings size={12} className="text-slate-400 group-hover:text-reha-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <button 
            onClick={() => onApply(job.title)}
            className="w-full lg:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-sm tracking-wide rounded-2xl hover:bg-reha-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
          >
            Job ansehen
            <ChevronRight size={18} />
          </button>
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            {job.postedAt} veröffentlicht
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
