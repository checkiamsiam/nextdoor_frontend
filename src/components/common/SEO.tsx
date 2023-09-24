import Head from "next/head";

type IProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogTitle?: string;
};

const SEO = ({
  title = "NextDoor - Your Destination for Electronic Innovations",
  description = "Elevate Your Lifestyle with Innovative Electronics. Discover a wide range of smart home tech and more. Explore, shop, and embrace the future.",
  ogImage = "https://nextdoor.com/images/logo.svg",
  ogTitle = "Explore Innovative Electronics at Next Door",
}: IProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={ogImage} key="ogimage" />
    </Head>
  );
};

export default SEO;
