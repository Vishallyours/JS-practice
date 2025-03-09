// for of

// ["","",""]
// [{},{},{}]

// const arr = [1 , 2, 3, 4, 5]

// for (const element of arr) {
//     console.log(element);
    
// }

// const greeting = "Hello world!"

// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }


// Maps

const map =new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')

// console.log(map);

for (const [code ,country] of map) {
    console.log(code, ':-', country);
    
}

const myObj = {
    'Game1':'GOW', 
    'Game2':'GTA', 
}

// for (const [key,value] of myObj) {
//     console.log(key, value);
    
// }

