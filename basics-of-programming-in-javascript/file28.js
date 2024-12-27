// for loops in array 


//print the array items individually  

let arr1 = ["apple" , "orange" , "mango" , "grapes"];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
   arr2.push(arr1[i].toUpperCase());
}
console.log(arr2);
