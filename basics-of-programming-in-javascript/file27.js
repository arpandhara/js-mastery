// how to clone an array 



let arr1 = ["item1" , "item2"];
let arr2 = arr1;
console.log(arr1 === arr2) // true 

// now if we want that if we change an arr1 and arr2 do not get affeted 

// way 1 
let arr3 = ["item1" , "item2"];
let arr4 = ["item1" , "item2"];
console.log(arr3 === arr4) // false , bcs now the array are stored in two different location the arrays have now two different address in the internal memory 

// way 2 
// but what if there were millions of items in an array then we couldn't use the previous way 

let arr5 =["item1" , "item2"];
let arr6 = arr5.slice(0) // bcs with the slice we make a new array in the heap memory and thus if we change the arr5 then arr6 doesnt get effected
console.log(arr5); //["item1" , "item2"] 
console.log(arr6); //["item1" , "item2"]

arr5.pop();
console.log(arr5); //["item1"]
console.log(arr6); //["item1" , "item2"]

//way3

let arr7 = ["item1" , "item2"] ;
let arr8 = [].concat(arr7); // by concatinating the array we want to clone with an empty array we make an seperate array in the heap memory , and it doesn't get effected if we change the arr7
console.log(arr7);
console.log(arr8);

arr7.pop();
console.log(arr7);
console.log(arr8);

// way4 

// spread operator 


let arr9 = [1,2];
let arr10 = [...arr9]; // ... this is know as spread operator and it spreads the array thus forming a new array in the heap memory
console.log(arr9 === arr10) // false

// the most fast way is slice and the most used is spread operator