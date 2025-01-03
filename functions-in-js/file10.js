// parameter destructuring 

// object 


const person = {
    firstName : "arpan",
    gender : "male"
}
// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj["gender"]);
// }
// printDetails(person)


function printDetails({firstName , gender}) { // this is parameter destructuring if we know we will get an object here then we destructure the obj there only 
    console.log(firstName);
    console.log(gender);
}
printDetails(person)