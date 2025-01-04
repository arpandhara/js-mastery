// lexical scope

const myApp = () => {
    const myVar = "value1";

    const myFunc = () => {
        // const myVar = "value2";
        console.log("inside my func", myVar);

        //value1
        // inside my func value2 , this is the result when the myvar inside myfunc is there .

        // value1
        // inside my func value1 , this is the output whent the myVar inside not there in the my func function , whenthe myvar is not there in the myfunc function then it checks in the lexical environment in the main function myapp 
    }

    console.log(myVar);
    myFunc();
}

myApp();