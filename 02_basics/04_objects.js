// const tinderUser = new Object(); //singleton object

const tinderUser = {

}

 tinderUser.id = "15451"
 tinderUser.name = "Vishal"
 tinderUser.isLoggedIn = false


// console.log(tinderUser);

const instaUser = {
    email: 'some@gmail.com',
    fullname:{
        userfullname: {
            firstname : "vishal",
            lastname: "sain"
        }
    }

}

// console.log(instaUser.fullname?.userfullname?.lastname);

const obj1 = {1: "a", 2: "b", 3: "c"};

const obj2 = {4: "a", 5: "b", 6: "c"};

// const obj3 = {obj1 ,obj2}

// const obj3 = Object.assign({}, obj1, obj2) 
// console.log(obj3); // {} is the default value for the second argument of Object.assign()


const obj4 = Object.assign( obj1, obj2) 
// console.log(obj4); // obj1 is the default value for the second argument of Object.assign()

const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:'V@gmail.com',
    },
    {
        id: 1,
        email:'V@gmail.com',
    },
    {
        id: 1,
        email:'V@gmail.com',
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype of output value is array

console.log(Object.values(tinderUser)); 

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

