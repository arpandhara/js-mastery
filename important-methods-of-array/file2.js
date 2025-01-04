// map method 

const numbers = [3,4,5,6,7];

function square(number){
   return number*number;
}
console.log(numbers.map(square))

// in map function it is very crucial that you return a function , it is crucial to return , as it gives a new array 
// map is just like for each it also takes a number and a index as a parameter



const user = [
    {firstname : "arpan" , age : 18},
    {firstname : "soumo" , age : 12},
    {firstname : "shivu" , age : 15},
    {firstname : "zenu" , age : 14}
];

let firstNameofuser = (usersdetails) => {
    return usersdetails.firstname
}

let userNames = user.map(firstNameofuser);
console.log(userNames);
