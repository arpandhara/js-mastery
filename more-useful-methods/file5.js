// optional chaining 


const user = {
    firstName : "harshit",
    address : {housenumber : "23/3"}
};
console.log(user.firstName);
console.log(user.address.housenumber);// if there is an object as a value in any of the object's key we can access those values like this 

// but for ex if if comment out the address and the try to do the same thing 


const user1 = {
    firstName : "harshit",
    // address : {housenumber : "23/3"}
};
// console.log(user1.address.housenumber); // we are getting a error as it is trying to access a key(houseNumber) from a key(address) which is already undefined

// to avoid thid problem we use optional chaining 

console.log(user1 ?. address ?. housenumber); // here it will return undefined as it will not procces to check for houseno if the previous key is indefined and it will reuturn undefined 

