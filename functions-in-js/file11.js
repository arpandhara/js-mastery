// call back function 

function myfunc2(){
    console.log("inside my func 2");
}

function myfunc(callback) {
    callback(); // here we are calling the function myfunc2 inside the func
    console.log("helloworld");
}
myfunc(myfunc2);