// how to iterate object , iterate means to loop through the object

// for in loop
const person = {
    name: "arpan",
    age: 18,
    city: "durgapur",
    hobbies: ["coding", "reading", "playing games"]
}
// for (let key in person) {
//     console.log(key , person[key]); // key gives the key name and the preson key give the key value 
// }


// object.key 

console.log(Object.keys(person)); // object.keys returns an array of the keys of the object
// this is another way to iterate through an object 

for (const key of Object.keys(person)) {
    console.log(key , ":" ,person[key])
} // we can also iterate with for of loop 


