// getter and setter 

class Person{
    constructor(firstname, lastname,age){
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
    }
    get fullname(){ // here we use the get method and using that we do not need to call the funtion internally it gets called automatically 
        return`${this.firstName} ${this.lastName}`
    }
    setName(firstname , lastname){
        this.firstName = firstname;
        this.lastName = lastname;
    }
    set fullname(fullname){
        const[firstname , lastname] = fullname.split(" "); // ye split se ye hoga ki jaha space hoga waha ye uskoo split kanka do value bana lega 
        this.firstName = firstname;
        this.lastName = lastname;
    }
};
const Person1 = new Person("arpan" , "dhara" , 18);
// console.log(Person1.fullname()); // for methods we call them by using the paranthesis ()
console.log(Person1.firstName); // but for properties we do not need to call them 

// but we want the methods the called with put the calling () , we can dot that by using the get method in line 9

// now if we do this then we wont have any problem , but if we use get then we can not do this fullname() , means we cannot call the function again 

console.log(Person1.fullname);


// now we want to change the firstname and the lastname we can do it by set method
//  now we have made a method to change the last name and the firstname 

Person1.setName("soumo" ,"das");
console.log(Person1.firstName); // now we have changed the name 


// but now i want that by person1.fullname = "shivam das"
// by doing this the firstname and the lastname to  be changed we can use the set() method

Person1.fullname = "shivam das";
console.log(Person1);

