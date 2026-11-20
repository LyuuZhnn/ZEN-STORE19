(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const storage = {
    get(key, fallback) { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn('Local storage tidak tersedia:', error); } }
  };
  const productSeed = [
    {id:"rk87",name:"Royal Kludge RK87",fullName:"Royal Kludge RK87 Mechanical Keyboard",category:"Keyboard",brand:"Royal Kludge",price:749000,oldPrice:0,badge:"",badgeClass:"",image:"https://doc-fd.zol-img.com.cn/t_s2000x2000/g7/M00/0D/09/ChMkK2fJIhiIOLpAAAHjNVhE8IwAAproQNhxy4AAeNN735.jpg",imageBackup:"https://bizweb.dktcdn.net/100/466/510/products/rk-royal-kludge-rk87-80-rgb-mechanical-keyboard-87-keys-2-4g-wireless-bluetooth-hot-swappable-jpg-640x640.webp?v=1675234932020",source:"https://en.rkgaming.com/product/119/",fallback:"Foto keyboard Royal Kludge RK87",description:"Keyboard mechanical 87 tombol dengan tata letak ringkas untuk aktivitas mengetik dan gaming. Detail switch dan konektivitas mengikuti varian produk."},
    {id:"baseus-m2s",name:"Baseus Bowie M2s",fullName:"Baseus Bowie M2s Wireless Earbuds",category:"Audio",brand:"Baseus",price:499000,oldPrice:0,badge:"",badgeClass:"",image:"https://www.pbtech.com/pacific/imgprod/H/S/HSTBAS26075__1.jpg",imageBackup:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/551058/xlarge/Fone-Bluetooth-Baseus-Bowie-M2s-Com-Cancelamento-De-Ru-do-Ativo-48db-Tws-4-Microfones_1757511279.jpg",source:"https://baseus.com.au/products/bowie-m2s-true-wireless-earphones",fallback:"Foto Baseus Bowie M2s",description:"Earbuds nirkabel Baseus Bowie M2s. Pastikan warna, kelengkapan, dan varian sesuai informasi penjual."},
    {id:"g502-hero",name:"Logitech G502 Hero",fullName:"Logitech G502 Hero Gaming Mouse",category:"Mouse",brand:"Logitech",price:899000,oldPrice:0,badge:"",badgeClass:"",image:"https://resource.logitech.com/b_white/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png",imageBackup:"https://smartshop.kz/image/files/marvelnew2/marvelnew238.jpg",source:"https://www.logitechg.com/id-id/shop/p/g502-hero-gaming-mouse.910-005472",fallback:"Foto Logitech G502 Hero",description:"Mouse gaming berkabel dengan sensor HERO dan tombol yang dapat dikustomisasi. Spesifikasi mengikuti halaman produk resmi Logitech G."},
    {id:"kraken-v3",name:"Razer Kraken V3",fullName:"Razer Kraken V3 Gaming Headset",category:"Headset",brand:"Razer",price:1499000,oldPrice:0,badge:"",badgeClass:"",image:"https://assets2.razerzone.com/images/pnx.assets/49501c4c953dacbeda09936bcb30e083/razer-kraken-v3-gallery-04.jpg",imageBackup:"https://www.e-active.gr/pub/media/catalog/product/cache/e3737e95c44d4fd25a472509b026ccfa/r/a/razer-gaming-headset-kraken-v3-1.jpg",source:"https://www.razer.com/ap-en/gaming-headsets/razer-kraken-v3",fallback:"Foto Razer Kraken V3",description:"Headset gaming over-ear Razer Kraken V3. Periksa rincian fitur dan kelengkapan sesuai varian sebelum membeli."},
    {id:"aoc-24g2sp",name:"AOC 24G2SP",fullName:"AOC 24G2SP Gaming Monitor",category:"Monitor",brand:"AOC",price:2199000,oldPrice:0,badge:"",badgeClass:"",image:"https://storage.aoc.com/assets/8809/AOC_24G2_PV_FTL_US.png",imageBackup:"https://www.kustompcs.co.uk/images/detailed/53/60402_6.jpg",source:"https://www.aoc.com/id/gaming/monitors/24g2sp",fallback:"Foto monitor AOC 24G2SP",description:"Monitor gaming AOC 24G2SP. Spesifikasi resolusi, refresh rate, dan konektor harus dicocokkan dengan varian pada halaman produsen."},
    {id:"asus-tuf-a15-fa507",name:"ASUS TUF Gaming A15",fullName:"ASUS TUF Gaming A15 FA507",category:"Laptop",brand:"ASUS",price:13499000,oldPrice:0,badge:"",badgeClass:"",image:"https://dlcdnwebimgs.asus.com/gain/49bac8ff-76c9-45b5-846c-057f79c30c8b/",imageBackup:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/139955-1_large.jpg",source:"https://press.asus.com/media/photos/33/albums/458/",fallback:"Foto ASUS TUF Gaming A15",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Laptop gaming ASUS TUF A15 keluarga FA507. Prosesor, GPU, RAM, dan layar berbeda berdasarkan kode konfigurasi yang dijual."},
    {id:"logitech-mx-master-3s",name:"Logitech MX Master 3S",fullName:"Logitech MX Master 3S Performance Wireless Mouse",category:"Mouse",brand:"Logitech",price:1799000,oldPrice:0,badge:"",badgeClass:"",image:"https://resource.logitech.com/w_544%2Ch_466%2Car_7%3A6%2Cc_pad%2Cq_auto%2Cf_auto%2Cdpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/2025-update/mx-master-3s-bluetooth-edition-top-view-graphite-new-1.png",imageBackup:"https://f00.esfr.pl/foto/2/105878971337/2980c0a350b70f9e4e64c1e4a325c63c/logitech-mysz-mx-master-3s-szara%2C105878971337_5.webp",source:"https://www.logitech.com/id-id/shop/p/mx-master-3s",fallback:"Foto Logitech MX Master 3S",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Mouse wireless ergonomis dengan sensor hingga 8.000 DPI, Quiet Clicks, dan scroll wheel MagSpeed. Fitur dapat berbeda menurut edisi."},
    {id:"jbl-tune-720bt",name:"JBL Tune 720BT",fullName:"JBL Tune 720BT Wireless Headphones",category:"Audio",brand:"JBL",price:1499000,oldPrice:0,badge:"",badgeClass:"",image:"https://www.jbl.com.my/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf68be48c/01.JBL_Tune_720BT_ProductImage_Hero_Black.png?sfrm=png&sw=537",imageBackup:"https://id.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw83e31d04/01.JBL_Tune_720BT_ProductImage_Hero_Black.png?sfrm=png&sw=537",source:"https://id.jbl.com/en/over-ear-headphones/TUNE720BT.html",fallback:"Foto JBL Tune 720BT",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Headphone wireless over-ear JBL Tune 720BT. Periksa pilihan warna dan rincian paket dari penjual."},
    {id:"logitech-c920s",name:"Logitech C920s",fullName:"Logitech C920s Pro HD Webcam",category:"Webcam",brand:"Logitech",price:1399000,oldPrice:0,badge:"",badgeClass:"",image:"https://resource.logitech.com/c_fill%2Cq_auto%2Cf_auto%2Cdpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920s/gallery/c920s-gallery-3.png",imageBackup:"https://www.palser.com/imgs/productos/productos35_11796.jpg",source:"https://www.logitech.com/en-eu/shop/p/c920s-pro-hd-webcam",fallback:"Foto Logitech C920s Pro HD Webcam",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Webcam Logitech C920s Pro HD untuk panggilan video dan streaming dengan resolusi Full HD 1080p."},
    {id:"keychron-k2-pro",name:"Keychron K2 Pro",fullName:"Keychron K2 Pro Wireless Mechanical Keyboard",category:"Keyboard",brand:"Keychron",price:1599000,oldPrice:0,badge:"",badgeClass:"",image:"https://www.pic.bg/data/vali/636630-601af89304cf83a265a1675e7f559a7e.jpg",imageBackup:"https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/04/Product/keychron-k2-pro-wireless-mechanical-keyboard-en-blue-switch-front-view.jpg",source:"https://www.keychron.com/collections/featured-keyboards/products/keychron-k2-pro-qmk-via-wireless-mechanical-keyboard",fallback:"Foto Keychron K2 Pro",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Keyboard mekanis wireless layout 75 persen dengan dukungan koneksi kabel dan Bluetooth. Detail switch serta frame mengikuti pilihan varian."},
    {id:"logitech-g435",name:"Logitech G435",fullName:"Logitech G435 LIGHTSPEED Wireless Gaming Headset",category:"Headset",brand:"Logitech",price:1199000,oldPrice:0,badge:"",badgeClass:"",image:"https://down-ph.img.susercontent.com/file/sg-11134275-824i5-mfls91a9dij2be",imageBackup:"https://tauretcomputadores.com/images/products/Product_20211103171542149151237.png",source:"https://www.logitechg.com/id-id/shop/p/g435-wireless-bluetooth-gaming-headset",fallback:"Foto Logitech G435",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Headset wireless Logitech G435 dengan koneksi LIGHTSPEED dan Bluetooth. Pilihan warna dan ketersediaan mengikuti penjual."},
    {id:"fifine-am8",name:"FIFINE AM8",fullName:"FIFINE AM8 USB/XLR Dynamic Microphone",category:"Microphone",brand:"FIFINE",price:899000,oldPrice:0,badge:"",badgeClass:"",image:"https://cntronic.com/data/product/lg/ila-116788-1.webp",imageBackup:"https://cs-d.ecimg.tw/items/DCAYS5A900G52TW/i010001_1678951548.jpg",source:"https://fifinemicrophone.com/products/am8",fallback:"Foto FIFINE AM8 microphone",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Mikrofon dinamis USB/XLR FIFINE AM8 untuk penggunaan desktop, komunikasi, dan rekaman suara."},
    {id:"steelseries-qck",name:"SteelSeries QcK",fullName:"SteelSeries QcK Medium Gaming Mousepad",category:"Mousepad",brand:"SteelSeries",price:249000,oldPrice:0,badge:"",badgeClass:"",image:"https://fragstore.com/images/detailed/163/0_240_3245043f1cb17b90f8e152808da8b90d.jpeg",imageBackup:"https://fragstore.com/images/detailed/163/0_240_673a42fa53f4543934de719e7d7361df.png",source:"https://steelseries.com/gaming-mousepads/qck-series",fallback:"Foto SteelSeries QcK Mousepad",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Mousepad kain SteelSeries QcK ukuran medium. Ukuran dan edisi harus dicocokkan dengan produk yang dijual."},
    {id:"razer-deathadder-essential",name:"Razer DeathAdder Essential",fullName:"Razer DeathAdder Essential Gaming Mouse",category:"Mouse",brand:"Razer",price:399000,oldPrice:0,badge:"",badgeClass:"",image:"https://img.openshop.com.hk/s2/202209/6317195a227bc.png",imageBackup:"https://www.mipcparquecentral.com/cdn/shop/files/MouseRazerDeathadderESSENTIAL_1800x.jpg?v=1712582198",source:"https://www.razer.com/gaming-mice/razer-deathadder-essential",fallback:"Foto Razer DeathAdder Essential",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Mouse gaming berkabel Razer DeathAdder Essential dengan bentuk ergonomis. Pastikan varian dan kelengkapan dari penjual."},
    {id:"creative-pebble-v2",name:"Creative Pebble V2",fullName:"Creative Pebble V2 USB Desktop Speakers",category:"Speaker",brand:"Creative",price:599000,oldPrice:0,badge:"",badgeClass:"",image:"https://www.tech-america.com/dd2/img/item/A-1500x1500/8659055.jpg",imageBackup:"https://www.eltrox.pl/130707-product_main_2x/glosniki-komputerowe-creative-pebble-v2-usb-c-czarny.jpg",source:"https://us.creative.com/p/speakers/creative-pebble-v2",fallback:"Foto Creative Pebble V2",stock:null,stockLabel:"Konfirmasi stok ke toko",description:"Speaker desktop stereo 2.0 Creative Pebble V2 dengan daya USB dan input audio 3,5 mm."}
  ];
  let products = productSeed.map(p => ({...p, ...((storage.get('zen_products', {}) || {})[p.id] || {})}));
  let cart = storage.get('zen_cart', []);
  let wishlist = storage.get('zen_wishlist', []);
  let orders = storage.get('zen_orders', []);
  let user = storage.get('zen_user', null);
  let claimedVouchers = storage.get('zen_vouchers', []);
  let currentCategory = 'Semua';
  let currentSearch = '';
  let currentSlide = 0;
  let slideTimer;

  const rupiah = value => new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).format(Number(value) || 0);
  const productById = id => products.find(item => item.id === id);
  const saveCart = () => { storage.set('zen_cart', cart); updateCounts(); };
  const saveWishlist = () => { storage.set('zen_wishlist', wishlist); updateCounts(); };
  const iconRefresh = () => { if (window.lucide) window.lucide.createIcons(); };
  function toast(message, type='success') {
    const region = $('#toastRegion'); if (!region) return;
    const item = document.createElement('div'); item.className = `toast ${type}`; item.textContent = message; region.append(item);
    setTimeout(() => item.remove(), 3000);
  }
  function updateCounts() {
    const cartQty = cart.reduce((sum, item) => sum + item.qty, 0);
    $('#cartCount').textContent = cartQty;
    $('#wishlistCount').textContent = wishlist.length;
  }
  function bindImageFallbacks(container = document) {
    $$('img[data-backup]', container).forEach(img => {
      if (img.dataset.fallbackBound === '1') return;
      img.dataset.fallbackBound = '1';
      img.addEventListener('error', () => {
        if (img.dataset.backup && img.dataset.backupTried !== '1') {
          img.dataset.backupTried = '1';
          img.src = img.dataset.backup;
          return;
        }
        const fallback = img.nextElementSibling;
        img.hidden = true;
        if (fallback && fallback.classList.contains('image-fallback')) {
          fallback.hidden = false;
        } else {
          const note = document.createElement('span');
          note.className = 'image-fallback image-fallback-inline';
          note.textContent = img.dataset.fallback || img.alt || 'Foto produk belum tersedia';
          if (img.closest('.cart-line, .search-result, .product-detail')) {
            note.style.width = `${Math.max(40, img.getBoundingClientRect().width)}px`;
            note.style.minHeight = `${Math.max(36, img.getBoundingClientRect().height)}px`;
            img.replaceWith(note);
          } else {
            img.insertAdjacentElement('afterend', note);
          }
        }
      });
    });
  }
  function showModal(html) {
    $('#modalContent').innerHTML = html;
    bindImageFallbacks($('#modalContent'));
    $('#modalBackdrop').hidden = false;
    document.body.style.overflow = 'hidden';
    iconRefresh();
  }
  function closeModal() { $('#modalBackdrop').hidden = true; document.body.style.overflow = ''; }
  function productCard(product) {
    const wished = wishlist.includes(product.id);
    const badge = product.badge ? `<span class="product-badge ${product.badgeClass || ''}">${product.badge}</span>` : '';
    return `<article class="product-card" data-product="${product.id}">
      ${badge}<button class="wishlist-product ${wished ? 'active' : ''}" data-wishlist="${product.id}" aria-label="${wished ? 'Hapus dari' : 'Tambah ke'} wishlist"><i data-lucide="heart"></i></button>
      <button class="product-image-wrap" data-detail="${product.id}" aria-label="Lihat ${product.fullName}" style="border:0;background:transparent;width:100%;cursor:pointer"><img src="${product.image}" data-backup="${product.imageBackup || ''}" alt="${product.fullName}" loading="lazy" referrerpolicy="no-referrer"><span class="image-fallback" hidden>${product.fallback}</span></button>
      <div class="product-info"><p class="product-name">${product.name}</p><p class="product-category">${product.category}</p>
      <div class="product-bottom"><span class="product-price">${rupiah(product.price)}</span>${Number(product.oldPrice)>Number(product.price)?`<span class="product-old-price">${rupiah(product.oldPrice)}</span>`:''}<button class="add-cart-btn" data-cart="${product.id}" aria-label="Tambah ${product.name} ke keranjang"><i data-lucide="shopping-cart"></i></button></div></div>
    </article>`;
  }
  function renderProducts() {
    const grid = $('#productGrid');
    const matching = products.filter(p => (currentCategory === 'Semua' || p.category === currentCategory || (currentCategory === 'Audio' && p.category === 'Audio')) && (!currentSearch || `${p.name} ${p.fullName} ${p.category}`.toLowerCase().includes(currentSearch.toLowerCase())));
    grid.innerHTML = matching.length ? matching.map(productCard).join('') : '<div class="empty-state" style="grid-column:1/-1"><i data-lucide="search-x"></i><strong>Produk tidak ditemukan</strong><span>Coba kata kunci atau kategori lain.</span></div>';
    bindImageFallbacks(grid);
    iconRefresh();
  }
  function renderSearch(query) {
    const results = $('#searchResults'); const value = query.trim().toLowerCase();
    if (!value) { results.hidden = true; results.innerHTML = ''; return; }
    const found = products.filter(p => `${p.name} ${p.fullName} ${p.category}`.toLowerCase().includes(value));
    results.innerHTML = found.length ? found.map(p => `<button class="search-result" data-search-detail="${p.id}"><img src="${p.image}" data-backup="${p.imageBackup || ''}" data-fallback="${p.fallback || p.fullName}" alt="${p.fullName}" referrerpolicy="no-referrer"><span>${p.fullName}<small>${rupiah(p.price)}</small></span></button>`).join('') : '<div class="search-empty">Produk tidak ditemukan.</div>';
    results.hidden = false;
    bindImageFallbacks(results);
  }
  function addToCart(id) {
    const product = productById(id); if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty += 1; else cart.push({id, qty:1});
    saveCart(); toast(`${product.name} ditambahkan ke keranjang.`);
  }
  function toggleWishlist(id) {
    const product = productById(id); if (!product) return;
    if (wishlist.includes(id)) { wishlist = wishlist.filter(item => item !== id); toast('Produk dihapus dari wishlist.'); }
    else { wishlist.push(id); toast('Produk ditambahkan ke wishlist.'); }
    saveWishlist(); renderProducts();
  }
  function showProductDetail(id) {
    const p = productById(id); if (!p) return;
    showModal(`<div class="product-detail"><img src="${p.image}" data-backup="${p.imageBackup || ''}" alt="${p.fullName}" data-fallback="${p.fallback}" referrerpolicy="no-referrer"><div><span class="eyebrow">${p.category}</span><h2 id="modalTitle">${p.fullName}</h2><div class="detail-price">${rupiah(p.price)}</div><p>${p.description || 'Informasi produk mengikuti model yang tercantum.'}</p><p class="product-stock-note">Stok: ${p.stock===null || p.stock===undefined ? (p.stockLabel || 'Konfirmasi ke toko') : `${p.stock} unit`}. Harga yang tampil merupakan harga referensi dan perlu dikonfirmasi sebelum transaksi.</p><div class="modal-actions"><button class="modal-primary" id="detailAddCart">Tambah ke Keranjang</button><a class="modal-secondary" href="${p.source}" target="_blank" rel="noopener" style="display:grid;place-items:center">Situs Produk</a></div></div></div>`);
    $('#detailAddCart').addEventListener('click', () => { addToCart(id); closeModal(); });
  }
  function showCart() {
    if (!cart.length) { showModal(`<div class="empty-state"><i data-lucide="shopping-cart"></i><strong id="modalTitle">Keranjang masih kosong</strong><p>Tambahkan produk yang kamu suka untuk mulai berbelanja.</p><button class="modal-primary" id="continueShopping">Lihat Produk</button></div>`); $('#continueShopping').onclick = () => { closeModal(); $('#produk').scrollIntoView({behavior:'smooth'}); }; return; }
    const lines = cart.map(item => { const p=productById(item.id); if(!p) return ''; return `<div class="cart-line"><img src="${p.image}" data-backup="${p.imageBackup || ''}" data-fallback="${p.fallback || p.fullName}" alt="${p.fullName}" referrerpolicy="no-referrer"><div><strong>${p.name}</strong><small>${rupiah(p.price)} / produk</small><div class="qty-control"><button data-qty="${p.id}" data-delta="-1">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div></div><strong>${rupiah(p.price*item.qty)}</strong></div>`; }).join('');
    const total = cart.reduce((sum,item)=>sum+(productById(item.id)?.price||0)*item.qty,0);
    showModal(`<h2 id="modalTitle">Keranjang Belanja</h2><p>Periksa produk dan jumlah sebelum melanjutkan.</p>${lines}<div class="cart-summary"><span>Subtotal</span><span>${rupiah(total)}</span></div><div class="modal-actions"><button class="modal-secondary" id="clearCart">Kosongkan</button><button class="modal-primary" id="checkoutBtn">Lanjut Checkout</button></div>`);
    $$('[data-qty]').forEach(btn => btn.addEventListener('click', () => { const item=cart.find(x=>x.id===btn.dataset.qty); if(!item) return; item.qty+=Number(btn.dataset.delta); if(item.qty<1) cart=cart.filter(x=>x.id!==item.id); saveCart(); showCart(); }));
    $('#clearCart').onclick = () => { cart=[]; saveCart(); showCart(); };
    $('#checkoutBtn').onclick = showCheckout;
  }
  function showCheckout() {
    const subtotal=cart.reduce((sum,item)=>sum+(productById(item.id)?.price||0)*item.qty,0);
    showModal(`<h2 id="modalTitle">Checkout Pesanan</h2><p>Ini checkout demo lokal. Tidak ada pembayaran yang diproses dan pesanan tidak dikirim ke backend.</p><form class="modal-form" id="checkoutForm"><label>Nama penerima<input name="name" required value="${user?.name||''}" placeholder="Nama lengkap"></label><label>Nomor WhatsApp<input name="phone" required inputmode="tel" placeholder="08xxxxxxxxxx"></label><label>Alamat pengiriman<textarea name="address" required rows="3" style="width:100%;border:1px solid var(--line);border-radius:9px;background:var(--surface-2);color:var(--text);padding:10px"></textarea></label><label>Kode voucher<select name="voucher"><option value="">Tanpa voucher</option>${claimedVouchers.map(v=>`<option value="${v}">${v}</option>`).join('')}</select></label><div class="cart-summary"><span>Total contoh</span><span>${rupiah(subtotal)}</span></div><button class="modal-primary" type="submit">Buat Pesanan Demo</button></form>`);
    $('#checkoutForm').addEventListener('submit', event => {
      event.preventDefault(); const form=new FormData(event.currentTarget); const order={id:'ZEN-'+Date.now().toString().slice(-8),date:new Date().toISOString(),status:'Menunggu konfirmasi',name:form.get('name'),phone:form.get('phone'),address:form.get('address'),items:cart.map(x=>({...x})),total:subtotal,voucher:form.get('voucher')};
      orders.unshift(order); storage.set('zen_orders',orders); cart=[]; saveCart();
      showModal(`<div class="empty-state"><i data-lucide="check-circle-2"></i><strong id="modalTitle">Pesanan demo dibuat</strong><p>Nomor pesanan: <b>${order.id}</b><br>Ini hanya tersimpan di browser perangkat ini.</p><button class="modal-primary" id="closeOrder">Selesai</button></div>`); $('#closeOrder').onclick=closeModal;
    });
  }
  function showWishlist() {
    const items=wishlist.map(id=>productById(id)).filter(Boolean);
    if(!items.length){showModal(`<div class="empty-state"><i data-lucide="heart"></i><strong id="modalTitle">Wishlist kamu kosong</strong><p>Tekan ikon hati pada produk untuk menyimpannya.</p></div>`);return;}
    showModal(`<h2 id="modalTitle">Wishlist Saya</h2>${items.map(p=>`<div class="cart-line"><img src="${p.image}" data-backup="${p.imageBackup || ''}" data-fallback="${p.fallback || p.fullName}" alt="${p.fullName}" referrerpolicy="no-referrer"><div><strong>${p.name}</strong><small>${rupiah(p.price)}</small></div><button class="modal-secondary" data-remove-wish="${p.id}">Hapus</button></div>`).join('')}`);
    $$('[data-remove-wish]').forEach(btn=>btn.onclick=()=>toggleWishlist(btn.dataset.removeWish));
  }
  function showHistory() {
    if(!orders.length){showModal(`<div class="empty-state"><i data-lucide="package-search"></i><strong id="modalTitle">Belum ada riwayat pesanan</strong><p>Pesanan demo yang kamu buat akan muncul di sini.</p></div>`);return;}
    showModal(`<h2 id="modalTitle">Riwayat Pesanan</h2>${orders.map(o=>`<div class="cart-line"><div class="avatar"><i data-lucide="package"></i></div><div><strong>${o.id}</strong><small>${new Date(o.date).toLocaleString('id-ID')} · ${o.status}</small></div><strong>${rupiah(o.total)}</strong></div>`).join('')}`);
  }
  function showTrack() {
    showModal(`<h2 id="modalTitle">Lacak Pesanan</h2><p>Masukkan nomor pesanan demo untuk melihat status yang tersimpan di browser ini.</p><form class="modal-form" id="trackForm"><label>Nomor pesanan<input name="orderId" required placeholder="Contoh: ZEN-12345678"></label><button class="modal-primary" type="submit">Lacak Pesanan</button></form><div id="trackResult"></div>`);
    $('#trackForm').addEventListener('submit',e=>{e.preventDefault();const id=new FormData(e.currentTarget).get('orderId').trim();const o=orders.find(x=>x.id.toLowerCase()===id.toLowerCase());$('#trackResult').innerHTML=o?`<p><b>${o.id}</b><br>Status: ${o.status}<br>Total: ${rupiah(o.total)}</p>`:'<p>Nomor pesanan tidak ditemukan pada browser ini.</p>';});
  }
  function showNotifications() {
    showModal(`<div class="empty-state"><i data-lucide="bell"></i><strong id="modalTitle">Belum ada notifikasi</strong><p>Notifikasi pesanan dan promo akan tampil setelah sistem tersambung ke backend toko.</p></div>`);
    $$('.notification-trigger .count-badge').forEach(b=>b.textContent='0');
  }
  function showAccount() {
    if(user){showModal(`<h2 id="modalTitle">Akun Demo</h2><p>Masuk sebagai <b>${user.name}</b> (${user.email})</p><div class="modal-actions"><button class="modal-secondary" id="accountOrders">Riwayat Pesanan</button><button class="modal-primary" id="logoutBtn">Keluar</button></div>`);$('#accountOrders').onclick=showHistory;$('#logoutBtn').onclick=()=>{user=null;storage.set('zen_user',null);closeModal();toast('Kamu telah keluar dari akun demo.');};return;}
    showModal(`<h2 id="modalTitle">Masuk / Daftar</h2><p>Autentikasi ini hanya simulasi frontend dan tidak menggunakan akun backend.</p><form class="modal-form" id="loginForm"><label>Nama<input name="name" required placeholder="Nama kamu"></label><label>Email<input type="email" name="email" required placeholder="nama@email.com"></label><button type="submit" class="modal-primary">Masuk ke Demo</button></form>`);
    $('#loginForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);user={name:d.get('name'),email:d.get('email')};storage.set('zen_user',user);closeModal();toast(`Selamat datang, ${user.name}!`);});
  }
  function claimVoucher() { showModal(`<div class="empty-state"><i data-lucide="ticket"></i><strong id="modalTitle">Voucher belum tersedia</strong><p>Belum ada kode voucher aktif yang dikonfigurasi oleh toko. Periksa halaman Promo setelah informasi resmi tersedia.</p><a class="modal-primary" href="promo.html" style="display:inline-grid;place-items:center;padding:0 18px">Lihat Promo</a></div>`); }

  // Theme
  const setTheme = theme => { document.documentElement.dataset.theme=theme; storage.set('zen_theme',theme); };
  setTheme(storage.get('zen_theme','light'));
  $('#themeToggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

  // Banner carousel: real horizontal translateX movement.
  const track=$('#heroTrack'); const dots=$('#sliderDots');
  // Capture errors on both the real slide and the cloned slide used for looping.
  track.addEventListener('error', event => {
    const img = event.target;
    if (img instanceof HTMLImageElement && img.closest('.hero-product-shot')) {
      if (img.dataset.backup && !img.dataset.backupTried) { img.dataset.backupTried = '1'; img.src = img.dataset.backup; return; }
      img.style.display = 'none';
      img.closest('.hero-product-shot').classList.add('image-unavailable');
    }
  }, true);
  const realSlides=$$('.hero-slide',track); const realSlideCount=realSlides.length;
  const firstClone=realSlides[0].cloneNode(true); firstClone.setAttribute('aria-hidden','true');
  const lastClone=realSlides[realSlides.length-1].cloneNode(true); lastClone.setAttribute('aria-hidden','true');
  track.insertBefore(lastClone,realSlides[0]); track.append(firstClone);
  let trackIndex=1; let sliderPaused=false;
  dots.innerHTML=realSlides.map((_,i)=>`<button class="slider-dot ${i===0?'active':''}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join('');
  function paintDots(){const active=(trackIndex-1+realSlideCount)%realSlideCount;$$('.slider-dot').forEach((dot,i)=>dot.classList.toggle('active',i===active));}
  function moveTrack(index,animate=true){trackIndex=index;track.style.transition=animate?'transform .82s cubic-bezier(.2,.75,.25,1)':'none';track.style.transform=`translateX(-${trackIndex*100}%)`;paintDots();}
  function goSlide(index){moveTrack(index,true);}
  track.addEventListener('transitionend',()=>{if(trackIndex===realSlideCount+1)moveTrack(1,false);else if(trackIndex===0)moveTrack(realSlideCount,false);});
  function restartSlider(){clearInterval(slideTimer);slideTimer=setInterval(()=>{if(!sliderPaused)goSlide(trackIndex+1);},5000);}
  $('#heroPrev').onclick=()=>{goSlide(trackIndex-1);restartSlider();};$('#heroNext').onclick=()=>{goSlide(trackIndex+1);restartSlider();};
  dots.addEventListener('click',e=>{const dot=e.target.closest('[data-slide]');if(dot){goSlide(Number(dot.dataset.slide)+1);restartSlider();}});
  let touchStart=0;$('#heroSlider').addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].clientX;},{passive:true});$('#heroSlider').addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>40){goSlide(trackIndex+(delta<0?1:-1));restartSlider();}},{passive:true});
  $('#heroSlider').addEventListener('mouseenter',()=>sliderPaused=true);$('#heroSlider').addEventListener('mouseleave',()=>sliderPaused=false);$('#heroSlider').addEventListener('focusin',()=>sliderPaused=true);$('#heroSlider').addEventListener('focusout',()=>sliderPaused=false);moveTrack(1,false);restartSlider();

  // Search, product cards, wishlist, cart.
  $('#searchInput').addEventListener('input',e=>{currentSearch=e.target.value;renderSearch(currentSearch);renderProducts();});
  $('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter'){const first=$('[data-search-detail]',$('#searchResults'));if(first){showProductDetail(first.dataset.searchDetail);$('#searchResults').hidden=true;}else{$('#produk').scrollIntoView({behavior:'smooth'});$('#searchResults').hidden=true;}}if(e.key==='Escape')$('#searchResults').hidden=true;});
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#searchInput').focus();$('#searchInput').select();}if(e.key==='Escape')closeModal();});
  $('#productGrid').addEventListener('click',e=>{const cartBtn=e.target.closest('[data-cart]');const wishBtn=e.target.closest('[data-wishlist]');const detail=e.target.closest('[data-detail]');if(cartBtn)addToCart(cartBtn.dataset.cart);else if(wishBtn)toggleWishlist(wishBtn.dataset.wishlist);else if(detail)showProductDetail(detail.dataset.detail);});
  $('#searchResults').addEventListener('click',e=>{const btn=e.target.closest('[data-search-detail]');if(btn){showProductDetail(btn.dataset.searchDetail);$('#searchResults').hidden=true;}});
  document.addEventListener('click',e=>{if(!e.target.closest('#searchWrap'))$('#searchResults').hidden=true;});
  $('#cartTopBtn').onclick=()=>{location.href='cart.html';};$('#wishlistTopBtn').onclick=()=>{location.href='wishlist.html';};$('#notificationBtn').onclick=showNotifications;$('#accountBtn').onclick=()=>showModal(`<h2 id="modalTitle">Menu Akun</h2><p>Akses cepat ke profil, pesanan, dan fitur pelanggan.</p><div class="account-modal-links"><a href="profile.html">Profil &amp; Pengaturan</a><a href="orders.html">Riwayat Pesanan</a><a href="login.html">Masuk / Daftar</a><a href="promo.html">Voucher &amp; Promo</a></div>`);
  $('#showAllProducts').onclick=()=>{location.href='products.html';};

  // Categories and mobile navigation.
  $('#categoryBtn').onclick=()=>{$('#categoryMenu').hidden=!$('#categoryMenu').hidden;};
  $('#categoryMenu').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(!button)return;currentCategory=button.dataset.category;renderProducts();$('#categoryMenu').hidden=true;$('#produk').scrollIntoView({behavior:'smooth'});});
  $('#mobileMenuBtn').onclick=()=>$('#navLinks').classList.toggle('mobile-open');
  $$('.nav-link').forEach(link=>link.addEventListener('click',()=>$('#navLinks').classList.remove('mobile-open')));
  $('#modalClose').onclick=closeModal;$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal();});

  // Newsletter validation.
  $('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();const input=$('#newsletterEmail');if(!input.checkValidity()){input.reportValidity();return;}e.currentTarget.reset();toast('Newsletter belum terhubung ke backend. Email tidak dikirim atau disimpan.','error');});
  $('#claimVoucherBtn').onclick=claimVoucher;
  $('#backToTop').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  $('#whatsappFloat').setAttribute('href','https://wa.me/6282221101650');
  $('#yearNow').textContent=new Date().getFullYear();
  updateCounts();renderProducts();iconRefresh();
})();
