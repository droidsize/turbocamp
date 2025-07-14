import { Sidebar } from '@/app/[locale]/components/sidebar';
import { legal, type Legal } from '@packages/cms';
import { Body } from '@packages/cms/components/body';
import { TableOfContents } from '@packages/cms/components/toc';
import { createMetadata } from '@packages/seo/metadata';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type LegalPageProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: LegalPageProperties): Promise<Metadata> => {
  const { slug } = await params;
  const post = legal.getPost(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post._title,
    description: post.description,
  });
};

export const generateStaticParams = (): { slug: string }[] => {
  const posts = legal.getPosts();
  return posts.map(({ _slug }: Legal) => ({ slug: _slug }));
};

const LegalPage = async ({ params }: LegalPageProperties) => {
  const { slug } = await params;
  const page = legal.getPost(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="container max-w-5xl py-16">
      <Link
        className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
        href="/"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="scroll-m-20 text-balance font-extrabold text-4xl tracking-tight lg:text-5xl">
        {page._title}
      </h1>
      <p className="text-balance leading-7 [&:not(:first-child)]:mt-6">
        {page.description}
      </p>
      <div className="mt-16 flex flex-col items-start gap-8 sm:flex-row">
        <div className="sm:flex-1">
          <div className="prose prose-neutral dark:prose-invert">
            <Body content={page.body} />
          </div>
        </div>
        <div className="sticky top-24 hidden shrink-0 md:block">
          <Sidebar
            toc={<TableOfContents data={page.content} />}
            readingTime={`${page.readingTime} min read`}
            date={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
