const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const mynewobj = Object.create(null)

const Sonpal = {
    name:"dharmpal",
    age: "74",
    isAlive: true,

    system :function(){
        console.log("system hai!!");
    } 
}
console.log(Object.getOwnPropertyDescriptor(Sonpal, "name"));

Object.defineProperty(Sonpal, "name" , {
    // writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(Sonpal, "name"));


// for (const [key , value] of Sonpal) {
// console.log(`${key}; ${value}`);
    
// }


for (const [key , value] of Object.entries(Sonpal)) {
    if(typeof value !== 'function'){

        console.log(`${key}; ${value}`);
    }
    
}