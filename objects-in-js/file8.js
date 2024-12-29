// nested destructuring 


const users = [
    {userId : 1 , firstName : "arpan" , gender : "male" }, //0 index
    {userId : 2 , firstName : "shivam" , gender : "male" }, //1
    {userId : 3 , firstName : "soumo" , gender : "male" }, //2
];

const [{firstName : user1FirstName , userId} , , {gender }] = users; // this is nested destructuring here we are 1 st destructuring the array then the object inside the array so in order to that we are 1st doing [array destructure {then the object destructure}]
console.log(userId , user1FirstName);
