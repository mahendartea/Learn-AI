import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Terminal,
  Layers,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Database,
  Cloud,
  User,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Binary,
  Cpu,
} from 'lucide-react';
import { siteConfig, logoSrc } from '@/lib/shared';

const modules = [
  {
    week: 'Week 1',
    title: 'AI Foundations & Computing Environment',
    desc: 'Set up a modern Python 3.10+ ecosystem, Jupyter/Colab, GPU acceleration, the four AI paradigms, PEAS agents, and Indonesia’s AI National Strategy 2020–2045.',
    meetings: [
      { num: '01', title: 'Modern Computing Environment Setup & AI Tools', href: '/en/docs/pertemuan-01' },
      { num: '02', title: 'AI Fundamentals, Technology & Applications', href: '/docs/pertemuan-02' },
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    icon: Terminal,
  },
  {
    week: 'Week 2',
    title: 'Methodology & Data Science Tools',
    desc: 'CRISP-DM lifecycle, 21 SKKNI 299/2020 units, Git/GitHub, the 6 core libraries, NumPy vectorization, and a real immunization dataset case study.',
    meetings: [
      { num: '03', title: 'Data-Driven Data Science Methodology', href: '/docs/pertemuan-03' },
      { num: '04', title: 'Tools for Data Science', href: '/docs/pertemuan-04' },
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    border: 'hover:border-indigo-500/50',
    icon: Binary,
  },
  {
    week: 'Week 3',
    title: 'Business & Data Understanding',
    desc: 'Asymmetric financial costs, end-to-end machine learning, Tata Global stock prediction, Stevens’ four scales, and automotive data analysis.',
    meetings: [
      { num: '05', title: 'Business Understanding & AI Project Planning', href: '/docs/pertemuan-05' },
      { num: '06', title: 'Data Understanding (Non-Visualization)', href: '/docs/pertemuan-06' },
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    icon: Database,
  },
  {
    week: 'Week 4',
    title: 'Visualization & Data Cleaning',
    desc: 'Variable vs. statistical visualization, one-way ANOVA, five statistics notebooks, scientific sampling, SMOTE imbalance handling, and real messy-data cleaning.',
    meetings: [
      { num: '07', title: 'Exploratory Data Analysis & Statistical Visualization', href: '/docs/pertemuan-07' },
      { num: '08', title: 'Data Preparation: Object Selection, Cleaning & Validation', href: '/docs/pertemuan-08' },
    ],
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
    icon: Layers,
  },
  {
    week: 'Week 5',
    title: 'Data Construction & Feature Engineering',
    desc: 'Numeric scaling (MinMax/Robust/Standard), distribution transforms (Box-Cox), categorical encoding, data integration (merge/join), PCA, and feature selection.',
    meetings: [
      { num: '09', title: 'Numeric Data Construction & Transformation', href: '/docs/pertemuan-09' },
      { num: '10', title: 'Feature Engineering, Encoding & Data Integration', href: '/docs/pertemuan-10' },
    ],
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
    icon: Sparkles,
  },
  {
    week: 'Week 6',
    title: 'Supervised Learning',
    desc: 'Leakage-proof validation scenarios, classification algorithms (SVM, Decision Tree, Naive Bayes, KNN, AdaBoost) and regression (OLS, SVR, Random Forest).',
    meetings: [
      { num: '11', title: 'Modeling Scenarios & Supervised Classification', href: '/docs/pertemuan-11' },
      { num: '12', title: 'Numeric Regression Modeling & Residual Diagnostics', href: '/docs/pertemuan-12' },
    ],
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'hover:border-violet-500/50',
    icon: Cpu,
  },
  {
    week: 'Week 7',
    title: 'Clustering & Neural Networks',
    desc: 'Unsupervised clustering (K-Means++, Hierarchical, DBSCAN, Silhouette) and deep learning architectures (Perceptron, MLP, CNN, RNN, Backpropagation).',
    meetings: [
      { num: '13', title: 'Unsupervised Learning: K-Means, Hierarchical & DBSCAN', href: '/docs/pertemuan-13' },
      { num: '14', title: 'Deep Learning & Artificial Neural Networks', href: '/docs/pertemuan-14' },
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
    icon: BrainCircuit,
  },
  {
    week: 'Week 8',
    title: 'Model Evaluation & MLOps Deployment',
    desc: 'Full evaluation metrics (ROC-AUC, PR-Curve, SHAP), model serialization, web deployment (Flask/Heroku, FastAPI/Streamlit), and model drift monitoring.',
    meetings: [
      { num: '15', title: 'Model Evaluation & Diagnostic Review', href: '/docs/pertemuan-15' },
      { num: '16', title: 'Web Model Deployment & MLOps Foundations', href: '/docs/pertemuan-16' },
    ],
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'hover:border-emerald-500/50',
    icon: Cloud,
  },
];

export default function EnHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src={logoSrc}
              alt="Learn AI"
              width={88}
              height={88}
              className="w-20 h-20 md:w-[88px] md:h-[88px] rounded-2xl shadow-lg ring-1 ring-primary/20"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            <User className="w-3.5 h-3.5" />
            <span>Learning portal by <strong>{siteConfig.author}</strong></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Data Science &amp; Artificial Intelligence <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Master Hub &amp; Knowledge Base
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            A complete <strong>16-session (8-week)</strong> learning path aligned with Indonesia’s National Work Competency Standard (<strong>SKKNI No. 299/2020</strong>). Enriched with mathematical formulations, architecture diagrams, and modern applied Python code.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Start Exploring
            </Link>
            <Link
              href="/en/docs/silabus-lengkap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all"
            >
              <Layers className="w-4 h-4" />
              16-Session Syllabus
            </Link>
            <Link
              href="/en/docs/tugas-akhir-capstone"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all"
            >
              <Cloud className="w-4 h-4" />
              Capstone Guide
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/60 text-left">
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">16 Full Sessions</div>
              <div className="text-xs text-muted-foreground mt-1">8-week integrated curriculum</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">SKKNI No. 299</div>
              <div className="text-xs text-muted-foreground mt-1">Associate Data Scientist</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">End-to-End MLOps</div>
              <div className="text-xs text-muted-foreground mt-1">From EDA to cloud deployment</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-foreground">Hands-on Python</div>
              <div className="text-xs text-muted-foreground mt-1">Scikit-learn, Keras &amp; FastAPI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/40 border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <span>
              <strong>Source attribution:</strong> Based on the Thematic Academy Digital Talent Scholarship 2021 curriculum by Indonesia’s Ministry of Communication &amp; Informatics (Kominfo) with STEI Institut Teknologi Bandung.
            </span>
          </div>
          <Link
            href="/en/docs/referensi-standar"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
          >
            View References
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Curriculum grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            16-Session Learning Curriculum
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Each session is built in depth with industry research, theoretical formulations, and real Python implementations.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Note: English translations are in progress. Sessions not yet translated open the original Indonesian module.
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
                  <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
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

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 border-t border-border text-center text-xs text-muted-foreground space-y-2">
        <p>
          © {new Date().getFullYear()} <strong>{siteConfig.author}</strong>. All structured material rights reserved.
        </p>
        <p>
          Based on the Thematic Academy Data Scientist AI syllabus by Kominfo RI and STEI ITB.
        </p>
      </footer>
    </div>
  );
}
