import AdminToolBar from "../Components/AdminToolBar";
import ContactsList from "../Components/ContactsList";
export default function ContactListPage() {
    return (
        <div>
            <AdminToolBar/>
            <div className="AdminPage">
                <ContactsList/>
            </div>
        </div>
    );
}