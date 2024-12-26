// primitive vs reference data type 

// primitive data type 


let num1 = 6 ;
let num2 = num1 ;
console.log(num1); //6
console.log(num2); //6

num1 = 7;
console.log(num1); //7
console.log(num2); //6


// reference data type 

let arr1 = ["item1","item2"];
let arr2 = arr1 ;
console.log(arr1); // ["item1","item2"] 
console.log(arr2); // ["item1","item2"]

arr1.pop();
console.log(arr1); // ["item1"]
console.log(arr2); // ["item1"]


