
// now we will see the execution for function with var declaration 
console.log(myFunction);
var myFunction = function(){
    console.log("this is my fucntion");
};
console.log(myFunction);


 /* 
 now in the global execution context there will be some things stored before the execution of the code

 GLOBAL EXECUTION CONTEXT 

 the global object is stored 
 the global object is set equal to this 
 the myFunction is set as undefined
 
 CODE EXECUTION CONTEXT 

console.log(myFunction);               as the the var Myfunction is stored as  undfined thus it will show undefined 
var myFunction = function(){           now the value of the myFunction will be set equal to the function 
    console.log("this is my fucntion");
};
console.log(myFunction)                now here as the var myFunction is stored equal to the function written thus it will now print the whole function
 */


// now with let 

console.log(secondName);
let secondName = function(){
    console.log("this is my name")
};
console.log(secondName);

/*
GLOBAL EXECUTION CONTEXT 

in the global memory there is 

window is there 
this is set equal to window 
secondName = uninitialized  , which means the secondName is in the memory but it is not initialized yet 

now in the code execution part 

the error checking will be done 
 now in the memory as the let is not initialized yet thus there will be error regarding it saying that connot acces the variable before initializationn
 
*/