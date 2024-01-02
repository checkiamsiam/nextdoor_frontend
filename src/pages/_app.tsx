import PageProgress from "@/components/common/PageProgress";
import config from "@/config";
import MainLayout from "@/layout/MainLayout";
import ReduxProvider from "@/redux/Prodiver";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import MessengerCustomerChat from "react-messenger-customer-chat";

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
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider>
        <ThemeProvider>
          <PageProgress />
          <MessengerCustomerChat
            pageId={config.facebookPageId}
            appId={config.facebookAppId}
          />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
