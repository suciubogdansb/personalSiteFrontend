import {Contact} from "../DataType/Contact";
import {getAllContacts} from "../Services/ContactService";
import {PostWithUser} from "../DataType/Post";
import {NavigateFunction} from "react-router-dom";
import getAllPosts from "../Services/PostService";


function getAllContactsHelper(
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>
) {
    getAllContacts()
        .then((response) => {
            console.log(response);
            const updatedContacts = response.data.map((contact: Contact) => {
                return {
                    ...contact,
                    creationDate: new Date(contact.creationDate)
                };
            });
            setContacts(updatedContacts);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default function useGetAllContacts(
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>
) {
    return () => getAllContactsHelper(setContacts);
}