import { getCollection, type CollectionEntry } from 'astro:content';
import { hrefFor } from '../i18n/routes';
import type { Lang } from '../i18n/config';

export type Post = CollectionEntry<'blogs'>;

/** Entry ids are "<lang>/<slug>"; the slug is the file name. */
export function slugOf(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export function langOf(post: Post): Lang {
  return post.id.split('/')[0] as Lang;
}

/** '/en/blog/<slug>/' */
export function postHref(post: Post): string {
  return `${hrefFor('blog', langOf(post))}${slugOf(post)}/`;
}

/** A locale's articles, newest first. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blogs', (p) => langOf(p) === lang);
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Path of every existing translation of a post, keyed by locale (itself included). */
export async function localePathsFor(post: Post): Promise<Partial<Record<Lang, string>>> {
  const all = await getCollection('blogs', (p) => p.data.translationKey === post.data.translationKey);
  return Object.fromEntries(all.map((p) => [langOf(p), postHref(p)]));
}

/** Reading time in whole minutes at ~220 words per minute, never below 1. */
export function readingMinutes(post: Post): number {
  const words = (post.body ?? '')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
