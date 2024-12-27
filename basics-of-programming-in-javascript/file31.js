// for of loop 
// the for of loop is used to loop throush the elements of an array and it is specially used for arrays , internally it works just like traditional for loops 

let fruits = ["apple", "orange", "mango", "grapes"]; // an array is made
for (const fruit  of fruits) { // here we do not have to define the the i and the increment operator and all it automatically set the i to 0 and i<arr.length and i++
    console.log(fruit); // and then the just like the for loop it get printed 
    // the output will be 
    // apple
    // orange
    // mango
    // grapes
}

// for in loop 

const fruit = ["apples" , "mangoes" , "grapes" , "oranges"];
 
for(let index in fruits){ // here in for of it takes the index 
    console.log(fruit[index]) ; //and we have to define by the index of the array 
}