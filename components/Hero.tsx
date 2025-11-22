import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, Linkedin, User } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Overview */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 font-serif tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="text-xl text-psx-green font-medium mb-6">
              {PROFILE.summary}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 hover:text-psx-green transition-colors cursor-pointer">
                <Mail size={16} className="text-psx-gold" />
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </div>
              <div className="flex items-center gap-2 hover:text-psx-green transition-colors">
                <Phone size={16} className="text-psx-gold" />
                <span>{PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-psx-gold" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-psx-gold" />
                <span>Personality: {PROFILE.personality}</span>
              </div>
            </div>

            <div className="mt-6">
               <a 
                href={`https://${PROFILE.linkedin}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-psx-green hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
               >
                 <Linkedin size={18} className="mr-2" />
                 View LinkedIn Profile
               </a>
            </div>
          </div>

          {/* Key Metrics / Stats (Decorative mimicking stock data) */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-inner">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
              Career Indices
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-gray-500">Experience</span>
                <span className="block text-2xl font-bold text-gray-800">05+ <span className="text-xs font-normal text-gray-500">Yrs</span></span>
                <span className="text-xs text-green-600 font-semibold">▲ Cumulative</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500">Team Size</span>
                <span className="block text-2xl font-bold text-gray-800">80+</span>
                <span className="text-xs text-green-600 font-semibold">▲ Peak</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500">Projects</span>
                <span className="block text-2xl font-bold text-gray-800">12+</span>
                <span className="text-xs text-green-600 font-semibold">▲ Successful</span>
              </div>
               <div>
                <span className="block text-xs text-gray-500">Efficiency</span>
                <span className="block text-2xl font-bold text-gray-800">50%</span>
                <span className="text-xs text-green-600 font-semibold">▲ Growth</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;