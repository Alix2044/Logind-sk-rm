import React, { useContext, useRef } from "react";

import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Alert from "react-bootstrap/Alert";
export default function Forside() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async () => {
    try {
        const userCredentials =
      await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      user =userCredentials.user
    } catch (error) {
      console.error(error);
    }
  };
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Projekt</Navbar.Brand>
      </Navbar>
      <Container style={{ maxWidth: "500px" }} fluid>
        <Form className="mt-4">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="password"
            />
          </Form.Group>

          <Col xs={6}>
            <Button type="button" onClick={createAccount}>
              Sign Up
            </Button>
          </Col>
          <Col xs={6}>
            <Button type="button" variant="secondary" onClick={signIn}>
              Sign In
            </Button>
          </Col>
        </Form>
      </Container>
    </>
  );
}
