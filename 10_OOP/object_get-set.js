const User = {
    _email : 'hcverma@gmail.com',
    _password: "12ssa" ,

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value
    },
}


const bro = Object.create(User)
console.log(bro.email);
