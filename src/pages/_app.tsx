import type { AppProps } from "next/app";
import Layout from "../components/Layout/index";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "../styles/colors";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  );
}
