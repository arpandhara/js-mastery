// arrow function 


const user1 = {
    firstName: "arpan",
    age: 8,
    about: function () {
        console.log(this.firstName, this.age);
    }
}
user1.about();


// bow with the arrow function


const user2 = {
    firstName: "arpan",
    age: 8,
    about:  () => {
        console.log(this.firstName, this.age);
    }
}
user2.about();

// for the arrow function the this is taken from a level up from the surrounding and here the this is not the user1 but the window 
// we cannot even change the object to be called by the call function 