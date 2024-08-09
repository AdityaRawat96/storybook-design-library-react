import React from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { brandTheme } from './theme';

const ThemeProvider = ({ children } : {
  children: React.ReactNode;
}) => {
  return <FluentProvider theme={brandTheme}>{children}</FluentProvider>;
};

export default ThemeProvider;
