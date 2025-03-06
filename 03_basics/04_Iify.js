// Immediately Invoked Function Expressions (IIFE)
(
function suc () {
    // named IIFE
    console.log(`DB Connected`);
    
})();

// due to problems occur by the global scope's pollution  // to remove the pollution fron the glbobal scope we use IIFE 

// wrap the function in the () for the defination and in end () for the execution of the function // IIFE call // ()()

( (name) => {
    // unnamed IIFE
    console.log(`DB Connected 2 ${name}`);
    
} )('vishal')

