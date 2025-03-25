const user = {
    username: "vishal",
    logInCount: 8,
    signIn: true,
    getuserDetails: function() {
        // console.log(`Username: ${this.username}`);
        // console.log("got user details from DB");
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getuserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.logInCount = loginCount,
    this.isLoggedIn = isLoggedIn
    this.greetings = ()=>{
        console.log(`Hello ${this.username}`);
    }
    return this
}

const userOne = new User("vishal", 12 , true);
const userTwo = new User("pooja", 9 , false);

console.log(userOne.constructor);
// console.log(userTwo.greetings());
