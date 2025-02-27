// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Vish", "thor"]

const myArr2 = new Array(1 ,2 ,2 ,2 ,2)

// console.log(myArr["1"]);

// Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(11)
// myArr.shift()

// console.log(myArr.includes(5));

// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(myArr);

// console.log(newArr);

// Slice , Splice ======== Imp

console.log("A", myArr); // A [0, 1, 2, 3, 4, 5]
const myn1 = myArr.slice(1, 3)
console.log(myn1); // [1, 2]


console.log("B", myArr); // B [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3)
console.log("C", myArr); // C [0, 4, 5]
console.log(myn2); // [1, 2, 3]

// Slice
