// const coding = ["js", "py", "java", "c++", "c#"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5,6,7,8,9,10];

// let newNums = myNums.filter( (num) => {
//     return num > 4
// } ) //FILTER



// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books =[
    {title: "book1", genre: "Fiction" , publish: 2020 , edition:2024},
    {title: "book2", genre: "Non-fiction" , publish: 2010 , edition:2017},
    {title: "book3", genre: "Fiction" , publish: 2002 , edition:2006},
    {title: "book4", genre: "History" , publish: 2016 , edition:2019},
    {title: "book5", genre: "Science" , publish: 2024 , edition:2025},
    {title: "book6", genre: "Adventure" , publish: 2000 , edition:2016},
    {title: "book7", genre: "Science" , publish: 2022 , edition:2023},
];

let userBooks = books.filter( (bk) => {
    return bk.genre === 'Science'
});

userBooks = books.filter( (bk) => {
    return bk.publish >= 2020 && bk.genre === 'Science' 
})

console.log(userBooks);
