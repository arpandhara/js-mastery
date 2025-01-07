let number = [1,2,3];
console.log(number);
// number.//there aremany methods like fill push pop these methods are stored in prototype and we get it from there 
// But here it is not a function so how the array is getting all the methods 


// internally the arrays are made by using constructor function 

let numbers = new Array(1,2,3);
// this is how the arrays are made internally 

console.log(Object.getPrototypeOf(number)); //this is how we get the proto of the function 

function hello(){
    console.log(hello);
};
// with every function we get a free object known as a prototype 

console.log(hello.prototype); 

// the prototype is always an object , but we can change it 
hello.prototype = [];
console.log(hello.prototype); // now it is an empty array 
hello.prototype.push(1);
console.log(hello.prototype);


