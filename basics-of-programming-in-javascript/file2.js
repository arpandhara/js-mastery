"use strict";
// intro to variables 

// varibles can store some information 
// we can use that information later 
// we can change that information later 


// declare a variable

var a = 5
// here "var" is a varible , say it as a container , or a bucket "a" is the name of that conatiner , we can keep any name of the conatiner . Like:

var firstname = 6
var chachamausi = 8
var disha = 8

// we can keep any name we want 
// "6,8,5" this are values we can asign values , maybe a number , a string , a array anything .Ex:

var name = "arpan" // string 
var name2 = [1,2,3,4] // array 
var name3 = true // bollean 
var name4 = 7 //number 
var name5 = undefined //undefined 

// use a varible 

console.log(name);
// this is how we can use a variavle to showcase the value store in it 

// JS IS  A CASE SENSITIVE LANGUAGE 

// console.log(Name); 
// Name is not defined [ERROR]
// js is a case sensitive language which means that if the letters arre in small hand then we have to declare it in also small hand and vice verca


// change value

name = "disha";
console.log(name);
// OUTPUT : disha , as the value has been changed


// NOW LET'S TALK ABOUT A EDGE CASE 

var firstname = "kaka"
console.log(firstname);

// we can write it like this also 

firstname2 = "kaka"; // we didnt delcare any variable still js internally declares a var . jyada chuut de raha hai huma 
console.log(firstname2);

// to avoid this "use strict"

// now this 
// firstname2 = "kaka";
// console.log(firstname2);

// will give us a error firstname2 is not defined
// now we need to declare a variable 

// var , ye chiz dena hei parega



