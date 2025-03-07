// if statement
// < , > , <= , >= , == , != , === , !== comparision

// const isUserLoggedIn = true
// const temperature = 41

// if( temperature < 50 ){
    
//     console.log("temperature is less than 50");
// }else{

//     console.log("temperature is greater than 50");
// }

// console.log("Execute");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power ${power}`);
// }

// console.log(`user power ${power}`);

// const balance = 1000
// if (balance> 500) console.log("test"); // implicit return

// // nesting
// if (balance < 500) {
//     console.log("less than 500");
    
    
// }else if (balance < 750){
//     console.log("less than 750");
    
// }else if (balance < 900) {
//     console.log("less than 900")
 
// }else {
//     console.log("balance <= 1000");
       
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle ) {
    console.log("User is logged in");
    
}

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy item");
    
}
