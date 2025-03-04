// var thirdVariable = 300
let firstVariable = 120 

if (true) {
    let firstVariable = 10
    const secondVariable = 20 
    // var thirdVariable = 30  
    // console.log("Inner:", firstVariable);
}
  
// console.log(firstVariable);
// console.log(secondVariable);
// console.log(thirdVariable);

function one() {
    const username = "Vishal"

    function two() {
        const website = "utube"
        console.log(`${username} is using ${website}`);
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Vishal"

    if (username === "Vishal") {
        const website = " utube"
        // console.log(username + website);
        
    }
    // console.log(website); error bcz of out of scope
}
// console.log(username); error bcz of out of scope

// ++++++++++++++ interesting +++++++++++++++++++++++

console.log( addOne(5))
function addOne(num) {
    return num + 1
}
 

addTwo(5)
const addTwo = function(num) {
    return num + 2
}