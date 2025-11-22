import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Green Strip */}
      <div className="bg-psx-green text-white text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span>MARKET STATUS: <span className="font-bold text-green-300">OPEN</span></span>
          <span className="hidden sm:inline">LAHORE, PAKISTAN</span>
        </div>
        <div className="flex space-x-4">
          <span>HP: (+92) 308-1764106</span>
          <span className="hidden sm:inline">UTC+5</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b-4 border-psx-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-10 h-10 bg-psx-green rounded flex items-center justify-center text-white font-bold text-xl">
                  HS
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-psx-green text-lg leading-tight">HAFIZ HAMZA SAEED</span>
                  <span className="text-xs text-gray-500 tracking-widest">OPERATIONS MANAGER</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-psx-green font-semibold uppercase text-sm tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-psx-green focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-psx-green hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopBar;