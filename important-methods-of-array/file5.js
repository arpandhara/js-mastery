// sort method 

const numbers = [5,6,8,2,1,30,20];
console.log(numbers.sort((a,b) => a-b)); // this is if we wanna keep it in ascending order 
console.log(numbers.sort((a,b) => b-a)); // this is if we wanna keep it in descending order 

// console.log(numbers.sort());

const userNames = ["harshit" , "soumo" , "arpan" , "rahul"];
console.log(userNames.sort());


// sorting products according to price 

const products = [ 
    {productID:1 , productName: "P1" , price : 1200},
    {productID:2 , productName: "P2" , price : 200},
    {productID:3 , productName: "P3" , price : 100},
    {productID:4 , productName: "P4" , price : 500}
]

const sortedproducts = products.slice(0);
console.log(sortedproducts.sort((a,b) => a.price - b.price));
console.log(products);




// HOW IT IS WORKING 
/*
30,20

a-b = 10
it is positive then it keeps the b first 
so now it becomes 20,30.


and if the result is negative then it keeps it as it is it do not change the value .

*/