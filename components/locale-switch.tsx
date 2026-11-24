'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';

export function LocaleSwitch() {
  const pathname = usePathname() || '/';
  const isEn = pathname === '/en' || pathname.startsWith('/en/');

  let target: string;
  if (isEn) {
    target = pathname.replace(/^\/en/, '') || '/';
  } else {
    target = pathname === '/' ? '/en' : `/en${pathname}`;
  }

  return (
    <Link
      href={target}
      aria-label={isEn ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
      title={isEn ? 'Bahasa Indonesia' : 'English'}
      className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
    >
      <Languages className="h-3.5 w-3.5" />
      {isEn ? 'ID' : 'EN'}
    </Link>
  );
}
