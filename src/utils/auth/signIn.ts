import { login_credential } from "@/constants/credentialKey.const";
import { signIn as nextAuthSignIn } from "next-auth/react";

export const signIn = async ({ email, password }: { email: string; password: string }) => {
  return await nextAuthSignIn(login_credential, {
    email: email,
    password: password,
    redirect: false,
    
  });
};
