import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { images } from './data/images';

/**
 * Blog articles: one Markdown file per locale under src/content/blogs/{en,es}/.
 * The file name is the URL slug, so each locale gets keywords in its own
 * language. The two versions of an article share a `translationKey`, which is
 * what links them for hreflang and the language switcher.
 */
const blogs = defineCollection({
  loader: glob({ pattern: '{en,es}/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    /** Meta description and card summary. Aim for 140–160 characters. */
    description: z.string(),
    translationKey: z.string(),
    pubDate: z.coerce.date(),
    /** Set whenever the facts are rechecked or the content changes. */
    updatedDate: z.coerce.date().optional(),
    /** Card and header photo, from the verified image manifest. */
    image: z.enum(Object.keys(images) as [keyof typeof images, ...(keyof typeof images)[]]).optional(),
    /**
     * Every source the article cites, in citation order. In the body, cite with
     * [[1]](#source-1); the page renders this list with matching anchors.
     */
    sources: z
      .array(
        z.object({
          title: z.string(),
          /** Authors, agency or publisher, e.g. "Fritz JM, et al. Spine" or "Utah Legislature". */
          publisher: z.string(),
          /** Publication year, or the date the page was last updated. */
          date: z.string(),
          url: z.string().url(),
        }),
      )
      .min(1),
  }),
});

export const collections = { blogs };
