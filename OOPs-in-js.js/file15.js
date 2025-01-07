// practice of classes and extend method

class Animal {
    constructor(animalname, age) {
        this.animalName = animalname;
        this.age = age;
    };
    eat() {
        return `${this.animalName} is eating`
    };
    isage() {
        return this.age <= 1
    };
}
const animal1 = new Animal("panda", 20);
console.log(animal1.eat());

class Dog {
    constructor(dogname, age) {
        this.name = dogname;
        this.age = age;
    };
    eat(){
        return `${this.name} is eating`
    };
    isCute(){
        return this.age<=3 ? "he is a cute puppy" : "he is a big boy";
    };
}
const tommy = new Dog("tommy" , 4);
console.log(tommy);
console.log(tommy.isCute())

class Cat extends Dog{}; // we do not have to write the code and all the methods again here the extends copys the all the constructor and the methods in the Cat class 

const tom = new Cat("Tom" , 5); // the cat is a sub class of the dog , and the dog is the parent class 
console.log(tom);



