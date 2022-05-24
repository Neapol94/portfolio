export class Model {
    public name: string;
    public subject: string;
    public email: string;
    public message: string;

    constructor(name: string, subject: string, email: string, message: string) {
        this.name = name;
        this.subject = subject;
        this.email = email;
        this.message = message;
        }
}