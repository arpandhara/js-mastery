// same method in subclass 

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

class Cat extends Dog{
    constructor(name,age,speed){ // here for the cat class we want another parameter called speed but the speed parameter is not there in the animal class , thus we made our own constructer 
        super(name,age); //the super keyword takes the name and the age inputs from the super class or the parent class 
        this.speed = speed ; // the other things have to be done by owr own 
    }
    run(){
        return `${this.name} is running at a speed of ${this.speed}`
    }
    eat(){
        return `A cat named ${this.name} is eating`
    }; // if we want a method that is different from the parent method that is already present there the class will first look for the method in the child class then the parent class 
}

const tommy = new Dog("tommy" , 4);
console.log(tommy);
console.log(tommy.isCute())

const cat1 = new Cat("TOM" , 15, "45km/h");
console.log(cat1);
console.log(cat1.run());
console.log(cat1.eat());
