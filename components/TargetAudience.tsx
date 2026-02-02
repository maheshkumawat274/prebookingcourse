
import React from 'react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Is this <span className="text-green-500">For You?</span></h2>
          
          <div className="space-y-4">
            <h3 className="text-zinc-400 font-semibold uppercase tracking-widest text-xs">This course is for:</h3>
            <ul className="space-y-3">
              {['Beginners & New Creators', 'Students & Working Professionals', 'Anyone serious about earning'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <span className="text-green-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-zinc-400 font-semibold uppercase tracking-widest text-xs">This is NOT for:</h3>
            <ul className="space-y-3 opacity-60">
              {['People looking for shortcuts', 'Expectations of instant results'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg line-through text-zinc-500">
                  <span className="text-red-500">✘</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl relative z-10">
            <h3 className="text-2xl font-bold mb-6">Outcome Focus</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              By the end of this course, you will have a working system to turn your content into a consistent income stream. We don't do fluff — we do practical systems.
            </p>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <span className="text-green-500 font-bold block mb-1">Goal:</span>
              <span className="text-xl font-bold">First ₹1 Lakh from content</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-500/10 rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
