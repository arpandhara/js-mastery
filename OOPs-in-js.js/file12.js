// NEW keyword 

// function createUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// };
// createUser.prototype.about = function(){
//     console.log(this.firstName , this.age);
// }
// const user1 = new createUser("harshit" , 18);
// // new keyword teem kaam kar raha hai 
// // -> empty object this = {}
// // -> reutrn this 
// // -> 
// console.log(user1);


// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old `;
//     },
//     is18 : function () {
//         return this.age >= 18;
//     },
//     sing : function() {
//         return `teri meri prem kahani`
//     }
// }
function CreateUser(firstName, lastName, email, age, address) { // there is a convention in which if there is a constructor function and it has to be called by calling new then we write the first letter of the function in capital letter 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
};

CreateUser.prototype.about = function () {
   return `${this.firstName} is ${this.age} years old `;
}
;
CreateUser.prototype.is18 = function(){
   return this.age >= 18;
}
;
CreateUser.prototype.sing = function(){
    return` teri meri prem kahani`;
};

const user1 = new CreateUser('arpan', 'dhara', 'arpandhara@email.com', 18, '23/3 joydev road , durgapur - 713205'); // here the link has been created to the prototype or the empty object of the function create user and an empty object is also been created named this and that is returned 
console.log(user1.age);

