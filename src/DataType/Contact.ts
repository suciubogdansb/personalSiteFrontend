export interface ContactBase {
    name: string;
    email: string;
    message: string;
}

export interface Contact extends ContactBase {
    contactId: string;
    creationDate: Date;
}