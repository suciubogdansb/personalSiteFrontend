import {useState} from "react";
import useAddPostHook from "../Hooks/useAddPostHook";
import {Button, Form, Row} from "react-bootstrap";
import "../Style/AddPage.css";
import {PostWithUser} from "../DataType/Post";
import useUpdatePost from "../Hooks/useUpdatePost";
import {useNavigate} from "react-router-dom";

export default function AddForm({post}: {post: PostWithUser | undefined}) {
    const [title, setTitle] = useState<string>(post?.title || "");
    const [content, setContent] = useState<string>(post?.content || "");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleSubmit = useUpdatePost({
        postId: post?.postId,
        title: title,
        content: content,
        image: image,
        setError: setError
    });

    return (
            <Form className="AddForm">
                <Row className="FormRow">
                    <Form.Group className="FormGroup">
                        <Form.Label>New Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            defaultValue={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="FormGroup">
                        <Form.Label>New Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => {
                                let v = e as React.ChangeEvent<HTMLInputElement>;
                                if (v.target.files !== null) {
                                    setImage(v.target.files[0])
                                }
                            }}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="FormGroup">
                    <Form.Label>New Content</Form.Label>
                    <Form.Control
                        style={{resize: "none", overflow: "auto"}}
                        as="textarea"
                        rows={20}
                        defaultValue={content}
                        placeholder="Enter content"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleSubmit} className="generalButton" type="submit">
                    Submit
                </Button>
                {error && <div className="Error">{error}</div>}
            </Form>
    );
}
