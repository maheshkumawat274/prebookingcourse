
import React from 'react';
import { Button } from './Button';

interface PricingProps {
  onPreBook: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPreBook }) => {
  return (
    <section id="pricing" className="py-24 px-4 bg-black relative">
      <div className="max-w-3xl mx-auto bg-zinc-900 border-2 border-green-500 p-8 md:p-16 rounded-[40px] text-center space-y-8 relative overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15)]">
        {/* Badge */}
        <div className="absolute top-0 right-0 bg-green-500 text-black px-10 py-2 font-bold rotate-45 translate-x-10 translate-y-4">
          60% OFF
        </div>

        <h2 className="text-3xl md:text-5xl font-bold">Join the <br/><span className="text-green-500 italic">Blueprint 2026</span></h2>
        
        <div className="space-y-2">
          <div className="text-zinc-500 line-through text-2xl">₹2,999</div>
          <div className="text-6xl md:text-8xl font-black text-white">₹699</div>
          <p className="text-green-500 font-medium">Limited Time Pre-Booking Price</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto py-6">
          {['Lowest price ever', 'Live learning sessions', 'Community access', 'Session recordings', 'Priority support'].map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 text-zinc-300">
              <span className="text-green-500">✔</span> {benefit}
            </div>
          ))}
        </div>

        <Button onClick={onPreBook} className="w-full text-xl py-6 rounded-2xl">
          Pre-Book My Seat Now
        </Button>
        
        <p className="text-zinc-500 text-sm">Price increases to ₹999 – ₹2,999 after launch.</p>
      </div>
    </section>
  );
};
