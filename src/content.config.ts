import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogImages, images, type PostImageKey } from './data/images';

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
    /** Short title for <title> and og:title only (Google cuts at ~60). The H1
     *  and the schema headline keep using `title`. */
    seoTitle: z.string().max(65).optional(),
    /** Meta description and card summary. Aim for 140–160 characters. */
    description: z.string(),
    translationKey: z.string(),
    pubDate: z.coerce.date(),
    /** Set whenever the facts are rechecked or the content changes. */
    updatedDate: z.coerce.date().optional(),
    /** Card and header photo, from the image manifest (site images or blog-only photos). */
    image: z.enum([...Object.keys(images), ...Object.keys(blogImages)] as [PostImageKey, ...PostImageKey[]]).optional(),
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
