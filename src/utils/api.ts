import { Optional } from "app/types";
import { env } from "env";
import { isBrowser } from "app/utils/isBrowser";
import ky from "ky";

const getAuthorizationHeader = (): Optional<string> => {
  if (isBrowser()) {
    const accessToken: Optional<string> = localStorage.getItem("AccessToken");
    if (accessToken) {
      return `Bearer ${accessToken}`;
    }
  }
  return undefined;
};

export const api = ky.create({
  headers: {
    Authorization: getAuthorizationHeader(),
  },
  prefixUrl: env.API_HOST,
  retry: 2,
});
