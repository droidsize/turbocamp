'use client';

import { useActiveOrganization, useSession } from '@packages/auth/client';
import { Button } from '@packages/base/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@packages/base/components/ui/card';
import { Badge } from '@packages/base/components/ui/badge';
import { CreditCard, Package, Receipt } from 'lucide-react';
import { Header } from '../../components/header';

export default function BillingPage() {
  const { data: session } = useSession();
  const { data: activeOrg } = useActiveOrganization();

  if (!session?.user) {
    return null;
  }

  return (
    <>
      <Header pages={['Settings']} page="Billing" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Billing & Subscription</h2>
            <p className="text-muted-foreground">
              Manage your subscription plan, payment methods, and billing history.
            </p>
          </div>
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>
                    Manage your subscription and billing details
                  </CardDescription>
                </div>
                <Badge variant="secondary">Free Plan</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Package className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Free Tier</p>
                    <p className="text-sm text-muted-foreground">
                      Perfect for getting started with Turbocamp
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Organizations</span>
                    <span>1 of 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Members</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">API Requests</span>
                    <span>10,000/month</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Upgrade to Pro</Button>
            </CardFooter>
          </Card>

          {/* Payment Method */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Add a payment method to upgrade your plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">No payment method</p>
                    <p className="text-sm text-muted-foreground">
                      Add a card to enable paid features
                    </p>
                  </div>
                </div>
                <Button variant="outline">Add Card</Button>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>
                View your past invoices and receipts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Receipt className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">
                  No billing history yet
                </p>
                <p className="text-sm text-muted-foreground">
                  Your invoices will appear here once you upgrade
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Organization Billing Notice */}
          {activeOrg && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Billing is managed at the organization level. 
                You're viewing billing for <strong>{activeOrg.name}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}