import ToolBar from "../Components/ToolBar";
import {useTokenStore} from "../Store/TokenStore";
import AddForm from "../Components/AddForm";
import React from "react";

export default function AddPage() {
    const token = useTokenStore((state) => state.token);

    if(token === ""){
        window.location.href = "/login";
    }

    return (
        <div>
            <ToolBar></ToolBar>
            <AddForm key="AddForm"></AddForm>
        </div>
    )
}