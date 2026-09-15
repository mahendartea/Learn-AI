import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig, logoSrc, siteConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base tracking-tight">
          <Image
            src={logoSrc}
            alt="Learn AI"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg shadow-sm"
            priority
          />
          <div className="flex flex-col text-left">
            <span className="leading-none text-foreground font-extrabold flex items-center gap-1.5">
              Learn AI
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/15 text-primary">
                PRO
              </span>
            </span>
            <span className="text-[10px] text-muted-foreground font-normal">
              by {siteConfig.author}
            </span>
          </div>
        </div>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        type: 'main',
        text: 'Materi Silabus',
        url: '/docs',
        active: 'nested-url',
      },
      {
        type: 'main',
        text: 'Peta 16 Sesi',
        url: '/docs/silabus-lengkap',
      },
      {
        type: 'main',
        text: 'Capstone Project',
        url: '/docs/tugas-akhir-capstone',
      },
      {
        type: 'main',
        text: 'Standar SKKNI',
        url: '/docs/referensi-standar',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
