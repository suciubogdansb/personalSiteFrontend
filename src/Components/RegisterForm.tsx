import React from "react";
import { Button, Form } from "react-bootstrap";

const EMAIL_REGEX = new RegExp(
  "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])",
);

interface RegisterFormProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function RegisterForm({
  setUsername,
  setPassword,
  setEmail,
  handleSubmit,
}: RegisterFormProps) {
  const [validPasswordLength, setValidPasswordLength] =
    React.useState<boolean>(false);
  const [validPasswordCharacters, setValidPasswordCharacters] =
    React.useState<boolean>(false);
  const [validEmail, setValidEmail] = React.useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    setValidPasswordLength(password.length >= 8);
    setValidPasswordCharacters(
      /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password),
    );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    setValidEmail(EMAIL_REGEX.test(email));
  };

  return (
    <Form>
      <Form.Group controlId="formUsername" className="formDiv">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          required
          onChange={handleUsernameChange}
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="formDiv">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          required
          onChange={handlePasswordChange}
        />
        <Form.Text className="text-muted">
          {validPasswordLength || <p>Password must at least 8 characters long.</p>}
          {validPasswordCharacters ||
            <p>Password must contain at least one uppercase letter, one lowercase letter and one number.</p>}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formEmail" className="formDiv">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          required
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">
          {validEmail || <p>Invalid email.</p>}
        </Form.Text>
      </Form.Group>
      <Button className="generalButton" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
}
