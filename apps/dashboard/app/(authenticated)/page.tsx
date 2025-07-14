'use client';

import { useActiveOrganization, useSession } from '@packages/auth/client';
import { Button } from '@packages/base/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@packages/base/components/ui/card';
import { Building2, Plus, Settings, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from './components/header';

const App = () => {
  const { data: session } = useSession();
  const { data: activeOrg } = useActiveOrganization();
  const router = useRouter();

  if (!session?.user) {
    return null;
  }

  return (
    <>
      <Header pages={[]} page="Dashboard" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome to your Turbocamp dashboard. Manage your organization and access key features.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <Card className="md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>Welcome back, {session.user.name}!</CardTitle>
              <CardDescription>
                {activeOrg
                  ? `You're currently working in ${activeOrg.name}`
                  : 'Get started by creating your first organization'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!activeOrg && (
                <Button onClick={() => router.push('/organization/new')}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Organization
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {activeOrg ? (
                <>
                  <Button
                    variant="outline"
                    className="justify-start"
                    asChild
                  >
                    <Link href={`/organization/${activeOrg.id}/settings`}>
                      <Settings className="mr-2 h-4 w-4" />
                      Organization Settings
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start"
                    asChild
                  >
                    <Link href={`/organization/${activeOrg.id}/members`}>
                      <Users className="mr-2 h-4 w-4" />
                      Manage Members
                    </Link>
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => router.push('/organization/new')}
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  Create Organization
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional dashboard content */}
        {activeOrg && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your organization's recent events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No recent activity to display
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Overview</CardTitle>
                <CardDescription>
                  Current team members and roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and manage your team members
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>
                  Helpful links and documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn more about using Turbocamp
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
