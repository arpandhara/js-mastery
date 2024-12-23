// let keyword 
// declare variable with let keyword


// just like var we also use let 

var roll1 = 1;
let roll2 = 2;

// both are same 
 console.log(roll1);
 console.log(roll2);
 

//  just like var let is also a container/variable that stores a value 

// BUT THERE ARE SOME DIFFERENCES 


// var is a global/function scope and let is  block scope 
// in modern js / ES6 we mostly use let and it is prefered to use let 


// but lets talk some differences 

// mai agar asa likhu 

var collegeName = "bcrec"; //1st time
var collegeName = "bcrec"; //2nd time
console.log(collegeName); //output : bcrec , no error thrown 

// but in case of let 

let college_name = "bcrec"; //1st time
// let college_name = "bcrec"; //2nd time 
console.log(college_name); // output : Identifier 'college_name' has already been declared
// in case of let you can not declare same variable name twice 

