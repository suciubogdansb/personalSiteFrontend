import {Contact, ContactBase} from "../DataType/Contact";
import emailjs from "emailjs-com";
import {addContact} from "../Services/ContactService";

export default function useSendResponse(
    contact: Contact,
    response: string,
    setResponse: (response: string) => void,
    setOpen: (open: boolean) => void,
    setLoading: (loading: boolean) => void
) {
    return function sendEmail() {
        setLoading(true);
        const message = emailjs.send(
            'service_0c2gdh5',
            'template_d1om23d',
            {
                name: contact.name,
                email: contact.email,
                message: response,
            },
            '6RnRoRlszKjVqfkKw'
        ).then((response) => {
            console.log('Email sent successfully:', response);
            setResponse('');
            setOpen(false);
        }).catch((error) => {
            console.error('Email sent failed:', error);
        }).finally(() => {
            setLoading(false);
        });
    }
}