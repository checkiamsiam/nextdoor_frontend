import { session_key } from "@/constants/localStorage.const";
import { removeFromCookie } from "@/utils/browserStorage/cookiestorage";
// import { signOut } from "next-auth/react";

const gaSignOut = async (): Promise<void> => {
  // await signOut({ redirect: false });
  // removeFromCookie(accessToken_key);
  removeFromCookie(session_key);
  window.location.href = "/";
};

export { gaSignOut as signOut };
