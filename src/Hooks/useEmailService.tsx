import {Dispatch, SetStateAction} from "react";
import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function useEmailService(
    formData: FormData,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string | null>>) {
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
            }).catch((error) => {
                console.error('Email sent failed:', error);
                setError('Failed to send email');
            }).finally(() => {
                setLoading(false);
            });
    }
}