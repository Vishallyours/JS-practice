class User {
    constructor(username){
            this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Vishal = new User("vish")
// console.log(Vishal.createId())

class Teacher extends User {
    constructor(username, subject){
        super(username)
        this.subject = subject
    }
}


const sys = new Teacher("sys", "math")

sys.logme();
console.log(sys.createId());
 
