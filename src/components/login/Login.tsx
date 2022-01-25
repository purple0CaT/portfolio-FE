import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../firebase/AuthProvider";

function Login() {
  const [FormInput, setFormInput] = useState({ email: "", password: "" });
  const { logIn }: any = useAuth();
  //
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn(FormInput.email, FormInput.password);
  };
  //
  return (
    <Form onSubmit={handleLogin} className="text-center">
      <Form.Group id="loginEmail" className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={FormInput.email}
          onChange={(e) =>
            setFormInput({ ...FormInput, email: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group id="loginPassword" className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={FormInput.password}
          onChange={(e) =>
            setFormInput({ ...FormInput, password: e.target.value })
          }
        />
      </Form.Group>
      <Button type="submit" variant="info" size="sm">
        Log In
      </Button>
    </Form>
  );
}

export default Login;
