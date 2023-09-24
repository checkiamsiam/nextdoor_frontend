import SimpleLayout from "@/layout/SimpleLayout";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

// App Props Type with Layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <SimpleLayout>{page}</SimpleLayout>);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}
