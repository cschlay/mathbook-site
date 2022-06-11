import { useEffect } from "react";
import { LayoutBase } from "../components/layouts/LayoutBase";
import { env } from "../../env";

const LoginPage = () => {
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const requestData = {
      code: query.get("code"),
    };

    fetch(`${env.API_HOST}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("AccessToken", data.access_token);

        window.open("/", "_self");
      });
  }, []);

  return (
    <LayoutBase>
      <p>Please, wait a moment...</p>
    </LayoutBase>
  );
};

export default LoginPage;
