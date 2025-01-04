// reduce method 

const numbers = [1,2,3,4,5];



const sum = numbers.reduce((accumulator , currentValue) => {
    return accumulator+currentValue ;
},0)
console.log(sum);


// flow of execution 

/* accumulator    currentvalue   reutned value 
     1                2                3
     3                3                6
     6                4               10
     10               5               15 final ans 
*/


const userCart = [
    {productId : 1 , productName : "mobile" ,price : 12000},
    {productId : 2 , productName : "laptop" ,price : 22000},
    {productId : 3 , productName : "tv" ,price : 42000},
];


let userBill = userCart.reduce((totalPrice , currentPrice) => {
return totalPrice+ currentPrice.price;
},0) // here ,o sets the initial value of the totalprice to be 0 
console.log(userBill);
