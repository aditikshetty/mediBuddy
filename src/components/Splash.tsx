import { Screen } from '../App';
import { ShieldPlus, Stethoscope, Pill, MessageCircleHeart } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function Splash({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-between p-6 bg-white pb-10">
      
      {/* Top Header */}
      <div className="w-full flex justify-between items-center py-2">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-3 flex items-end gap-0.5">
            <div className="w-1 h-1 bg-black rounded-sm"></div>
            <div className="w-1 h-1.5 bg-black rounded-sm"></div>
            <div className="w-1 h-2 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
          </div>
          <div className="w-4 h-3 flex items-center justify-center">
             <div className="w-3 h-3 border-2 border-black rounded-full flex items-center justify-center">
                 <div className="w-1 h-1 bg-black rounded-full"></div>
             </div>
          </div>
          <div className="w-5 h-3 border border-black rounded-sm relative">
             <div className="w-full h-full bg-black"></div>
             <div className="w-0.5 h-1.5 bg-black absolute -right-1 top-0.5 rounded-r-sm"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full mt-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary relative">
            <ShieldPlus size={24} className="text-primary z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 opacity-20 rounded-xl"></div>
          </div>
          <span className="text-2xl font-bold text-secondary ml-2">MediBuddy</span>
        </div>

        {/* Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
            Your health,<br />our <span className="text-secondary">priority.</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-[250px] mx-auto mt-4 leading-relaxed">
            Quality care, anytime, anywhere.<br />All your health needs in one place.
          </p>
        </div>

        {/* Central Graphic */}
        <div className="relative w-64 h-64 flex items-center justify-center my-8">
          {/* Decorative circles */}
          <div className="absolute inset-0 border border-blue-100 rounded-full w-48 h-48 m-auto opacity-50"></div>
          <div className="absolute inset-0 border border-purple-100 rounded-full w-64 h-64 m-auto opacity-30"></div>
          
          {/* Main central shield */}
          <div className="w-32 h-32 relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 rounded-3xl rotate-45 scale-110 blur-xl"></div>
             <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl rotate-45 flex items-center justify-center relative shadow-xl">
               <div className="w-12 h-12 bg-white rounded-xl -rotate-45 relative flex items-center justify-center shadow-inner">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
               </div>
             </div>
          </div>

          {/* Floating icons */}
          <div className="absolute top-4 right-8 bg-white p-2 rounded-full shadow-md text-blue-500">
            <Stethoscope size={16} />
          </div>
          <div className="absolute bottom-8 right-4 bg-white p-2 rounded-full shadow-md text-purple-500">
            <Pill size={16} />
          </div>
          <div className="absolute top-1/2 left-2 bg-white p-2 rounded-full shadow-md text-blue-400">
            <MessageCircleHeart size={16} />
          </div>
          <div className="absolute top-10 left-12 bg-white p-1.5 rounded-full shadow-sm text-gray-400">
            <ShieldPlus size={14} />
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="w-full space-y-4">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-primary text-white py-4 rounded-xl font-semibold shadow-lg shadow-primary/30 transition-transform active:scale-95"
        >
          Get Started
        </button>
        <div className="text-center text-sm text-gray-500">
          Already have an account? <span className="text-primary font-semibold cursor-pointer">Sign In</span>
        </div>
      </div>
    </div>
  );
}
