import { Button } from '@packages/base/components/ui/button';
import { createMetadata } from '@packages/seo/metadata';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const title = 'Create an account';
const description = 'Enter your details to get started.';
const SignUp = dynamic(() =>
  import('@/app/(unauthenticated)/components/sign-up').then((mod) => mod.SignUp)
);

export const metadata: Metadata = createMetadata({ title, description });

const SignUpPage = () => (
  <>
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="font-semibold text-2xl tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>

    <SignUp />

    {/* Navigation to sign in */}
    <div className="text-center">
      <p className="text-muted-foreground text-sm">
        Already have an account?{' '}
        <Button
          variant="link"
          className="h-auto p-0 font-normal text-sm"
          asChild
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </p>
    </div>
  </>
);

export default SignUpPage;
