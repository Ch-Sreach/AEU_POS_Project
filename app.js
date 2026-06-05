const STORAGE_KEY = 'phocapos_db';

const PRODUCT_IMGS = {
  1: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
  2: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop',
  3: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
  4: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop',
  5: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=400&fit=crop',
  6: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=400&h=400&fit=crop',
  7: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
  8: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=400&h=400&fit=crop',
  9: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop',
  10: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
  11: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop',
  12: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop',
  13: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
  14: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop',
  15: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=400&fit=crop',
  16: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=400&fit=crop',
  17: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=400&fit=crop',
  18: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=400&fit=crop',
  19: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=400&h=400&fit=crop',
  20: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400&h=400&fit=crop',
  21: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop',
  22: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop',
  23: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400&h=400&fit=crop',
  24: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400&h=400&fit=crop',
  25: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop',
  26: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop',
  27: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop',
  28: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop',
  29: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop',
  30: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&h=400&fit=crop',
  31: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  32: 'https://images.unsplash.com/photo-1543648964-1daa32a6c71a?w=400&h=400&fit=crop',
  33: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  34: 'https://images.unsplash.com/photo-1543648964-1daa32a6c71a?w=400&h=400&fit=crop',
  35: 'https://images.unsplash.com/photo-1543648964-1daa32a6c71a?w=400&h=400&fit=crop',
  36: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  37: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  38: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  39: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  40: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
  41: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  42: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  43: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  44: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=400&h=400&fit=crop',
  45: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=400&h=400&fit=crop',
  46: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  47: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  48: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  49: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  50: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  51: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  52: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
  53: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  54: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  55: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  56: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  57: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  58: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  59: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
  60: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop'
};

function buildImg(id) {
  return `https://picsum.photos/seed/${id}/400/400`;
}

// Theme management
function initTheme(){
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton();
}

function toggleTheme(){
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton();
}

