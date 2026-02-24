export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export const menuData: MenuItem[] = [
  // NASI
  { id: 'n1', name: 'Nasi Uduk', price: 9546, category: '🍚 NASI' },
  { id: 'n2', name: 'Nasi Biasa', price: 9091, category: '🍚 NASI' },
  
  // LAUK BEBEK (1/2 Ekor)
  { id: 'b1', name: 'Bebek Muda Madura', price: 39910, category: '🦆 LAUK BEBEK (1/2 Ekor)' },
  { id: 'b2', name: 'Bebek Muda Goreng Kremes', price: 39910, category: '🦆 LAUK BEBEK (1/2 Ekor)' },
  { id: 'b3', name: 'Bebek Muda Bakar', price: 39910, category: '🦆 LAUK BEBEK (1/2 Ekor)' },
  { id: 'b4', name: 'Bebek Penyetan', price: 39910, category: '🦆 LAUK BEBEK (1/2 Ekor)' },
  
  // LAUK AYAM KAMPUNG (1/2 Ekor)
  { id: 'a1', name: 'Ayam Kampung Goreng Kremes', price: 39546, category: '🍗 LAUK AYAM KAMPUNG (1/2 Ekor)' },
  { id: 'a2', name: 'Ayam Kampung Bakar', price: 39546, category: '🍗 LAUK AYAM KAMPUNG (1/2 Ekor)' },
  
  // MINUMAN
  { id: 'm1', name: 'Fanta', price: 9546, category: '🍹 MINUMAN' },
  { id: 'm2', name: 'Air Mineral', price: 9091, category: '🍹 MINUMAN' },
  { id: 'm3', name: 'Es Teh Manis', price: 9091, category: '🍹 MINUMAN' },
  { id: 'm4', name: 'Teh Manis Hangat', price: 8182, category: '🍹 MINUMAN' }
];

