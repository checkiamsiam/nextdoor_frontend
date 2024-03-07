interface IConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
  siteUrl: string;
  serverUrl: string;
  facebookPageId: string;
  facebookAppId: string;
}

const config: IConfig = {
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET || "secret",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL as string,
  facebookPageId: process.env.NEXT_PUBLIC_FB_PAGE_ID as string,
  facebookAppId: process.env.NEXT_PUBLIC_FB_APP_ID as string,
};

export default config;
