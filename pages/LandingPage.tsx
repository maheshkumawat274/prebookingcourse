
import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WhySection } from '../components/WhySection';
import { TargetAudience } from '../components/TargetAudience';
import { Modules } from '../components/Modules';
import { Pricing } from '../components/Pricing';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

interface LandingPageProps {
  onPreBook: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onPreBook }) => {
  return (
    <div className="min-h-screen bg-black bg-grid">
      <Header onPreBook={onPreBook} />
      <Hero onPreBook={onPreBook} />
      
      <div className="max-w-7xl mx-auto">
        <WhySection />
        
        <section className="py-12 bg-green-500 text-black text-center font-bold text-xl uppercase tracking-tighter overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            Pre-book now at ₹699. Price increases after launch. • 
            Pre-book now at ₹699. Price increases after launch. • 
            Pre-book now at ₹699. Price increases after launch. • 
          </div>
        </section>

        <TargetAudience />
        <Modules />
        
        <section className="py-20 px-4 text-center space-y-8 border-y border-zinc-900">
           <div className="text-zinc-500 uppercase tracking-widest text-sm">Timeline</div>
           <h2 className="text-4xl font-bold">Mark Your <span className="text-green-500">Calendar</span></h2>
           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
             <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
               <div className="text-zinc-500 text-sm mb-2">Phase 1</div>
               <div className="text-2xl font-bold">Open Now</div>
               <div className="text-green-500">Pre-booking</div>
             </div>
             <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
               <div className="text-zinc-500 text-sm mb-2">Phase 2</div>
               <div className="text-2xl font-bold">Month 2026</div>
               <div className="text-green-500">Live Classes</div>
             </div>
             <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
               <div className="text-zinc-500 text-sm mb-2">Phase 3</div>
               <div className="text-2xl font-bold">6-8 Weeks</div>
               <div className="text-green-500">Duration</div>
             </div>
           </div>
        </section>

        <Pricing onPreBook={onPreBook} />
        <About />
        <FAQ />
      </div>

      <section className="py-24 px-4 bg-zinc-900 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to <span className="text-green-500 italic">Monetise?</span></h2>
        <button 
          onClick={onPreBook}
          className="bg-green-500 hover:bg-green-400 text-black px-12 py-5 rounded-2xl font-black text-2xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]"
        >
          Pre-Book for ₹699
        </button>
        <p className="mt-6 text-zinc-500">Limited seats available for the live batch.</p>
      </section>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
