// every method 

const numbers = [2,4,6,8];
let a = numbers.every((number) => number%2 === 0);

// the every method checks weather all the items in the array passe the given condition or not , if it passed then only it gives true , and if it does not passes then it gives false


const products = [ 
    {productID:1 , productName: "P1" , price : 1200},
    {productID:2 , productName: "P2" , price : 200},
    {productID:3 , productName: "P3" , price : 100},
    {productID:4 , productName: "P4" , price : 500}
]

let productPrice = products.every((price_of_product => price_of_product.price<1000));
console.log(productPrice);

