// prototype 

// function ===> function  + object 

// jab bhi hum function banatr hai tab function huma dete hai free space , which is actually nothing but an empty object 

// this space is known as prototype , or the empty object is known as prototype 

// an prototype is nothing but an object 

function ello() {
    console.log("hello world");
};
console.log(ello.prototype); // would give an empty object {}

// only functions provide prototype property , no other in js provides prototype property 

let hello1 = {
    key1:"value1",
}
if(hello1.prototype){
    console.log(`prototype is present`);
}else{
    console.log(`prototype is not present`);
} //prototype is not present as prototype is not present in object , it is only present in functions 

ello.prototype.abc = "abc";
console.log(ello.prototype);
ello.prototype.xyz = "xyz"
console.log(ello.prototype); // this keys are stored in the empty object or prototype of function .



