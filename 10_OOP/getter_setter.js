class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }


    get password() {
        return `${this._password}sys`;
    }
    set password(value){
        this._password = value;
    }
}

const vish = new User ('vishal@gmail.com','vishal123');

console.log(vish.password);
console.log(vish.email);

