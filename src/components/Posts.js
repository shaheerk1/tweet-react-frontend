import React from "react";
import { useEffect, useState } from "react";
import { Container, Card, Stack } from "react-bootstrap";

function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://tweet-auth0.herokuapp.com/api/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((resData) => {
        setData(resData);
      });
  }, []);

  return (
    <>
      <Container className="my-4">
        <Stack gap={3}>
          {data &&
            data.map((each) => (
              <Card key={each._id}>
                <Card.Body>
                  <Card.Title>{each.tweet}</Card.Title>
                </Card.Body>
                <Card.Header>{each.userId}</Card.Header>
              </Card>
            ))}
        </Stack>
      </Container>
    </>
  );
}
export default Posts;
