import {useTokenStore} from "../Store/TokenStore";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import React from "react";

export default function ToolBar() {
    const token = useTokenStore(state => state.token)

    return (
        <div className="ToolBar">
            <div>
            <Link to="/"><Button>Home</Button></Link>
                {token && <Link to="/user"><Button>My Posts</Button></Link>}
            </div>
            {token ?
                <div>
                    <Link to="/logout"><Button>Logout</Button></Link>
                </div>
                :
                <div>
                    <Link to='/register'><Button>Register</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </div>
            }
        </div>
    )
}