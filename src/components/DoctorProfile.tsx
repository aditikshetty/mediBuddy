import { Screen } from '../App';
import { ArrowLeft, Heart, Share2, Video, Phone, Building2, MessageCircle, Star, BadgeCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  t: any;
}

export default function DoctorProfile({ onNavigate, t }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative min-h-[80vh]">
      {/* Header */}
      <div className="px-6 md:px-10 pt-6 pb-6 flex justify-between items-center bg-white border-b border-gray-50">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-gray-900 font-bold hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 transition-colors font-medium">
            <Heart size={20} />
            <span className="hidden sm:inline">Save</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium">
            <Share2 size={20} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center md:items-start">
            <div className="w-40 h-48 md:w-56 md:h-64 bg-blue-50 rounded-[40px] overflow-hidden relative flex-shrink-0 shadow-lg">
               <div className="w-full h-full bg-blue-100 flex items-end justify-center">
                 <div className="text-[120px] md:text-[160px] leading-none mb-[-10px]">👩🏻‍⚕️</div>
               </div>
            </div>

            <div className="flex-1 text-center md:text-left pt-2">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dr. Neha Sharma</h2>
                <BadgeCheck size={28} className="text-primary fill-primary text-white" />
              </div>
              <p className="text-lg md:text-xl text-gray-500 mb-2">MBBS, MD (General Medicine)</p>
              <p className="text-gray-400 font-medium mb-6">8+ Years Experience | General Physician</p>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-8">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-1.5 text-xl font-bold text-gray-900">
                    <Star size={20} className="fill-yellow-400 text-yellow-400" /> 4.9
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Rating</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-100 hidden sm:block"></div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-xl font-bold text-gray-900">2.3k+</div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Reviews</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-100 hidden sm:block"></div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-xl font-bold text-gray-900">5k+</div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Patients</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm">Internal Medicine</span>
                <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-xl font-bold text-sm">Diabetology</span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-sm">Online Expert</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Column: About & Info */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Doctor</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Dr. Neha Sharma is a highly skilled and experienced General Physician dedicated to providing comprehensive medical care. With a focus on preventive medicine and patient education, she has helped thousands of patients manage chronic conditions and achieve optimal health.
                </p>
              </section>

              <section className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Experience Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-gray-600 font-medium">Senior Resident at Apollo Hospital (2018-2021)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-gray-600 font-medium">Specialist in Lifestyle Disease Management</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Column: Booking & Fees */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-50 p-8 rounded-[32px] shadow-sm sticky top-28">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-50">
                   <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Consultation Fee</span>
                   <span className="text-3xl font-black text-gray-900">₹499</span>
                </div>

                <div className="space-y-6 mb-8">
                   <div className="flex justify-between">
                     <span className="text-gray-500 font-medium">Wait Time</span>
                     <span className="text-gray-900 font-bold">15-20 Mins</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-gray-500 font-medium">Availability</span>
                     <span className="text-emerald-600 font-bold">Available Today</span>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-blue-50 p-4 rounded-2xl flex flex-col items-center gap-2 cursor-pointer border border-blue-100/50 hover:bg-blue-100 transition-colors">
                    <Video size={24} className="text-primary" />
                    <span className="text-xs font-bold">Video</span>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl flex flex-col items-center gap-2 cursor-pointer border border-emerald-100/50 hover:bg-emerald-100 transition-colors">
                    <Building2 size={24} className="text-emerald-600" />
                    <span className="text-xs font-bold">In-Clinic</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  {t.bookAppointment}
                </button>
                
                <div className="mt-6 flex justify-center items-center gap-2 text-xs text-gray-400 font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> {t.securePayments}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
