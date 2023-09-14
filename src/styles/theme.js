import { defaultTheme } from '@/themes/default';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;