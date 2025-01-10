// closures

// function outerFunc(){
//     function innerFunc(){
//         console.log("hello world")
//     };
//     return innerFunc();
// };
// const ans = outerFunc();
// ans 


function printFullName (firstName, lastName){
    function printName(){
        console.log(firstName , lastName);
    };
    return printName;
}
const ans = printFullName("harshit" , "sharma");
ans();