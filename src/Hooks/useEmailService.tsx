import {Dispatch, SetStateAction} from "react";
import emailjs from 'emailjs-com';
import {useTokenStore} from "../Store/TokenStore";
import {ContactBase} from "../DataType/Contact";
import {addContact} from "../Services/ContactService";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function useEmailService(
    formData: FormData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string | null>>) {
    const isBackend = useTokenStore((state) => state.backendUp);

    return function sendEmail() {
        setLoading(true);
            const response = emailjs.send(
                'service_0c2gdh5',
                'template_atijy2i',
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                '6RnRoRlszKjVqfkKw'
            ).then((response) => {
                console.log('Email sent successfully:', response);
                if(isBackend) {
                    const contactBase = formData as ContactBase;
                    addContact(contactBase).then(() => {
                        console.log('Contact added successfully to db')
                    }).catch((error) => {
                        console.error('Failed to add contact to db:', error);
                    });
                }
            }).catch((error) => {
                console.error('Email sent failed:', error);
                setError('Failed to send email');
            }).finally(() => {
                setLoading(false);
            });
    }
}