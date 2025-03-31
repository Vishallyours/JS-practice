class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username} `);
        
    }
}

const sim = new Teacher("monika", "monika@gmail.com", "123456")

sim.addCourses()

const mis = new User("simrtan")

mis.logme()

sim.logme()

console.log(sim === mis);

// console.log(sim instanceof User);
