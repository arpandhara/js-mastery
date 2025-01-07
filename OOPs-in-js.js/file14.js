// class keyword 

// class are fake in js because as internally they  are done the long way 

// function CreateUser(firstName, lastName, email, age, address) { // there is a convention in which if there is a constructor function and it has to be called by calling new then we write the first letter of the function in capital letter 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// };

// CreateUser.prototype.about = function () {
//    return `${this.firstName} is ${this.age} years old `;
// }
// ;
// CreateUser.prototype.is18 = function(){
//    return this.age >= 18;
// }
// ;
// CreateUser.prototype.sing = function(){
//     return` teri meri prem kahani`;
// };

// const user1 = new CreateUser('arpan', 'dhara', 'arpandhara@email.com', 18, '23/3 joydev road , durgapur - 713205'); // here the link has been created to the prototype or the empty object of the function create user and an empty object is also been created named this and that is returned 
// console.log(user1.age);


// we are going to make this code much easier using class keyword 

class createUser { // here the class keyword creates a funciton on its own
    constructor(firstName, lastName, email, age, address) { // the constructor creates an object for us 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() { // now here we can write the methods , we do not have to write createuser.prototype.about = function(){} it can be written easily here with the class keyword 
        return `${this.firstName} is ${this.age} years old `
    };
    is18() {
        return this.age >= 18;
    }
    func(a){
        return a;
    }
}
const user1 = new createUser("arpan", "dhara" , "arpan@email.com" , 18 ,"23/3 bharati road bzone , dgp - 713205")
// console.log(user1); // here we must have to use new
let b = user1.func(5)
console.log(user1.func(b));
// console.log(user1.func(5));


