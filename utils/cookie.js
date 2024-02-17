import Cookies from "js-cookie";

const ACCESS_TOKEN_COOKIE_NAME = "access_token";
const REFRESH_TOKEN_COOKIE_NAME = "refresh_token";

export const setAccessTokenCookie = (accessToken) => {
  Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, { expires: 7 }); //  cookie to expire in 7 days
};

export const setRefreshTokenCookie = (refreshToken) => {
  Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken, { expires: 365 }); //  cookie to expire in 1 year
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
};

export const getRefreshTokenFromCookie = () => {
  return Cookies.get(REFRESH_TOKEN_COOKIE_NAME);
};

export const removeTokensFromCookies = () => {
  Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
  Cookies.remove(REFRESH_TOKEN_COOKIE_NAME);
};
