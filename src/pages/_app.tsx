import PageProgress from "@/components/common/PageProgress";
import config from "@/config";
import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { NextPage } from "next";
import type { AppProps } from "next/app";
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
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <>
      <ThemeProvider>
        <PageProgress />
        <MessengerCustomerChat pageId={config.facebookPageId} appId={config.facebookAppId} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
