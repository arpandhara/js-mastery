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
function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype); // ab hum yaha pai proto us prototype ko rakh raha hai , now it will access the values not found in the object user from the prototype of the function create User  
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

// yaha hum create user ki function mai jo prototype urf jo khali object milta hia usme ye store kar de raha hai

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old `;
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return `teri meri prem kahani`;
};
const user1 = createUser('arpan', 'dhara', 'arpandhara@email.com', 18, '23/3 joydev road , durgapur - 713205');
// console.log(user1.about());
// console.log(user1.sing());

// console.log(createUser.prototype);
console.log(user1.about());
console.log(user1.is18());

