// intro to arrays 



// array is a reference data type 
// arrays are a ordered collection of elements or items 
// in arrays we can store any data type 

let fruit1 = "apple" ; // here we are only able to store only one value 
let fruit = ["apple" , "orange" , "mango" , "grapes"]; // but here in one variable we are able to store many values , we stored here 4 values

console.log(fruit);
console.log(typeof fruit);// object

// now id we want to know that an array is actually an array  or not , then we use this 


console.log(Array.isArray(fruit))// true , this will return true if the value is an array



console.log(fruit[3]);// if we want only the apple item to get printed then we could target it by its index 

// how to create arrays 

// array indexing 

//    -4        -3         -2         -1
// ["apple" , "orange" , "mango" , "grapes"]
//    0         1           2          3



// just like we used to give indexes to a string we also give index to an array 


