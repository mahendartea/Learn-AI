import { sourceEn } from '@/lib/source-en';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/en/docs'>) {
  return (
    <DocsLayout tree={sourceEn.getPageTree()} {...baseOptions('en')}>
      {children}
    </DocsLayout>
  );
}
