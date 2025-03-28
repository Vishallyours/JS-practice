// let myName = "Vishal     "

// console.log(myName.truelength);


// Method

let myHeros = ["thor", "doberman"]

let heroPower = {
    thor: "Mjolnir",
    doberman: "Super Strength",
    
    getDoberPower: function(){
        // console.log(`dober power is ${this.doberman}`);
    }
}
Object.prototype.vishal = function () {
    // console.log(`vishal is present in all objects`);
    
}

// heroPower.vishal()
Array.prototype.heyVishal = function () {
    // console.log(`vishal says Hey`);
    
}

myHeros.vishal()
myHeros.heyVishal()
// heroPower.heyVishal()


// Inheritance

const User = {
    name: "vishal",
    email: "vish@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport={
    Isavailable: false
}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User // this is old approach

// modern approach
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Vishallyours      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
 
    console.log(`True length is ${this.trim().length}`);

}

anotherUsername.trueLength()
"Vishal".trueLength()
"Raju".trueLength()