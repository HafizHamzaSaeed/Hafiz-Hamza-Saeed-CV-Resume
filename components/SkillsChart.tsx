import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import { SKILLS_DATA } from '../constants';
import SectionHeader from './SectionHeader';

const SkillsChart: React.FC = () => {
  return (
    <section id="skills" className="mb-12">
      <SectionHeader title="Market Competencies (Skills)" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Column */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-96">
            <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase">Proficiency Index</h3>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SKILLS_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={150} 
                    tick={{fontSize: 12, fill: '#374151'}} 
                    interval={0}
                />
                <Tooltip 
                    cursor={{fill: '#f3f4f6'}}
                    contentStyle={{ backgroundColor: '#00573d', color: '#fff', border: 'none', borderRadius: '4px' }}
                />
                <Bar dataKey="level" barSize={20} radius={[0, 4, 4, 0]}>
                    {SKILLS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#00573d' : '#c5a065'} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>

        {/* Summary Column */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center">
             <h3 className="text-lg font-bold text-psx-green mb-4">Core Capabilities</h3>
             <div className="space-y-4">
                <div>
                    <span className="text-xs text-gray-500 uppercase block">Management</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-psx-green h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500 uppercase block">Technical</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-psx-gold h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500 uppercase block">Soft Skills</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-gray-700 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                </div>
             </div>
             <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded text-xs text-green-800">
                <strong>Analyst Note:</strong> High proficiency in Google Workspace and Project Management indicates strong operational leadership capabilities.
             </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;