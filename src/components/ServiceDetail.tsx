import { Screen } from '../App';
import { ArrowLeft, FlaskConical, Shield, HeartPulse, LayoutGrid, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  serviceName: string;
  t: any;
}

export default function ServiceDetail({ onNavigate, serviceName, t }: Props) {
  const getIcon = () => {
    switch (serviceName.toLowerCase()) {
      case 'lab tests': return <FlaskConical size={48} className="text-teal-500" />;
      case 'health plans': return <Shield size={48} className="text-purple-500" />;
      case 'symptoms': return <HeartPulse size={48} className="text-rose-500" />;
      default: return <LayoutGrid size={48} className="text-gray-500" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white min-h-[70vh]">
      <div className="px-6 md:px-10 pt-6 pb-6 border-b border-gray-50 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">{serviceName}</h2>
      </div>

      <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
           <div className="w-32 h-32 bg-gray-50 rounded-[32px] flex items-center justify-center shadow-inner">
             {getIcon()}
           </div>
           <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black text-gray-900 mb-4">{serviceName}</h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Explore our comprehensive {serviceName} services designed to keep you and your family healthy. We provide verified information and easy access to top-tier medical facilities.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <FeatureCard title="Expert Consultation" desc="Get advice from the best in the field." />
           <FeatureCard title="Verified Reports" desc="100% accurate and digitized health records." />
           <FeatureCard title="24/7 Support" desc="Our team is here to help you anytime." />
           <FeatureCard title="Home Collection" desc="Convenient services delivered at your home." />
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-[32px] border border-primary/10 flex flex-col items-center text-center">
           <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to proceed?</h3>
           <p className="text-gray-500 mb-6">Start your journey to better health today.</p>
           <button className="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
             Get Started
           </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-start gap-4">
       <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
          <CheckCircle2 size={20} />
       </div>
       <div>
          <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-500">{desc}</p>
       </div>
    </div>
  );
}
