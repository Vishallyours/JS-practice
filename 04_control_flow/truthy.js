const userEmail = []

if (userEmail) {
    // console.log("Got user email");
    
}else{
    // console.log("don't have user email");
    
} 

// falsy values

// false , 0 , -0 , 0n , "" , null , undefined , NaN

// truthy values
// true , "0" , {} , [] , 4 , 5 , "hello"


if (userEmail.length === 0 ){
    // console.log("array is empty");
    
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
    
}


// Nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15

// console.log(val1);

// Terniary Operator 

// condition ? value_if_true : value_if_false

const icePrice = 100
icePrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");
;
