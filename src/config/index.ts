interface IConfig {
  backendUrl: string;
  facebookPageId: string;
  facebookAppId: string;
}

const config: IConfig = {
  backendUrl: process.env.BACKEND_URL as string,
  facebookPageId: process.env.FB_PAGE_ID as string,
  facebookAppId: process.env.FB_APP_ID as string,
};

export default config;
