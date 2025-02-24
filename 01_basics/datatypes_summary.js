// premetive datatype 

// 1. String 
// 2. Number 
// 3. Boolean 
// 4. Null 
// 5. Undefined 
// 6. BigInt 
// 7. Symbol 


const score = 90;
const scoreValue =10.5;

const isHighScore = true;
const temprature = null
let userEmail ;

const id = Symbol('123');
const id2 = Symbol('123');

// console.log(id === id2)


const bigNumber = 100000000000000000000000000000000000000000000000000000000n

// console.log(typeof bigNumber) // BigInt



// Reference (non-premetive) datatypes

// 1. Array , Objects , Functions


// EXAMPLE of array
const heros = ["tonystark , hulk , mufasa"]

const user = {
    name : "john",
    age : 25,
    sex : "Male"
};
// console.log(user)

// example of functions

const myFunction= function() {
    console.log("hello world") ;
    
}

// console.log(typeof heros)


// all non premetives datatypes are object and fuction datatypes is function obejct



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory types in JAVASCRIPT 

// Stack(premetive) , HEAP (NON premetive)

// in stack we got copy of the data 
// in heap we got reference of the data

// example of stack

let myYtName = "vishallyours"

let another_name = myYtName

another_name = "vishallmine"

// console.log(myYtName)
// console.log(another_name)

let userOne = {
    name : "john",
    email : "john@gmail.com",
    upi : "user@upi"
}

let userTwo = userOne

userTwo.email = "vish@google.com"

// console.log(userOne.email)
// console.log(userTwo.email)