import React from 'react';
import { TOOLS_LIST } from '../constants';
import { Wrench } from 'lucide-react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-black text-white h-10 flex items-center overflow-hidden relative">
      <div className="absolute left-0 bg-psx-green h-full z-10 px-3 flex items-center font-bold text-sm uppercase tracking-wider shadow-lg">
        <Wrench size={14} className="mr-2" />
        Tools & Tech
      </div>
      <div className="flex animate-ticker whitespace-nowrap ml-32">
        {/* Duplicate list to ensure seamless loop */}
        {[...TOOLS_LIST, ...TOOLS_LIST].map((tool, index) => (
          <div key={index} className="inline-flex items-center mx-6 text-sm font-mono">
            <span className="text-gray-300 mr-2">{tool}</span>
            <span className="text-green-400">▲</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;