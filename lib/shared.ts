export const appName = 'Learn AI • Mahendar Dwi Payana';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Base URL for SEO canonical, sitemap, and metadataBase
export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL(
      process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
        ? 'https://mahendartea.github.io/Learn-AI'
        : 'http://localhost:3000'
    );

// Site & Author configuration
export const siteConfig = {
  author: 'Mahendar Dwi Payana',
  role: 'AI & Data Science Practitioner',
  title: 'Learn AI - Data Science & Artificial Intelligence Master Hub',
  description: 'Portal pembelajaran komprehensif Data Science dan Artificial Intelligence berdasarkan silabus standar SKKNI No. 299 Tahun 2020 dan kurikulum Thematic Academy Kominfo RI - STEI ITB.',
  keywords: [
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Python',
    'SKKNI No 299 Tahun 2020',
    'Kominfo DTS',
    'STEI ITB',
    'Mahendar Dwi Payana',
    'MLOps',
    'Scikit-Learn',
    'Pandas',
    'NumPy',
    'PyTorch',
    'CRISP-DM',
    'Belajar AI Indonesia'
  ],
  originalSource: {
    program: 'Thematic Academy Digital Talent Scholarship (DTS) 2021',
    institution: 'Kementerian Komunikasi dan Informatika RI (Kominfo)',
    academicPartner: 'Sekolah Teknik Elektro dan Informatika (STEI) ITB',
    leadInstructor: 'Ir. Windy Gambetta, MBA',
    standard: 'SKKNI No. 299 Tahun 2020 (Bidang Artificial Intelligence sub bidang Data Science)',
  },
  github: {
    user: 'mahendartea',
    repo: 'Learn-AI',
    branch: 'main',
  },
};

export const gitConfig = siteConfig.github;

