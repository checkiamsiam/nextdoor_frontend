import { loginWithCredential } from "@/redux/features/auth/authApi";
import { jwtHelpers } from "../jwthelpers/jwthelpers";
import config from "@/config";
import { catchAsync } from "@/utils/axios/catchAsync";
import { ILoginCredentials, ISessionData } from "@/types";
// import { login_credential } from "@/constants/credentialKey.const";
// import { signIn as nextAuthSignIn } from "next-auth/react";

// export const signIn = async ({ email, password }: { email: string; password: string }) => {
//   return await nextAuthSignIn(login_credential, {
//     email: email,
//     password: password,
//     redirect: false,

//   });
// };

export const signIn = async ({ email, password }: ILoginCredentials) => {
  const res = await loginWithCredential({ email, password });

  if (res?.error || !res?.data?.accessToken) {
    throw new Error(res?.error?.message || "Failed to login");
  }

  let verifiedToken: any = jwtHelpers.verifyToken(
    res?.data?.accessToken,
    config.jwt.secret
  );

  // if (!verifiedToken) {
  //   throw new Error("Failed to login");
  // }

  const sessionData: ISessionData = {
    id: verifiedToken?.userId,
    accessToken: res?.data?.accessToken,
    user: {
      userId: verifiedToken?.userId,
      username: verifiedToken?.username,
      email: verifiedToken?.email,
      role: verifiedToken?.role,
    },
  };

  return sessionData;
};
