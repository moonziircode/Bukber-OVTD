import { useState, useMemo, FormEvent } from 'react';
import { menuData } from '../data/menu';
import { Utensils, ShoppingBag, CheckCircle2, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function OrderForm() {
  const [name, setName] = useState('');
  const [order, setOrder] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  
  // Categories accordion state
  const categories = Array.from(new Set(menuData.map(m => m.category)));
  const [expandedCategory, setExpandedCategory] = useState<string | null>(categories[0]);

  const toggleCategory = (category: string) => {
    setExpandedCategory(prev => prev === category ? null : category);
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setOrder(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const subtotal = useMemo(() => {
    return Object.entries(order).reduce((sum, [id, qty]) => {
      const item = menuData.find(m => m.id === id);
      const itemPrice = item ? Number(item.price) : 0;
      const itemQty = Number(qty);
      return sum + (itemPrice * itemQty);
    }, 0);
  }, [order]);

  const ppn = subtotal * 0.11; 
  const serviceCharge = subtotal * 0.03; 
  const total = subtotal + ppn + serviceCharge;

  // Ordered items details for the floating summary
  const orderedItems = useMemo(() => {
    return Object.entries(order).map(([id, qty]) => {
      const item = menuData.find(m => m.id === id);
      return { item, qty };
    }).filter(o => o.item);
  }, [order]);

  const [showSummaryDetails, setShowSummaryDetails] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Tolong isi nama dulu ya kak! 🦆');
      return;
    }
    if (Object.keys(order).length === 0) {
      alert('Pilih minimal satu menu dong, masa cuma numpang duduk? 😅');
      return;
    }

    const newOrder = {
      id: Date.now().toString(),
      name,
      items: order,
      subtotal,
      ppn,
      serviceCharge,
      total,
      timestamp: new Date().toISOString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('bukber_orders') || '[]');
    localStorage.setItem('bukber_orders', JSON.stringify([...existingOrders, newOrder]));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4">
        <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-4 drop-shadow-sm" />
        <h2 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">Pesanan Tercatat! 🎉</h2>
        <p className="text-slate-600 mb-6 text-base">Terima kasih <strong className="text-amber-600">{name}</strong>, pesanan kamu udah aman. Tinggal siapin perut aja buat hari H!</p>
        <button 
          onClick={() => { setSubmitted(false); setName(''); setOrder({}); setShowSummaryDetails(false); }} 
          className="w-full py-3 bg-amber-500 text-white rounded-xl font-bold text-base shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition-all"
        >
          Pesan Lagi (Buat Temen)
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <label htmlFor="name" className="block text-base font-bold text-slate-800 mb-2 text-right" dir="rtl">مااسمك؟</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder=""
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all text-base font-medium text-slate-800 placeholder:text-slate-400 text-right"
            dir="rtl"
          />
        </div>

        {/* Menu Selection */}
        <div className="space-y-4">
          {categories.map(category => {
            const isExpanded = expandedCategory === category;
            const categoryItems = menuData.filter(m => m.category === category);
            // Count items ordered in this category
            const categoryOrderCount = categoryItems.reduce((sum, item) => sum + (order[item.id] || 0), 0);

            return (
              <div key={category} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-slate-800">{category}</h3>
                    {categoryOrderCount > 0 && (
                      <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">
                        {categoryOrderCount}
                      </span>
                    )}
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-50">
                    {categoryItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between gap-3 group">
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-700 text-sm truncate">{item.name}</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Rp {item.price.toLocaleString('id-ID')}</div>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-50 rounded-full p-1 border border-slate-100 shrink-0">
                          <button 
                            type="button" 
                            onClick={() => handleQuantityChange(item.id, -1)} 
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-600 shadow-sm hover:bg-slate-100 hover:text-red-500 transition-colors disabled:opacity-40 disabled:hover:text-slate-600" 
                            disabled={!order[item.id]}
                          >
                            <span className="text-lg leading-none -mt-0.5">-</span>
                          </button>
                          <span className="w-6 text-center font-bold text-slate-800 text-sm">{order[item.id] || 0}</span>
                          <button 
                            type="button" 
                            onClick={() => handleQuantityChange(item.id, 1)} 
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white shadow-sm hover:bg-amber-600 transition-colors"
                          >
                            <span className="text-lg leading-none -mt-0.5">+</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Summary */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-50 flex justify-center">
          <div className="w-full max-w-md p-4">
            {showSummaryDetails && orderedItems.length > 0 && (
              <div className="mb-4 max-h-40 overflow-y-auto bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm">
                <div className="font-bold text-slate-700 mb-2 text-xs uppercase tracking-wider">Pesanan Kamu:</div>
                <ul className="space-y-1.5">
                  {orderedItems.map(({ item, qty }) => (
                    <li key={item!.id} className="flex justify-between text-slate-600">
                      <span className="truncate pr-2"><span className="font-bold text-amber-600">{qty}x</span> {item!.name}</span>
                      <span className="font-medium shrink-0">Rp {(item!.price * qty).toLocaleString('id-ID')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex items-end justify-between mb-3" onClick={() => setShowSummaryDetails(!showSummaryDetails)}>
              <div className="text-xs text-slate-500 font-medium space-y-0.5 cursor-pointer flex-1">
                <div className="flex items-center gap-1 text-amber-600 font-bold mb-1">
                  {showSummaryDetails ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  {showSummaryDetails ? 'Tutup Detail' : 'Lihat Detail Pesanan'}
                </div>
                <div className="flex justify-between gap-2 pr-4"><span>Subtotal:</span> <span className="text-slate-700">Rp {subtotal.toLocaleString('id-ID')}</span></div>
                <div className="flex justify-between gap-2 pr-4"><span>Tax & Svc:</span> <span className="text-slate-700">Rp {(ppn + serviceCharge).toLocaleString('id-ID')}</span></div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-0.5">Total Bayar</div>
                <div className="text-xl font-black text-amber-600 tracking-tight">Rp {total.toLocaleString('id-ID')}</div>
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-base shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Kirim Pesanan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
