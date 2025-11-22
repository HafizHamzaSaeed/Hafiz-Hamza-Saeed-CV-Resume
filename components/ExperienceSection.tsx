import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-12">
      <SectionHeader title="Professional Experience" />
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-psx-green relative overflow-hidden">
            
            {/* Watermark/Background decor */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <Briefcase size={100} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <h4 className="text-lg text-psx-green font-semibold">{job.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded mb-1">
                    <Calendar size={14} />
                    {job.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                </div>
              </div>
              
              {job.description && (
                <p className="text-sm text-gray-600 italic mb-4 border-l-2 border-gray-300 pl-3">
                  {job.description}
                </p>
              )}

              <ul className="list-none space-y-2 mt-4">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-start group">
                    <span className="text-psx-gold mr-2 mt-1 group-hover:text-psx-green transition-colors">■</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;