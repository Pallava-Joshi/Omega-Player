import React from "react";
import { Container } from "react-bootstrap";
import "./login.css";
import Logo from "./Logo.png";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=4b050f0ed3e64d6daae07d0bd1c60e7e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img className="photu" src={Logo} />

      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login
      </a>
    </Container>
  );
}
