// difference between dot and bracket notation 

const key = "email";
const person = {
    name : "arpan" ,
    age : 18 ,
    "person hobbies" : ["coding" , "reading" ,"playing games"]
}
console.log(person["person hobbies"]); // we can not access the person hobbies key by using dot as there is a space in between so we have to use the brackeet notation .

person[key]= "arpan@email.com" ; // this is how we add a new key which is declared in another variable , we use the bracket notation .
console.log(person);
