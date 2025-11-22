import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, ACTIVITIES_DATA } from '../constants';
import SectionHeader from './SectionHeader';
import { GraduationCap, Award, Heart } from 'lucide-react';

const InfoGrid: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="education">
        {/* Education */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4 border-b border-gray-100 pb-2">
             <GraduationCap className="text-psx-green mr-2" size={24} />
             <h3 className="text-xl font-bold text-gray-800">Education</h3>
          </div>
          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-gray-200">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-psx-gold"></div>
                    <h4 className="font-bold text-gray-900 text-sm">{edu.degree}</h4>
                    <p className="text-sm text-psx-green font-medium">{edu.institution}</p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded inline-block mt-1">{edu.year}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm" id="certifications">
           <div className="flex items-center mb-4 border-b border-gray-100 pb-2">
             <Award className="text-psx-green mr-2" size={24} />
             <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
                 <div key={idx} className="flex justify-between items-start border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                        <p className="text-xs text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-psx-green bg-green-50 px-2 py-1 rounded border border-green-100">
                        {cert.date}
                    </span>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities */}
      <section className="mb-12" id="activities">
        <SectionHeader title="Corporate Social Responsibility (Activities)" />
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
             {ACTIVITIES_DATA.map((activity, idx) => (
                <div key={idx}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div className="flex items-center">
                            <Heart className="text-red-500 mr-2" size={20} />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{activity.role}</h3>
                                <p className="text-sm text-psx-green">{activity.organization}</p>
                            </div>
                        </div>
                        <span className="mt-2 sm:mt-0 text-xs font-bold text-gray-500 border border-gray-300 px-2 py-1 rounded">{activity.period}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activity.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start text-sm text-gray-700 bg-gray-50 p-3 rounded">
                                <span className="text-psx-gold mr-2 font-bold">›</span>
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>
             ))}
        </div>
      </section>
    </>
  );
};

export default InfoGrid;