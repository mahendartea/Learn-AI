export const appName = 'Learn AI • Mahendar Dwi Payana';
export const docsRoute = '/docs';
export const enDocsRoute = '/en/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// Base path must be prefixed manually for <img>/metadata assets because
// `output: export` + `images.unoptimized` bypasses basePath injection.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const logoSrc = `${basePath}/logo.svg`;
export const appleTouchIcon = `${basePath}/apple-touch-icon.png`;

// Base URL for SEO canonical, sitemap, and metadataBase
export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL(
      process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
        ? 'https://mahendartea.github.io/Learn-AI'
        : 'http://localhost:3000'
    );

// Canonical site URL (no trailing slash) and stable structured-data node IDs
export const siteUrl = baseUrl.toString().replace(/\/$/, '');
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

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
  social: {
    // Authoritative profiles used in Person structured data (schema.org sameAs).
    github: 'https://github.com/mahendartea',
    // TODO: add your LinkedIn profile URL, e.g. 'https://www.linkedin.com/in/username'
    linkedin: '',
  },
};

export const gitConfig = siteConfig.github;

