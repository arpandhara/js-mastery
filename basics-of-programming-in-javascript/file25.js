// array push pop 

// array shift unshift 

// NOTE : ARRAYS ARE MUTABLE 

let fruits = ["apple" , "orange" , "mango" , "grapes"];
console.log(fruits) //[ 'apple', 'orange', 'mango', 'grapes' ]



// push 

// push adds an element at the end of an array

console.log(fruits.push("banana") , fruits);



// pop 

// pop removes an element from the end of an array and also returns it 
// now the array is(initial) [ 'apple', 'orange', 'mango', 'grapes', 'banana' ]

let poppedFruit = fruits.pop() // popped the last element which is "banana"  here and returned it and we stored it in the a variable
console.log(fruits) // noe we are printing the modified array 

// Note : pop func not only removes the item from the array but also returns it 



// unshift 
// unshift adds an item at the starting of the array 

fruits.unshift("avacado"); // adding an item named "avacado" to the starting of the array 
console.log(fruits) // the new modified array is printed 


// shift 
// removes an item from the starting of the array and also returns it 

let removedFruit = fruits.shift() // removes the 1st item from the array which is "avacado"
console.log(fruits);// the new modifed array is printed 
console.log(removedFruit) // avacado 


// note : push and pop is faster in speed of execution than shift and unshift 

