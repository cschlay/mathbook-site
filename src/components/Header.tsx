import { Button } from "./atoms/Button";
import { env } from "../../env";
import { useUser } from "../hooks/useUser";
import styled from "@emotion/styled";
import { PreviousPageButton } from "./PreviousPageButton";
import { FaGithub } from "react-icons/all";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const Header = () => {
  const { user } = useUser();

  const handleLogin = () => {
    fetch(`${env.API_HOST}/login`)
      .then((data) => data.json())
      .then((data) => window.open(data.url, "_self"));
  };

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <Container>
      <PreviousPageButton />
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {user.points} points <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={handleLogin}>
          <FaGithub /> Login
        </Button>
      )}
    </Container>
  );
};
