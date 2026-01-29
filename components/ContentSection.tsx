
import React from 'react';
import { SectionContent } from '../types';

interface Props {
  content: SectionContent;
  id: string;
  className?: string;
}

const ContentSection: React.FC<Props> = ({ content, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 lg:py-32 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-20 items-center ${content.imageSide === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className={`flex-1 ${content.imageSide === 'none' ? 'lg:max-w-4xl lg:mx-auto lg:text-center' : ''}`}>
            <h2 className="text-4xl font-sans font-extrabold text-slate-900 mb-10 leading-tight">
              {content.title}
            </h2>
            
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="relative pl-6">
                  <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-reha-400"></span>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {content.imageSide !== 'none' && content.imageUrl && (
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-reha-100 rounded-[3rem] -z-10 transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={content.imageUrl} 
                    alt={content.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
