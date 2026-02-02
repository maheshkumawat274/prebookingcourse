
import React from 'react';
import { Button } from '../components/Button';

interface SuccessPageProps {
  onHome: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center text-black text-5xl shadow-[0_0_50px_rgba(34,197,94,0.4)]">
          ✓
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-black">Pre-Booking <span className="text-green-500">Confirmed!</span></h1>
          <p className="text-zinc-400 text-lg">
            Welcome to the Blueprint. You've successfully secured your seat for the 2026 batch at the lowest price.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl space-y-4 text-left">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <span className="text-zinc-500">Transaction ID</span>
            <span className="font-mono text-sm text-zinc-300">TXN-CMB-882190</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500">What's Next?</span>
            <span className="text-green-500 font-bold">Check Email</span>
          </div>
          <p className="text-sm text-zinc-500 italic">
            Check your inbox for a confirmation mail and access to the exclusive community group.
          </p>
        </div>

        <Button onClick={onHome} variant="secondary" className="w-full">
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
