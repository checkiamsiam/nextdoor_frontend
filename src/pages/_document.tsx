import { theme } from "@/utils/theme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Elevate Your Lifestyle with Innovative Electronics. Discover a wide range of smart home tech and more. Explore, shop, and embrace the future."
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={"NextDoor"} />
        <meta
          name="og:description"
          content={
            "Welcome to Next Door, your one-stop shop for cutting-edge electronic innovations. Explore a world of smart solutions for your home and lifestyle. Shop now!"
          }
        />
        <meta name="og:site_name" content={"NextDoor"} />
        <meta name="og:url" content={"https://www.nextdoorbd.com/"} />
        <meta
          name="og:image"
          content={"https://www.nextdoorbd.com/images/logo.svg"}
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={"NextDoor"} />
        <meta
          name="twitter:description"
          content={
            "Welcome to Next Door, your one-stop shop for cutting-edge electronic innovations. Explore a world of smart solutions for your home and lifestyle. Shop now!"
          }
        />
        <meta name="twitter:site" content="@nextdoorbd" />
        <meta name="twitter:creator" content="@nextdoorbd" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
