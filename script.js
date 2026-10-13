/* ════════════════════════════════════════════
   SMART & DIGITAL — script.js
════════════════════════════════════════════ */
'use strict';
/* ── DATA ── */
const PRODUCTS = [
  /* BURGERS */
  { id:1,  cat:'burgers',  name:'برجر كلاسيك',          desc:'لحم بقري طازج 180جم مع جبنة شيدر وخس وطماطم وصلصة سرية',         price:89,  oldPrice:null, emoji:'🍔', badge:'hot',  extras:['بدون بصل','بدون طماطم','سوس إضافي'], image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop' },
  { id:2,  cat:'burgers',  name:'دابل تشيز برجر',          desc:'ضعف الكمية من اللحم والجبن الكريمية مع بيكون مقرمش',             price:129, oldPrice:150,  emoji:'🍔', badge:'sale', extras:['بدون بصل','جبنة إضافية'], image:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500&auto=format&fit=crop' },
  { id:3,  cat:'burgers',  name:'برجر الفطر',              desc:'برجر لحم مع فطر سوتيه وصلصة الثوم الأسود والجبنة السويسرية',     price:109, oldPrice:null, emoji:'🫕', badge:'new',  extras:['فطر إضافي','بدون ثوم'], image:'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=500&auto=format&fit=crop' },
  { id:4,  cat:'burgers',  name:'برجر الجبن الثلاثي',      desc:'ثلاث أنواع من الجبن — شيدر وموزاريلا وريكوتا',                   price:119, oldPrice:null, emoji:'🍔', badge:null,   extras:['جبنة إضافية','بدون بصل'], image:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop' },
  { id:5,  cat:'burgers',  name:'برجر الدجاج الكريسبي',    desc:'فيليه دجاج مقلي مقرمش مع كول سلو وصلصة هني مستارد',             price:95,  oldPrice:null, emoji:'🐓', badge:'hot',  extras:['حار','بدون كول سلو'], image:'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=500&auto=format&fit=crop' },

  /* CHICKEN */
  { id:6,  cat:'chicken',  name:'وينجز بفالو',             desc:'10 قطع وينجز بصلصة البفالو الحارة مع صلصة الجبن الأزرق',        price:85,  oldPrice:null, emoji:'🍗', badge:'hot',  extras:['حار جداً','وسط','خفيف'], image:'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=500&auto=format&fit=crop' },
  { id:7,  cat:'chicken',  name:'نجيتس دجاج',              desc:'12 قطعة نجيتس دجاج مع صلصة هني مستارد وبربكيو',                 price:65,  oldPrice:null, emoji:'🍗', badge:null,   extras:['6 قطع +20','بدون صلصة'], image:'https://images.unsplash.com/photo-1562967914-608f82629a7a?q=80&w=500&auto=format&fit=crop' },
  { id:8,  cat:'chicken',  name:'شيش طاووق',               desc:'دجاج متبل باللبن والثوم والبهارات مشوي على الفحم',               price:95,  oldPrice:null, emoji:'🍢', badge:'new',  extras:['حار','بدون ثوم','ثوم إضافي'], image:'https://images.unsplash.com/photo-1633412248148-03362637b423?q=80&w=500&auto=format&fit=crop' },
  { id:9,  cat:'chicken',  name:'دجاج مشوي بالليمون',        desc:'صدر دجاج طازج بالليمون والروزماري مع الخضروات المشوية',          price:110, oldPrice:null, emoji:'🍋', badge:null,   extras:['ليمون إضافي','بدون خضار'], image:'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500&auto=format&fit=crop' },

  /* MEALS */
  { id:10, cat:'meals',    name:'وجبة عائلية كبيرة',        desc:'4 برجر + 4 فريز كبير + 4 مشروبات + صلصات — توفير 40%',          price:299, oldPrice:499, emoji:'🥡', badge:'sale', extras:['مع كول سلو','مع سلطة'], image:'https://images.unsplash.com/photo-1615557960916-5f4791feb692?q=80&w=500&auto=format&fit=crop' },
  { id:11, cat:'meals',    name:'وجبة برجر كلاسيك',         desc:'برجر كلاسيك + فريز وسط + مشروب',                                  price:129, oldPrice:150, emoji:'🥡', badge:'hot',  extras:['كول سلو بدل فريز','مشروب حر'], image:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=500&auto=format&fit=crop' },
  { id:12, cat:'meals',    name:'وجبة دجاج كريسبي',         desc:'دجاج كريسبي + فريز + مشروب + صلصة',                              price:119, oldPrice:null, emoji:'🥡', badge:null,   extras:['فريز بطاطس حلوة','فريز كبير +10'], image:'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=500&auto=format&fit=crop' },
  { id:13, cat:'meals',    name:'وجبة للإثنين',             desc:'2 برجر + 2 فريز + 2 مشروب + صلصتان بخصم 25%',                   price:199, oldPrice:265, emoji:'💑', badge:'sale', extras:['اختيار البرجر','اختيار المشروب'], image:'https://images.unsplash.com/photo-1592861956120-e524c7225c51?q=80&w=500&auto=format&fit=crop' },

  /* SIDES */
  { id:14, cat:'sides',    name:'فريز كلاسيك كبير',         desc:'بطاطس مقلية ذهبية مقرمشة بملح البحر — كبير',                     price:35,  oldPrice:null, emoji:'🍟', badge:null,   extras:['بدون ملح','ملح إضافي'], image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop' },
  { id:15, cat:'sides',    name:'بطاطس حلوة مشوية',         desc:'شرائح بطاطا حلوة مشوية مع صلصة الثوم والأعشاب',                  price:45,  oldPrice:null, emoji:'🍠', badge:'new',  extras:['بدون صلصة','صلصة حارة'], image:'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=500&auto=format&fit=crop' },
  { id:16, cat:'sides',    name:'حلقات بصل',                desc:'حلقات بصل مقرمشة مع صلصة الرانش الكريمية',                        price:40,  oldPrice:null, emoji:'🧅', badge:null,   extras:['بدون صلصة','صلصة إضافية'], image:'https://images.unsplash.com/photo-1639024471283-267a3fc7752f?q=80&w=500&auto=format&fit=crop' },
  { id:17, cat:'sides',    name:'كول سلو',                  desc:'سلطة الكول سلو الطازجة بالمايونيز والخضروات',                     price:25,  oldPrice:null, emoji:'🥗', badge:null,   extras:['بدون مايونيز'], image:'https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=500&auto=format&fit=crop' },
  { id:18, cat:'sides',    name:'ماك وينجز',                desc:'6 قطع وينجز بالتوابل مع صلصتين مجانيتين',                        price:55,  oldPrice:null, emoji:'🍗', badge:'hot',  extras:['حار','متوسط','خفيف'], image:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=500&auto=format&fit=crop' },

  /* DRINKS */
  { id:19, cat:'drinks',   name:'كوكاكولا',                  desc:'كوكاكولا كلاسيك باردة مثلجة — كبير',                              price:25,  oldPrice:null, emoji:'🥤', badge:null,   extras:['بدون ثلج','وسط -5','صغير -10'], image:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500&auto=format&fit=crop' },
  { id:20, cat:'drinks',   name:'عصير مانجو طازج',           desc:'مانجو طازج 100% بدون إضافات — كبير',                              price:45,  oldPrice:null, emoji:'🥭', badge:'hot',  extras:['وسط -10','بدون ثلج'], image:'https://images.unsplash.com/photo-1553119113-12149029997b?q=80&w=500&auto=format&fit=crop' },
  { id:21, cat:'drinks',   name:'شيك فراولة',                desc:'ملك شيك فراولة طازجة مع آيس كريم الفانيليا',                     price:55,  oldPrice:null, emoji:'🍓', badge:'new',  extras:['فانيليا بدل فراولة','شوكولا'], image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500&auto=format&fit=crop' },
  { id:22, cat:'drinks',   name:'موهيتو ليمون ونعناع',        desc:'موهيتو منعش بالليمون والنعناع الطازج',                             price:50,  oldPrice:null, emoji:'🍹', badge:null,   extras:['حلو جداً','متوسط الحلاوة','بدون سكر'], image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop' },
  { id:23, cat:'drinks',   name:'قهوة فرابوتشينو',            desc:'فرابوتشينو بالكراميل والكريمة الطازجة',                            price:60,  oldPrice:null, emoji:'☕', badge:null,   extras:['بدون كراميل','كريمة إضافية'], image:'https://images.unsplash.com/photo-1572289141511-c75759c5d014?q=80&w=500&auto=format&fit=crop' },

  /* DESSERTS */
  { id:24, cat:'desserts', name:'آيس كريم سنداي',            desc:'آيس كريم فانيليا مع صلصة الشوكولا والبندق المقرمش',              price:40,  oldPrice:null, emoji:'🍨', badge:'hot',  extras:['فراولة','شوكولا','كراميل'], image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500&auto=format&fit=crop' },
  { id:25, cat:'desserts', name:'كيك الشوكولا الفاخر',        desc:'شرائح كيك شوكولا بلجيكية مع كريمة الشانتيه',                    price:65,  oldPrice:null, emoji:'🎂', badge:null,   extras:['تسخين','آيس كريم جنبه'], image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop' },
  { id:26, cat:'desserts', name:'براونيز بالكراميل',           desc:'براونيز دافئ بالشوكولا الداكنة وصلصة الكراميل',                  price:55,  oldPrice:null, emoji:'🍫', badge:'new',  extras:['آيس كريم جنبه +15'], image:'https://images.unsplash.com/photo-1606313564000-030796844a67?q=80&w=500&auto=format&fit=crop' },
  { id:27, cat:'desserts', name:'تشيز كيك مانجو',            desc:'تشيز كيك كريمي بطبقة المانجو الطازجة',                            price:70,  oldPrice:null, emoji:'🍰', badge:null,   extras:['بدون مانجو','مانجو إضافية'], image:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop' },

  /* BREAKFAST */
  { id:28, cat:'breakfast',name:'إفطار انجليزي كامل',         desc:'بيض مقلي + سجق + بيكون + فاصوليا + خبز محمص + عصير',            price:120, oldPrice:null, emoji:'🍳', badge:'new',  extras:['بيض مسلوق','بدون بيكون','بدون سجق'], image:'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500&auto=format&fit=crop' },
  { id:29, cat:'breakfast',name:'وافل بالعسل',                desc:'وافل بلجيكي طازج مع العسل الأصلي وشرائح الموز',                  price:75,  oldPrice:null, emoji:'🧇', badge:null,   extras:['فراولة بدل موز','مابل سيرب'], image:'https://images.unsplash.com/photo-1562376502-6f769499c886?q=80&w=500&auto=format&fit=crop' },
  { id:30, cat:'breakfast',name:'بيض بنديكت',                  desc:'بيض مسلوق بالطريقة الفرنسية مع صلصة الهولاندييز',               price:95,  oldPrice:null, emoji:'🥚', badge:'hot',  extras:['بدون صلصة','سبانخ إضافية'], image:'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=500&auto=format&fit=crop' },
  { id:31, cat:'breakfast',name:'باقة الإفطار الخفيف',         desc:'كرواسون + قهوة + عصير طازج',                                      price:85,  oldPrice:110, emoji:'🥐', badge:'sale', extras:['قهوة باردة','شاي بدل قهوة'], image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500&auto=format&fit=crop' },
];

const CAT_NAMES = {
  all:'جميع الأصناف', burgers:'برجر', chicken:'دجاج',
  meals:'وجبات', sides:'مقبلات', drinks:'مشروبات',
  desserts:'حلويات', breakfast:'فطور',
};
/* ── STATE ── */
let currentCat = 'all';
let searchQ    = '';
let cart       = JSON.parse(localStorage.getItem('sd2_cart') || '[]');
let modalItem  = null;
let modalQty   = 1;
let modalExtras= [];

/* ── CART SAVE ── */
function saveCart() { localStorage.setItem('sd2_cart', JSON.stringify(cart)); }

/* ── NAVBAR SCROLL ── */
addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = scrollY > 10
    ? '0 4px 30px rgba(218,41,28,.45)' : '0 2px 20px rgba(218,41,28,.35)';
});

/* ── FILTER ── */
function filtered() {
  return PRODUCTS.filter(p => {
    const matchCat  = currentCat === 'all' || p.cat === currentCat;
    const matchSrch = !searchQ  || p.name.includes(searchQ) || p.desc.includes(searchQ);
    return matchCat && matchSrch;
  });
}

/* ── RENDER GRID ── */
function renderGrid() {
  const grid = document.getElementById('menu-grid');
  const none = document.getElementById('no-results');
  const items = filtered();

  document.getElementById('menu-heading').textContent = CAT_NAMES[currentCat] || 'جميع الأصناف';
  document.getElementById('menu-count').textContent   = items.length + ' صنف';

  if (!items.length) { grid.innerHTML = ''; none.style.display = 'block'; return; }
  none.style.display = 'none';

  grid.innerHTML = items.map((p, i) => `
    <article class="prod-card" style="animation-delay:${i * 0.04}s" onclick="openModal(${p.id})">
      <div class="card-img-wrap">
        <span class="card-emoji">${p.emoji}</span>
        <div class="card-badges">
          ${p.badge ? `<span class="cb cb-${p.badge}">${badgeLabel(p.badge)}</span>` : ''}
        </div>
        <button class="card-quick-add" onclick="quickAdd(event,${p.id})" title="أضف للسلة">+</button>
      </div>
      <div class="card-body">
        <div class="card-cat-name">${CAT_NAMES[p.cat]}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer-row">
          <div>
            ${p.oldPrice ? `<span class="card-price-old">${p.oldPrice} ج.م</span>` : ''}
            <span class="card-price">${p.price} ج.م</span>
          </div>
          <button class="card-add-btn" onclick="quickAdd(event,${p.id})">أضف +</button>
        </div>
      </div>
    </article>
  `).join('');
}

function badgeLabel(b) {
  return {new:'جديد', hot:'🔥 الأكثر طلباً', sale:'خصم', sold:'نفذ'}[b] || '';
}

/* ── CATEGORY CLICK ── */
function setupCats() {
  const mainTabs = document.querySelectorAll('.cat-tab');
  const navBtns  = document.querySelectorAll('.nc-btn');

  function activateCat(cat) {
    currentCat = cat;
    searchQ = ''; document.getElementById('search-inp').value = '';
    mainTabs.forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    navBtns.forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderGrid();
    document.getElementById('menu-section').scrollIntoView({ behavior:'smooth' });
  }

  mainTabs.forEach(b => b.addEventListener('click', () => activateCat(b.dataset.cat)));
  navBtns.forEach(b  => b.addEventListener('click', () => activateCat(b.dataset.cat)));
}

/* ── SEARCH ── */
document.getElementById('search-inp').addEventListener('input', e => {
  searchQ = e.target.value.trim();
  renderGrid();
});

/* ── QUICK ADD ── */
function quickAdd(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  doAddToCart(p, 1, []);
  showToast(`✓ ${p.name} أُضيف للسلة`, 'success');
}

/* ── MODAL ── */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  modalItem   = p;
  modalQty    = 1;
  modalExtras = [];

  document.getElementById('pm-img').innerHTML   = `<span>${p.emoji}</span>`;
  document.getElementById('pm-name').textContent = p.name;
  document.getElementById('pm-desc').textContent = p.desc;
  document.getElementById('pm-price').textContent= p.price + ' ج.م';
  document.getElementById('qty-n').textContent   = '1';

  document.getElementById('pm-badges').innerHTML =
    `<span class="pm-b">${CAT_NAMES[p.cat]}</span>` +
    (p.badge ? `<span class="pm-b">${badgeLabel(p.badge)}</span>` : '') +
    (p.oldPrice ? `<span class="pm-b" style="background:rgba(34,197,94,.08);color:#22c55e;border-color:rgba(34,197,94,.18)">وفّر ${p.oldPrice - p.price} ج.م</span>` : '');

  if (p.extras && p.extras.length) {
    document.getElementById('pm-extras').innerHTML = `
      <div class="pm-extras-title">التخصيص</div>
      <div class="extras-grid">
        ${p.extras.map(ex => `<button class="extra-chip" onclick="toggleExtra(this,'${ex}')">${ex}</button>`).join('')}
      </div>`;
  } else {
    document.getElementById('pm-extras').innerHTML = '';
  }

  document.getElementById('prod-overlay').classList.add('on');
  document.getElementById('prod-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function toggleExtra(el, val) {
  el.classList.toggle('on');
  if (el.classList.contains('on')) modalExtras.push(val);
  else modalExtras = modalExtras.filter(x => x !== val);
}

function closeModal() {
  document.getElementById('prod-overlay').classList.remove('on');
  document.getElementById('prod-modal').classList.remove('on');
  document.body.style.overflow = '';
}

document.getElementById('qty-minus').addEventListener('click', () => {
  if (modalQty > 1) { modalQty--; document.getElementById('qty-n').textContent = modalQty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  modalQty++; document.getElementById('qty-n').textContent = modalQty;
});

document.getElementById('pm-add-btn').addEventListener('click', () => {
  if (!modalItem) return;
  doAddToCart(modalItem, modalQty, modalExtras);
  closeModal();
  showToast(`✓ ${modalQty > 1 ? modalQty + '× ' : ''}${modalItem.name}`, 'success');
});

/* ── CART LOGIC ── */
function doAddToCart(p, qty, extras) {
  const key = p.id + (extras.length ? ':' + extras.sort().join(',') : '');
  const ex  = cart.find(c => c.key === key);
  if (ex) ex.qty += qty;
  else cart.push({ key, id:p.id, qty, extras });
  saveCart(); renderCart(); bumpBadge();
}

function changeQty(key, delta) {
  const ex = cart.find(c => c.key === key);
  if (!ex) return;
  ex.qty += delta;
  if (ex.qty <= 0) cart = cart.filter(c => c.key !== key);
  saveCart(); renderCart(); updateBadge();
}

function renderCart() {
  const list   = document.getElementById('cp-list');
  const empty  = document.getElementById('cp-empty');
  const footer = document.getElementById('cp-footer');
  const sub    = document.getElementById('cp-sub');
  const total  = document.getElementById('cp-total');

  const isEmpty = cart.length === 0;
  empty.style.display  = isEmpty ? 'block' : 'none';
  list.style.display   = isEmpty ? 'none'  : 'flex';
  footer.style.display = isEmpty ? 'none'  : 'block';
  list.style.flexDirection = 'column';

  list.innerHTML = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    if (!p) return '';
    return `
      <li class="cp-item">
        <span class="cpi-ico">${p.emoji}</span>
        <div class="cpi-info">
          <div class="cpi-name">${p.name}</div>
          ${c.extras && c.extras.length ? `<div class="cpi-sub">${c.extras.join(' · ')}</div>` : ''}
          <div class="cpi-price">${p.price * c.qty} ج.م</div>
        </div>
        <div class="cpi-ctrl">
          <button class="cpi-q" onclick="changeQty('${c.key}',-1)">−</button>
          <span class="cpi-n">${c.qty}</span>
          <button class="cpi-q" onclick="changeQty('${c.key}',1)">+</button>
        </div>
      </li>`;
  }).join('');

  const sum = cart.reduce((acc, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return acc + (p ? p.price * c.qty : 0);
  }, 0);
  sub.textContent   = sum + ' ج.م';
  total.textContent = sum + ' ج.م';
}

/* ── CART TOGGLE ── */
function toggleCart() {
  const panel   = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  const isOpen  = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('on', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

/* ── BADGE ── */
function updateBadge() {
  const n  = cart.reduce((a, c) => a + c.qty, 0);
  const el = document.getElementById('cart-badge');
  el.textContent = n;
}

function bumpBadge() {
  updateBadge();
  const el = document.getElementById('cart-badge');
  el.classList.remove('bump');
  requestAnimationFrame(() => { el.classList.add('bump'); setTimeout(() => el.classList.remove('bump'), 400); });
}

/* ── ORDER ── */
function placeOrder() {
  if (!cart.length) return;
  const sum = cart.reduce((a, c) => { const p = PRODUCTS.find(x => x.id === c.id); return a + (p ? p.price * c.qty : 0); }, 0);
  const orders = JSON.parse(localStorage.getItem('sd2_orders') || '[]');
  orders.unshift({ id: Date.now(), items: cart.map(c => ({ id:c.id, qty:c.qty })), total:sum, time:new Date().toLocaleString('ar-EG'), done:false });
  localStorage.setItem('sd2_orders', JSON.stringify(orders));
  cart = []; saveCart(); renderCart(); updateBadge(); toggleCart();
  showToast('🎉 تم استلام طلبك! جاري التحضير', 'gold');
}

/* ── TOAST ── */
function showToast(msg, type) {
  const wrap = document.getElementById('toast-wrap');
  const el   = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

/* ── SCROLL TO MENU ── */
function scrollToMenu() {
  document.getElementById('menu-section').scrollIntoView({ behavior:'smooth' });
}

/* ── INIT ── */
setupCats();
renderGrid();
renderCart();
updateBadge();
