// default parameter 


const addTwoNum = (a, b) => a + b;

console.log(addTwoNum(9)); // here if we do not give any value to the second parameter then it becomes undefined and undefined + anynum is NaN 

// // to tackle this before es6 we used to do this 

const addTwoNum1 = (a, b) => {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}

console.log(addTwoNum1(9));


// but in es6 new features have came and we do not have to write such  a long could we do this instead 


function addTwoNum2(a=0,b=0)  { // in the parameters only we set the parameter to default value is 0 , if we do not pass any value then it takes the default value as 0 
    return a + b;
}
console.log(addTwoNum2(undefined,3));
