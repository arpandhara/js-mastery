// const user1 = {
//     firstName: "arpan",
//     lastName: "Dhara",
//     email: "arpandhara294@gmail.com",
//     age: 18,
//     address: "23/3 joydev road , durgapur - 713205",
//     about: function () {
//         return `${this.firstName} is ${this.age} years old `;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// };

// let aboutUser = user1.about();
// console.log(aboutUser);

// now if we want lakhs of users like this we can not do it like this for that we need to make a function that will take a user input and store them in a object 

const userMethods = {
    about : function () {
        return `${this.firstName} is ${this.age} years old `;
    },
    is18 : function () {
        return this.age >= 18;
    },
    sing : function() {
        return `teri meri prem kahani`
    }
}
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser('arpan', 'dhara', 'arpandhara@email.com', 18, '23/3 joydev road , durgapur - 713205');
console.log(user1);
const userAgeCheck = user1.is18();
console.log(userAgeCheck);
const user1about = user1.about();
console.log(user1about);


