'use client';

import { useSession } from '@packages/auth/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@packages/base/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@packages/base/components/ui/sidebar';
import { Building2, Check, ChevronsUpDown, Plus } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

interface Organization {
  id: string;
  name: string;
  slug?: string | null;
  logo?: string | null;
  metadata?: string | null;
}

interface OrganizationSwitcherProps {
  hidePersonal?: boolean;
  afterSelectOrganizationUrl?: string;
}

export function OrganizationSwitcher({
  hidePersonal = false,
  afterSelectOrganizationUrl = '/',
}: OrganizationSwitcherProps) {
  const { data: session } = useSession();
  const { isMobile } = useSidebar();
  const [organizations, setOrganizations] = React.useState<Organization[]>([]);
  const [loading, setLoading] = React.useState(true);

  const activeOrgId = session?.session?.activeOrganizationId;
  const activeOrg = organizations.find((org) => org.id === activeOrgId);

  // Fetch user's organizations
  React.useEffect(() => {
    const fetchOrganizations = async () => {
      if (!session?.user?.id) return;

      try {
        // TODO: Create an API endpoint to fetch user's organizations
        // For now, this is a placeholder that simulates organizations
        const mockOrgs: Organization[] = [
          {
            id: 'org_1',
            name: 'Acme Corp',
            slug: 'acme-corp',
            logo: null,
            metadata: null,
          },
          {
            id: 'org_2',
            name: 'Tech Startup',
            slug: 'tech-startup',
            logo: null,
            metadata: null,
          },
        ];

        setOrganizations(mockOrgs);
      } catch (error) {
        console.error('Failed to fetch organizations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, [session?.user?.id]);

  const handleOrganizationSwitch = async (orgId: string) => {
    try {
      // TODO: Create an API endpoint to switch active organization
      console.log('Switching to organization:', orgId);

      // For now, just reload the page to simulate the switch
      // In a real implementation, this would update the session
      window.location.href = afterSelectOrganizationUrl;
    } catch (error) {
      console.error('Failed to switch organization:', error);
    }
  };

  const handleAddOrganization = () => {
    // TODO: Implement organization creation flow
    console.log('Add organization clicked');
  };

  if (loading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" disabled>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Building2 className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Loading...</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  // If no active org, show create organization button
  if (!activeOrg && organizations.length === 0) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" onClick={handleAddOrganization}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Plus className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Create Organization</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  // Use first org if no active org is set
  const displayOrg = activeOrg || organizations[0];

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {displayOrg?.logo ? (
                  <Image
                    src={displayOrg.logo}
                    alt={`${displayOrg.name} logo`}
                    width={16}
                    height={16}
                    className="size-4 rounded"
                  />
                ) : (
                  <Building2 className="size-4" />
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {displayOrg?.name || 'Organization'}
                </span>
                <span className="truncate text-xs">Organization</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Organizations
            </DropdownMenuLabel>
            {organizations.map((org, index) => (
              <DropdownMenuItem
                key={org.id}
                onClick={() => handleOrganizationSwitch(org.id)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  {org.logo ? (
                    <Image
                      src={org.logo}
                      alt={`${org.name} logo`}
                      width={14}
                      height={14}
                      className="size-3.5 rounded"
                    />
                  ) : (
                    <Building2 className="size-3.5 shrink-0" />
                  )}
                </div>
                <span className="flex-1">{org.name}</span>
                {org.id === activeOrgId && (
                  <Check className="size-4 text-primary" />
                )}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={handleAddOrganization}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Add organization
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
