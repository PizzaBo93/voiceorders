
import { Store } from './types';

export const STORES: Store[] = [
  { code: 'NH', name: 'Nguyễn Huệ' },
  { code: 'DH', name: 'Diên Hồng' },
  { code: 'HXH', name: 'Hồ Xuân Hương' },
  { code: 'PY', name: 'Phú Yên' },
];

export const MENU_ITEMS = [
  // Pizza
  { id: "p1", category: "Pizza", name: "Bò (Size S)", price: 39000 },
  { id: "p2", category: "Pizza", name: "Phô mai (Size S)", price: 39000 },
  { id: "p3", category: "Pizza", name: "Gà teriyaki (Size S)", price: 39000 },
  { id: "p4", category: "Pizza", name: "Xúc xích heo (Size S)", price: 39000 },
  { id: "p5", category: "Pizza", name: "Cá ngừ (Size S)", price: 39000 },
  { id: "p6", category: "Pizza", name: "Ba rọi xông khói (Size S)", price: 39000 },
  { id: "p7", category: "Pizza", name: "Bò (Size L)", price: 89000 },
  { id: "p8", category: "Pizza", name: "Phô mai (Size L)", price: 89000 },
  { id: "p9", category: "Pizza", name: "Gà teriyaki (Size L)", price: 89000 },
  { id: "p10", category: "Pizza", name: "Hải sản (Size L)", price: 89000 },
  { id: "p11", category: "Pizza", name: "Xúc xích heo (Size L)", price: 89000 },
  { id: "p12", category: "Pizza", name: "Pizza nấm rau củ (Size L)", price: 89000 },
  { id: "p13", category: "Pizza", name: "Xúc xích Đức (Size L)", price: 89000 },
  { id: "p14", category: "Pizza", name: "Cá ngừ (Size L)", price: 89000 },
  { id: "p15", category: "Pizza", name: "Ba rọi xông khói (Size L)", price: 89000 },
  { id: "p21", category: "Pizza", name: "Thập Cẩm (Size L)", price: 109000 },
  
  // Combo
  { id: "c1", category: "Combo", name: "Combo 1 (Pizza S + Nước + Món nhẹ)", price: 79000 },
  { id: "c2", category: "Combo", name: "Combo 2 (Pizza L + Nước + Món nhẹ)", price: 129000 },
  { id: "c3", category: "Combo", name: "Combo 3 (2 Pizza L + Nước lớn)", price: 199000 },
  { id: "c4", category: "Combo", name: "Combo Gia Đình", price: 299000 },

  // Nước
  { id: "d1", category: "Nước", name: "Nước ngọt (ly)", price: 9000 },
  { id: "d2", category: "Nước", name: "Nước ngọt (lon)", price: 15000 },
  { id: "d3", category: "Nước", name: "Nước suối", price: 9000 },
  { id: "d6", category: "Nước", name: "Trà Chanh", price: 15000 },
  { id: "d7", category: "Nước", name: "Trà Đào", price: 20000 },
  { id: "d8", category: "Nước", name: "Trà sữa Thái", price: 20000 },
  { id: "d9", category: "Nước", name: "Đá Me", price: 15000 },
  { id: "d10", category: "Nước", name: "Local Beer", price: 20000 },

  // Món nhẹ
  { id: "s1", category: "Món Ăn Nhẹ", name: "Gà Sốt Cay", price: 29000 },
  { id: "s11", category: "Món Ăn Nhẹ", name: "Mì Ý sốt bò bằm", price: 39000 },
  { id: "s12", category: "Món Ăn Nhẹ", name: "Salad Cá Ngừ", price: 39000 },
  { id: "s13", category: "Món Ăn Nhẹ", name: "Salad dầu giấm", price: 29000 },
  { id: "s2", category: "Món Ăn Nhẹ", name: "Khoai tây chiên (nhỏ)", price: 15000 },
  { id: "s3", category: "Món Ăn Nhẹ", name: "Khoai tây chiên (lớn)", price: 25000 },
  { id: "s4", category: "Món Ăn Nhẹ", name: "Bắp phô mai", price: 29000 },
  { id: "s5", category: "Món Ăn Nhẹ", name: "Bánh mì bơ tỏi", price: 25000 },

  // Add-ons
  { id: "a1", category: "Add - on", name: "Phô mai thêm S", price: 10000 },
  { id: "a2", category: "Add - on", name: "Phô mai thêm L", price: 20000 },
  { id: "a3", category: "Add - on", name: "Bò thêm", price: 15000 },
  { id: "a10", category: "Add - on", name: "Nấm thêm", price: 10000 }
];
