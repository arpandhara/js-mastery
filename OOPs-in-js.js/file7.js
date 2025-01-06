const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key3 : "value3"
};
console.log(obj1.key1);
console.log(obj2.key1); // here it will reutrn uncefined as the key1 key is not there in obj2 

// id we want to create empty object then we can do this 

const obj3 = {};

// BUT there is a another way 

const obj4 = Object.create(obj1); // {}
obj4.key4 = "value4";
console.log(obj4.key4); // value4 
console.log(obj4.key2); //now there is no key as key2  in obj4 key2 is present at obj1 but there is connection established between obj4 and obj1 , now if we want key2 we can access it , from obj1 




// but we want that the key1 must be printed and if js cannot find the key1 in obj2 it should go to obj1 and find it , if there it is present then print the value of it 


// to do that we can do this 