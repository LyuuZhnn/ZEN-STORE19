# Panduan Termux — ZEN STORE V3

## 1) Siapkan Termux dan ekstrak ZIP

```bash
termux-setup-storage
pkg update -y
pkg install git unzip python rsync -y
mkdir -p ~/zen-store-v3
cd ~/zen-store-v3
unzip -o ~/storage/downloads/ZEN_STORE_V3_BLUE_CYAN.zip -d ~/zen-store-v3
```

## 2) Jalankan lokal

```bash
cd ~/zen-store-v3
python -m http.server 8080
```

Buka `http://127.0.0.1:8080`. Untuk menghentikan server tekan `CTRL + C`.

## 3) Backup repository yang sudah ada

```bash
cd ~/path/to/ZEN-STOREV3
git status
git remote -v
git branch --show-current
cp -a . ../ZEN-STOREV3-backup-$(date +%Y%m%d-%H%M%S)
```

Pastikan repository yang dipakai benar sebelum menyalin file. Jangan jalankan `git init` lagi pada repository lama.

## 4) Sinkronkan hasil build

```bash
rsync -av --exclude='.git' ~/zen-store-v3/ ./
git status
git diff --stat
```

Cek perubahan dan jangan menimpa konfigurasi backend lama tanpa audit. Bila sudah benar:

```bash
git add .
git commit -m "Update ZEN STORE V3 Blue Cyan frontend"
git push origin main
```

## 5) Autentikasi GitHub

Gunakan alur login resmi GitHub/credential manager atau GitHub CLI. Jika menggunakan token, masukkan hanya ketika diminta oleh prompt credential. Jangan menaruh token di URL remote, file JavaScript, `.env` frontend, atau riwayat shell.

## 6) Aktifkan GitHub Pages

Di GitHub repository: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. Pastikan `index.html` ada pada root yang dipublikasikan. Tunggu proses Actions/Pages selesai, lalu buka URL yang ditampilkan GitHub.

## 7) URL repo saat ini

Repository `ZEN-STOREV3` secara default memakai `https://lyuuzhnn.github.io/ZEN-STOREV3/`, bukan `/ZENSTORE`. URL `/ZENSTORE` yang diminta di spesifikasi saat ini terverifikasi mengembalikan 404.
