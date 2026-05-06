import { Screen } from '../App';
import { Menu, Bell, Search, User, Pill, FlaskConical, Shield, Activity, HeartPulse, FileText, LayoutGrid, Home as HomeIcon, Calendar, ShoppingBag, Heart } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
      {/* Header */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex justify-between items-center mb-6">
          <Menu size={24} className="text-gray-600" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <div className="absolute 0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
              A
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Hi, Aarav <span className="text-xl">👋</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">How can we help you today?</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="text-gray-400 font-semibold">S</span>
          </div>
          <input 
            type="text" 
            placeholder="earch doctors, services, tests..." 
            className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl pl-8 pr-10 py-3.5 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Search size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-5 text-white relative overflow-hidden mb-6 cursor-pointer" onClick={() => onNavigate('doctor')}>
          <div className="relative z-10 w-2/3">
            <h2 className="font-semibold text-lg mb-1">Consult a Doctor</h2>
            <p className="text-blue-100 text-xs mb-4 leading-relaxed">Instant video consultation with verified doctors</p>
            <button className="bg-white text-primary text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
              Consult Now
            </button>
          </div>
          {/* Decorative elements for the banner */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full border-2 border-primary z-20"></div>
          <div className="absolute -bottom-4 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-50 blur-2xl"></div>
          {/* Simple illustration representation */}
          <div className="absolute bottom-0 right-2 text-6xl opacity-90">👨‍⚕️</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Quick Access */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Access</h3>
          <div className="grid grid-cols-4 gap-y-4 gap-x-2">
            <QuickAccessItem icon={<User size={20} className="text-blue-500" />} bg="bg-blue-50" label="Doctors" onClick={() => onNavigate('doctor')} />
            <QuickAccessItem icon={<Pill size={20} className="text-red-500" />} bg="bg-red-50" label="Medicines" onClick={() => onNavigate('medicine')} />
            <QuickAccessItem icon={<FlaskConical size={20} className="text-teal-500" />} bg="bg-teal-50" label="Lab Tests" />
            <QuickAccessItem icon={<Shield size={20} className="text-purple-500" />} bg="bg-purple-50" label="Health Plans" />
            
            <QuickAccessItem icon={<HeartPulse size={20} className="text-rose-500" />} bg="bg-rose-50" label="Symptoms" />
            <QuickAccessItem icon={<Activity size={20} className="text-blue-400" />} bg="bg-blue-50" label="Care Program" />
            <QuickAccessItem icon={<FileText size={20} className="text-green-500" />} bg="bg-green-50" label="Health Records" />
            <QuickAccessItem icon={<LayoutGrid size={20} className="text-gray-500" />} bg="bg-gray-100" label="More" />
          </div>
        </div>

        {/* Upload Prescription */}
        <div className="bg-emerald-50 rounded-2xl p-4 flex items-center justify-between mb-6 relative overflow-hidden border border-emerald-100/50">
          <div className="z-10">
            <h3 className="font-semibold text-gray-900 mb-1">Upload Prescription</h3>
            <p className="text-gray-500 text-xs">Get medicines delivered<br/>at your doorstep</p>
          </div>
          <div className="text-4xl opacity-50 text-emerald-300 z-10">Rx</div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-emerald-100/60 to-transparent"></div>
        </div>

        {/* Health Insights */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-semibold text-gray-900">Health Insights</h3>
            <span className="text-xs text-primary font-medium cursor-pointer">View all</span>
          </div>
          {/* Skeleton/Placeholder for insights */}
          <div className="h-24 bg-gray-50 rounded-2xl border border-gray-100 w-full animate-pulse"></div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-20">
        <NavItem icon={<HomeIcon size={20} />} label="Home" active />
        <NavItem icon={<Calendar size={20} />} label="Appointments" />
        <NavItem icon={<ShoppingBag size={20} />} label="Orders" />
        <NavItem icon={<Heart size={20} />} label="Health" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>
    </div>
  );
}

function QuickAccessItem({ icon, bg, label, onClick }: { icon: React.ReactNode, bg: string, label: string, onClick?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={onClick}>
      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-[10px] text-gray-600 font-medium text-center">{label}</span>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-primary' : 'text-gray-400'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );
}
