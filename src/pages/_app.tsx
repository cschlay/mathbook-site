import "katex/dist/katex.min.css";
import "styles/normalize.css";
import "styles/highlight-theme.css";
import "styles/base.css";
import { SWRConfig } from "swr";
import { api } from "app/utils/api";

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetcher,
        errorRetryCount: 0,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

const swrFetcher = (url: string, init: object): Promise<unknown> =>
  api.get(url.replace(/^(\/)/, ""), init).json();

export default App;
