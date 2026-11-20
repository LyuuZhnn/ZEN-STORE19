# ZEN STORE V3 — Blue & Cyan Frontend Package

**Brand:** ZEN STORE — Better Life, Better You  
**Developer profile:** MUSYAFFA HANIF SUNNI  
**Stack:** HTML, CSS, Vanilla JavaScript, browser LocalStorage; GitHub Pages compatible as a static frontend.

## Status and scope

Paket ini merupakan frontend demo lokal. Ini bukan hasil merge terverifikasi dari source repository remote. Source proyek/database Supabase lama tidak tersedia pada paket sumber, sehingga jangan menganggapnya memiliki integrasi backend produksi. Fitur yang bergantung pada server tetap memerlukan konfigurasi backend yang sah.

## Included pages

- `index.html` — homepage dengan carousel horizontal 4 slide, empat service highlights, Flash Sale/Voucher, lima belas kartu produk, dan newsletter.
- `categories.html`, `products.html`, `bestseller.html`, `product-detail.html` — navigasi kategori, katalog 15 seed produk, dan detail produk.
- `promo.html`, `cart.html`, `wishlist.html`, `checkout.html`, `orders.html`, `tracking.html` — promo, keranjang tamu, wishlist lokal, checkout demo, riwayat pesanan lokal, dan pelacakan lokal.
- `about.html`, `contact.html`, `developer.html`, `help.html`, `login.html`, `register.html`, `profile.html`, `privacy.html`, `terms.html` — halaman informasi pelanggan dan profil developer.
- `admin/index.html` — preview UI admin lokal; bukan autentikasi aman atau CRUD backend produksi.
- `assets/images/` — logo, favicon, ilustrasi brand, mascot newsletter, dan social cover.
- `assets/banners/` — aset banner yang masih digunakan. Banner slide pertama sekarang memakai komposisi foto produk teknologi asli melalui URL eksternal; artwork anime banner pertama telah dihapus dari paket.
- `PRODUCT_IMAGE_SOURCES_UPDATE.md` — daftar URL foto produk dan sumber/URL cadangan.
- `backend/CONFIGURATION.md` — panduan kebutuhan konfigurasi backend.

## 15 seed product models

Lima produk awal: Royal Kludge RK87, Baseus Bowie M2s, Logitech G502 Hero, Razer Kraken V3, dan AOC 24G2SP.

Sepuluh model tambahan melengkapi lima produk awal: ASUS TUF Gaming A15, Logitech MX Master 3S, JBL Tune 720BT, Logitech C920s Pro HD Webcam, Keychron K2 Pro, Logitech G435, FIFINE AM8, SteelSeries QcK, Razer DeathAdder Essential, dan Creative Pebble V2. Tidak ada router, modem, perangkat Wi-Fi, atau produk jaringan di katalog. Seluruh foto produk menggunakan URL foto yang ditemukan pada halaman produsen atau retailer yang relevan; daftar sumber dan URL alternatif dicatat di `PRODUCT_IMAGE_SOURCES_UPDATE.md`.

Harga produk seed merupakan referensi demo dan wajib diverifikasi sebelum digunakan untuk transaksi. Stok sebagian produk sengaja belum ditetapkan; Admin/operator harus memasukkan stok aktual. Sebagian foto dimuat dari host eksternal, sehingga membutuhkan internet dan dapat berubah atau diblokir kebijakan hotlink. Periksa izin penggunaan gambar sebelum penggunaan komersial.

## Features available locally

- Blue & Cyan CSS design tokens; Light/Dark theme saved in browser.
- Homepage horizontal carousel dengan `translateX`, autoplay, previous/next, dots, swipe, pause on hover/focus dan seamless clone loop.
- Slide pertama menggunakan foto produk teknologi; jika URL gambar tidak tersedia, kartu gambar menampilkan fallback netral.
- Pencarian, filter kategori, 15 produk seed, detail produk, kartu produk, keranjang tamu, perubahan kuantitas, dan wishlist lokal menggunakan product IDs yang sama.
- Guest checkout menyimpan ringkasan order di LocalStorage browser dan membuka WhatsApp hanya jika nomor toko sudah dikonfigurasi. Membuka WhatsApp bukan bukti pesanan diterima atau dibayar.
- Order history dan tracking memerlukan order ID dan nomor telepon yang tersimpan secara lokal.
- Newsletter memvalidasi email tetapi belum mengirim/menyimpan ke backend. Contact form juga belum tersambung ke endpoint.
- Developer page memiliki tautan sosial dan fitur copy Discord username.
- PWA shell/offline cache hanya menyimpan aset lokal; foto produk eksternal dan operasi backend tidak dijamin offline.

