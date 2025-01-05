// methods 

// function inside object 

function userAbout() {
    console.log(`person name is ${this.firstName} and his age is ${this.age}`)
}

const person1 = {
    firstName : "arpan",
    age: 18,
    about : userAbout
};
const person2 = {
    firstName : "shivam",
    age: 11,
    about : userAbout
};
const person3 = {
    firstName : "rahul",
    age: 24,
    about : userAbout
};
// console.log(person.about());
person1.about();
person2.about();
person3.about();

// thus if we want to call a function which is inside an object we use do this and get values from the object to be used in the function we use this method 

