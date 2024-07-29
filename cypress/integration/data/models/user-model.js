export class UserData{
    constructor(email,password,remember=false) {
        this.email=email;
        this.password=password || 'password';
        this.remember=remember ?? true;
    }
}