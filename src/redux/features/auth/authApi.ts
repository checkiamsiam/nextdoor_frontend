import config from "@/config";
import { ILoginCredentials } from "@/types";
import { axiosInstance } from "@/utils/axios/axiosInstance";
// import axios from "axios";

// const auth_url = `${config.serverUrl}/auth`;
const auth_url = "/auth";

export const loginWithCredential = async (
  body: ILoginCredentials
): Promise<any> => {
  const res = await axiosInstance({
    url: auth_url + "/login",
    method: "POST",
    data: body,
  });
  return res;
};
