import { Screen } from '../App';
import { Menu, Bell, Search, User, Pill, FlaskConical, Shield, Activity, HeartPulse, FileText, LayoutGrid, Home as HomeIcon, Calendar, ShoppingBag, Heart } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  t: any;
}

export default function Home({ onNavigate, t }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative min-h-[80vh]">
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        
        {/* User Greeting & Search Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              {t.welcome} <span className="text-2xl animate-pulse">👋</span>
            </h1>
            <p className="text-gray-500 text-lg mt-1">{t.subtitle}</p>
          </div>

          <div className="w-full md:max-w-md relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-base rounded-2xl pl-12 pr-10 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Banner */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden cursor-pointer group shadow-2xl shadow-primary/20" onClick={() => onNavigate('doctor')}>
              <div className="relative z-10 w-full md:w-2/3">
                <div className="bg-white/20 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">Featured Service</div>
                <h2 className="font-bold text-3xl md:text-4xl mb-3 group-hover:translate-x-2 transition-transform">{t.consultDoctor}</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-sm">{t.consultSub}</p>
                <button className="bg-white text-primary text-base font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                  {t.consultNow}
                </button>
              </div>
              
              {/* Abstract Illustration */}
              <div className="absolute top-0 right-0 h-full w-1/3 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <Activity size={200} className="text-white" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
            </div>

            {/* Quick Access */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-2xl text-gray-900">{t.quickAccess}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <QuickAccessItem icon={<User size={24} className="text-blue-500" />} bg="bg-blue-50" label={t.doctors} onClick={() => onNavigate('doctor')} />
                <QuickAccessItem icon={<Pill size={24} className="text-red-500" />} bg="bg-red-50" label={t.medicines} onClick={() => onNavigate('medicine')} />
                <QuickAccessItem icon={<FlaskConical size={24} className="text-teal-500" />} bg="bg-teal-50" label={t.labTests} onClick={() => onNavigate('service', 'Lab Tests')} />
                <QuickAccessItem icon={<Shield size={24} className="text-purple-500" />} bg="bg-purple-50" label={t.healthPlans} onClick={() => onNavigate('service', 'Health Plans')} />
                <QuickAccessItem icon={<HeartPulse size={24} className="text-rose-500" />} bg="bg-rose-50" label={t.symptoms} onClick={() => onNavigate('service', 'Symptoms')} />
                <QuickAccessItem icon={<Activity size={24} className="text-blue-400" />} bg="bg-blue-50" label={t.careProgram} onClick={() => onNavigate('service', 'Care Program')} />
                <QuickAccessItem icon={<FileText size={24} className="text-green-500" />} bg="bg-green-50" label={t.healthRecords} onClick={() => onNavigate('service', 'Health Records')} />
                <QuickAccessItem icon={<LayoutGrid size={24} className="text-gray-500" />} bg="bg-gray-100" label={t.more} onClick={() => onNavigate('service', 'More Services')} />
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Upload Prescription */}
            <div className="bg-emerald-50 rounded-[28px] p-8 flex flex-col justify-between min-h-[250px] relative overflow-hidden border border-emerald-100 shadow-sm">
              <div className="z-10">
                <h3 className="font-bold text-2xl text-gray-900 mb-3">{t.uploadPrescription}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{t.uploadSub}</p>
                <button className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">Upload Now</button>
              </div>
              <div className="absolute -right-6 -bottom-6 text-9xl font-black text-emerald-100/50 pointer-events-none">Rx</div>
            </div>

            {/* Health Insights */}
            <div className="bg-gray-50 rounded-[28px] p-8 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl text-gray-900">{t.healthInsights}</h3>
                <span className="text-sm text-primary font-bold cursor-pointer hover:underline">{t.viewAll}</span>
              </div>
              <div className="space-y-4">
                 <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                   <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500"><Activity size={20}/></div>
                   <div>
                     <div className="text-sm font-bold">Daily Step Count</div>
                     <div className="text-xs text-gray-400">Target: 10,000 steps</div>
                   </div>
                 </div>
                 <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                   <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500"><Heart size={20}/></div>
                   <div>
                     <div className="text-sm font-bold">Heart Rate</div>
                     <div className="text-xs text-gray-400">Last check: 72 bpm</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav (Mobile Only) */}
      <div className="md:hidden sticky bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-20">
        <NavItem icon={<HomeIcon size={20} />} label="Home" active />
        <NavItem icon={<Calendar size={20} />} label="Appointments" />
        <NavItem icon={<ShoppingBag size={20} />} label="Orders" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>
    </div>
  );
}

function QuickAccessItem({ icon, bg, label, onClick }: { icon: React.ReactNode, bg: string, label: string, onClick?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group" onClick={onClick}>
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl ${bg} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all`}>
        {icon}
      </div>
      <span className="text-xs md:text-sm text-gray-700 font-bold text-center">{label}</span>
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
