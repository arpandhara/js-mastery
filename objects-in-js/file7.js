// objects inside array
// very useful in real world application 

const users = [
    {userId : 1 , firstName : "arpan" , gender : "male" }, //0 index
    {userId : 2 , firstName : "shivam" , gender : "male" }, //1
    {userId : 3 , firstName : "soumo" , gender : "male" }, //2
];
console.log(users); // here it returns it in the form of an array 

for (const user of users) {
    console.log(user["userId"] , user["firstName"]);
} //here it returns each object individually 