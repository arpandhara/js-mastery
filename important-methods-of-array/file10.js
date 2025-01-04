// splice method 
// start , delete , insert 
// kaha se start karna , kitna delete karna hai , kya insert karna hai 

const myArray = ['item1', 'item2' , 'item3'];

// delete
console.log(myArray.splice(1 , 1));
console.log(myArray); // here item 2 is delted 

// insert 
myArray.splice(1,0,'inserted item')
console.log(myArray);


const newArray = ['item1', 'item2' , 'item3','item4'];
let ans = newArray.splice(1,1,'newitem')
console.log(newArray); //[ 'item1', 'newitem', 'item3', 'item4' ]
