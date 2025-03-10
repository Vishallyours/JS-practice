// REDUCE

const myNumbers = [1, 2 , 3 ]

// const total = myNumbers.reduce( function (acc,currentVal) {
//     console.log(`acc: ${acc} , currentVal: ${currentVal}`);
//     return acc + currentVal
// }, 0)

const total = myNumbers.reduce((acc, currentVal) => (acc+currentVal) , 0)

// console.log(total);


const shoppingCart = [
    {
        itemName: 'js cource',
        price: 2999
    },
    {
        itemName: 'python cource',
        price: 999
    },
    {
        itemName: 'mobile cource',
        price: 5999
    },
    {
        itemName: 'data-science cource',
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc +  item.price, 0)

console.log(pricetopay);

