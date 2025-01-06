// Sets (it is iterable)
// stores data 
// sets also have its own methods 
// no index-based access 
// order in not guaranteed 
// unique items only (no duplicate allowed )
// set should be used when we do not want to repeated , ot such values that should be unique



// how to make a set 

const numbers = [1,2,3]; // this is an array 

const newnumbers = new Set([1,2,3,4,4]); //this is an array 
console.log(newnumbers);
console.log(newnumbers.has(2));
// what is commenly used 

const anotherSet = new Set();
anotherSet.add(10);
anotherSet.add(1);
anotherSet.add(20);
anotherSet.add(30);
anotherSet.add(40);
anotherSet.add(50);
anotherSet.add(60);

console.log(anotherSet);

if(anotherSet.has(10)){ // it checks that some particular value is there or not 
    console.log("1 is present");
}else{
    console.log("1 is not present ");
}

for (const item of anotherSet) {
    console.log(item);
} // this shows that set is iterable 

const anotherArray = [1,2,3,4,5,6,6,7];
const uniqueElements = new Set(anotherArray); // this is how we can eliminate duplicate values 
console.log(uniqueElements); // but here we can not use the length property here and can not access by index 
let newArray = [...uniqueElements];
console.log(newArray.length);
console.log(anotherArray.length);




