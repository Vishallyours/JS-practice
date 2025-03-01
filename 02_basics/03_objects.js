// singleton 

// objects literals

// Object.create

const mySym = Symbol('key1');

const JsUser = {
    name: 'Vish',
    "full name": "Vishal Sain",
    age: 22,
    location: 'sirsa',
    email: 'vish@gmail.com',
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]   ,
    [mySym]: 'myKey1'

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser[mySym]); // myKey1
// console.log(typeof JsUser[mySym]); // string // value stores in object is always string

// console.log(typeof (mySym)); // symbol
// console.log(JsUser["full name"]);


JsUser.email = "vishalsain@gmail.com" // change value of email

// Object.freeze(JsUser) // locks the object

JsUser.email = "sru@gmail.com" // does not change value of email

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

JsUser.greeting();
JsUser.greetingTwo();

