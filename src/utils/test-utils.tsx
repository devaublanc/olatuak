import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render as rtlRender, RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';

const queryClient = new QueryClient();

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  const Wrapper = ({ children }: { children: ReactElement }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react-native';
export { render, queryClient };
