
export class LoginErrorMessage {
    public type: string;
    public text: string;

    constructor(type: string, text: string){
        this.type = type;
        this.text = text;
    }

    private static invalidPassword = new LoginErrorMessage('INVALID_PASSWORD', 'Senha incorreta');

    private loginErrors: LoginErrorMessage[] = [
        LoginErrorMessage.invalidPassword
    ];

    public getErrorMessageByType(type: string){
        return this.loginErrors.find(e => e.type == type);
    }
}