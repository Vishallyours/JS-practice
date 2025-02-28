const marvel_heroes = ["Thor", "spiderman", "ironman"]
const dc_heroes = ["Superman", "Batman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const all_heros =  marvel_heroes.concat(dc_heroes) // concat is used to merge two arrays returns a new array
// console.log(all_heros);

const allNewHeros = [...marvel_heroes, ...dc_heroes]  // spread method // returns a new array (most people use this instead of concat to merge array) 
// console.log(allNewHeros);


const newArr = [1,2,3,[4,5,6,],[7,8,9],41,[12, [7,4,1]]]

const real_another_arr = newArr.flat(Infinity) // flat method used to remove nested arrays
// console.log(real_another_arr);

// console.log(Array.isArray("Vish")) // isArray method used to check if the value is array or not
// console.log(Array.from("Vish"))  // from method used to convert string to array
// console.log(Array.from({name:"vish"})) // array.from method 


let score1 = 120
let score2 = 240
let score3 = 360

// console.log(Array.of(score1,score2,score3)); // array.of method used to create array from values

