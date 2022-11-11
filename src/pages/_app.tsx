import type { AppProps } from "next/app";
import Layout from "../components/Layout/index";
import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
