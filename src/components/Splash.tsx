import { Screen } from '../App';
import { ShieldPlus, Stethoscope, Pill, MessageCircleHeart } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  t: any;
}

export default function Splash({ onNavigate, t }: Props) {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white min-h-[70vh]">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 mb-12 md:mb-0">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary relative">
            <ShieldPlus size={28} className="text-primary z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 opacity-20 rounded-xl"></div>
          </div>
          <span className="text-3xl font-bold text-secondary ml-3">MediBuddy</span>
        </div>

        {/* Text */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.yourHealth}<br />our <span className="text-primary">{t.priority}</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            {t.qualityCare}
          </p>
        </div>

        {/* Actions */}
        <div className="w-full max-w-sm space-y-4">
          <button 
            onClick={() => onNavigate('home')}
            className="w-full md:w-auto md:px-12 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
          >
            {t.getStarted}
          </button>
          <div className="text-sm text-gray-500 mt-4">
            {t.signin.split('?')[0]}? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => onNavigate('home')}>{t.signin.split('?')[1]}</span>
          </div>
        </div>
      </div>

      {/* Right Graphic */}
      <div className="flex-1 relative flex items-center justify-center w-full max-w-lg">
        {/* Decorative background blobs */}
        <div className="absolute top-0 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        
        <div className="relative w-full aspect-square flex items-center justify-center">
          {/* Decorative circles */}
          <div className="absolute inset-0 border-2 border-blue-100 rounded-full w-4/5 h-4/5 m-auto opacity-50 animate-ping duration-[3s]"></div>
          <div className="absolute inset-0 border border-purple-100 rounded-full w-full h-full m-auto opacity-30"></div>
          
          {/* Main central shield */}
          <div className="w-48 h-48 relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 rounded-[40px] rotate-45 scale-110 blur-2xl"></div>
             <div className="w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[32px] rotate-45 flex items-center justify-center relative shadow-2xl">
               <div className="w-20 h-20 bg-white rounded-2xl -rotate-45 relative flex items-center justify-center shadow-inner">
                  <div className="w-10 h-10 bg-blue-500 rounded-full shadow-lg"></div>
               </div>
             </div>
          </div>

          {/* Floating icons with labels */}
          <div className="absolute top-[10%] right-[15%] bg-white p-4 rounded-2xl shadow-xl text-blue-500 flex items-center gap-3 animate-bounce delay-200">
            <Stethoscope size={24} />
            <span className="text-sm font-bold text-gray-700">Expert Care</span>
          </div>
          <div className="absolute bottom-[20%] right-[5%] bg-white p-4 rounded-2xl shadow-xl text-purple-500 flex items-center gap-3 animate-bounce delay-500">
            <Pill size={24} />
            <span className="text-sm font-bold text-gray-700">Medicine</span>
          </div>
          <div className="absolute top-1/2 left-[-5%] bg-white p-4 rounded-2xl shadow-xl text-blue-400 flex items-center gap-3 animate-bounce">
            <MessageCircleHeart size={24} />
            <span className="text-sm font-bold text-gray-700">Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
