import { IProduct } from "./ApiResponse";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export interface IQueryFeatures {
  page?: number | string;
  limit?: number | string;
  fields?: string;
  populate?: string;
  sort?: string;
  searchKey?: string;
}

export type IQuery = IQueryFeatures & { [key: string]: any };

export type IGenericErrorResponse = {
  error: IGenericErrorMessage;
};

export type IGenericErrorMessage = {
  path?: string | number;
  message: string;
};

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface FilterProps {
  id: string;
}

export interface ISessionData {
  id: string;
  accessToken: string;
  user: {
    userId: string;
    username: string;
    email: string;
    role: string;
  };
}
