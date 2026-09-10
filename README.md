# Learn AI — Data Science & Artificial Intelligence Master Hub

[![Deploy to GitHub Pages](https://github.com/mahendartea/Learn-AI/actions/workflows/deploy.yml/badge.svg)](https://github.com/mahendartea/Learn-AI/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-blue?logo=github)](https://mahendartea.github.io/Learn-AI/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Mahendar_Dwi_Payana-purple)](https://github.com/mahendartea)

Portal dokumentasi dan pembelajaran komprehensif **Data Science & Artificial Intelligence** berdasarkan kurikulum 16 pertemuan (8 minggu) standar **SKKNI No. 299 Tahun 2020** (Sub-bidang Data Science).

🌐 **Situs Resmi:** [https://mahendartea.github.io/Learn-AI/](https://mahendartea.github.io/Learn-AI/)

---

## 📌 Sumber & Atribusi Resmi

Materi riset dan kurikulum dasar pada portal ini disusun dan dikembangkan oleh **Mahendar Dwi Payana** dengan merujuk pada:
- **Program Pelatihan**: Thematic Academy Digital Talent Scholarship (DTS) 2021
- **Institusi Penyelenggara**: Badan Penelitian dan Pengembangan SDM — Kementerian Komunikasi dan Informatika RI (Kominfo)
- **Mitra Perguruan Tinggi**: Sekolah Teknik Elektro dan Informatika (STEI), Institut Teknologi Bandung (ITB)
- **Instruktur Utama**: Ir. Windy Gambetta, MBA (STEI ITB)
- **Standar Kompetensi**: Keputusan Menteri Ketenagakerjaan RI No. 299 Tahun 2020 tentang Penetapan SKKNI Kategori Aktivitas Profesional, Ilmiah dan Teknis Golongan Pokok Aktivitas Konsultasi Manajemen Bidang Artificial Intelligence Sub-bidang Data Science.

---

## 📚 Struktur 16 Pertemuan Silabus

| Sesi | Halaman Dokumen | Topik & Unit Kompetensi SKKNI |
| :---: | :--- | :--- |
| **01** | [Pertemuan 01](https://mahendartea.github.io/Learn-AI/docs/pertemuan-01) | Setup Lingkungan Komputasi Modern & GPU Acceleration |
| **02** | [Pertemuan 02](https://mahendartea.github.io/Learn-AI/docs/pertemuan-02) | Konsep Dasar Kecerdasan Buatan & Intelligent Agents |
| **03** | [Pertemuan 03](https://mahendartea.github.io/Learn-AI/docs/pertemuan-03) | Metodologi Pengembangan Sains Data (CRISP-DM & Diagram Mermaid) |
| **04** | [Pertemuan 04](https://mahendartea.github.io/Learn-AI/docs/pertemuan-04) | Pustaka Inti NumPy & Pandas (Aturan Broadcasting Matriks KaTeX) |
| **05** | [Pertemuan 05](https://mahendartea.github.io/Learn-AI/docs/pertemuan-05) | Business Understanding & Perumusan Masalah (`J.62DMI00.001.1` - `003.1`) |
| **06** | [Pertemuan 06](https://mahendartea.github.io/Learn-AI/docs/pertemuan-06) | Akuisisi Data & Statistik Deskriptif (`J.62DMI00.004.1` - `005.1`) |
| **07** | [Pertemuan 07](https://mahendartea.github.io/Learn-AI/docs/pertemuan-07) | Exploratory Data Analysis & Visualisasi Lanjutan (`J.62DMI00.005.1`) |
| **08** | [Pertemuan 08](https://mahendartea.github.io/Learn-AI/docs/pertemuan-08) | Data Cleansing & Deteksi Outlier (`J.62DMI00.006.1` - `008.1`) |
| **09** | [Pertemuan 09](https://mahendartea.github.io/Learn-AI/docs/pertemuan-09) | Konstruksi & Transformasi Data Numerik (`J.62DMI00.009.1`) |
| **10** | [Pertemuan 10](https://mahendartea.github.io/Learn-AI/docs/pertemuan-10) | Feature Engineering & Penanganan Ketimpangan SMOTE (`J.62DMI00.009.1` - `010.1`) |
| **11** | [Pertemuan 11](https://mahendartea.github.io/Learn-AI/docs/pertemuan-11) | Skenario Pemodelan & Klasifikasi Terawasi (`J.62DMI00.012.1` - `013.1`) |
| **12** | [Pertemuan 12](https://mahendartea.github.io/Learn-AI/docs/pertemuan-12) | Pemodelan Regresi & Asumsi Klasik OLS (`J.62DMI00.013.1`) |
| **13** | [Pertemuan 13](https://mahendartea.github.io/Learn-AI/docs/pertemuan-13) | Pembelajaran Tak Terawasi: K-Means & DBSCAN (`J.62DMI00.013.1`) |
| **14** | [Pertemuan 14](https://mahendartea.github.io/Learn-AI/docs/pertemuan-14) | Jaringan Saraf Tiruan & Deep Learning (PyTorch MLP) (`J.62DMI00.013.1`) |
| **15** | [Pertemuan 15](https://mahendartea.github.io/Learn-AI/docs/pertemuan-15) | Evaluasi Diagnostik & Explainable AI (SHAP) (`J.62DMI00.014.1` - `015.1`) |
| **16** | [Pertemuan 16](https://mahendartea.github.io/Learn-AI/docs/pertemuan-16) | Deployment Microservice FastAPI & MLOps (`J.62DMI00.016.1` - `017.1`) |

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Webpack SSG Export)
- **Documentation Engine**: [Fumadocs](https://fumadocs.dev/) (UI, Core, MDX)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Mathematics Engine**: [KaTeX](https://katex.org/) (`remark-math` & `rehype-katex`)
- **Diagrams**: [Mermaid](https://mermaid.js.org/) interaktif dengan adaptasi Dark/Light Mode
- **Search**: Fumadocs Client-Side Orama Search Engine
- **CI/CD & Hosting**: GitHub Actions & GitHub Pages

---

## 🚀 Menjalankan Secara Lokal

```bash
# 1. Klon repositori
git clone https://github.com/mahendartea/Learn-AI.git
cd Learn-AI

# 2. Instal dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka `http://localhost:3000` pada peramban Anda.

---

## 📦 Static Build & Ekspor

```bash
npm run build
```

Hasil kompilasi statis akan dihasilkan ke direktori `./out` yang siap di-host pada GitHub Pages atau server statis lainnya.

---

## 👤 Pengembang & Hak Cipta

Disusun dan dikembangkan oleh **Mahendar Dwi Payana**.
