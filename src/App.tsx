/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import OrderForm from './components/OrderForm';
import AdminRecap from './components/AdminRecap';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'form' | 'admin'>('form');

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 flex justify-center">
      <div className="w-full max-w-md bg-[#FAFAFA] min-h-screen shadow-2xl relative flex flex-col">
        <nav className="p-4 flex flex-col items-center justify-between gap-4 border-b border-slate-200 bg-white sticky top-0 z-40">
          <div className="flex items-center justify-center font-black text-2xl tracking-tighter cursor-default select-none">
            <span className="text-red-500 -rotate-6 scale-110 inline-block hover:rotate-12 transition-transform">P</span>
            <span className="text-blue-500 rotate-3 translate-y-1 inline-block hover:-translate-y-2 transition-transform">E</span>
            <span className="text-green-500 -rotate-12 inline-block hover:scale-125 transition-transform">S</span>
            <span className="text-purple-500 rotate-12 -translate-y-1 inline-block hover:rotate-0 transition-transform">T</span>
            <span className="text-amber-500 -rotate-3 scale-125 inline-block hover:scale-90 transition-transform">A</span>
            <span className="w-2"></span>
            <span className="text-pink-500 rotate-6 translate-y-1 inline-block hover:-rotate-12 transition-transform">B</span>
            <span className="text-cyan-500 -rotate-12 inline-block hover:translate-y-2 transition-transform">U</span>
            <span className="text-indigo-500 rotate-12 scale-110 inline-block hover:scale-125 transition-transform">K</span>
            <span className="text-lime-500 -rotate-6 -translate-y-1 inline-block hover:rotate-6 transition-transform">B</span>
            <span className="text-orange-500 rotate-12 inline-block hover:-rotate-6 transition-transform">E</span>
            <span className="text-teal-500 -rotate-12 scale-125 inline-block hover:scale-100 transition-transform">E</span>
            <span className="text-rose-500 rotate-6 translate-y-1 inline-block hover:-translate-y-1 transition-transform">R</span>
            <span className="text-fuchsia-500 -rotate-6 inline-block hover:rotate-12 transition-transform">R</span>
            <span className="text-yellow-500 rotate-12 scale-150 inline-block hover:scale-110 transition-transform">R</span>
            <span className="text-red-600 -rotate-12 translate-y-1 inline-block hover:rotate-0 transition-transform">!</span>
            <span className="text-blue-600 rotate-12 inline-block hover:-rotate-12 transition-transform">!</span>
            <span className="text-green-600 -rotate-6 scale-125 inline-block hover:scale-150 transition-transform">!</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl shadow-inner border border-slate-200 w-full">
            <button 
              onClick={() => setView('form')} 
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${view === 'form' ? 'bg-white text-slate-900 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Form Pesanan
            </button>
            <button 
              onClick={() => setView('admin')} 
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${view === 'admin' ? 'bg-white text-slate-900 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <ShieldCheck className="w-4 h-4" />
              Admin
            </button>
          </div>
        </nav>
        <main className="flex-1 p-4 pb-48 overflow-y-auto">
          {view === 'form' ? <OrderForm /> : <AdminRecap />}
        </main>
      </div>
    </div>
  );
}

