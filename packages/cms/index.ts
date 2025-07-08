// @ts-ignore - content-collections will be generated
import { allLegals, allPosts } from 'content-collections';

export const blog = {
  postsQuery: null,
  latestPostQuery: null,
  postQuery: (slug: string) => null,
  getPosts: async () => allPosts,
  getLatestPost: async () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allPosts
      .sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      )
      .at(0),
  getPost: async (slug: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allPosts.find(({ _meta }: any) => _meta.path === slug),
};

export const legal = {
  postsQuery: null,
  latestPostQuery: null,
  postQuery: (slug: string) => null,
  getPosts: async () => allLegals,
  getLatestPost: async () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allLegals
      .sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      )
      .at(0),
  getPost: async (slug: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allLegals.find(({ _meta }: any) => _meta.path === slug),
};
