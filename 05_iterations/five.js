const coding = ["js","python ","java","c++","c#"];

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// })



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
    



// coding.forEach( (item , index , arr) => {
//     console.log(item, index , arr);
// })
        


const myCode = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
]

myCode.forEach( (item) => {
    console.log(item.languageName);
    
})