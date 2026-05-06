import { Screen } from '../App';
import { ArrowLeft, Heart, ShoppingCart, ShieldCheck, RefreshCcw, Truck, Minus, Plus, Star } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
  t: any;
}

export default function MedicineDetail({ onNavigate, t }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative min-h-[80vh]">
      {/* Header */}
      <div className="px-6 md:px-10 pt-6 pb-6 flex justify-between items-center bg-white border-b border-gray-50">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-gray-900 font-bold hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Pharmacy</span>
        </button>
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-rose-500 transition-colors">
            <Heart size={24} />
          </button>
          <div className="relative cursor-pointer group">
            <ShoppingCart size={24} className="text-gray-900 group-hover:text-primary transition-colors" />
            <div className="absolute -top-2 -right-3 w-5 h-5 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">2</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Product Images */}
            <div className="flex-1 space-y-6">
              <div className="aspect-square bg-gray-50 rounded-[40px] flex items-center justify-center border border-gray-100 relative overflow-hidden group shadow-inner">
                <div className="text-[200px] md:text-[280px] select-none group-hover:scale-110 transition-transform duration-500">💊</div>
                <div className="absolute top-6 left-6 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest">In Stock</div>
                <div className="absolute bottom-6 right-6 flex gap-2">
                   <div className="w-3 h-3 bg-primary rounded-full"></div>
                   <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                   <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`aspect-square rounded-2xl bg-gray-50 border ${i===1 ? 'border-primary shadow-md' : 'border-gray-100'} cursor-pointer flex items-center justify-center text-3xl`}>
                     💊
                   </div>
                 ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex-1 flex flex-col pt-4">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Best Seller</span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <span className="text-gray-400 text-xs font-bold ml-1">(4.8 / 5.0)</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Dolo 650</h1>
                <p className="text-lg text-gray-400 font-medium mb-6">Paracetamol 650mg | 15 Tablets per Strip</p>
                
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-5xl font-black text-gray-900">₹45.00</span>
                  <div className="flex flex-col pb-1">
                    <span className="text-lg text-gray-400 line-through font-medium leading-none">MRP ₹60.00</span>
                    <span className="text-emerald-600 font-bold text-sm tracking-tight">Save 25% Today</span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <FeatureItem icon={<ShieldCheck size={28} />} label="Genuine" subLabel="Certified Source" color="text-emerald-500" />
                <FeatureItem icon={<RefreshCcw size={28} />} label="Returns" subLabel="7 Day Window" color="text-blue-500" />
                <FeatureItem icon={<Truck size={28} />} label="Shipping" subLabel="Fast Delivery" color="text-teal-500" />
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-xl text-gray-900 mb-4">About Product</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Dolo 650 Tablet is a widely trusted medication used to relieve mild to moderate pain including headache, migraine, toothache, and musculoskeletal pain. It is also highly effective in reducing fever.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto border-t border-gray-50 pt-10">
                <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-1 w-full sm:w-40 h-16">
                  <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-black text-gray-900">1</span>
                  <button className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary hover:bg-gray-50 transition-all border border-gray-100">
                    <Plus size={20} />
                  </button>
                </div>
                
                <button className="flex-1 w-full bg-primary text-white h-16 rounded-2xl font-black text-xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  <ShoppingCart size={24} />
                  Add to Cart | ₹45.00
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, label, subLabel, color }: { icon: React.ReactNode, label: string, subLabel: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center group">
      <div className={`${color} bg-gray-50 w-16 h-16 rounded-[20px] flex items-center justify-center mb-1 group-hover:bg-white group-hover:shadow-lg transition-all border border-transparent group-hover:border-gray-50`}>
        {icon}
      </div>
      <div className="text-sm font-bold text-gray-900 leading-tight">{label}</div>
      <div className="text-xs text-gray-400 font-medium leading-tight">{subLabel}</div>
    </div>
  );
}
