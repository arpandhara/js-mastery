// iterables 
// jispe hum for of loop laga sakein 
// string , array are iterables 

const firstName = "harshit" ;
for (const char of firstName) {
    console.log(char);
}; // we can use for of loop for string 

const myArray = ["item1" , "item2"];
for (const item of myArray) {
    console.log(item);   
} // we can use for of loop for array 

// const users = {"key1" : 1 , "key2" : 2};
// for (const user of users) {
//     console.log(user);
// } // objects are not iterable , we can not use for of loop in case of objects , thus it is not iterable 



// array like objects 
// jinke pas length property hoti hai 
// aur jinko hum index se access kar sakta hai 
// ex - string 

const myName = "arpan";
console.log(myName.length);
console.log(myName[2]);

// as the string has the length property and it can be accessed by its index thus it is a array like object 

