'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const id = useId().replace(/:/g, '_');
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let isCurrent = true;
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'inherit',
        themeCSS: 'margin: 1.5rem auto 0; text-align: center;',
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      });

      const cleanChart = chart.replaceAll('\\n', '\n');
      mermaid
        .render(`mermaid_${id}`, cleanChart)
        .then(({ svg }) => {
          if (isCurrent) setSvg(svg);
        })
        .catch((err) => {
          console.error('Mermaid render error:', err);
        });
    });

    return () => {
      isCurrent = false;
    };
  }, [chart, resolvedTheme, mounted, id]);

  if (!mounted || !svg) {
    return (
      <div className="my-6 p-4 rounded-xl border border-border bg-card text-center text-xs text-muted-foreground animate-pulse">
        Memuat diagram visual...
      </div>
    );
  }

  return (
    <div 
      className="my-6 flex justify-center overflow-x-auto p-4 rounded-xl border border-border bg-card shadow-sm"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