function updateThemeButton(){
  const btn = document.getElementById('theme-toggle');
  const theme = document.documentElement.getAttribute('data-theme');
  if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const SEED_DB = {
  categories: [
    {id:1,name:'Iced Coffee',icon:'🧊',desc:'Refreshing cold brewed and iced coffee drinks'},
    {id:2,name:'Hot Coffee',icon:'☕',desc:'Freshly brewed espresso and hot coffee classics'},
    {id:3,name:'Tea & Matcha',icon:'🍵',desc:'Premium teas and ceremonial grade matcha'},
    {id:4,name:'Smoothies',icon:'🥤',desc:'Fresh fruit and creamy blended smoothies'},
    {id:5,name:'Bakery',icon:'🥐',desc:'Freshly baked croissants and muffins'},
    {id:6,name:'Cakes & Desserts',icon:'🍰',desc:'Indulgent cakes and sweet treats'}
  ],

  products: [
    {id:1,name:'Caramel Iced Latte',cat:1,price:4.50,stock:50,cost:1.50,sku:'IC-001',status:'active'},
    {id:2,name:'Iced Americano',cat:1,price:3.50,stock:60,cost:1.00,sku:'IC-002',status:'active'},
    {id:3,name:'Cold Brew Coffee',cat:1,price:4.00,stock:40,cost:1.20,sku:'IC-003',status:'active'},
    {id:4,name:'Vanilla Iced Latte',cat:1,price:4.75,stock:45,cost:1.60,sku:'IC-004',status:'active'},
    {id:5,name:'Hazelnut Iced Latte',cat:1,price:4.75,stock:35,cost:1.60,sku:'IC-005',status:'active'},
    {id:6,name:'Iced Mocha',cat:1,price:5.00,stock:30,cost:1.80,sku:'IC-006',status:'active'},
    {id:7,name:'Brown Sugar Latte',cat:1,price:4.50,stock:50,cost:1.50,sku:'IC-007',status:'active'},
    {id:8,name:'Coconut Iced Coffee',cat:1,price:5.25,stock:25,cost:1.90,sku:'IC-008',status:'active'},
    {id:9,name:'Iced Caramel Macchiato',cat:1,price:5.00,stock:40,cost:1.70,sku:'IC-009',status:'active'},
    {id:10,name:'Vietnamese Iced Coffee',cat:1,price:4.75,stock:35,cost:1.60,sku:'IC-010',status:'active'},
    {id:11,name:'Espresso Shot',cat:2,price:2.50,stock:100,cost:0.70,sku:'HC-001',status:'active'},
    {id:12,name:'Double Espresso',cat:2,price:3.50,stock:80,cost:0.95,sku:'HC-002',status:'active'},
    {id:13,name:'Americano',cat:2,price:3.00,stock:90,cost:0.80,sku:'HC-003',status:'active'},
    {id:14,name:'Cappuccino',cat:2,price:3.75,stock:70,cost:1.20,sku:'HC-004',status:'active'},
    {id:15,name:'Flat White',cat:2,price:4.00,stock:65,cost:1.30,sku:'HC-005',status:'active'},
    {id:16,name:'Cafe Latte',cat:2,price:4.00,stock:75,cost:1.30,sku:'HC-006',status:'active'},
    {id:17,name:'Vanilla Latte',cat:2,price:4.50,stock:60,cost:1.50,sku:'HC-007',status:'active'},
    {id:18,name:'Caramel Latte',cat:2,price:4.50,stock:60,cost:1.50,sku:'HC-008',status:'active'},
    {id:19,name:'Mocha',cat:2,price:4.75,stock:55,cost:1.70,sku:'HC-009',status:'active'},
    {id:20,name:'Macchiato',cat:2,price:3.75,stock:70,cost:1.20,sku:'HC-010',status:'active'},
    {id:21,name:'Matcha Latte',cat:3,price:4.25,stock:45,cost:1.40,sku:'TM-001',status:'active'},
    {id:22,name:'Iced Matcha Latte',cat:3,price:4.75,stock:40,cost:1.60,sku:'TM-002',status:'active'},
    {id:23,name:'Thai Milk Tea',cat:3,price:3.75,stock:55,cost:1.20,sku:'TM-003',status:'active'},
    {id:24,name:'Thai Iced Tea',cat:3,price:4.00,stock:50,cost:1.30,sku:'TM-004',status:'active'},
    {id:25,name:'Green Tea Latte',cat:3,price:3.50,stock:60,cost:1.10,sku:'TM-005',status:'active'},
    {id:26,name:'Jasmine Tea',cat:3,price:2.75,stock:70,cost:0.85,sku:'TM-006',status:'active'},
    {id:27,name:'Peach Tea',cat:3,price:3.50,stock:50,cost:1.10,sku:'TM-007',status:'active'},
    {id:28,name:'Lemon Tea',cat:3,price:3.25,stock:65,cost:1.00,sku:'TM-008',status:'active'},
    {id:29,name:'Honey Green Tea',cat:3,price:3.75,stock:55,cost:1.20,sku:'TM-009',status:'active'},
    {id:30,name:'Brown Sugar Matcha',cat:3,price:5.00,stock:35,cost:1.80,sku:'TM-010',status:'active'},
    {id:31,name:'Mango Smoothie',cat:4,price:5.00,stock:30,cost:1.80,sku:'SM-001',status:'active'},
    {id:32,name:'Strawberry Smoothie',cat:4,price:5.00,stock:30,cost:1.80,sku:'SM-002',status:'active'},
    {id:33,name:'Banana Smoothie',cat:4,price:4.50,stock:40,cost:1.60,sku:'SM-003',status:'active'},
    {id:34,name:'Blueberry Smoothie',cat:4,price:5.50,stock:25,cost:2.00,sku:'SM-004',status:'active'},
    {id:35,name:'Mixed Berry Smoothie',cat:4,price:5.75,stock:20,cost:2.10,sku:'SM-005',status:'active'},
    {id:36,name:'Pineapple Smoothie',cat:4,price:4.75,stock:35,cost:1.70,sku:'SM-006',status:'active'},
    {id:37,name:'Dragon Fruit Smoothie',cat:4,price:5.75,stock:20,cost:2.10,sku:'SM-007',status:'active'},
    {id:38,name:'Watermelon Smoothie',cat:4,price:4.50,stock:45,cost:1.60,sku:'SM-008',status:'active'},
    {id:39,name:'Tropical Fruit Smoothie',cat:4,price:6.00,stock:15,cost:2.20,sku:'SM-009',status:'active'},
    {id:40,name:'Avocado Smoothie',cat:4,price:5.50,stock:25,cost:2.00,sku:'SM-010',status:'active'},
    {id:41,name:'Butter Croissant',cat:5,price:2.75,stock:30,cost:0.95,sku:'BK-001',status:'active'},
    {id:42,name:'Chocolate Croissant',cat:5,price:3.25,stock:25,cost:1.15,sku:'BK-002',status:'active'},
    {id:43,name:'Almond Croissant',cat:5,price:3.50,stock:20,cost:1.25,sku:'BK-003',status:'active'},
    {id:44,name:'Blueberry Muffin',cat:5,price:3.00,stock:35,cost:1.05,sku:'BK-004',status:'active'},
    {id:45,name:'Chocolate Muffin',cat:5,price:3.25,stock:30,cost:1.15,sku:'BK-005',status:'active'},
    {id:46,name:'Banana Bread',cat:5,price:2.50,stock:40,cost:0.85,sku:'BK-006',status:'active'},
    {id:47,name:'Cinnamon Roll',cat:5,price:3.75,stock:20,cost:1.35,sku:'BK-007',status:'active'},
    {id:48,name:'Danish Pastry',cat:5,price:3.50,stock:25,cost:1.25,sku:'BK-008',status:'active'},
    {id:49,name:'Apple Pie Slice',cat:5,price:3.75,stock:20,cost:1.35,sku:'BK-009',status:'active'},
    {id:50,name:'Sourdough Bread',cat:5,price:4.50,stock:15,cost:1.65,sku:'BK-010',status:'active'},
    {id:51,name:'New York Cheesecake',cat:6,price:5.50,stock:15,cost:2.00,sku:'CK-001',status:'active'},
    {id:52,name:'Chocolate Lava Cake',cat:6,price:6.00,stock:12,cost:2.20,sku:'CK-002',status:'active'},
    {id:53,name:'Red Velvet Cake',cat:6,price:5.75,stock:15,cost:2.10,sku:'CK-003',status:'active'},
    {id:54,name:'Tiramisu Cake',cat:6,price:6.25,stock:12,cost:2.30,sku:'CK-004',status:'active'},
    {id:55,name:'Carrot Cake',cat:6,price:5.00,stock:18,cost:1.80,sku:'CK-005',status:'active'},
    {id:56,name:'Matcha Cake',cat:6,price:5.75,stock:12,cost:2.10,sku:'CK-006',status:'active'},
    {id:57,name:'Coffee Cake',cat:6,price:5.50,stock:15,cost:2.00,sku:'CK-007',status:'active'},
    {id:58,name:'Blueberry Cheesecake',cat:6,price:6.00,stock:10,cost:2.20,sku:'CK-008',status:'active'},
    {id:59,name:'Oreo Cheesecake',cat:6,price:6.25,stock:10,cost:2.30,sku:'CK-009',status:'active'},
    {id:60,name:'Crème Brûlée',cat:6,price:5.00,stock:15,cost:1.80,sku:'CK-010',status:'active'}
  ],

  suppliers: [
    {id:1,name:'Premium Coffee Roasters',contact:'John Smith',email:'john@coffeebean.com',phone:'+1-555-0101',addr:'123 Coffee Lane, Seattle, WA',balance:2500},
    {id:2,name:'Fresh Dairy Supply Co',contact:'Maria Garcia',email:'maria@freshdairy.com',phone:'+1-555-0102',addr:'456 Milk Road, Portland, OR',balance:1800},
    {id:3,name:'Golden Syrup & Sauces',contact:'David Chen',email:'david@goldensyrup.com',phone:'+1-555-0103',addr:'789 Syrup Ave, San Francisco, CA',balance:950},
    {id:4,name:'Organic Fruit Market',contact:'Sarah Johnson',email:'sarah@organicfruit.com',phone:'+1-555-0104',addr:'321 Orchard St, Portland, OR',balance:1200},
    {id:5,name:'Artisan Bakery Supply',contact:'Michel Dupont',email:'michel@artisanbakery.com',phone:'+1-555-0105',addr:'654 Flour Blvd, Portland, OR',balance:1600},
    {id:6,name:'Premium Tea Imports',contact:'Li Wei',email:'li@premiumtea.com',phone:'+1-555-0106',addr:'987 Tea Lane, Portland, OR',balance:2200},
    {id:7,name:'Coffee Bean Asia',contact:'Anh Nguyen',email:'anh@coffeeasia.com',phone:'+1-555-0107',addr:'147 Bean St, Portland, OR',balance:3200},
    {id:8,name:'Gourmet Dessert Ingredients',contact:'Emma Wilson',email:'emma@gourmetdessert.com',phone:'+1-555-0108',addr:'258 Sweet Lane, Portland, OR',balance:1400}
  ],

  purchaseOrders: [
    {id:1,supId:1,prodId:11,qty:500,cost:0.70,status:'received',date:'2026-01-10'},
    {id:2,supId:2,prodId:16,qty:200,cost:1.30,status:'pending',date:'2026-01-15'},
    {id:3,supId:5,prodId:41,qty:100,cost:0.95,status:'received',date:'2026-01-12'}
  ],

  customers: [
    {id:1,name:'Alex Johnson',orders:22,spent:134.50,points:2690,email:'alex.j@email.com',phone:'+1-555-1001'},
    {id:2,name:'Maria Garcia',orders:9,spent:58.80,points:1176,email:'maria.g@email.com',phone:'+1-555-1002'},
    {id:3,name:'Sophie Chen',orders:37,spent:246.60,points:4932,email:'sophie.c@email.com',phone:'+1-555-1003'},
    {id:4,name:'David Wilson',orders:15,spent:92.50,points:1850,email:'david.w@email.com',phone:'+1-555-1004'},
    {id:5,name:'Emma Thompson',orders:28,spent:210.40,points:4208,email:'emma.t@email.com',phone:'+1-555-1005'}
  ],

  staff: [
    {id:1,name:'Sarah Kim',role:'Manager',email:'sarah.kim@cafe.com',phone:'+1-555-2001',status:'active'},
    {id:2,name:'James Miller',role:'Barista',email:'james.m@cafe.com',phone:'+1-555-2002',status:'active'},
    {id:3,name:'Lisa Wong',role:'Cashier',email:'lisa.w@cafe.com',phone:'+1-555-2003',status:'active'},
    {id:4,name:'Marcus Brown',role:'Barista',email:'marcus.b@cafe.com',phone:'+1-555-2004',status:'active'},
    {id:5,name:'Jennifer Lee',role:'Cashier',email:'jennifer.l@cafe.com',phone:'+1-555-2005',status:'active'}
  ],

  orders: [
    {id:2001,table:'T1',items:[],total:14.50,status:'paid',date:'2026-01-20'},
    {id:2002,table:'T3',items:[],total:22.00,status:'pending',date:'2026-01-20'},
    {id:2003,table:'Takeaway',items:[],total:8.80,status:'processing',date:'2026-01-20'}
  ],

  settings:{
    storeName:'Drip & Drizzle Café',
    currency:'USD ($)',
    tax:10,
    receipt:'Thank you for visiting Drip & Drizzle Café!'
  },

  nextIds:{
    cat:7,
    prod:61,
    sup:9,
    po:4,
    cust:6,
    disc:4,
    staff:6,
    order:2004
  }
};

SEED_DB.products.forEach(p => {
  if (!PRODUCT_IMGS[p.id]) PRODUCT_IMGS[p.id] = buildImg(p.id);
});

function loadDB(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  } catch(e){}
  return JSON.parse(JSON.stringify(SEED_DB));
}

