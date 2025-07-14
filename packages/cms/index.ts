// @ts-ignore - content-collections will be generated
import { allLegals, allPosts, type Post, type Legal } from 'content-collections';

export type { Post, Legal };

export const blog = {
  getPosts: (): Post[] => allPosts || [],
  getLatestPost: (): Post | null => {
    if (!allPosts || allPosts.length === 0) return null;
    return allPosts
      .sort(
        (a: Post, b: Post) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
  },
  getPost: (slug: string): Post | null => {
    if (!allPosts) return null;
    return allPosts.find((post: Post) => post._slug === slug) || null;
  },
};

export const legal = {
  getPosts: (): Legal[] => allLegals || [],
  getLatestPost: (): Legal | null => {
    if (!allLegals || allLegals.length === 0) return null;
    return allLegals
      .sort(
        (a: Legal, b: Legal) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
  },
  getPost: (slug: string): Legal | null => {
    if (!allLegals) return null;
    return allLegals.find((legal: Legal) => legal._slug === slug) || null;
  },
};
