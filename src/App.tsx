import { useState } from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import DoctorProfile from './components/DoctorProfile';
import MedicineDetail from './components/MedicineDetail';
import { translations, Language } from './translations';
import { Globe } from 'lucide-react';

export type Screen = 'splash' | 'home' | 'doctor' | 'medicine';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [lang, setLang] = useState<Language>('en');

  const navigate = (screen: Screen) => setCurrentScreen(screen);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation Bar for Web App Feel */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="text-xl font-bold text-secondary hidden sm:inline">MediBuddy</span>
        </div>

        <div className="flex items-center gap-6">
          {currentScreen !== 'splash' && (
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
              <button onClick={() => navigate('home')} className={currentScreen === 'home' ? 'text-primary' : ''}>Home</button>
              <button onClick={() => navigate('doctor')} className={currentScreen === 'doctor' ? 'text-primary' : ''}>Doctors</button>
              <button onClick={() => navigate('medicine')} className={currentScreen === 'medicine' ? 'text-primary' : ''}>Pharmacy</button>
            </nav>
          )}

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <Globe size={16} className="text-gray-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-6xl p-0 sm:p-6 md:p-8">
          <div className="bg-white min-h-[80vh] sm:rounded-3xl sm:shadow-xl overflow-hidden relative border border-gray-100">
            {currentScreen === 'splash' && <Splash onNavigate={navigate} t={t} />}
            {currentScreen === 'home' && <Home onNavigate={navigate} t={t} />}
            {currentScreen === 'doctor' && <DoctorProfile onNavigate={navigate} t={t} />}
            {currentScreen === 'medicine' && <MedicineDetail onNavigate={navigate} t={t} />}
          </div>
        </div>
      </main>

      {/* Footer for Web App Feel */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary font-bold text-xs">M</div>
             <span className="font-bold text-secondary">MediBuddy</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2026 MediBuddy Health Services. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
             <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
