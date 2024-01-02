import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

export const setToCookie = (key: string, value: string, options?: OptionsType) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return setCookie(key, value, {
    secure: true,
    ...options,
  });
};

export const getFromCookie = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return getCookie(key);
};

export const removeFromCookie = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return deleteCookie(key);
};
