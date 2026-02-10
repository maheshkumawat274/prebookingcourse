
import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onPreBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPreBook }) => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 border border-green-500/20 rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-full text-green-500 text-sm font-semibold mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Pre-Booking Now Open
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Content Monetisation <br />
          <span className="text-green-500 green-glow italic">Blueprint (2026)</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Learn how to earn from content — even with a small audience. 
          Build your income step by step with live guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button onClick={onPreBook} className="w-full sm:w-auto">
            Pre-Book Your Seat — ₹699
          </Button>
          <a href="#curriculum" className="text-zinc-500 hover:text-white font-medium transition-colors">
            See Course Preview ↓
          </a>
        </div>
        
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-50">
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Live Training</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="text-2xl font-bold">6-8</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Weeks Course</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Support</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <div className="text-2xl font-bold">LIFETIME</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Recordings</div>
          </div>
        </div>
      </div>
    </section>
  );
};
