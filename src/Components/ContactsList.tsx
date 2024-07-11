import {Contact} from "../DataType/Contact";
import {useEffect, useState} from "react";
import useGetAllContacts from "../Hooks/useGetAllContacts";
import ContactListElement from "./ContactListElement";

export default function ContactsList() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [hasLoadedContacts, setHasLoadedContacts] = useState(false);
    const getAllContacts = useGetAllContacts(setContacts);

    useEffect(() => {
        if (!hasLoadedContacts) {
            getAllContacts();
            setHasLoadedContacts(true);
        }
    }, [hasLoadedContacts, getAllContacts]);

    return (
        <div className="ContactsDiv">
            {contacts.map((contact) => (
                <ContactListElement key={contact.contactId} contact={contact} />
            ))}
        </div>
    );
}