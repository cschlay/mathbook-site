import * as React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SWRConfig } from "swr";
import { env } from "../../../env";

interface Props {
  children: React.ReactNode;
}
export const LayoutBase = ({ children }: Props): JSX.Element => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetch,
        errorRetryCount: 0,
      }}
    >
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </SWRConfig>
  );
};

const swrFetch = (url: string, init: object) => {
  return fetch(`${env.API_HOST}${url}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error());
  });
};
