import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "./Posts";

function Home() {
  return (
    <div>
      <Container>
        <Link to={`/newpost`} style={{ textDecoration: "none" }}>
          Make a Post
        </Link>
        <br />
        <Link to={`/posts`} style={{ textDecoration: "none" }}>
          All Posts
        </Link>
        <br />
        <Link to={`/profile`} style={{ textDecoration: "none" }}>
          Go to Profile
        </Link>
      </Container>

      <Posts />
    </div>
  );
}

export default Home;
