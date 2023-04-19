import { render as rtlRender, RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';

export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  const Wrapper = ({ children }: { children: ReactElement }) => {
    return children;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react-native';
