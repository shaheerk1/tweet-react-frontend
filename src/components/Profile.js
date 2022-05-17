import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Image, Container, Spinner } from "react-bootstrap";
import LoginButton from "./LoginButton";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Container className="text-center">
        <div className="my-4">
          <Spinner animation="border" />
        </div>
      </Container>
    );
  } else if (isAuthenticated) {
    return (
      <div>
        <Container className="mt-5 d-flex justify-content-center">
          <Card className="p-3">
            <div className="d-flex align-items-center gap-4">
              <Image src={user.picture} alt={user.name}></Image>
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">{user.nickname}</h4>
                <span>{user.email}</span>
                <h6>
                  {!user.email_verified && "verify"} email{" "}
                  {user.email_verified && "verified"}
                </h6>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    );
  } else
    return (
      <>
        <Container className="mt-5 d-flex justify-content-center">
          <LoginButton />
        </Container>
      </>
    );
}

export default Profile;
