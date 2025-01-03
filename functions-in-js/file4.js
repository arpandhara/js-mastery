// functions are hoisted / hoisting 

hello(); //now here we are calling the function before even it is made , but it will work as functions in js are hoisted , which means the you can call the functions before even it iis made . This is known as hoisting  

function hello () {
    console.log("hello world");
};

hello(); // here the function is being called 

// FUNCTION EXPRESSION 

// in case of function expression we can not do that as they are not hoisted . and we will get a error 

helloworld();
const helloworld = function(){
    console.log("hello world");
};


// same is for arrowfunctions also , we will get a error as arrow functions are not hoisted 

helloworld2() ;
const helloworld2 = () => console.log("hello world");


// like that var is also hoisted 

