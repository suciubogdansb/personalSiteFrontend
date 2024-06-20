import AdminToolBar from "../Components/AdminToolBar";
import {useTokenStore} from "../Store/TokenStore";
import AddForm from "../Components/AddForm";
import React from "react";

export default function AddPage() {
    return (
        <div>
            <AdminToolBar></AdminToolBar>
            <div className="AdminPage">
                <AddForm key="AddForm"></AddForm>
            </div>
        </div>
    );
}
