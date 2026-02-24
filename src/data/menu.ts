export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export const menuData: MenuItem[] = [
  // Nasi & Paket
  { id: 'n1', name: 'Nasi Bebek Madura', price: 32728, category: '🍚 Nasi & Paket' },
  { id: 'n2', name: 'Nasi Bebek Goreng Hemat', price: 32728, category: '🍚 Nasi & Paket' },
  { id: 'n3', name: 'Nasi Ayam Negeri', price: 26819, category: '🍚 Nasi & Paket' },
  { id: 'n4', name: 'Nasi Uduk', price: 9546, category: '🍚 Nasi & Paket' },
  { id: 'n5', name: 'Nasi Merah', price: 10910, category: '🍚 Nasi & Paket' },
  
  // Lauk Bebek
  { id: 'b1', name: 'Bebek Utuh Goreng (Mini)', price: 61819, category: '🦆 Lauk Bebek' },
  { id: 'b2', name: 'Bebek Utuh Goreng (Sedang)', price: 109091, category: '🦆 Lauk Bebek' },
  { id: 'b3', name: 'Bebek Utuh Goreng (Besar)', price: 149091, category: '🦆 Lauk Bebek' },
  { id: 'b4', name: 'Bebek Potongan', price: 27275, category: '🦆 Lauk Bebek' },
  { id: 'b5', name: 'Bebek Madura Paha/Dada', price: 38637, category: '🦆 Lauk Bebek' },
  { id: 'b6', name: 'Bebek Madura (Bebek Muda)', price: 39910, category: '🦆 Lauk Bebek' },
  { id: 'b7', name: 'Bebek Cabe Ijo Paha/Dada', price: 38637, category: '🦆 Lauk Bebek' },
  { id: 'b8', name: 'Bebek Cabe Ijo (Bebek Muda)', price: 39910, category: '🦆 Lauk Bebek' },
  { id: 'b9', name: 'Bebek Rica Paha/Dada', price: 38637, category: '🦆 Lauk Bebek' },
  { id: 'b10', name: 'Bebek Tanpa Kulit Goreng Kremes (Paha/Dada)', price: 41364, category: '🦆 Lauk Bebek' },
  { id: 'b11', name: 'Bebek Tanpa Kulit Cabe Ijo (Paha/Dada)', price: 41364, category: '🦆 Lauk Bebek' },
  { id: 'b12', name: 'Sate Bebek (1 Porsi / 4 tusuk)', price: 42275, category: '🦆 Lauk Bebek' },
  { id: 'b13', name: 'Bebek Remuk', price: 30910, category: '🦆 Lauk Bebek' },
  
  // Lauk Ayam & Puyuh
  { id: 'a1', name: 'Ayam Kampung Goreng Kremes (Paha/Dada)', price: 31364, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a2', name: 'Ayam Kampung Goreng Kremes (1/2 Ekor)', price: 39546, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a3', name: 'Ayam Kampung Cabe Ijo (Paha/Dada)', price: 31819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a4', name: 'Ayam Kampung Cabe Ijo (1/2 Ekor)', price: 39546, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a5', name: 'Ayam Kampung Bakar (Paha/Dada)', price: 31819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a6', name: 'Ayam Kampung Bakar (1/2 Ekor)', price: 39546, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a7', name: 'Ayam Kampung Sori (Sambal Rica) (Paha/Dada)', price: 31819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a8', name: 'Ayam Kampung Sori (Sambal Rica) (1/2 Ekor)', price: 39546, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a9', name: 'Ayam Kampung Ala Madura (Paha/Dada)', price: 31819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a10', name: 'Ayam Kampung Ala Madura (1/2 Ekor)', price: 39546, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a11', name: 'Ayam Negeri Goreng Kremes', price: 21819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a12', name: 'Ayam Negeri Cabe Ijo', price: 21819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a13', name: 'Ayam Negeri Bakar', price: 21819, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a14', name: 'Ayam Negeri Ala Madura', price: 23637, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'a15', name: 'Ayam Negeri Sori (Sambal Rica)', price: 25637, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'p1', name: 'Puyuh Goreng Kremes', price: 36364, category: '🐔 Lauk Ayam & Puyuh' },
  { id: 'p2', name: 'Puyuh Penyet', price: 36364, category: '🐔 Lauk Ayam & Puyuh' },
  
  // Sayur & Tambahan
  { id: 's1', name: 'Sayur Lodeh', price: 11819, category: '🍲 Sayur & Tambahan' },
  { id: 's2', name: 'Sayur Asem', price: 10910, category: '🍲 Sayur & Tambahan' },
  { id: 's3', name: 'Tumis Jamur', price: 10000, category: '🍲 Sayur & Tambahan' },
  { id: 's4', name: 'Tempe / Tahu Goreng', price: 4091, category: '🍲 Sayur & Tambahan' },
  { id: 's5', name: 'Ati Ampela', price: 11364, category: '🍲 Sayur & Tambahan' },
  { id: 's6', name: 'Pete Rebus 1/2 lenjer', price: 10485, category: '🍲 Sayur & Tambahan' },
  { id: 's7', name: 'Sambal Mangga', price: 7000, category: '🍲 Sayur & Tambahan' },
  
  // Camilan & Dessert
  { id: 'c1', name: 'Dimsum (Somay)', price: 22788, category: '🥟 Camilan & Dessert' },
  { id: 'c2', name: 'Singkong Goreng', price: 20000, category: '🥟 Camilan & Dessert' },
  { id: 'c3', name: 'Cireng', price: 20000, category: '🥟 Camilan & Dessert' },
  { id: 'c4', name: 'Durian Top Medan', price: 35000, category: '🥟 Camilan & Dessert' },
  
  // Minuman
  { id: 'm1', name: 'Air Mineral Prima 600ml', price: 9091, category: '🥤 Minuman' },
  { id: 'm2', name: 'Hot Americano / Iced Americano', price: 18182, category: '🥤 Minuman' },
  { id: 'm3', name: 'Kopi Hitam', price: 15637, category: '🥤 Minuman' },
  { id: 'm4', name: 'Kopi Cappuccino', price: 13637, category: '🥤 Minuman' },
  { id: 'm5', name: 'Air Jeruk Murni', price: 24546, category: '🥤 Minuman' },
  { id: 'm6', name: 'Es Jeruk / Jeruk Hangat', price: 20455, category: '🥤 Minuman' },
  { id: 'm7', name: 'Es Lemon Tea / Lemon Tea Hangat', price: 18182, category: '🥤 Minuman' },
  { id: 'm8', name: 'Es Teh Manis', price: 9091, category: '🥤 Minuman' },
  { id: 'm9', name: 'Teh Manis Hangat', price: 8188, category: '🥤 Minuman' },
  { id: 'm10', name: 'Es Teh Tawar', price: 7273, category: '🥤 Minuman' },
  { id: 'm11', name: 'Teh Tawar Hangat', price: 6819, category: '🥤 Minuman' },
  { id: 'm12', name: 'Teh Poci', price: 25000, category: '🥤 Minuman' },
  { id: 'm13', name: 'Teh Botol', price: 10455, category: '🥤 Minuman' },
  { id: 'm14', name: 'Es Milo', price: 14546, category: '🥤 Minuman' },
  { id: 'm15', name: 'Iced Thai Tea', price: 20910, category: '🥤 Minuman' },
  { id: 'm16', name: 'Es Susu Fanta', price: 18182, category: '🥤 Minuman' },
  { id: 'm17', name: 'Fanta Botol', price: 9846, category: '🥤 Minuman' },
  { id: 'm18', name: 'Wedang Jahe', price: 11819, category: '🥤 Minuman' },
  { id: 'm19', name: 'Es Teler / Es Campur', price: 21364, category: '🥤 Minuman' },
  { id: 'm20', name: 'Es Kelapa Jeruk', price: 20455, category: '🥤 Minuman' },
  { id: 'm21', name: 'Es Kelapa Batok', price: 27275, category: '🥤 Minuman' },
  { id: 'm22', name: 'Es Kelapa Gelas', price: 17728, category: '🥤 Minuman' },
  { id: 'm23', name: 'Es Cendol Dawet', price: 20455, category: '🥤 Minuman' },
  { id: 'm24', name: 'Es Timun Selasih', price: 18182, category: '🥤 Minuman' },
  { id: 'm25', name: 'Jus Alpukat', price: 20455, category: '🥤 Minuman' },
  { id: 'm26', name: 'Jus Jeruk', price: 20455, category: '🥤 Minuman' },
  { id: 'm27', name: 'Jus Jambu', price: 19091, category: '🥤 Minuman' }
];
