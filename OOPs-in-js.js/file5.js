// short syntax 

const user1 = {
    firstName: "arpan",
    age: 8,
    about(){ // here we are directly making the key as a function and , it works exactly like with the key name and then the function . 
        console.log(this.firstName, this.age);
    }
};
user1.about();