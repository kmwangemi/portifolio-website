import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid} disableVendorPrefixes={false}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </StyleSheetManager>
  );
}
