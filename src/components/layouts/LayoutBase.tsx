import * as React from "react";
import { Footer } from "../Footer";
import styled from "@emotion/styled";
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
      }}
    >
      <Header />
      <main>{children}</main>
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
  }).then((res) => res.json());
};