function saveDB(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(DB)); } catch(e){}
}

function resetDB(){
  if(!confirm('Reset ALL data to factory defaults? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

let DB = loadDB();
let cartItems = [];
let filteredProds = [...DB.products];
let prodCurrentPage = 1;
const PROD_PER_PAGE = 12;

function go(page){
  document.querySelectorAll('.content').forEach(c=>c.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active'));
  document.getElementById('ni-'+page).classList.add('active');
  
  const titles = {
    'dashboard':'Dashboard <span>Overview</span>',
    'sell':'Point of Sale <span>Checkout</span>',
    'list-product':'Products <span>Inventory</span>',
    'add-product':'Add Product <span>New Item</span>',
    'category':'Categories <span>Management</span>',
    'supplier':'Suppliers <span>Vendors</span>',
    'purchase-order':'Purchase Orders <span>Procurement</span>',
    'report':'Sales Report <span>Analytics</span>',
    'customers':'Customers <span>Loyalty</span>',
    'inventory':'Inventory <span>Stock Management</span>',
    'discounts':'Discounts <span>Promotions</span>',
    'staff':'Staff <span>Team Management</span>',
    'settings':'Settings <span>Configuration</span>'
  };
  document.getElementById('hdr-title').innerHTML = titles[page] || 'Page';
  
  if(page === 'dashboard') renderDashboard();
  else if(page === 'sell') renderPOS();
  else if(page === 'list-product') renderProducts();
  else if(page === 'add-product') setupAddProductForm();
  else if(page === 'category') renderCategories();
  else if(page === 'supplier') renderSuppliers();
  else if(page === 'purchase-order') renderPOs();
  else if(page === 'report') renderReport();
  else if(page === 'customers') renderCustomers();
  else if(page === 'inventory') renderInventory();
  else if(page === 'discounts') renderDiscounts();
  else if(page === 'staff') renderStaff();
  else if(page === 'settings') renderSettings();
}

function renderDashboard(){
  const now = new Date();
  document.getElementById('dash-clock').textContent = now.toLocaleTimeString();
  
  document.getElementById('dash-orders').innerHTML = DB.orders.slice(0,5).map(o=>`
    <tr>
      <td class="mono">#${o.id}</td>
      <td>${o.table}</td>
      <td>${o.items.length} items</td>
      <td class="mono">$${o.total.toFixed(2)}</td>
      <td><span class="badge ${statusBadge(o.status)}">${cap(o.status)}</span></td>
    </tr>`).join('');
  
  document.getElementById('dash-low-stock').innerHTML = DB.products.filter(p=>p.stock<=5).slice(0,5).map(p=>{
    const cat = DB.categories.find(c=>c.id===p.cat);
    return `<tr>
      <td><div class="pcell"><div class="pthumb">${p.icon||'📦'}</div><div class="pname">${p.name}</div></div></td>
      <td class="mono">${p.stock}</td>
      <td><span class="badge bg-r">Low Stock</span></td>
    </tr>`;
  }).join('');
}

function renderPOS(){
  const catHtml = DB.categories.map(c=>`
    <button class="ctab" onclick="filterPOS('',${c.id})">${c.icon} ${c.name}</button>
  `).join('');
  document.getElementById('pos-cats').innerHTML = catHtml;
  
  filteredProds = [...DB.products];
  renderPOSGrid();
}

function filterPOS(search='', catId=0){
  filteredProds = DB.products.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = !catId || p.cat === catId;
    return matchSearch && matchCat && p.status === 'active';
  });
  renderPOSGrid();
}

function renderPOSGrid(){
  document.getElementById('pos-grid').innerHTML = filteredProds.map(p=>`
    <div class="pcard" onclick="addToCart(${p.id})">
      <div class="pico">${imgOrIcon(p.id, p.icon)}</div>
      <div class="pn">${p.name}</div>
      <div class="pp">$${p.price.toFixed(2)}</div>
      <div class="ps">${p.stock > 0 ? p.stock + ' in stock' : 'Out of Stock'}</div>
    </div>
  `).join('');
}

function imgOrIcon(prodId, icon){
  const img = PRODUCT_IMGS[prodId];
  if(img) return `<img src="${img}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'"/>`;
  return icon || '📦';
}

function addToCart(prodId){
  const prod = DB.products.find(p=>p.id===prodId);
  if(!prod || prod.stock <= 0) {showToast('Product out of stock','error'); return;}
  
  const existing = cartItems.find(c=>c.id===prodId);
  if(existing) existing.qty++;
  else cartItems.push({...prod, qty:1});
  
  renderCart();
}

function renderCart(){
  const html = cartItems.length === 0 
    ? `<div class="empty-cart"><span style="font-size:36px">🛒</span><span style="font-weight:700;">Cart is empty</span><span style="font-size:11px;color:var(--text3);">Click products to add</span></div>`
    : cartItems.map((item,idx)=>`
      <div class="ci">
        <div class="ci-name">${item.name}</div>
        <div class="qty-ctrl">
          <button class="qbtn" onclick="updateQty(${idx},-1)">−</button>
          <div class="qval">${item.qty}</div>
          <button class="qbtn" onclick="updateQty(${idx},1)">+</button>
          <button class="abtn del" style="margin-left:8px;" onclick="removeFromCart(${idx})">🗑</button>
        </div>
        <div class="ci-price" style="margin-left:auto;">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    `).join('');
  
  document.getElementById('cart-items').innerHTML = html;
  document.getElementById('cart-count').textContent = `(${cartItems.reduce((s,i)=>s+i.qty,0)} items)`;
  recalc();
}

function updateQty(idx, delta){
  cartItems[idx].qty = Math.max(1, cartItems[idx].qty + delta);
  renderCart();
}

function setQty(idx, val){
  const qty = parseInt(val) || 1;
  cartItems[idx].qty = Math.max(1, qty);
  renderCart();
}

function removeFromCart(idx){
  cartItems.splice(idx, 1);
  renderCart();
}

function clearCart(){
  if(!confirm('Clear cart?')) return;
  cartItems = [];
  renderCart();
}

function recalc(){
  const subtotal = cartItems.reduce((s,i)=>s + (i.price * i.qty), 0);
  const discPct = parseFloat(document.getElementById('disc-inp').value) || 0;
  const discount = subtotal * (discPct / 100);
  const afterDisc = subtotal - discount;
  const tax = afterDisc * 0.10;
  const total = afterDisc + tax;
  
  document.getElementById('cart-sub').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('cart-tax').textContent = '$' + tax.toFixed(2);
  document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
}

function openPayModal(){
  if(cartItems.length === 0) {showToast('Cart is empty','error'); return;}
  openModal('pay-modal');
}

function renderProducts(search=''){
  filteredProds = DB.products;
  if(search) filteredProds = filteredProds.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  
  const catId = parseInt(document.getElementById('prod-cat-filter')?.value) || 0;
  if(catId) filteredProds = filteredProds.filter(p=>p.cat===catId);
  
  prodCurrentPage = 1;
  renderProdPage();
}

function filterProducts(search=''){
  renderProducts(search || document.querySelector('#page-list-product .sinp')?.value || '');
}

function renderProdPage(){
  const start = (prodCurrentPage - 1) * PROD_PER_PAGE;
  const end = start + PROD_PER_PAGE;
  const pageProds = filteredProds.slice(start, end);
  
  document.getElementById('prod-tbody').innerHTML = pageProds.map(p=>{
    const cat = DB.categories.find(c=>c.id===p.cat);
    const st = p.stock === 0 ? 'bg-r' : p.stock <= 5 ? 'bg-y' : 'bg-g';
    const stLbl = p.stock === 0 ? 'Out' : p.stock <= 5 ? 'Low' : 'In';
    return `<tr>
      <td><div class="pcell"><div class="pthumb">${imgOrIcon(p.id,p.icon)}</div><div class="pname">${p.name}</div></div></td>
      <td style="color:var(--text2);">${cat?cat.name:'—'}</td>
      <td class="mono">$${p.price.toFixed(2)}</td>
      <td class="mono">${p.stock}</td>
      <td><span class="badge ${st}">${stLbl}</span></td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editProduct(${p.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteProduct(${p.id})">🗑 Del</button>
      </div></td>
    </tr>`;
  }).join('');
  
  const totalPages = Math.ceil(filteredProds.length / PROD_PER_PAGE);
  document.getElementById('prod-pinfo').textContent = `Page ${prodCurrentPage} of ${totalPages}`;
  document.getElementById('prod-pg1').classList.toggle('active', prodCurrentPage === 1);
  document.getElementById('prod-pg2').style.display = totalPages > 1 ? 'block' : 'none';
  if(totalPages > 1) document.getElementById('prod-pg2').classList.toggle('active', prodCurrentPage === 2);
}

function prodPage(d){prodCurrentPage=Math.max(1,Math.min(Math.ceil(filteredProds.length/PROD_PER_PAGE),prodCurrentPage+d));renderProdPage();}
function prodGoPage(p){prodCurrentPage=p;renderProdPage();}

function editProduct(id){
  const p=DB.products.find(pr=>pr.id===id);if(!p)return;
  go('add-product');
  document.getElementById('edit-prod-id').value=id;
  document.getElementById('add-prod-title').textContent='Edit Product';
  document.getElementById('f-pname').value=p.name;
  document.getElementById('f-pcat').value=p.cat;
  document.getElementById('f-pprice').value=p.price;
  document.getElementById('f-pstock').value=p.stock;
  document.getElementById('f-pcost').value=p.cost||'';
  document.getElementById('f-psku').value=p.sku||'';
  document.getElementById('f-pdesc').value=p.desc||'';
  document.getElementById('f-picon').value=p.icon||'';
}

function deleteProduct(id){
  if(!confirm('Delete this product?'))return;
  DB.products=DB.products.filter(p=>p.id!==id);
  saveDB();renderProducts();showToast('Product deleted','error');
}

function setupAddProductForm(){
  populateCatSelects();
  if(!document.getElementById('edit-prod-id').value){
    document.getElementById('add-prod-title').textContent='Add New Product';
    resetProductForm();
  }
}

function resetProductForm(){
  ['f-pname','f-pprice','f-pstock','f-pcost','f-psku','f-pdesc','f-picon'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-pcat').value='';
  document.getElementById('f-pstatus').value='active';
  document.getElementById('edit-prod-id').value='';
  document.getElementById('add-prod-title').textContent='Add New Product';
}

function saveProduct(){
  const name=document.getElementById('f-pname').value.trim();
  const cat=parseInt(document.getElementById('f-pcat').value);
  const price=parseFloat(document.getElementById('f-pprice').value);
  const stock=parseInt(document.getElementById('f-pstock').value)||0;
  if(!name||!cat||isNaN(price)){showToast('Fill required fields','error');return;}
  const editId=parseInt(document.getElementById('edit-prod-id').value)||0;
  const data={name,cat,price,stock,cost:parseFloat(document.getElementById('f-pcost').value)||0,sku:document.getElementById('f-psku').value,desc:document.getElementById('f-pdesc').value,icon:document.getElementById('f-picon').value||'📦',status:document.getElementById('f-pstatus').value};
  if(editId){
    const idx=DB.products.findIndex(p=>p.id===editId);
    if(idx>=0) DB.products[idx]={...DB.products[idx],...data};
    if(!PRODUCT_IMGS[editId]) PRODUCT_IMGS[editId]=buildImg(editId);
    showToast('Product updated!','success');
  } else {
    const newId=DB.nextIds.prod++;
    DB.products.push({id:newId,...data});
    PRODUCT_IMGS[newId]=buildImg(newId);
    showToast('Product added!','success');
  }
  saveDB();
  resetProductForm();go('list-product');updateInvBadge();
}

function renderCategories(){
  document.getElementById('cat-tbody').innerHTML=DB.categories.map(c=>{
    const count=DB.products.filter(p=>p.cat===c.id).length;
    return`<tr>
      <td><div class="pcell"><div class="pthumb">${c.icon}</div><div class="pname">${c.name}</div></div></td>
      <td class="mono">${count}</td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editCat(${c.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteCat(${c.id})">🗑 Del</button>
      </div></td>
    </tr>`;
  }).join('');
  populateCatSelects();
}

function editCat(id){
  const c=DB.categories.find(cat=>cat.id===id);if(!c)return;
  document.getElementById('edit-cat-id').value=id;
  document.getElementById('f-cname').value=c.name;
  document.getElementById('f-cicon').value=c.icon;
  document.getElementById('f-cdesc').value=c.desc||'';
  document.getElementById('cat-form-title').textContent='Edit Category';
}

function deleteCat(id){
  if(DB.products.some(p=>p.cat===id)){showToast('Cannot delete: has products','error');return;}
  if(!confirm('Delete this category?'))return;
  DB.categories=DB.categories.filter(c=>c.id!==id);
  saveDB();renderCategories();showToast('Category deleted','error');
}

function saveCat(){
  const name=document.getElementById('f-cname').value.trim();
  if(!name){showToast('Enter category name','error');return;}
  const editId=parseInt(document.getElementById('edit-cat-id').value)||0;
  const data={name,icon:document.getElementById('f-cicon').value||'📁',desc:document.getElementById('f-cdesc').value};
  if(editId){const idx=DB.categories.findIndex(c=>c.id===editId);if(idx>=0)DB.categories[idx]={...DB.categories[idx],...data};showToast('Category updated!','success');}
  else{DB.categories.push({id:DB.nextIds.cat++,...data});showToast('Category added!','success');}
  saveDB();
  resetCatForm();renderCategories();populateCatSelects();
}

function resetCatForm(){
  document.getElementById('edit-cat-id').value='';
  document.getElementById('f-cname').value='';
  document.getElementById('f-cicon').value='';
  document.getElementById('f-cdesc').value='';
  document.getElementById('cat-form-title').textContent='Add Category';
}

function renderSuppliers(search=''){
  let sups=DB.suppliers;
  if(search) sups=sups.filter(s=>s.name.toLowerCase().includes(search.toLowerCase())||(s.contact||'').toLowerCase().includes(search.toLowerCase()));
  document.getElementById('sup-tbody').innerHTML=sups.map(s=>`
    <tr>
      <td><div class="pcell"><div class="pthumb">🏭</div><div><div class="pname">${s.name}</div><div class="pcat">${s.addr||''}</div></div></div></td>
      <td style="color:var(--text2);">${s.contact||''}</td>
      <td style="color:var(--text3);">${s.email||''}</td>
      <td style="color:var(--text3);">${s.phone||''}</td>
      <td class="mono">$${(s.balance||0).toFixed(2)}</td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editSupplier(${s.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteSupplier(${s.id})">🗑 Del</button>
      </div></td>
    </tr>`).join('');
}

function filterSuppliers(v){renderSuppliers(v);}

function openSupplierModal(id){
  document.getElementById('edit-sup-id').value='';
  ['f-sname','f-scontact','f-semail','f-sphone','f-saddr'].forEach(i=>document.getElementById(i).value='');
  document.getElementById('sup-modal-title').textContent='Add Supplier';
  if(id){
    const s=DB.suppliers.find(s=>s.id===id);
    if(s){
      document.getElementById('edit-sup-id').value=id;
      document.getElementById('f-sname').value=s.name;
      document.getElementById('f-scontact').value=s.contact||'';
      document.getElementById('f-semail').value=s.email||'';
      document.getElementById('f-sphone').value=s.phone||'';
      document.getElementById('f-saddr').value=s.addr||'';
      document.getElementById('sup-modal-title').textContent='Edit Supplier';
    }
  }
  openModal('sup-modal');
}

function editSupplier(id){openSupplierModal(id);}

function deleteSupplier(id){
  if(!confirm('Delete this supplier?'))return;
  DB.suppliers=DB.suppliers.filter(s=>s.id!==id);saveDB();renderSuppliers();showToast('Supplier deleted','error');
}

function saveSupplier(){
  const name=document.getElementById('f-sname').value.trim();
  if(!name){showToast('Enter supplier name','error');return;}
  const editId=parseInt(document.getElementById('edit-sup-id').value)||0;
  const data={name,contact:document.getElementById('f-scontact').value,email:document.getElementById('f-semail').value,phone:document.getElementById('f-sphone').value,addr:document.getElementById('f-saddr').value,balance:0};
  if(editId){const idx=DB.suppliers.findIndex(s=>s.id===editId);if(idx>=0)DB.suppliers[idx]={...DB.suppliers[idx],...data,balance:DB.suppliers[idx].balance};}
  else DB.suppliers.push({id:DB.nextIds.sup++,...data});
  closeModal('sup-modal');saveDB();renderSuppliers();showToast(editId?'Supplier updated!':'Supplier added!','success');
}

function renderPOs(){
  populatePODropdowns();
  document.getElementById('po-tbody').innerHTML=DB.purchaseOrders.map(po=>{
    const sup=DB.suppliers.find(s=>s.id===po.supId);
    const prod=DB.products.find(p=>p.id===po.prodId);
    const total=(po.qty*po.cost).toFixed(2);
    const st=po.status==='received'?'bg-g':po.status==='cancelled'?'bg-r':'bg-y';
    return`<tr>
      <td class="mono">PO-${String(po.id).padStart(4,'0')}</td>
      <td style="color:var(--text2);">${sup?sup.name:'—'}</td>
      <td style="color:var(--text3);">${po.date||''}</td>
      <td>${prod?(prod.icon||'📦')+' '+prod.name:'—'} ×${po.qty}</td>
      <td class="mono">$${total}</td>
      <td><span class="badge ${st}">${cap(po.status)}</span></td>
      <td><div class="act-btns">
        ${po.status==='pending'?`<button class="abtn view" onclick="receivePO(${po.id})">✓ Receive</button>`:''}
        <button class="abtn del" onclick="deletePO(${po.id})">🗑</button>
      </div></td>
    </tr>`;
  }).join('');
}

function openPOModal(){
  ['f-posup','f-poprod','f-poqty','f-pocost'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('f-podate').value=new Date().toISOString().split('T')[0];
  document.getElementById('f-postatus').value='pending';
  populatePODropdowns();openModal('po-modal');
}

function populatePODropdowns(){
  const supSel=document.getElementById('f-posup');
  if(supSel) supSel.innerHTML='<option value="">Select supplier</option>'+DB.suppliers.map(s=>`<option value="${s.id}">${s.name}</option>`).join('');
  const prodSel=document.getElementById('f-poprod');
  if(prodSel) prodSel.innerHTML='<option value="">Select product</option>'+DB.products.map(p=>`<option value="${p.id}">${p.icon||'📦'} ${p.name}</option>`).join('');
}

function savePO(){
  const supId=parseInt(document.getElementById('f-posup').value);
  const prodId=parseInt(document.getElementById('f-poprod').value);
  const qty=parseInt(document.getElementById('f-poqty').value)||0;
  const cost=parseFloat(document.getElementById('f-pocost').value)||0;
  if(!supId||!prodId||qty<=0){showToast('Fill all required fields','error');return;}
  const po={id:DB.nextIds.po++,supId,prodId,qty,cost,date:document.getElementById('f-podate').value,status:document.getElementById('f-postatus').value};
  DB.purchaseOrders.unshift(po);
  if(po.status==='received'){const p=DB.products.find(pr=>pr.id===prodId);if(p)p.stock+=qty;}
  closeModal('po-modal');saveDB();renderPOs();showToast('Purchase order created!','success');updateInvBadge();
}

function receivePO(id){
  const po=DB.purchaseOrders.find(p=>p.id===id);if(!po)return;
  po.status='received';
  const prod=DB.products.find(p=>p.id===po.prodId);
  if(prod)prod.stock+=po.qty;
  saveDB();renderPOs();showToast('Order received! Stock updated.','success');updateInvBadge();
}

function deletePO(id){
  if(!confirm('Delete this order?'))return;
  DB.purchaseOrders=DB.purchaseOrders.filter(p=>p.id!==id);saveDB();renderPOs();showToast('Order deleted','error');
}

function renderReport(){
  populateCatSelects();
  const catFilter=document.getElementById('rep-cat-filter');
  if(catFilter) catFilter.innerHTML='<option value="">All Categories</option>'+DB.categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
  const catId=parseInt(catFilter?.value)||0;
  let prods=DB.products;
  if(catId) prods=prods.filter(p=>p.cat===catId);
  const staticSales={1:{sold:312,trend:'up',pct:28},2:{sold:278,trend:'up',pct:22},3:{sold:341,trend:'up',pct:35},4:{sold:256,trend:'up',pct:18},5:{sold:189,trend:'up',pct:14},6:{sold:203,trend:'up',pct:16},7:{sold:178,trend:'dn',pct:4},8:{sold:195,trend:'up',pct:9},9:{sold:142,trend:'up',pct:31},10:{sold:118,trend:'up',pct:24},11:{sold:67,trend:'dn',pct:6},12:{sold:44,trend:'dn',pct:11},13:{sold:224,trend:'up',pct:19},14:{sold:156,trend:'up',pct:13},15:{sold:489,trend:'up',pct:42},16:{sold:401,trend:'up',pct:37},17:{sold:376,trend:'up',pct:33}};
  document.getElementById('report-tbody').innerHTML=prods.map(p=>{
    const s=staticSales[p.id]||{sold:50,trend:'up',pct:5};
    const rev=s.sold*p.price;
    const cat=DB.categories.find(c=>c.id===p.cat);
    return`<tr>
      <td><div class="pcell"><div class="pthumb" style="overflow:hidden;">${imgOrIcon(p.id,p.icon)}</div><div class="pname">${p.name}</div></div></td>
      <td style="color:var(--text2);">${cat?cat.name:'—'}</td>
      <td class="mono">${s.sold}</td>
      <td class="mono">$${rev.toFixed(2)}</td>
      <td class="mono">$${p.price.toFixed(2)}</td>
      <td><span class="sch ${s.trend}">${s.trend==='up'?'▲ +'+s.pct+'%':'▼ -'+s.pct+'%'}</span></td>
    </tr>`;
  }).join('');
}

function renderCustomers(search=''){
  let custs=DB.customers;
  if(search) custs=custs.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())||(c.email||'').toLowerCase().includes(search.toLowerCase()));
  document.getElementById('cust-tbody').innerHTML=custs.map(c=>`
    <tr>
      <td><div class="pcell"><div class="pthumb">👤</div><div><div class="pname">${c.name}</div></div></div></td>
      <td style="color:var(--text3);">${c.email||''}</td>
      <td style="color:var(--text3);">${c.phone||''}</td>
      <td class="mono">${c.orders||0}</td>
      <td class="mono">$${(c.spent||0).toFixed(2)}</td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editCustomer(${c.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteCustomer(${c.id})">🗑 Del</button>
      </div></td>
    </tr>`).join('');
}

function filterCustomers(v){renderCustomers(v);}

function openCustModal(){
  document.getElementById('edit-cust-id').value='';
  ['f-custname','f-custemail','f-custphone'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-custpoints').value='0';
  document.getElementById('cust-modal-title').textContent='Add Customer';
  openModal('cust-modal');
}

function editCustomer(id){
  const c=DB.customers.find(cu=>cu.id===id);if(!c)return;
  document.getElementById('edit-cust-id').value=id;
  document.getElementById('f-custname').value=c.name;
  document.getElementById('f-custemail').value=c.email||'';
  document.getElementById('f-custphone').value=c.phone||'';
  document.getElementById('f-custpoints').value=c.points||0;
  document.getElementById('cust-modal-title').textContent='Edit Customer';
  openModal('cust-modal');
}

function deleteCustomer(id){
  if(!confirm('Delete this customer?'))return;
  DB.customers=DB.customers.filter(c=>c.id!==id);saveDB();renderCustomers();showToast('Customer deleted','error');
}

function saveCustomer(){
  const name=document.getElementById('f-custname').value.trim();
  if(!name){showToast('Enter customer name','error');return;}
  const editId=parseInt(document.getElementById('edit-cust-id').value)||0;
  const data={name,email:document.getElementById('f-custemail').value,phone:document.getElementById('f-custphone').value,points:parseInt(document.getElementById('f-custpoints').value)||0};
  if(editId){const idx=DB.customers.findIndex(c=>c.id===editId);if(idx>=0)DB.customers[idx]={...DB.customers[idx],...data};}
  else DB.customers.push({id:DB.nextIds.cust++,...data,orders:0,spent:0});
  closeModal('cust-modal');saveDB();renderCustomers();showToast(editId?'Customer updated!':'Customer added!','success');
}

function renderInventory(search=''){
  let prods=DB.products;
  if(search) prods=prods.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  const lowCount=DB.products.filter(p=>p.stock<=5).length;
  document.getElementById('inv-bdg').textContent=lowCount;
  document.getElementById('inv-bdg').style.display=lowCount>0?'':'none';
  document.getElementById('inv-tbody').innerHTML=prods.map(p=>{
    const cat=DB.categories.find(c=>c.id===p.cat);
    const minStock=5;
    const st=p.stock===0?'bg-r':p.stock<=minStock?'bg-y':'bg-g';
    const stLbl=p.stock===0?'Out of Stock':p.stock<=minStock?'Low Stock':'In Stock';
    return`<tr>
      <td><div class="pcell"><div class="pthumb" style="overflow:hidden;">${imgOrIcon(p.id,p.icon)}</div><div><div class="pname">${p.name}</div></div></div></td>
      <td style="color:var(--text2);">${cat?cat.name:'—'}</td>
      <td class="mono">${p.stock}</td>
      <td class="mono">${minStock}</td>
      <td><span class="badge ${st}">${stLbl}</span></td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="openAdj(${p.id})">± Adjust</button>
        <button class="abtn view" onclick="go('purchase-order')">🛒 Reorder</button>
      </div></td>
    </tr>`;
  }).join('');
}

function filterInventory(v){renderInventory(typeof v==='string'?v:document.querySelector('#page-inventory .sinp')?.value||'');}

function openAdj(prodId){
  const p=DB.products.find(pr=>pr.id===prodId);if(!p)return;
  document.getElementById('adj-prod-id').value=prodId;
  document.getElementById('adj-prod-name').value=p.name;
  document.getElementById('adj-cur').value=p.stock;
  document.getElementById('adj-val').value='';
  document.getElementById('adj-note').value='';
  openModal('adj-modal');
}

function applyAdj(){
  const prodId=parseInt(document.getElementById('adj-prod-id').value);
  const delta=parseInt(document.getElementById('adj-val').value)||0;
  const p=DB.products.find(pr=>pr.id===prodId);if(!p)return;
  p.stock=Math.max(0,p.stock+delta);
  closeModal('adj-modal');saveDB();renderInventory();updateInvBadge();
  showToast(`Stock adjusted to ${p.stock}`,'success');
}

function updateInvBadge(){
  const low=DB.products.filter(p=>p.stock<=5).length;
  const b=document.getElementById('inv-bdg');
  b.textContent=low;b.style.display=low>0?'':'none';
}

function renderDiscounts(){
  document.getElementById('disc-tbody').innerHTML=DB.discounts.map(d=>`
    <tr>
      <td><span class="badge bg-b">${d.code}</span></td>
      <td style="color:var(--text3);">${d.type==='percent'?'Percentage':'Fixed'}</td>
      <td class="mono">${d.type==='percent'?d.value+'%':'$'+d.value}</td>
      <td class="mono">${d.uses||0}/${d.maxUses||100}</td>
      <td style="color:var(--text3);">${d.expires||''}</td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editDiscount(${d.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteDiscount(${d.id})">🗑 Del</button>
      </div></td>
    </tr>`).join('');
}

function editDiscount(id){
  const d=DB.discounts.find(di=>di.id===id);if(!d)return;
  document.getElementById('edit-disc-id').value=id;
  document.getElementById('f-dcode').value=d.code;
  document.getElementById('f-dtype').value=d.type;
  document.getElementById('f-dval').value=d.value;
  document.getElementById('f-duses').value=d.maxUses||100;
  document.getElementById('f-dexp').value=d.expires||'';
  document.getElementById('disc-form-title').textContent='Edit Discount';
}

function deleteDiscount(id){
  if(!confirm('Delete this discount?'))return;
  DB.discounts=DB.discounts.filter(d=>d.id!==id);saveDB();renderDiscounts();showToast('Discount deleted','error');
}

function saveDiscount(){
  const code=document.getElementById('f-dcode').value.trim().toUpperCase();
  if(!code){showToast('Enter discount code','error');return;}
  const editId=parseInt(document.getElementById('edit-disc-id').value)||0;
  const data={code,type:document.getElementById('f-dtype').value,value:parseFloat(document.getElementById('f-dval').value)||0,maxUses:parseInt(document.getElementById('f-duses').value)||100,uses:0,expires:document.getElementById('f-dexp').value};
  if(editId){const idx=DB.discounts.findIndex(d=>d.id===editId);if(idx>=0)DB.discounts[idx]={...DB.discounts[idx],...data,uses:DB.discounts[idx].uses||0};}
  else DB.discounts.push({id:DB.nextIds.disc++,...data});
  resetDiscForm();saveDB();renderDiscounts();showToast(editId?'Discount updated!':'Discount added!','success');
}

function resetDiscForm(){
  document.getElementById('edit-disc-id').value='';
  ['f-dcode','f-dval','f-duses','f-dexp'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-dtype').value='percent';
  document.getElementById('disc-form-title').textContent='New Discount';
}

function renderStaff(search=''){
  let staff=DB.staff;
  if(search) staff=staff.filter(s=>s.name.toLowerCase().includes(search.toLowerCase()));
  document.getElementById('staff-tbody').innerHTML=staff.map(s=>`
    <tr>
      <td><div class="pcell"><div class="pthumb">👤</div><div><div class="pname">${s.name}</div></div></div></td>
      <td><span class="badge bg-b">${s.role}</span></td>
      <td style="color:var(--text3);">${s.email||''}</td>
      <td style="color:var(--text3);">${s.phone||''}</td>
      <td><span class="badge ${(s.status||'active')==='active'?'bg-g':'bg-r'}">${cap(s.status||'active')}</span></td>
      <td><div class="act-btns">
        <button class="abtn edit" onclick="editStaff(${s.id})">✏ Edit</button>
        <button class="abtn del" onclick="deleteStaff(${s.id})">🗑 Del</button>
      </div></td>
    </tr>`).join('');
}

function filterStaff(v){renderStaff(v);}

function openStaffModal(){
  document.getElementById('edit-staff-id').value='';
  ['f-staffname','f-staffemail','f-staffphone','f-staffpass'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-staffrole').value='Cashier';
  document.getElementById('f-staffstatus').value='active';
  document.getElementById('staff-modal-title').textContent='Add Staff';
  openModal('staff-modal');
}

function editStaff(id){
  const s=DB.staff.find(st=>st.id===id);if(!s)return;
  document.getElementById('edit-staff-id').value=id;
  document.getElementById('f-staffname').value=s.name;
  document.getElementById('f-staffemail').value=s.email||'';
  document.getElementById('f-staffphone').value=s.phone||'';
  document.getElementById('f-staffrole').value=s.role;
  document.getElementById('f-staffstatus').value=s.status||'active';
  document.getElementById('staff-modal-title').textContent='Edit Staff';
  openModal('staff-modal');
}

function deleteStaff(id){
  if(!confirm('Delete this staff member?'))return;
  DB.staff=DB.staff.filter(s=>s.id!==id);saveDB();renderStaff();showToast('Staff deleted','error');
}

function saveStaff(){
  const name=document.getElementById('f-staffname').value.trim();
  if(!name){showToast('Enter staff name','error');return;}
  const editId=parseInt(document.getElementById('edit-staff-id').value)||0;
  const data={name,role:document.getElementById('f-staffrole').value,email:document.getElementById('f-staffemail').value,phone:document.getElementById('f-staffphone').value,status:document.getElementById('f-staffstatus').value};
  if(editId){const idx=DB.staff.findIndex(s=>s.id===editId);if(idx>=0)DB.staff[idx]={...DB.staff[idx],...data};}
  else DB.staff.push({id:DB.nextIds.staff++,...data});
  closeModal('staff-modal');saveDB();renderStaff();showToast(editId?'Staff updated!':'Staff added!','success');
}

function renderSettings(){
  document.getElementById('s-sname').value=DB.settings.storeName;
  document.getElementById('s-tax').value=DB.settings.tax;
  document.getElementById('s-receipt').value=DB.settings.receipt;
  document.getElementById('si-prods').textContent=DB.products.length;
  document.getElementById('si-custs').textContent=DB.customers.length;
  document.getElementById('si-orders').textContent=DB.orders.length;
}

function saveSettings(){
  DB.settings.storeName=document.getElementById('s-sname').value;
  DB.settings.tax=parseFloat(document.getElementById('s-tax').value)||10;
  DB.settings.receipt=document.getElementById('s-receipt').value;
  saveDB();
  showToast('Settings saved!','success');
}

function populateCatSelects(){
  const opts='<option value="">Select category</option>'+DB.categories.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  const opts2='<option value="">All Categories</option>'+DB.categories.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
  const el1=document.getElementById('f-pcat');if(el1)el1.innerHTML=opts;
  const el2=document.getElementById('prod-cat-filter');if(el2)el2.innerHTML=opts2;
  const el3=document.getElementById('rep-cat-filter');if(el3)el3.innerHTML=opts2;
}

function statusBadge(s){return s==='paid'?'bg-g':s==='pending'?'bg-y':s==='processing'?'bg-b':'bg-r';}
function cap(s){return s?s.charAt(0).toUpperCase()+s.slice(1):'';}
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}

function showToast(msg,type='info'){
  const wrap=document.getElementById('toast-wrap');
  if (!wrap) return;
  const t=document.createElement('div');
  t.className=`toast ${type}`;
  const icon=type==='success'?'✓':type==='error'?'✕':'ℹ';
  t.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(20px)';t.style.transition='all .3s';setTimeout(()=>t.remove(),300);},2500);
}

document.getElementById('pay-method').addEventListener('change',function(){
  document.getElementById('cash-field').style.display=this.value==='cash'?'flex':'none';
  document.getElementById('change-row').style.display='none';
});
document.getElementById('cash-field').style.display='flex';

document.querySelectorAll('.modal-bg').forEach(bg=>{
  bg.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
});

initTheme();
go('dashboard');
updateInvBadge();

function processPayment(){
  if(cartItems.length === 0) return;
  const total = parseFloat(document.getElementById('cart-total').textContent.replace('$','')) || 0;
  const method = document.getElementById('pay-method').value;
  
  const order = {
    id: DB.nextIds.order++,
    table: document.getElementById('cart-table').value || 'Takeaway',
    items: [...cartItems],
    total: total,
    status: 'paid',
    date: new Date().toISOString().split('T')[0]
  };
  
  DB.orders.unshift(order);
  
  // Update stock
  cartItems.forEach(item => {
    const p = DB.products.find(pr => pr.id === item.id);
    if(p) p.stock = Math.max(0, p.stock - item.qty);
  });
  
  cartItems = [];
  saveDB();
  renderCart();
  closeModal('pay-modal');
  showToast('Payment successful!','success');
  updateInvBadge();
}