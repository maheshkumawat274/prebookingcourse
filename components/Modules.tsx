
import React from 'react';

const modules = [
  { id: 1, title: "Content & Monetisation Basics", desc: "Understanding the shift in 2026 content landscapes." },
  { id: 2, title: "Content That Builds Trust", desc: "The psychology of 'Trust-First' content strategy." },
  { id: 3, title: "Small Audience Income", desc: "Earning big with less than 1,000 true fans." },
  { id: 4, title: "Brand Deals & Paid Work", desc: "How to pitch, price, and deliver like a pro." },
  { id: 5, title: "Growth & Long-Term Planning", desc: "Scale towards ₹1 Lakh/month and beyond." }
];

export const Modules: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Course <span className="text-green-500">Curriculum</span></h2>
          <p className="text-zinc-500">A clear, step-by-step roadmap to monetization.</p>
        </div>
        
        <div className="space-y-4">
          {modules.map((m) => (
            <div key={m.id} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-start gap-6 hover:bg-zinc-900 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 font-bold shrink-0">
                0{m.id}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{m.title}</h3>
                <p className="text-zinc-400">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
