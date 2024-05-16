import React from "react";
import {Button, Form} from "react-bootstrap";

interface LoginFormProps {
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export default function LoginForm({setUsername, setPassword, handleSubmit}: LoginFormProps){
    return (
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter username"
                              required
                              onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              placeholder="Enter password"
                              required
                              onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button onClick={handleSubmit} type="submit">Submit</Button>
        </Form>
    )

}