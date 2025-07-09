'use server';

import { auth } from '@packages/auth/server';
import { database } from '@packages/db';
import Fuse from 'fuse.js';
import { headers } from 'next/headers';

export const searchUsers = async (
  query: string
): Promise<
  | {
      data: string[];
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

    // If query is empty, return empty results
    if (!query.trim()) {
      return { data: [] };
    }

    // Query all users who are members of the current organization
    const users = await database.user.findMany({
      where: {
        members: {
          some: {
            organizationId: currentOrgId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // Use Fuse.js for fuzzy search
    const fuse = new Fuse(users, {
      keys: [
        { name: 'name', weight: 0.7 },
        { name: 'email', weight: 0.3 },
      ],
      threshold: 0.3, // Lower threshold means more strict matching
      includeScore: true,
    });

    // Perform the search
    const searchResults = fuse.search(query);

    // Extract user IDs from search results, sorted by relevance
    const userIds = searchResults.map((result) => result.item.id);

    return {
      data: userIds,
    };
  } catch (error) {
    console.error('Error searching users:', error);
    return { error };
  }
};
