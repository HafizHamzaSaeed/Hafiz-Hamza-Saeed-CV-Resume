import React from 'react';

interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-6 border-b-2 border-psx-green pb-2 flex justify-between items-end">
      <h2 className="text-2xl font-bold text-psx-green uppercase tracking-wide flex items-center">
        <span className="w-2 h-8 bg-psx-gold mr-3 inline-block"></span>
        {title}
      </h2>
      <span className="text-xs text-gray-400 hidden sm:block font-mono">LATEST UPDATES</span>
    </div>
  );
};

export default SectionHeader;