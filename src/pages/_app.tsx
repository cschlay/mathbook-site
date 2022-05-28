import "katex/dist/katex.min.css";
import "../../styles/normalize.css";
import "../../styles/highlight-theme.css";
import "../../styles/base.css";
import { env } from "../../env";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetch,
        errorRetryCount: 0,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

const swrFetch = (url: string, init: object): Promise<unknown> => {
  const accessToken = localStorage.getItem("AccessToken");

  if (!accessToken) {
    return Promise.reject(new Error());
  }

  return fetch(`${env.API_HOST}${url}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error());
  });
};

export default App;
