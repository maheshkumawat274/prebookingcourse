
import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';

interface CheckoutPageProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onSuccess, onCancel }) => {
  const [step, setStep] = useState<'info' | 'payment' | 'processing'>('info');
  const [loading, setLoading] = useState(false);

  const handleProcessPayment = () => {
    setLoading(true);
    setStep('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      onSuccess();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-8 border-b border-zinc-800 flex items-center justify-between">
          <button onClick={onCancel} className="text-zinc-500 hover:text-white">← Back</button>
          <div className="text-xl font-bold">Checkout</div>
          <div className="w-10"></div>
        </div>

        <div className="p-8 space-y-8">
          {step !== 'processing' && (
            <div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center font-bold text-black">C</div>
              <div>
                <div className="font-bold">Content Monetisation Blueprint</div>
                <div className="text-green-500 font-bold">₹699</div>
              </div>
            </div>
          )}

          {step === 'info' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:border-green-500 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:border-green-500 outline-none transition-all" />
                </div>
              </div>
              <Button onClick={() => setStep('payment')} className="w-full">Proceed to Payment</Button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Select Payment Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border border-green-500 bg-green-500/10 rounded-2xl text-center">
                    <div className="font-bold">UPI</div>
                    <div className="text-xs text-zinc-400">GPay, PhonePe</div>
                  </button>
                  <button className="p-4 border border-zinc-800 rounded-2xl text-center opacity-50 grayscale cursor-not-allowed">
                    <div className="font-bold">Card</div>
                    <div className="text-xs text-zinc-400">Debit / Credit</div>
                  </button>
                </div>
                
                <div className="p-4 bg-black border border-zinc-800 rounded-2xl flex items-center justify-between">
                  <span className="text-zinc-400">Total Payable</span>
                  <span className="text-xl font-bold">₹699</span>
                </div>
              </div>
              <Button onClick={handleProcessPayment} className="w-full">Pay Now</Button>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 text-center space-y-6 animate-pulse">
              <div className="relative inline-block">
                <div className="w-20 h-20 border-4 border-zinc-800 border-t-green-500 rounded-full animate-spin mx-auto"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-green-500">₹</div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Processing...</h3>
                <p className="text-zinc-500">Redirecting to payment gateway. Please don't refresh.</p>
              </div>
              <div className="p-4 bg-zinc-800/30 border border-zinc-800 rounded-xl flex items-center gap-3 text-left">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="text-sm text-zinc-400 font-mono">ENCRYPTED_GATEWAY_V3: CONNECTING...</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
