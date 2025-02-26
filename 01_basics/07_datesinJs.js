// Dates

let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toUTCString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCDate = new Date( 2025, 0 , 23)
// let myCDate = new Date( 2025, 0 , 23, 5, 3)
// let myCDate = new Date("2025-01-14") //yy-mm-dd
// let myCDate = new Date("01-14-2025") // mm-dd-yy


// console.log(myCDate.toLocaleString());

// Timestamp 

let myTimestamp = Date.now();

// console.log(myTimestamp);

// console.log(myCDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
// console.log(`${newDate.getDate()}`);

console.log(
    
    newDate.toLocaleString('default',{
        weekday: 'long',
        timeZone: 'UTC',
    })
);
 



// console.log(Date.now());


