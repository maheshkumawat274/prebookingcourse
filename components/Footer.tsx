
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black">C</div>
            <span className="text-xl font-bold">CMB 2026</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2025 Rohit Prashar. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-zinc-400 text-sm">
          <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-green-500 transition-colors">Refund Policy</a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-zinc-400 text-sm">Questions? Email us at</p>
          <a href="mailto:support@rohitprashar.com" className="text-green-500 font-bold">support@rohitprashar.com</a>
        </div>
      </div>
    </footer>
  );
};
