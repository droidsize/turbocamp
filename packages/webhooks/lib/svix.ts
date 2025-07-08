import 'server-only';
import { auth } from '@packages/auth/server';
import { Svix } from 'svix';
import { keys } from '../keys';

const svixToken = keys().SVIX_TOKEN;

export const send = async (
  eventType: string,
  payload: object,
  headers?: Headers
) => {
  if (!svixToken) {
    throw new Error('SVIX_TOKEN is not set');
  }

  const svix = new Svix(svixToken);

  // Use Better Auth to get session - headers parameter is optional for backwards compatibility
  const session = headers ? await auth.api.getSession({ headers }) : null;

  const orgId = session?.session.activeOrganizationId;

  if (!orgId) {
    return;
  }

  return svix.message.create(orgId, {
    eventType,
    payload: {
      eventType,
      ...payload,
    },
    application: {
      name: orgId,
      uid: orgId,
    },
  });
};

export const getAppPortal = async (headers?: Headers) => {
  if (!svixToken) {
    throw new Error('SVIX_TOKEN is not set');
  }

  const svix = new Svix(svixToken);

  // Use Better Auth to get session - headers parameter is optional for backwards compatibility
  const session = headers ? await auth.api.getSession({ headers }) : null;

  const orgId = session?.session.activeOrganizationId;

  if (!orgId) {
    return;
  }

  return svix.authentication.appPortalAccess(orgId, {
    application: {
      name: orgId,
      uid: orgId,
    },
  });
};
