interface IConfig {
  facebookPageId: string;
  facebookAppId: string;
}

const config: IConfig = {
  facebookPageId: process.env.FB_PAGE_ID as string,
  facebookAppId: process.env.FB_APP_ID as string,
};

export default config;
