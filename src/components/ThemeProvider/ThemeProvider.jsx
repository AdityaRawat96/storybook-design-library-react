import { FluentProvider } from '@fluentui/react-components';
import { brandTheme } from './theme';

const ThemeProvider = ({ children }) => {
  return <FluentProvider theme={brandTheme}>{children}</FluentProvider>;
};

export default ThemeProvider;
