// now the solution to the problems 

const userMethods = {
    about: function() {
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
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user1 = createUser('arpan', 'dhara', 'arpandhara@email.com', 18, '23/3 joydev road , durgapur - 713205');

console.log(user1);
console.log(user1.about());

