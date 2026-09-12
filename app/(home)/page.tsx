import Link from 'next/link';
import { 
  BookOpen, 
  Terminal, 
  Award, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Database,
  Cloud,
  User,
  Sparkles,
  GitBranch,
  ShieldCheck,
  BrainCircuit,
  Binary
} from 'lucide-react';
import { siteConfig } from '@/lib/shared';

const modules = [
  {
    week: 'Minggu 1',
    title: 'Fondasi AI & Lingkungan Komputasi',
    desc: 'Setup ekosistem Python 3.10+, Jupyter/Colab, GPU acceleration, 4 kuadran AI, arsitektur agen PEAS, dan Stranas KA Indonesia 2020-2045.',
    meetings: [
      { num: '01', title: 'Setup Lingkungan Komputasi Modern & Tools AI', href: '/docs/pertemuan-01' },
      { num: '02', title: 'Konsep Dasar, Teknologi & Aplikasi AI', href: '/docs/pertemuan-02' },
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    icon: Terminal
  },
  {
    week: 'Minggu 2',
    title: 'Metodologi & Kakas Proyek Sains Data',
    desc: 'Siklus CRISP-DM, 21 Unit SKKNI 299/2020, Git/GitHub, 6 pustaka inti, vektorisasi NumPy BMI, serta studi kasus dataset imunisasi bayi DKI.',
    meetings: [
      { num: '03', title: 'Metodologi Pengembangan Sains Data Berbasis Data', href: '/docs/pertemuan-03' },
      { num: '04', title: 'Kakas Proyek Sains Data (Tools for Data Science)', href: '/docs/pertemuan-04' },
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    border: 'hover:border-indigo-500/50',
    icon: Binary
  },
  {
    week: 'Minggu 3',
    title: 'Business & Data Understanding',
    desc: 'Biaya asimetris finansial, machine learning end-to-end, prediksi saham Tata Global LSTM/ARIMA, 4 skala Stevens, dan analisis mobil.',
    meetings: [
      { num: '05', title: 'Business Understanding & Rencana Proyek AI', href: '/docs/pertemuan-05' },
      { num: '06', title: 'Data Understanding (Non-Visualisasi)', href: '/docs/pertemuan-06' },
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    icon: Database
  },
  {
    week: 'Minggu 4',
    title: 'Visualisasi & Pembersihan Data',
    desc: 'Visualisasi variabel vs statistik, uji ANOVA satu arah mobil, 5 studi kasus notebook statistik, sampling ilmiah, penanganan imbalanced SMOTE, dan pembersihan data riil.',
    meetings: [
      { num: '07', title: 'Exploratory Data Analysis & Visualisasi Statistik', href: '/docs/pertemuan-07' },
      { num: '08', title: 'Data Preparation: Penentuan Objek, Pembersihan & Validasi', href: '/docs/pertemuan-08' },
    ],
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
    icon: Layers
  },
  {
    week: 'Minggu 5',
    title: 'Konstruksi Data & Rekayasa Fitur',
    desc: 'Penskalaan numerik (MinMax/Robust/Standard), transformasi distribusi (Box-Cox), kategorikal encoding canggih, dan feature selection.',
    meetings: [
      { num: '09', title: 'Konstruksi & Transformasi Data Numerik', href: '/docs/pertemuan-09' },
      { num: '10', title: 'Feature Engineering, Encoding & Labeling', href: '/docs/pertemuan-10' },
    ],
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
    icon: Sparkles
  },
  {
    week: 'Minggu 6',
    title: 'Pemodelan Terawasi (Supervised Learning)',
    desc: 'Skenario validasi anti-data leakage, algoritma Klasifikasi (Random Forest, XGBoost) dan Regresi (Lasso, Ridge, Gradient Boosting).',
    meetings: [
      { num: '11', title: 'Skenario Pemodelan & Klasifikasi Terawasi', href: '/docs/pertemuan-11' },
      { num: '12', title: 'Pemodelan Regresi & Analisis Residual', href: '/docs/pertemuan-12' },
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'hover:border-violet-500/50',
    icon: Cpu
  },
  {
    week: 'Minggu 7',
    title: 'Segmentasi & Jaringan Saraf Tiruan',
    desc: 'Unsupervised clustering (K-Means++, DBSCAN, Silhouette) dan arsitektur Deep Learning (Perceptron, Multilayer Perceptron, Backprop).',
    meetings: [
      { num: '13', title: 'Klastering Tak Terawasi (K-Means/DBSCAN)', href: '/docs/pertemuan-13' },
      { num: '14', title: 'Deep Learning & Artificial Neural Networks', href: '/docs/pertemuan-14' },
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
    icon: BrainCircuit
  },
  {
    week: 'Minggu 8',
    title: 'Evaluasi Model & MLOps Deployment',
    desc: 'Metrik evaluasi lengkap (ROC-AUC, PR-Curve, SHAP), serialisasi model, perancangan REST API FastAPI, dan deployment web di cloud.',
    meetings: [
      { num: '15', title: 'Evaluasi Diagnostik & Interpretasi Model', href: '/docs/pertemuan-15' },
      { num: '16', title: 'Model Deployment Web di Cloud & MLOps', href: '/docs/pertemuan-16' },
    ],
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'hover:border-emerald-500/50',
    icon: Cloud
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto text-center">
          {/* Owner Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            <User className="w-3.5 h-3.5" />
            <span>Portal Pembelajaran oleh <strong>{siteConfig.author}</strong></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Data Science &amp; Artificial Intelligence <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Master Hub &amp; Knowledge Base
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Panduan terlengkap <strong>16 Pertemuan (8 Minggu)</strong> berbasis Standar Kompetensi Kerja Nasional Indonesia (<strong>SKKNI No. 299 Tahun 2020</strong>). Diperkaya dengan formulasi matematis, diagram arsitektur, dan kode Python terapan modern.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Mulai Eksplorasi Materi
            </Link>
            <Link
              href="/docs/silabus-lengkap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all"
            >
              <Layers className="w-4 h-4" />
              Peta Silabus 16 Sesi
            </Link>
            <Link
              href="/docs/tugas-akhir-capstone"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all"
            >
              <Cloud className="w-4 h-4" />
              Panduan Capstone Project
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/60 text-left">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">16 Sesi Lengkap</div>
              <div className="text-xs text-muted-foreground mt-1">8 Minggu Kurikulum Terpadu</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">SKKNI No. 299</div>
              <div className="text-xs text-muted-foreground mt-1">Associate Data Scientist</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">End-to-End MLOps</div>
              <div className="text-xs text-muted-foreground mt-1">EDA s.d. Cloud Deployment</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Hands-on Python</div>
              <div className="text-xs text-muted-foreground mt-1">Scikit-learn, PyTorch &amp; FastAPI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution Banner (Official Source Credit) */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/40 border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span>
              <strong>Atribusi Sumber Materi Resmi:</strong> Dikembangkan berdasarkan materi Thematic Academy Digital Talent Scholarship 2021 Kementerian Kominfo RI bekerjasama dengan STEI Institut Teknologi Bandung (Ir. Windy Gambetta, MBA).
            </span>
          </div>
          <Link
            href="/docs/referensi-standar"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
          >
            Lihat Dokumen Rujukan
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 8-Week Curriculum Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Kurikulum 16 Pertemuan Pembelajaran
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Setiap pertemuan disusun secara mendalam dengan riset industri mutakhir, formulasi teori, dan implementasi kode Python nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl bg-card border border-border flex flex-col justify-between transition-all duration-200 ${m.border} hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-primary/10">
                      {m.week}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {m.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/60">
                  {m.meetings.map((meet, mIdx) => (
                    <Link
                      key={mIdx}
                      href={meet.href}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors text-xs sm:text-sm font-medium group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center">
                          {meet.num}
                        </span>
                        <span>{meet.title}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Owner Profile & Capstone Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider">
              Tentang Pemilik &amp; Pengembang Portal
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {siteConfig.author}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Website ini dibangun sebagai pusat dokumentasi, kurikulum mandiri, dan basis pengetahuan terstruktur untuk memperdalam seluruh spektrum sains data dan kecerdasan buatan dari fondasi matematika hingga implementasi aplikasi web berbasis cloud.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/docs"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Buka Dokumentasi Lengkap
              </Link>
              <Link
                href="/docs/tugas-akhir-capstone"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border border-border hover:bg-card transition-colors"
              >
                Panduan Proyek Akhir
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4 text-xs sm:text-sm">
              <div className="font-bold text-foreground border-b border-border pb-3">
                Informasi Kepemilikan &amp; Standar
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Pemilik Website:</span>
                <span className="font-semibold text-foreground">{siteConfig.author}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Standar Acuan:</span>
                <span className="font-semibold text-foreground">SKKNI No. 299 Thn 2020</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Kurikulum Dasar:</span>
                <span className="font-semibold text-foreground">TA DTS Kominfo &amp; ITB</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Cakupan Materi:</span>
                <span className="font-semibold text-foreground">16 Pertemuan (8 Minggu)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 border-t border-border text-center text-xs text-muted-foreground space-y-2">
        <p>
          © {new Date().getFullYear()} <strong>{siteConfig.author}</strong>. Hak cipta materi terstruktur dilindungi.
        </p>
        <p>
          Berdasarkan silabus Thematic Academy Data Scientist AI DTS Kementerian Komunikasi &amp; Informatika RI serta STEI ITB.
        </p>
      </footer>
    </div>
  );
}
