import { Button } from '@packages/base/components/ui/button';
import { createMetadata } from '@packages/seo/metadata';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const title = 'Welcome back';
const description = 'Enter your details to sign in.';
const SignIn = dynamic(() =>
  import('@/app/(unauthenticated)/components/sign-in').then((mod) => mod.SignIn)
);

export const metadata: Metadata = createMetadata({ title, description });

const SignInPage = () => (
  <>
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="font-semibold text-2xl tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>

    <SignIn />

    {/* Navigation to sign up */}
    <div className="text-center">
      <p className="text-muted-foreground text-sm">
        Don't have an account?{' '}
        <Button
          variant="link"
          className="h-auto p-0 font-normal text-sm"
          asChild
        >
          <Link href="/sign-up">Create an account</Link>
        </Button>
      </p>
    </div>
  </>
);

export default SignInPage;
