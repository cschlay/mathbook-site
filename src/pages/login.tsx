import {
  CodeExchangeRequest,
  CodeExchangeResponse,
} from "app/types/schemas/CodeExchange";
import { LayoutBase } from "app/components/layouts/LayoutBase";
import { api } from "app/utils/api";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      const request: CodeExchangeRequest = {
        code: router.query.code as string,
      };

      api
        .post("login", { json: request })
        .json<CodeExchangeResponse>()
        .then(({ accessToken }) => {
          localStorage.setItem("AccessToken", accessToken);
          return router.push("/");
        });
    }
  }, [router.query.code]);

  return (
    <LayoutBase>
      <p>Please, wait a moment...</p>
    </LayoutBase>
  );
};

export default LoginPage;
