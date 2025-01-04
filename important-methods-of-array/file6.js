// find method 

const myarray = ["hello" , "cat" , "dog" , "lion"];

function islength(string) {
    return (string.length === 3) ;
}

console.log(myarray.find(islength));

// the find method fiind the first occurance only and dooes not check the other values 

const users =[
    {userId : 1 , userName : "Arpan"},
    {userId : 2 , userName : "raohit"},
    {userId : 3 , userName : "nobita"},
    {userId : 4 , userName : "doremon"},
    {userId : 5 , userName : "soumo"},
    {userId : 6 , userName : "zenice"},
];
console.log(users.find((user) => user.userId === 3));

