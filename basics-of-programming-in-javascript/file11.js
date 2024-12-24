// undefined 


let firstname;
console.log( firstname); //undefined

var secondName;
console.log(secondName);//undefined

// but in const you have to assign a value too it other wise it will throw a error 

const thirdName = "";
console.log(thirdName)



// null

// null means nothing 
let myvariable = null ;
console.log(myvariable , typeof myvariable); //null object 

// typeof null is object?  WWWWHHHHYYYYY???/
// this is a bug in js , and it is not fixed bcs there are many code bases built keeping in mind about that bug , if it gets fixed they all have to change their code base , thus they kept it a bug and didn't fixed it


// BigInt [new feature]came in 2020

let myNumber = 123;
// kya ye jo no hum de raha hai iska koi limit hai , ans is bilkul hai 

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 , this is the limit 

// but if we want to store a bigger no than that , we use big int 

let samemyNumber = BigInt(12739727738273721873878372978712387238787837487); // when we want a value big like this we use big int 
console.log(samemyNumber); 

// there is another way 

let samemyNumber2 = 162627863763763862n ; //by adding n to the last of the no it becomes a big int no 
console.log(samemyNumber);
