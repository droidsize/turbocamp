'use client';

import { TableSkeleton } from '@/components/loading-states';
import { ERROR_MESSAGES, useErrorHandler } from '@/hooks/use-error-handler';
import { organization, useActiveOrganization } from '@packages/auth/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@packages/base/components/ui/avatar';
import { Badge } from '@packages/base/components/ui/badge';
import { Button } from '@packages/base/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@packages/base/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@packages/base/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@packages/base/components/ui/dropdown-menu';
import { Input } from '@packages/base/components/ui/input';
import { Label } from '@packages/base/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@packages/base/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@packages/base/components/ui/table';
import { MoreHorizontal, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Header } from '../../../components/header';

interface Member {
  id: string;
  userId: string;
  organizationId: string;
  role: string;
  createdAt: Date;
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

interface Invitation {
  id: string;
  email: string;
  role: string;
  status: string;
  expiresAt: Date;
}

export default function MembersSettingsPage() {
  const { data: activeOrg } = useActiveOrganization();
  const [members, setMembers] = useState<Member[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'member' | 'owner' | 'admin'>(
    'member'
  );
  const [isInviting, setIsInviting] = useState(false);
  const [error, setError] = useState('');
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (activeOrg) {
      fetchMembers();
    }
  }, [activeOrg]);

  const fetchMembers = async () => {
    if (!activeOrg) {
      return;
    }

    try {
      const result = await organization.getFullOrganization({
        query: {
          organizationId: activeOrg.id,
        },
      });

      if (result.data) {
        setMembers(result.data.members || []);
        setInvitations(result.data.invitations || []);
      }
    } catch (err) {
      handleError(err, {
        fallbackMessage: 'Failed to load team members. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrg) return;

    setIsInviting(true);
    setError('');

    try {
      await organization.inviteMember({
        organizationId: activeOrg.id,
        email: inviteEmail,
        role: inviteRole,
      });

      setInviteEmail('');
      setInviteRole('member');
      toast.success('Invitation sent successfully');
      await fetchMembers();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && err.message?.includes('limit')
          ? ERROR_MESSAGES.MEMBER_LIMIT
          : 'Failed to send invitation. Please try again.';
      setError(errorMessage);
      handleError(err, { fallbackMessage: errorMessage });
    } finally {
      setIsInviting(false);
    }
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!activeOrg) {
      return;
    }

    const confirmed = confirm('Are you sure you want to remove this member?');
    if (!confirmed) {
      return;
    }

    try {
      await organization.removeMember({
        organizationId: activeOrg.id,
        memberIdOrEmail: memberId,
      });
      toast.success('Member removed successfully');
      await fetchMembers();
    } catch (err) {
      handleError(err, {
        fallbackMessage: 'Failed to remove member. Please try again.',
      });
    }
  };

  const handleUpdateRole = async (
    memberId: string,
    newRole: 'member' | 'owner' | 'admin'
  ) => {
    if (!activeOrg) {
      return;
    }

    try {
      await organization.updateMemberRole({
        organizationId: activeOrg.id,
        memberId,
        role: newRole,
      });
      toast.success('Member role updated successfully');
      await fetchMembers();
    } catch (err) {
      handleError(err, {
        fallbackMessage: ERROR_MESSAGES.PERMISSION_DENIED,
      });
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'owner':
        return 'default';
      case 'admin':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  if (isLoading) {
    return (
      <>
        <Header pages={['Organization']} page="Members" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="max-w-5xl">
            <div className="mb-8">
              <h2 className="font-bold text-2xl tracking-tight">
                Team Members
              </h2>
              <p className="text-muted-foreground">
                Manage your organization's team members and their permissions.
              </p>
            </div>
            <TableSkeleton rows={3} columns={4} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header pages={['Organization']} page="Members" />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="max-w-5xl">
          <div className="mb-8">
            <h2 className="font-bold text-2xl tracking-tight">Team Members</h2>
            <p className="text-muted-foreground">
              Manage your organization's team members and their permissions.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Current Members</CardTitle>
                  <CardDescription>
                    View and manage organization members and their roles.
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Invite Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleInvite}>
                      <DialogHeader>
                        <DialogTitle>Invite Team Member</DialogTitle>
                        <DialogDescription>
                          Send an invitation to join your organization.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="colleague@example.com"
                            value={inviteEmail}
                            onChange={(e) => setInviteEmail(e.target.value)}
                            required
                            disabled={isInviting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select
                            value={inviteRole}
                            onValueChange={(value) =>
                              setInviteRole(
                                value as 'member' | 'owner' | 'admin'
                              )
                            }
                            disabled={isInviting}
                          >
                            <SelectTrigger id="role">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="member">Member</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {error && (
                          <p className="text-destructive text-sm">{error}</p>
                        )}
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={isInviting}>
                          {isInviting ? 'Sending...' : 'Send Invitation'}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="w-[50px]" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.user.image} />
                            <AvatarFallback>
                              {member.user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.user.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {member.user.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getRoleBadgeVariant(member.role)}>
                            {member.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(member.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {member.role !== 'owner' && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUpdateRole(
                                      member.id,
                                      member.role === 'admin'
                                        ? 'member'
                                        : 'admin'
                                    )
                                  }
                                >
                                  Change to{' '}
                                  {member.role === 'admin' ? 'Member' : 'Admin'}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => handleRemoveMember(member.id)}
                                >
                                  Remove from organization
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {invitations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Pending Invitations</CardTitle>
                  <CardDescription>
                    Invitations that have been sent but not yet accepted.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Expires</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invitations.map((invitation) => (
                        <TableRow key={invitation.id}>
                          <TableCell>{invitation.email}</TableCell>
                          <TableCell>
                            <Badge
                              variant={getRoleBadgeVariant(invitation.role)}
                            >
                              {invitation.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{invitation.status}</Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(
                              invitation.expiresAt
                            ).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
