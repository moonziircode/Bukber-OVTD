import { useState, useEffect, FormEvent } from 'react';
import { menuData } from '../data/menu';
import { Lock, Trash2, Download, UserMinus, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdminRecap() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Gagal mengambil data pesanan. Coba refresh halaman.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'pesbukovtd') {
      setIsAuthenticated(true);
    } else {
      alert('Password salah woy! 🦆 Coba inget-inget lagi.');
    }
  };

  const clearData = async () => {
    if (confirm('Yakin mau hapus semua data pesanan? Data yang udah dihapus nggak bisa balik lagi lho!')) {
      setIsLoading(true);
      try {
        const { error } = await supabase
          .from('orders')
          .delete()
          .neq('id', 0); // Hack to delete all rows if RLS allows it
          
        if (error) {
          // If bulk delete fails (often due to RLS or Supabase settings), show a message
          alert('Penghapusan massal gagal. Silakan hapus data melalui dashboard Supabase Anda.');
          throw error;
        }
        
        setOrders([]);
        alert('Semua data berhasil dihapus!');
      } catch (error) {
        console.error('Error clearing data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const deleteOrder = async (id: string, name: string) => {
    if (confirm(`Yakin mau hapus pesanan atas nama ${name}?`)) {
      try {
        const { error } = await supabase
          .from('orders')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        
        setOrders(orders.filter(order => order.id !== id));
      } catch (error) {
        console.error('Error deleting order:', error);
        alert('Gagal menghapus pesanan. Coba lagi ya.');
      }
    }
  };

  const copyToClipboard = () => {
    if (orders.length === 0) {
      alert('Belum ada data untuk dicopy!');
      return;
    }

    let text = `*REKAP PESANAN BUKBER KALEYO*\n`;
    text += `Total Peserta: ${orders.length} orang\n`;
    text += `--------------------------------\n\n`;

    orders.forEach((order, index) => {
      text += `${index + 1}. *${order.name}*\n`;
      Object.entries(order.items).forEach(([id, qty]) => {
        const item = menuData.find(m => m.id === id);
        if (item) {
          text += `   - ${qty}x ${item.name}\n`;
        }
      });
      text += `   💰 Total: Rp ${order.total.toLocaleString('id-ID')}\n\n`;
    });

    text += `--------------------------------\n`;
    text += `*GRAND TOTAL: Rp ${grandTotal.toLocaleString('id-ID')}*\n`;

    navigator.clipboard.writeText(text).then(() => {
      alert('Rekap berhasil dicopy! Tinggal paste di WhatsApp. 🚀');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Gagal copy rekap. Coba lagi ya.');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 text-center relative overflow-hidden">
        <div className="absolute -right-8 -top-8 text-amber-50 opacity-50 rotate-12">
          <Lock className="w-48 h-48" />
        </div>
        <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 relative z-10 rotate-3">
          <Lock className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-3 relative z-10 tracking-tight">Area Admin</h2>
        <p className="text-slate-500 mb-10 relative z-10 text-lg">Masukkan password rahasia panitia.</p>
        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Ketik password di sini..."
            className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none text-center text-lg font-medium transition-all placeholder:text-slate-400"
          />
          <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-black shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-0.5">
            Masuk
          </button>
        </form>
      </div>
    );
  }

  const grandTotal = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Rekap Pesanan</h2>
          <p className="text-slate-500 text-lg mt-1">Total ada <strong className="text-amber-600">{orders.length}</strong> orang yang ikutan.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={copyToClipboard} 
            className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-slate-900 rounded-xl hover:bg-black transition-colors font-bold shadow-md shadow-slate-900/20"
          >
            <Download className="w-5 h-5" />
            Copy Rekap
          </button>
          <button 
            onClick={clearData} 
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-6 py-3 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors font-bold disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b-2 border-slate-100 text-xs">
              <tr>
                <th className="px-8 py-5">Nama Pemesan</th>
                <th className="px-8 py-5">Detail Pesanan</th>
                <th className="px-8 py-5 text-right">Total Bayar</th>
                <th className="px-8 py-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading && orders.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-16 text-center text-slate-500 text-lg">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-amber-500" />
                    Mengambil data pesanan...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-16 text-center text-slate-500 text-lg">Belum ada pesanan masuk nih. Sepi amat. 🦆</td>
                </tr>
              ) : (
                orders.map(order => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 font-bold text-slate-800 align-top text-lg">{order.name}</td>
                    <td className="px-8 py-6 align-top">
                      <ul className="space-y-2">
                        {Object.entries(order.items).map(([id, qty]) => {
                          const item = menuData.find(m => m.id === id);
                          return item ? (
                            <li key={id} className="text-slate-600 flex items-start gap-3">
                              <span className="font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md text-xs mt-0.5">{qty}x</span>
                              <span className="font-medium">{item.name}</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </td>
                    <td className="px-8 py-6 text-right align-top">
                      <div className="font-black text-slate-800 text-lg">
                        Rp {order.total.toLocaleString('id-ID')}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-1">
                        Inc. Tax (10%)
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center align-top">
                      <button
                        onClick={() => deleteOrder(order.id, order.name)}
                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus Pesanan"
                      >
                        <UserMinus className="w-5 h-5 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            {orders.length > 0 && (
              <tfoot className="bg-amber-50 border-t-2 border-amber-100">
                <tr>
                  <td colSpan={2} className="px-8 py-6 font-black text-amber-900 text-right text-lg uppercase tracking-wider">Grand Total:</td>
                  <td className="px-8 py-6 text-right font-black text-amber-600 text-2xl tracking-tight">
                    Rp {grandTotal.toLocaleString('id-ID')}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
