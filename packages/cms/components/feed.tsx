import type { ComponentProps } from 'react';

type FeedProperties = ComponentProps<'div'>;

export const Feed = ({ children, ...props }: FeedProperties) => (
  <div {...props}>{children}</div>
);
