// filter method 

const numbers = [1,2,3,4,5,6,7,8];

function isEven(number){
    return number%2===0;
}

let evenNos = numbers.filter(isEven);
console.log(evenNos);
 
// a filter function should always return a bollean and according to that it filters out the things that matches the true statement 


