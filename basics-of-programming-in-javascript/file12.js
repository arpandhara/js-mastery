// booleans and comparison operators 

// booleans are basically are true or false

let num1 = 5;
let num2 = 5;
// > or < than operator 

console.log(num1>num2) 

// >= or <= operator

console.log(num1>=num2) //either it is > than , < than or equal to = 

// == vs ===

let num3 = "7"; //string
let num4 = 7; //number


console.log(num3 == num4); //true

// even though it is a string and the next is a number it returns true as == checks the number not the data type

console.log(num3===num4); //false

// here it is false bcs it checks the no as well its data type thus it returns false



// != vs !==

let num5 = 5;
let num6 = 6;


console.log(num5!=num6); // != checks weather the two no is different or not if different then it returns true and if same then it returns false 

// now 

num5 = "5"; //changed to string
console.log(num5!=num6); // gives true , even though they are not same as one is string and the other is a number , as again just like == it checks only the no and not the data type 


// but 

console.log(num5!==num6);// gives false , as like === it checks both the no and the data type 


