import React, { useState } from 'react';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onLogin: (name: string) => void;
  t: any;
}

export default function Login({ onLogin, t }: Props) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real-time login delay
    setTimeout(() => {
      onLogin(name);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[80vh]">
      {/* Left side: Illustration (Desktop) */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="text-[120px] mb-8 animate-bounce">🔐</div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Secure Login</h2>
          <p className="text-gray-500 text-lg">Your health data is protected with industry-leading encryption and secure cloud storage.</p>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-sm">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-400 font-medium">Please enter your name to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arnav"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-bold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-bold outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex justify-end">
               <button type="button" className="text-sm font-bold text-primary hover:underline">Forgot password?</button>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-100">
             <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest">
               <ShieldCheck size={16} className="text-emerald-500" /> Secure Encryption Active
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
