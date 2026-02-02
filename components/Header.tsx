
import React from 'react';

interface HeaderProps {
  onPreBook: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPreBook }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">
            C
          </div>
          <span className="text-xl font-bold tracking-tight">CMB<span className="text-green-500">2026</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#why" className="hover:text-green-500 transition-colors">Why Pre-book?</a>
          <a href="#curriculum" className="hover:text-green-500 transition-colors">Curriculum</a>
          <a href="#pricing" className="hover:text-green-500 transition-colors">Pricing</a>
        </div>
        <button 
          onClick={onPreBook}
          className="bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white px-5 py-2 rounded-full border border-green-500/30 text-sm font-bold transition-all"
        >
          Pre-Book Now
        </button>
      </div>
    </nav>
  );
};
