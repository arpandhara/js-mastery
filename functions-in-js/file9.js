// rest parameter 

function myFunc (a,b,...c) { // then we use the rest parameter ...c , it will pass the remaining vlaues into c 
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
// here there are more value than the parameter now we want if there are more parameters then we want to pass the other values into c 
myFunc(5,6,2,6,7,8);


// write a function to sum all the values as many values are passed 

function addAll (...numbers){
    let total = 0;
    for (const number of numbers) {
        total = total + number;
    }
   return total;
}
console.log(addAll(1,1,1,1,1,1,1));
