// static method and its properties 

class Person {
    constructor(firstname , lastname , age){
        this.firstName = firstname ;
        this.lastName = lastname;
        this.age = age;
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    };
    get isSuperCute(){
        return this.age<=5 ? `${this.firstName} is a pookie` : `${this.firstName} is an adult` 
    };
    static classinfo(){
        return `this is the class info`;
    }

}
const person1 = new Person("arpan" , "dhara" , 4); 
console.log(person1.isSuperCute); // this methods can only be called by the object name we cannot call them by the class name but we have a way to call the methods by the class name 

console.log(person1.classinfo); // undefined 
// now the classinfo can not be called by the object name 


// but you can call it by the class name 

console.log(Person.classinfo()); // now there will be no problem 

// static properties 


