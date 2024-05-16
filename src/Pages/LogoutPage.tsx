import ToolBar from "../Components/ToolBar";
import {Button} from "react-bootstrap";
import {useTokenStore} from "../Store/TokenStore";

export default function LogoutPage() {
    const setToken = useTokenStore((state) => state.setToken);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setToken("");
        window.location.href = "/";
    }

    return (
        <div>
            <ToolBar></ToolBar>
            <Button onClick={handleSubmit}>Logout</Button>
        </div>
    )
}