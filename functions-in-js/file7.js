// block scope vs function scope 

// by block scope we mean that agar koi variable means let and const ko hum block ke bahar use  nahi kar sakte 

{
    // this are blocks 
    let firstName = "arpan" ;
    console.log(firstName);
    
}
{
    //this is block 2
    let firstName = "lal" ; // here the let wont give a error as the let in now in this block and isa koi matlb nahi hai bahar kahi same uske naam ke aur ek let bana hua hai ki nahi thats why it do not give any error 
    console.log(firstName);
}

// console.log(firstName); // here there will be a error saying out that firstname is not defined , it happens because let and const are block scope , by block scope we mean these variables can not be accessed outside the block {outside this} 


// let and const are block scope 
// var os function scope 

// but var is not a block scope varible it is a function scope which mean it can be accessed outside the block 

{
    var firstName = "shruti didi";
}
console.log(firstName); // shruti didi , because it is function scoped and it can be accessed outside the block also 


// in real life we use the block like this 

if(1<3) {
    let firstName1 = "harshit";
    console.log(firstName1);
}
console.log(firstName1);

