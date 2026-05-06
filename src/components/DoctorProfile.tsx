import { Screen } from '../App';
import { ArrowLeft, Heart, Share2, Video, Phone, Building2, MessageCircle, Star, BadgeCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function DoctorProfile({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex justify-between items-center bg-white z-20">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-28">
        {/* Profile Card */}
        <div className="flex gap-4 mb-6 mt-2">
          <div className="w-24 h-28 bg-emerald-50 rounded-2xl overflow-hidden relative flex-shrink-0">
             {/* Simple avatar representation */}
             <div className="w-full h-full bg-blue-100 flex items-end justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200/50"></div>
               <div className="w-16 h-20 bg-blue-800 rounded-t-full absolute bottom-0 opacity-10"></div>
               <div className="text-6xl absolute -bottom-2 z-10">👩🏻‍⚕️</div>
             </div>
          </div>
          <div className="flex-1 pt-1">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-1.5 mb-1">
              Dr. Neha Sharma
              <BadgeCheck size={18} className="text-primary fill-primary text-white" />
            </h2>
            <p className="text-sm text-gray-500 mb-1">MBBS, MD (General Medicine)</p>
            <p className="text-sm text-gray-500 mb-3">8+ Years Experience</p>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-xs font-semibold text-green-700">
                <Star size={12} className="fill-green-700" /> 4.9
              </div>
              <span className="text-xs text-gray-400">(2.3k reviews)</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">General Physician</span>
              <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">Internal Medicine</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          <ActionButton icon={<Video size={20} />} label="Video" subLabel="Consult" color="text-primary" bg="bg-blue-50" />
          <ActionButton icon={<Phone size={20} />} label="Audio" subLabel="Consult" color="text-teal-500" bg="bg-teal-50" />
          <ActionButton icon={<Building2 size={20} />} label="Clinic" subLabel="Visit" color="text-emerald-500" bg="bg-emerald-50" />
          <ActionButton icon={<MessageCircle size={20} />} label="Chat" subLabel="Consult" color="text-purple-500" bg="bg-purple-50" />
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2">About Doctor</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Dr. Neha Sharma is a dedicated General Physician with over 8 years of experience in diagnosing and treating a wide range of acute and chronic illnesses.
          </p>
          <button className="text-primary text-xs font-semibold mt-1 flex items-center gap-1">
            View more <span className="text-[10px]">▼</span>
          </button>
        </div>

        {/* Details Table */}
        <div className="space-y-4 mb-8">
          <DetailRow label="Consultation Fees" value="₹499" valueClass="font-semibold text-gray-900" />
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <DetailRow label="Languages" value="English, Hindi" />
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <DetailRow label="Experience" value="8+ Years" />
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <DetailRow label="Availability" value="Today, 10:00 AM - 8:00 PM" valueClass="font-medium text-emerald-600" />
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 z-20">
        <button className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
          Book Appointment
        </button>
        <div className="flex justify-center items-center gap-1.5 text-xs text-gray-500">
          <CheckCircle2 size={14} className="text-emerald-500" /> 100% Secure Payments
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label, subLabel, color, bg }: { icon: React.ReactNode, label: string, subLabel: string, color: string, bg: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`w-12 h-12 rounded-full ${bg} ${color} flex items-center justify-center cursor-pointer transition-transform active:scale-95`}>
        {icon}
      </div>
      <div className="text-center">
        <div className="text-xs font-medium text-gray-900">{label}</div>
        <div className="text-[10px] text-gray-500">{subLabel}</div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, valueClass = "text-gray-900 font-medium" }: { label: string, value: string, valueClass?: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-500">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
