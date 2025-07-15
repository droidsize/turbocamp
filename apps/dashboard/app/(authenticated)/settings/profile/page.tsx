'use client';

import { useSession } from '@packages/auth/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@packages/base/components/ui/avatar';
import { Button } from '@packages/base/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@packages/base/components/ui/card';
import { Input } from '@packages/base/components/ui/input';
import { Label } from '@packages/base/components/ui/label';
import { useState } from 'react';
import { Header } from '../../components/header';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || '');
  const [email, setEmail] = useState(session?.user?.email || '');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // TODO: Implement profile update with Better Auth
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error('Failed to update profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!session?.user) {
    return null;
  }

  return (
    <>
      <Header pages={['Settings']} page="Profile" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h2 className="font-bold text-2xl tracking-tight">
              Profile Settings
            </h2>
            <p className="text-muted-foreground">
              Manage your personal account information and preferences.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your profile details and avatar
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdateProfile}>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={session.user.image || undefined} />
                    <AvatarFallback>
                      {session.user.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" type="button">
                      Change Avatar
                    </Button>
                    <p className="mt-2 text-muted-foreground text-sm">
                      JPG, GIF or PNG. Max size of 2MB.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                  <p className="text-muted-foreground text-sm">
                    Your email address is used for login and notifications
                  </p>
                </div>

                {error && <p className="text-destructive text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">{success}</p>}
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>
                Manage your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline">Change Password</Button>
              <p className="text-muted-foreground text-sm">
                Last changed 3 months ago
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
