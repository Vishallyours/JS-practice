const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // use i


const otherNumber = 124.54541
// console.log(otherNumber.toPrecision(3)); // 

const zero = 10000000.00
// console.log(zero.toLocaleString('en-in'));

// ++++++++++++ MATHS +++++++++++++++//

// console.log(Math.abs(-10))

// console.log(Math.round(425.450))

// console.log(Math.ceil(425.450))
// console.log(Math.floor(425.450))


// console.log(Math.sqrt(25))
// console.log(Math.min(12,51,2,6,25))

// console.log(Math.random())
// console.log(Math.floor(Math.random()*10) + 1)

const min = 1 
const max = 6 

console.log(Math.floor(Math.random() * (max - min + 1) + min ))


// Math.random() => gives value btw 0-1

// Math.floor() => gives base value removes the value after dot

// Math.random() + 1 => Avoids 0 outcome

// Math.random() * 10 => gives value btw 0-10

// Math.random() * (max - min + 1) + min => gives value btw min-max
