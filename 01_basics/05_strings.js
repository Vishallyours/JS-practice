const name = "vishal"
const repoCount = 14


// console.log(name + repoCount + " value"); outdated way of concatenation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 


const gameName = new String('VishalSain')

// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.charAt(2));
/* console.log(gameName.constructor(0));  returns the function that created the object
*/

// console.log(gameName.endsWith(0)); // returns true if the string ends with the specified value

// console.log(gameName.fixed()); // returns the string with the specified value replaced with the fixed value

// console.log(gameName.fontcolor()); // returns the string with the specified color

// console.log(gameName.fontsize(16)); // returns the string with the specified font size

// console.log(gameName.includes("h","s")); // returns true if the string includes the specified value

// console.log(gameName.isWellFormed()); // returns true if the string is well-formed

// console.log(gameName.italics("Vis")); // returns the string with the specified value in italics

// console.log(gameName.link("Vis")); // returns the string with the specified value as a link

// console.log(gameName.localeCompare(1)); // returns the string with the specified value as a locale

// console.log(gameName.match("i")); // returns the string with the specified value as a match

// console.log(gameName.matchAll()); // returns the string with the specified value as a match

// console.log(gameName.normalize()); // returns the string with the specified value as a normalized string

// console.log(gameName.padEnd(9)); // returns the string with the specified value as a padded string

// console.log(gameName.repeat(3)); // returns the string with the specified value repeated

// console.log(gameName.repeat(3)); // returns the string with the specified value repeated

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(0,-4)
// console.log(anotherString);

const newString2 = "  pooja   "
// console.log(newString2);
// console.log(newString2.trim());

const url = "https://www.google.com/vishal%20Sain"

// console.log(url.replace('%20' , ' '))

const name1 = "vish all yours"
// console.log(name1.split(' '));
