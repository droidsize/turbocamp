'use client';
import { useActiveOrganization } from '@packages/auth/client';
import {
  BackpackIcon,
  CampGroupIcon,
  CompassIcon,
  LanternIcon,
  MapIcon,
  PineTreeIcon,
  TentIcon,
} from '@packages/base/components/icons/camping-icons';
import { ModeToggle } from '@packages/base/components/mode-toggle';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@packages/base/components/ui/sidebar';
import { cn } from '@packages/base/lib/utils';
import { Building2Icon } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { OrganizationSwitcher } from './organization-switcher';
import { Search } from './search';
import { UserButton } from './user-button';

type GlobalSidebarProperties = {
  readonly children: ReactNode;
};

// Function to generate navigation data with active organization
const useNavData = () => {
  const { data: activeOrg } = useActiveOrganization();

  return {
    navMain: [
      {
        title: 'Basecamp',
        url: '/',
        icon: TentIcon,
        isActive: true,
      },
    ],
    navOrganization: activeOrg
      ? [
          {
            title: 'Camp Settings',
            url: `/organization/${activeOrg.id}/settings`,
            icon: CompassIcon,
          },
          {
            title: 'Campers',
            url: `/organization/${activeOrg.id}/members`,
            icon: CampGroupIcon,
          },
        ]
      : [
          {
            title: 'Set Up New Camp',
            url: '/organization/new',
            icon: Building2Icon,
          },
        ],
    navUser: [
      {
        title: 'Your Gear',
        url: '/settings/profile',
        icon: BackpackIcon,
      },
      {
        title: 'Trail Pass',
        url: '/settings/billing',
        icon: MapIcon,
      },
    ],
    navSecondary: [
      {
        title: 'Signal Fire',
        url: '#',
        icon: LanternIcon,
      },
      {
        title: 'Leave a Mark',
        url: '#',
        icon: PineTreeIcon,
      },
    ],
  };
};

export const GlobalSidebar = ({ children }: GlobalSidebarProperties) => {
  const sidebar = useSidebar();
  const data = useNavData();

  return (
    <>
      <Sidebar variant="inset">
        <SidebarHeader className="pb-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <div
                className={cn(
                  'h-[36px] overflow-hidden transition-all [&>div]:w-full',
                  sidebar.open ? '' : '-mx-1'
                )}
              >
                <OrganizationSwitcher />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Search />
        <SidebarContent>
          {/* Your Trail - Main navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Your Trail
            </SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="group hover:bg-primary/5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border-l-2 data-[active=true]:border-primary"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Camp Management */}
          {data.navOrganization && data.navOrganization.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70">
                Camp Management
              </SidebarGroupLabel>
              <SidebarMenu>
                {data.navOrganization.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className="group hover:bg-primary/5"
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          )}

          {/* Your Pack */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Your Pack
            </SidebarGroupLabel>
            <SidebarMenu>
              {data.navUser.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="group hover:bg-primary/5"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Trail Support */}
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Trail Support
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navSecondary.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="group hover:bg-primary/5"
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <UserButton showName={true} />
              <div className="flex shrink-0 items-center gap-px">
                <ModeToggle />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </>
  );
};
