import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { enDocsRoute } from './shared';

const docsEn = defineDocs({
  dir: 'content/docs-en',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const sourceEn = loader({
  baseUrl: enDocsRoute,
  source: docsEn.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});
