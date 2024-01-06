import { AxiosError } from "axios";

interface IError extends Omit<AxiosError, "response"> {
  response?: {
    data?: { message?: string };
  };
}
export const catchAsync = (fn: any) => {
  return (...args: any) => {
    return fn(...args).catch((error: IError) => {
      throw new Error(error?.response?.data?.message || "Something went wrong");
    });
  };
};