
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-3xl overflow-hidden border-4 border-zinc-800 rotate-3">
          <img 
            src="https://picsum.photos/400/400" 
            alt="Rohit Prashar" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About <span className="text-green-500">Rohit Prashar</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            This course is built from real experience working with creators and professionals. 
            Rohit focuses on systems that work, moving away from theoretical growth towards practical, income-focused strategies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
              <div className="font-bold text-xl">Practical</div>
              <div className="text-zinc-500 text-sm">Learning</div>
            </div>
            <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50">
              <div className="font-bold text-xl">Real</div>
              <div className="text-zinc-500 text-sm">Income Focus</div>
            </div>
          </div>
          <p className="text-zinc-500 italic">"No theory. Only what works."</p>
        </div>
      </div>
    </section>
  );
};
