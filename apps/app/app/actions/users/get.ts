'use server';

import { auth } from '@packages/auth/server';
import { database } from '@packages/database';
import { headers } from 'next/headers';

export const getUsers = async (
  userIds: string[]
): Promise<
  | {
      data: Liveblocks['UserMeta']['info'][];
    }
  | {
      error: unknown;
    }
> => {
  try {
    // Get the current session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error('Not authenticated');
    }

    // Get the current organization ID from session
    const currentOrgId = session.session?.activeOrganizationId;

    if (!currentOrgId) {
      throw new Error('No active organization');
    }

    // Query users who are members of the current organization
    const users = await database.user.findMany({
      where: {
        id: { in: userIds },
        members: {
          some: {
            organizationId: currentOrgId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
      },
    });

    // Transform users to Liveblocks UserMeta format
    const transformedUsers: Liveblocks['UserMeta']['info'][] = users.map(
      (user) => ({
        name: user.name || user.email || 'Unknown User',
        avatar: user.image || undefined,
        // Generate a consistent color for each user based on their ID
        color: generateUserColor(user.id),
      })
    );

    return {
      data: transformedUsers,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { error };
  }
};

// Helper function to generate a consistent color for each user
function generateUserColor(userId: string): string {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FECA57',
    '#FF9FF3',
    '#54A0FF',
    '#5F27CD',
    '#00D2D3',
    '#FF9F43',
    '#10AC84',
    '#EE5A24',
    '#0984E3',
    '#6C5CE7',
    '#A29BFE',
  ];

  // Use a simple hash of the user ID to pick a color
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}
