import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appleTouchIcon, baseUrl, logoSrc, personId, siteConfig, siteUrl, websiteId } from '@/lib/shared';

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: `https://github.com/${siteConfig.github.user}` }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  applicationName: siteConfig.title,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: baseUrl.toString(),
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: logoSrc, type: 'image/svg+xml' },
      { url: appleTouchIcon, type: 'image/png' },
    ],
    shortcut: logoSrc,
    apple: appleTouchIcon,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: `@${siteConfig.github.user}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const siteRoot = siteUrl;
const abs = (path: string) => new URL(path, `${siteRoot}/`).toString();

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.author,
      alternateName: 'Mahendartea',
      url: siteRoot,
      image: abs('logo.png'),
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      knowsAbout: siteConfig.keywords,
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.title,
      url: siteRoot,
      inLanguage: ['id', 'en'],
      author: { '@id': personId },
      publisher: { '@id': personId },
    },
    {
      '@type': 'EducationalOccupationalProgram',
      name: siteConfig.title,
      description: siteConfig.description,
      provider: { '@id': personId },
      educationalCredentialAwarded: 'Sertifikasi Associate Data Scientist (SKKNI No. 299 Tahun 2020)',
      timeToComplete: 'P8W',
      numberOfCredits: 96,
      inLanguage: 'id',
    },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className="font-sans antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: { type: 'static' } }}>{children}</RootProvider>
      </body>
    </html>
  );
}
