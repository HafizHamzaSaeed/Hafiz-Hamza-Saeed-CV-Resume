import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-psx-dark text-white py-8 border-t-4 border-psx-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="font-bold text-lg tracking-wider">HAFIZ HAMZA SAEED</h4>
            <p className="text-sm text-gray-400">Operations & General Management Portfolio</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Data presented in this portfolio is accurate as of {year}.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Styled after the Pakistan Stock Exchange (PSX) Web Identity.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-center space-x-6 text-sm text-gray-400">
           <a href={`mailto:${PROFILE.email}`} className="hover:text-psx-gold transition-colors">Contact</a>
           <a href={`https://${PROFILE.linkedin}`} className="hover:text-psx-gold transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;