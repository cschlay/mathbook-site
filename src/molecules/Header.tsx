import { Button } from "../atoms/Button";
import { FaGithub } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "../atoms/Logo";
import { env } from "../../env";
import { useUser } from "../hooks/useUser";
import styled from "@emotion/styled";
import { useTablet } from "../hooks/useTablet";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

export const Header = () => {
  const { user } = useUser();
  const isTablet = useTablet();

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
      <Logo />
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <span>{user.points} points</span>
          <Button onClick={handleLogout}>
            <FiLogOut />
            {isTablet && "Logout"}
          </Button>
        </div>
      ) : (
        <Button onClick={handleLogin}>
          <FaGithub /> Login
        </Button>
      )}
    </Container>
  );
};
