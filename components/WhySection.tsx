
import React from 'react';

export const WhySection: React.FC = () => {
  const reasons = [
    {
      title: "Live Not Recorded",
      desc: "This isn't another dusty archive. You learn live, interact, and get doubts solved instantly.",
      icon: "🎥"
    },
    {
      title: "Early Bird Advantage",
      desc: "Join the inner circle of creators and be the first to implement the 2026 systems.",
      icon: "⚡"
    },
    {
      title: "Lowest Price Locked",
      desc: "Pre-book now at ₹699. Once we launch, the price will jump up to ₹2,999.",
      icon: "💎"
    }
  ];

  return (
    <section id="why" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why <span className="text-green-500">Pre-booking?</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto">It's more than just a seat; it's a commitment to your creator journey.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{r.icon}</div>
              <h3 className="text-xl font-bold mb-4">{r.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
