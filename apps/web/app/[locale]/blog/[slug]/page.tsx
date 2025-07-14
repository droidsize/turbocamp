import { Sidebar } from '@/app/[locale]/components/sidebar';
import { env } from '@/env';
import { blog, type Post } from '@packages/cms';
import { Body } from '@packages/cms/components/body';
import { CodeBlock } from '@packages/cms/components/code-block';
import { Image } from '@packages/cms/components/image';
import { TableOfContents } from '@packages/cms/components/toc';
import { JsonLd } from '@packages/seo/json-ld';
import { createMetadata } from '@packages/seo/metadata';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type React from 'react';

const protocol = env.VERCEL_PROJECT_PRODUCTION_URL?.startsWith('https')
  ? 'https'
  : 'http';
const url = new URL(`${protocol}://${env.VERCEL_PROJECT_PRODUCTION_URL}`);

type BlogPostProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: BlogPostProperties): Promise<Metadata> => {
  const { slug } = await params;
  const post = blog.getPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post._title,
    description: post.description,
    image: post.image,
  });
};

export const generateStaticParams = (): { slug: string }[] => {
  const posts = blog.getPosts();
  return posts.map(({ _slug }: Post) => ({ slug: _slug }));
};

const BlogPost = async ({ params }: BlogPostProperties) => {
  const { slug } = await params;
  const page = blog.getPost(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        code={{
          '@type': 'BlogPosting',
          '@context': 'https://schema.org',
          datePublished: page.date,
          description: page.description,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': new URL(`/blog/${page._slug}`, url).toString(),
          },
          headline: page._title,
          image: page.image,
          dateModified: page.date,
          author: page.authors?.at(0),
          isAccessibleForFree: true,
        }}
      />
      <div className="container mx-auto py-16">
        <Link
          className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
          href="/blog"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Blog
        </Link>
        <div className="mt-16 flex flex-col items-start gap-8 sm:flex-row">
          <div className="sm:flex-1">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h1 className="scroll-m-20 text-balance font-extrabold text-4xl tracking-tight lg:text-5xl">
                {page._title}
              </h1>
              <p className="text-balance leading-7 [&:not(:first-child)]:mt-6">
                {page.description}
              </p>
              {page.image ? (
                <Image
                  src={page.image}
                  width={600}
                  height={300}
                  alt=""
                  className="my-16 h-full w-full rounded-xl"
                />
              ) : undefined}
              <div className="mx-auto max-w-prose">
                <Body
                  content={page.body}
                  components={{
                    pre: ({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<'pre'>) => {
                      return (
                        <CodeBlock {...props}>
                          {children}
                        </CodeBlock>
                      );
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sticky top-24 hidden shrink-0 md:block">
            <Sidebar
              toc={<TableOfContents data={page.content} />}
              readingTime={`${page.readingTime} min read`}
              date={new Date(page.date)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
