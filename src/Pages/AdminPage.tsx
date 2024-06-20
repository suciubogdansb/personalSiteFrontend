import AdminToolBar from "../Components/AdminToolBar";
import GeneralPostList from "../Components/GeneralPostList";

export default function AdminPage() {
    return (
        <div>
            <AdminToolBar/>
            <div className="AdminPage">
                <GeneralPostList/>
            </div>
        </div>
    );
}
