import {useState} from "react";
import useAddPostHook from "../Hooks/useAddPostHook";
import {Button, Form} from "react-bootstrap";

export default function AddForm() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = useAddPostHook({
        title: title,
        content: content,
    })

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter content" onChange={(e) => setContent(e.target.value)}/>
            </Form.Group>
            <Button onClick={handleSubmit} type="submit">Submit</Button>
        </Form>
)
}