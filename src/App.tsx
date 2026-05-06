import { useState } from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import DoctorProfile from './components/DoctorProfile';
import MedicineDetail from './components/MedicineDetail';

export type Screen = 'splash' | 'home' | 'doctor' | 'medicine';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-0 sm:p-4 md:p-8">
      <div className="w-full max-w-md bg-white min-h-screen sm:min-h-[850px] sm:h-[850px] sm:rounded-[40px] sm:shadow-2xl overflow-hidden relative sm:border-[8px] sm:border-gray-900 flex flex-col">
        {currentScreen === 'splash' && <Splash onNavigate={navigate} />}
        {currentScreen === 'home' && <Home onNavigate={navigate} />}
        {currentScreen === 'doctor' && <DoctorProfile onNavigate={navigate} />}
        {currentScreen === 'medicine' && <MedicineDetail onNavigate={navigate} />}
      </div>
    </div>
  );
}

export default App;
