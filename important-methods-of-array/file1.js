// important methods of array 

// for each 
// map
// filter
// reduce 


const numbers = [4, 5, 6, 7, 8];

function firstElement(number , index) {
    console.log("index is", index);
    console.log(number * 2);
}

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(i);
//     firstElement(numbers[i],i)
// }

numbers.forEach(firstElement) // for each works jsut like the above loop and here the same work happens . the for each function takes a number and an index as its parameters 


const user = [
    {firstname : "arpan" , age : 18},
    {firstname : "soumo" , age : 12},
    {firstname : "shivu" , age : 15},
    {firstname : "zenu" , age : 14}
];

// user.forEach(function(users){
//     console.log(users.firstname);
// });

user.forEach((users) => console.log(users.firstname));

// 

