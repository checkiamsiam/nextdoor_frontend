interface IConfig {
  serverUrl: string;
  facebookPageId: string;
  facebookAppId: string;
}

const config: IConfig = {
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL as string,
  facebookPageId: process.env.NEXT_PUBLIC_FB_PAGE_ID as string,
  facebookAppId: process.env.NEXT_PUBLIC_FB_APP_ID as string,
};

export default config;
