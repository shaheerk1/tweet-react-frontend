import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Navbar as NavB, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <>
        <NavB bg="light">
          <Container>
            <NavB.Brand>
              <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </NavB.Brand>
            <div>Loading</div>
          </Container>
        </NavB>
      </>
    );
  } else if (isAuthenticated) {
    return (
      <>
        <NavB bg="light">
          <Container>
            <NavB.Brand>
              <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </NavB.Brand>
            <LogoutButton />
          </Container>
        </NavB>
      </>
    );
  } else
    return (
      <>
        <NavB bg="light">
          <Container>
            <NavB.Brand>
              <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </NavB.Brand>
            <LoginButton />
          </Container>
        </NavB>
      </>
    );
}

export default Navbar;
