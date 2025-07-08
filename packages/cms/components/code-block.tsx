import type { ComponentProps } from 'react';

type CodeBlockProperties = ComponentProps<'pre'>;

export const CodeBlock = ({ children, ...props }: CodeBlockProperties) => (
  <pre {...props}>{children}</pre>
);
