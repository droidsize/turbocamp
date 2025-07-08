import { flag } from 'flags/next';

export const createFlag = (key: string) =>
  flag({
    key,
    defaultValue: false,
    async decide() {
      // TODO: Better Auth session handling for feature flags
      // This package doesn't have direct access to Next.js headers
      // The calling app should pass headers or restructure this logic

      // For now, return default value since we can't access session without headers
      // This needs to be refactored to accept headers as parameter or be called from app layer
      return this.defaultValue as boolean;

      // Original implementation would be:
      // const session = await auth.api.getSession({ headers });
      // const userId = session?.user?.id;
      // if (!userId) return this.defaultValue as boolean;
      // const isEnabled = await analytics.isFeatureEnabled(key, userId);
      // return isEnabled ?? (this.defaultValue as boolean);
    },
  });
