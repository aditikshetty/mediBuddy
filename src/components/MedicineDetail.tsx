import { Screen } from '../App';
import { ArrowLeft, Heart, ShoppingCart, ShieldCheck, RefreshCcw, Truck, Minus, Plus } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function MedicineDetail({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex justify-between items-center bg-white z-20">
        <button onClick={() => onNavigate('home')} className="p-2 -ml-2 text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-gray-900 hover:text-gray-600 transition-colors">
            <Heart size={20} />
          </button>
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} className="text-gray-900" />
            <div className="absolute -top-1.5 -right-2 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">2</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Product Image & Basic Info */}
        <div className="px-6 pt-2 pb-6">
          <div className="flex gap-4">
            <div className="w-28 h-28 bg-emerald-50 rounded-2xl flex items-center justify-center relative overflow-hidden flex-shrink-0">
               {/* 3D Box Representation */}
               <div className="w-16 h-12 bg-emerald-600 rounded-sm relative transform -rotate-12 translate-y-1 z-10 shadow-lg">
                 <div className="absolute inset-0 bg-emerald-500 rounded-sm clip-polygon-top"></div>
                 <div className="absolute inset-y-0 right-0 w-4 bg-emerald-700 rounded-r-sm clip-polygon-right"></div>
                 <div className="absolute top-1 left-2 text-[6px] text-white font-bold opacity-80">dolo 650</div>
               </div>
               <div className="absolute -bottom-2 right-2 text-2xl z-0 transform rotate-12 opacity-80">💊</div>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Tablet</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 leading-none">Dolo 650</h2>
              <p className="text-xs text-gray-500 mb-2">Paracetamol 650mg</p>
              
              <div className="inline-block text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded mb-3 w-fit">
                In Stock
              </div>
              
              <div className="flex items-end gap-2 mb-1">
                <span className="text-xl font-bold text-gray-900">₹45.00</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 line-through">MRP ₹60.00</span>
                <span className="text-emerald-600 font-semibold">25% OFF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 w-full bg-gray-50"></div>

        {/* Features Grid */}
        <div className="px-6 py-6 grid grid-cols-3 gap-2 border-b border-gray-100">
          <FeatureItem icon={<ShieldCheck size={20} />} label="Genuine" subLabel="Medicines" color="text-emerald-500" />
          <FeatureItem icon={<RefreshCcw size={20} />} label="Easy" subLabel="Returns" color="text-blue-500" />
          <FeatureItem icon={<Truck size={20} />} label="Fast" subLabel="Delivery" color="text-teal-500" />
        </div>

        {/* About Medicine */}
        <div className="px-6 py-6">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">About Medicine</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Dolo 650 Tablet is used to relieve pain and reduce fever. It is commonly used for headaches, body aches, toothaches, colds, and fever.
          </p>
          <button className="text-primary text-xs font-semibold mt-2 flex items-center gap-1">
            View more <span className="text-[10px]">▼</span>
          </button>
        </div>

        <div className="h-2 w-full bg-gray-50"></div>

        {/* Frequently Bought Together */}
        <div className="px-6 py-6">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">Frequently Bought Together</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
             <ProductCard name="Calpol 650" desc="Tablet" price="₹42.00" color="bg-teal-50" pillColor="bg-teal-500" />
             <ProductCard name="Vicks Vaporub" desc="50ml" price="₹110.00" color="bg-blue-50" pillColor="bg-blue-800" />
             <ProductCard name="Electral" desc="ORS" price="₹18.00" color="bg-orange-50" pillColor="bg-orange-500" />
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 px-6 py-4 z-20">
        <div className="flex items-center gap-4 mb-3">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-1 py-1 w-28 border border-gray-100">
            <button className="w-8 h-8 flex items-center justify-center text-primary font-medium rounded-lg hover:bg-gray-100">
              <Minus size={16} />
            </button>
            <span className="font-semibold text-sm text-gray-900">1</span>
            <button className="w-8 h-8 flex items-center justify-center text-primary font-medium rounded-lg hover:bg-gray-100 bg-white shadow-sm border border-gray-100">
              <Plus size={16} />
            </button>
          </div>
          
          {/* Add to Cart */}
          <button className="flex-1 bg-primary text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            Add to Cart | ₹45.00
          </button>
        </div>
        <div className="flex justify-center items-center gap-1.5 text-xs text-emerald-600 font-medium">
          <Truck size={14} /> Delivery by Tomorrow, 10 AM
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, label, subLabel, color }: { icon: React.ReactNode, label: string, subLabel: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className={`${color} bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center mb-1`}>
        {icon}
      </div>
      <div className="text-[10px] font-semibold text-gray-900 leading-tight">{label}</div>
      <div className="text-[10px] text-gray-500 leading-tight">{subLabel}</div>
    </div>
  );
}

function ProductCard({ name, desc, price, color, pillColor }: { name: string, desc: string, price: string, color: string, pillColor: string }) {
  return (
    <div className="min-w-[140px] border border-gray-100 rounded-xl p-3 relative flex-shrink-0">
      <div className={`w-full h-16 ${color} rounded-lg mb-3 flex items-center justify-center`}>
         <div className={`w-8 h-4 ${pillColor} rounded-sm shadow-sm opacity-80`}></div>
      </div>
      <h4 className="text-xs font-bold text-gray-900 mb-0.5">{name}</h4>
      <p className="text-[10px] text-gray-500 mb-2">{desc}</p>
      <div className="text-xs font-bold text-gray-900">{price}</div>
      
      <button className="absolute bottom-3 right-3 w-6 h-6 bg-blue-50 text-primary rounded-full flex items-center justify-center">
        <Plus size={14} />
      </button>
    </div>
  );
}
