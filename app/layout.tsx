import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { baseUrl, siteConfig } from '@/lib/shared';

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  name: siteConfig.title,
  description: siteConfig.description,
  provider: {
    '@type': 'Person',
    name: siteConfig.author,
    url: `https://github.com/${siteConfig.github.user}`,
  },
  educationalCredentialAwarded: 'Sertifikasi Associate Data Scientist (SKKNI No. 299 Tahun 2020)',
  timeToComplete: 'P8W',
  numberOfCredits: 96,
  inLanguage: 'id',
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
