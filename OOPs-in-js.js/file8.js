// __proto__ vs [[prototype]]

let obj1 = {
    key1 : "value1",
    key2 : "value2"
}; // an object 1 is created 

let obj2 = Object.create(obj1); // an empty object is created with a proto of obj1 

obj2.key3 = "value3" ;
console.log(obj2); //{ key3: 'value3' }
console.log(obj2.__proto__) //{ key1: 'value1', key2: 'value2' } here there is also a object inside obj2 called which is obj1 as we have linked it 

// there is also a type called prototype which is completely different from this


