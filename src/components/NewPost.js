import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import LoginButton from "./LoginButton";

function NewPost() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [tweet, setTweet] = useState("");
  const [message, setMessage] = useState("");
  if (isLoading) {
    return (
      <Container className="text-center">
        <div className="my-4">
          <Spinner animation="border" />
        </div>
      </Container>
    );
  } else if (isAuthenticated) {
    let handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const currentUser = user.email;

        console.log(currentUser);

        let res = await fetch("https://tweet-auth0.herokuapp.com/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            tweet: tweet,
            userId: currentUser,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setTweet("");
          setMessage("Posted successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Tweet</Form.Label>
              <Form.Control
                type="text"
                value={tweet}
                placeholder="Hello World"
                onChange={(e) => setTweet(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Post Tweet
            </Button>

            {message && (
              <Alert className="my-3" variant="success">
                {message ? <p className="mb-0">{message}</p> : null}
              </Alert>
            )}
          </Form>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container className="mt-5 d-flex justify-content-center">
          <LoginButton />
        </Container>
      </>
    );
  }
}

export default NewPost;
