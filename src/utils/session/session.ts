import { session_key } from "@/constants/localStorage.const";
import { getFromCookie, setToCookie } from "../browserStorage/cookiestorage";
import { ISessionData } from "@/types";

// get session
export const getSession = () => {
  const session = getFromCookie(session_key);
  const data: ISessionData | null = session ? JSON.parse(session) : null;
  return data;
};

// set session
export const setSession = (session: ISessionData) => {
  setToCookie(session_key, JSON.stringify(session), {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
};
