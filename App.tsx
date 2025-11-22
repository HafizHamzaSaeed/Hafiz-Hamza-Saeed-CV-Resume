import React from 'react';
import TopBar from './components/TopBar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsChart from './components/SkillsChart';
import InfoGrid from './components/InfoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f8] font-sans">
      <TopBar />
      <Ticker />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8">
            
            {/* Experience Section (Market News Style) */}
            <ExperienceSection />
            
            {/* Skills Visualization (Market Data Style) */}
            <SkillsChart />

            {/* Education, Certs, Activities (Grid Style) */}
            <InfoGrid />
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;