// @ts-ignore - content-collections will be generated
import { allLegals, allPosts } from 'content-collections';

export const blog = {
  getPosts: () => allPosts || [],
  getLatestPost: () => {
    if (!allPosts || allPosts.length === 0) return null;
    return allPosts
      .sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
  },
  getPost: (slug: string) => {
    if (!allPosts) return null;
    return allPosts.find((post: any) => post._slug === slug);
  },
};

export const legal = {
  getPosts: () => allLegals || [],
  getLatestPost: () => {
    if (!allLegals || allLegals.length === 0) return null;
    return allLegals
      .sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
  },
  getPost: (slug: string) => {
    if (!allLegals) return null;
    return allLegals.find((legal: any) => legal._slug === slug);
  },
};
