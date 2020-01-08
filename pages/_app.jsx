import { ThemeProvider } from "emotion-theming";
import { theme, Flex, Page } from "ui";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ThemeProvider>
);
