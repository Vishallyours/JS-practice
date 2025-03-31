class User {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPasword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const sys = new User ("vish" , "vishallyours@gmail.com", "123")

console.log(sys.encryptPasword());
console.log(sys.changeUsername());



// behind the scene // if not using class

function user(Username,password,email) {
    this.username = Username;
    this.email = email;
    this.password = password;
}


user.prototype.encryptPasword = function(){
      return `${this.password}abc`
}

const ysy = new user("radhey", "135","Radhey@gmail.com" )   

console.log(ysy.encryptPasword());


user.prototype.changeusername = function() {
        return`${this.username.toUpperCase()}`
        }

console.log(ysy.encryptPasword());
console.log(ysy.changeusername());
