const user = {
    username: "vishal",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} (global object) in node environment & window in browser environment


// function sys(){
//     let username = "vishal"
//     console.log(this.username); 
//     }

// sys()


//+++++++++++++ARROW FUNCTION+++++++++++++++++++++++
// const sys = function() {
//         let username = "vishal"
//         console.log(this.username); 
//         }
    
//     sys()


const sys = () => {
        let username = "vishal"
        console.log(this); 
        }
    
    // sys()

// const addTwo = (num1 , num2) => {
// return num1 + num2;
// } // basic arrow function explicit return

// const addTwo = (num1 , num2) => num1 + num2;

// const addTwo = (num1 , num2) => (num1 + num2); // implicit return

const addTwo = (num1 , num2) => ({username:"vishal"}); // implicit return when object is returned

console.log(addTwo(1,6));


