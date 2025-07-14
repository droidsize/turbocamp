'use client';

import { Button } from '@packages/base/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@packages/base/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@packages/base/components/ui/tabs';
import { useState } from 'react';
import { SignInForm } from './auth-forms/sign-in-form';
import { SignUpForm } from './auth-forms/sign-up-form';

interface AuthModalProps {
  children: React.ReactNode;
  defaultTab?: 'sign-in' | 'sign-up';
  title?: string;
  description?: string;
  redirectTo?: string;
}

export const AuthModal = ({
  children,
  defaultTab = 'sign-up',
  title = 'Welcome to Turbocamp',
  description = 'Sign in to your account or create a new one to get started.',
  redirectTo,
}: AuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as 'sign-in' | 'sign-up')
          }
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="sign-in" className="space-y-4">
            <SignInForm onSuccess={handleSuccess} redirectTo={redirectTo} />
            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setActiveTab('sign-up')}
                className="px-0 text-muted-foreground text-sm"
              >
                Don't have an account? Sign up
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="sign-up" className="space-y-4">
            <SignUpForm onSuccess={handleSuccess} redirectTo={redirectTo} />
            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setActiveTab('sign-in')}
                className="px-0 text-muted-foreground text-sm"
              >
                Already have an account? Sign in
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
