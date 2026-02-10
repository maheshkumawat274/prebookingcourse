
import React from 'react';

const faqs = [
  { q: "Is this beginner friendly?", a: "Yes, we start from the absolute basics of content creation." },
  { q: "Will I get recordings?", a: "Yes, every live session is recorded and uploaded to your dashboard." },
  { q: "Is this a recorded course?", a: "No, this is a 100% LIVE learning experience with Rohit." },
  { q: "What if I miss a class?", a: "You can watch the recording and ask questions in the community group." }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="text-green-500">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-bold text-lg hover:text-green-500 transition-colors">
                {faq.q}
                <span className="transition-transform group-open:rotate-180">↓</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-400">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
