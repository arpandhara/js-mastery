// Maps object 
// NOTE : maps are very different from maps method 

// stores data in ordered fashion 

// store key value pair (like object)
// duplicate keys are not allowed like objects 


// different vetween maps and objects 

// objects can only have string or symbol 
// as key 

// in maps you can use anythinga s key 
// like array , number , string 


// key value pair 

const person = new Map(); // this is how we make map

// this is how we add keys and values in a map 
person.set('firstName' , 'Arpan');
person.set('age' , 18);


// THE BIGGEST DIFFERENCE BETWEEEN MAP AND OBJECT IS THAT IN MAP , WE CAN KEEP THE KEY AS ANY TYPE , ARRAY , NUMBER . ANYTYPE , WHILE IN A OBJECT JS ACCEPTS THE KEY ONLY AS AN STRING OR A SYMBOL .

person.set(1 , "one");

// we can also keep array as a key 

person.set([1,2,3] ,"lalal");

// how to access values from map using key 

console.log(person.get('age'));
console.log(person.get([1,2,3]));


// if we want to print all the keys then we use the keys method 

console.log(person.keys());// gets all the keys of the map 

for (const key of person.keys()) {
    console.log(key);
} // thus it is iterable and this is how we get the keys using for of loop 

// as maps are iterables we can directly use for of loop 

for (const [key , value ] of person) {
    console.log(key ,":" , value); // this returns an array , now if we have to destructure it then we have to destructure the array 
    
};

const newPerson = new Map([['firstname' , 'harshit'] , ['age' , 18]])// this is how we directly assign keys and values .

const person1 = {
    id :1 ,
    firstname : "harshit"
};

const userInfo = new Map();
userInfo.set(person1 , {age : 18 , gender : "male"});
console.log(userInfo);

// now if we want an info form the userInfo 

console.log(userInfo.get(person1).age); // 1st we accessed the value of the key person 1 and then as the value is an object we accessed the values form that object 
 


