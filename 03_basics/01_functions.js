function sayMyName() {
    console.log("My name is vishal" );
}

// sayMyName // function reference
// sayMyName() // function execution

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
     
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;
    
    return number1 + number2
}

const result =  addTwoNumbers(1,23);

// console.log("Result:" , result);

function loginUserMessage(username) {
    if(!username){
        console.log("Please enter your username");
        return
    }

    return `${username} just logged in`;
}


console.log(loginUserMessage(""))