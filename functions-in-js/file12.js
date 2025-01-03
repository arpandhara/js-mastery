// function reuturning function 

// function myfunc(){
//     function hello(){
//         console.log("hello");
//     }
//     return hello();
// }
// console.log(myfunc());


function myfunc2(){
    function hello(){
        return "hello world"
    }
    return hello()
}
console.log(myfunc2());