## Not production-ready

- Tidak ada Supabase URL, publishable/anon key, schema, Storage bucket, atau RLS lama yang disediakan. Login/Register belum menyimpan akun.
- Admin adalah preview lokal, bukan autentikasi/otorisasi atau CRUD produksi. Jangan memasukkan data pesanan atau pelanggan nyata.
- Newsletter/kontak belum mengirim data ke backend.
- Pesanan guest hanya tersimpan di LocalStorage browser yang sama. Tidak ada pemeriksaan stok authoritative, gateway pembayaran, API pengiriman, atau nomor pesanan server-side.
- Harga seed adalah referensi demo. Verifikasi harga dan stok melalui toko sebelum menampilkan sebagai penawaran aktif.
- Foto produk eksternal memerlukan internet; hak penggunaan komersial/hotlink harus dikonfirmasi. Simpan foto berlisensi di hosting milik toko untuk stabilitas.
- Kontak pribadi Developer dan kontak transaksi toko harus dikonfigurasi terpisah; jangan menyamakan keduanya.

## Run locally (Termux / Android)

```bash
termux-setup-storage
pkg update -y
pkg install git unzip python -y
mkdir -p ~/zen-store-v3
cd ~/zen-store-v3
unzip -o ~/storage/downloads/ZEN_STORE_V3_PERBAIKAN_BANNER_DAN_PRODUK.zip -d ~/zen-store-v3
python -m http.server 8080
```

Open `http://127.0.0.1:8080`. Admin preview: `http://127.0.0.1:8080/admin/`.

## Update existing Git repository safely

Buat backup terlebih dahulu dan periksa branch/remote yang benar. Jangan menjalankan `git init` ulang pada repository yang sudah ada. Setelah source hasil ekstrak disalin ke folder repository, periksa perubahan sebelum commit:

```bash
git status
git diff --stat
git add -A
git status
git commit -m "Update ZEN STORE banner and products"
git push origin main
```

Jika source memang ditempatkan di repository yang berbeda, gunakan URL dan branch yang benar sesuai pengaturan GitHub. Jangan menebak URL GitHub Pages; verifikasi pada Settings → Pages.


## Katalog produk dan navigasi terbaru

Katalog demo memuat 15 produk perangkat elektronik dan aksesori komputer: keyboard, mouse, monitor, audio/headset, laptop, webcam, mikrofon, mousepad, dan speaker. Perangkat jaringan seperti router, modem, dan Wi-Fi tidak dimasukkan. Menu utama pelanggan dibatasi menjadi Kategori, Beranda, Semua Produk, Promo, Lacak Pesanan, Tentang Kami, Kontak, dan Developer. Wishlist serta keranjang tetap berada di header; riwayat pesanan dan pengaturan akun berada di menu akun; voucher berada di halaman Promo.

Daftar tautan gambar dan halaman sumber terdapat di `PRODUCT_IMAGE_SOURCES_UPDATE.md`. Harga adalah angka referensi demo, sedangkan stok belum ditentukan. Periksa lisensi gambar, ketersediaan URL, harga, stok, dan varian sebelum operasional toko.


## Navigasi utama yang dirapikan

Menu utama pelanggan berisi delapan entri: Kategori, Beranda, Semua Produk, Promo, Lacak Pesanan, Tentang Kami, Kontak, dan Developer. Header tetap menyediakan Wishlist, Keranjang, Notifikasi, serta menu Akun. Riwayat pesanan dan pengaturan profil berada di menu Akun; Voucher berada pada area Promo.

## Katalog terbaru

Katalog berisi 15 produk elektronik dan aksesori komputer dalam kategori Keyboard, Mouse, Monitor, Audio, Headset, Laptop, Webcam, Microphone, Mousepad, dan Speaker. Harga yang ada adalah referensi demo, bukan penetapan harga transaksi. Stok perlu diisi sesuai kondisi toko.
