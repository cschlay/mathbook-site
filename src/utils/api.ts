import { Optional } from "app/types";
import { env } from "env";
import ky from "ky";
import { isBrowser } from "app/utils/isBrowser";

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
