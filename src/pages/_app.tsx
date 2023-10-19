import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import MessengerCustomerChat from "react-messenger-customer-chat";
import PageProgress from "@/components/common/PageProgress";
import MainLayout from "@/layout/MainLayout";

// Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// App Props Type with Layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <PageProgress />
        <MessengerCustomerChat pageId="131744433355473" appId="1006473783736489" />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
