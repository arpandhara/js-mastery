// fuctions in js 

function singHappyBirthday() {
    console.log("Happy Birthday to you .......");
}; // this is a function 

singHappyBirthday(); // here we are calling the function 

function twoPlusFour() {
    console.log(2 + 4); // here we made amother function which gives us the value of 2+4
};

twoPlusFour(); // here we are calling the function  

// but the problem with this code is this that the function is not reusable , for ex we have to print any other sum of two numbers , then we have to write the function again for the sum of those two number 

function add(a, b) { // here the a and the b are called parameters , where we would give the value or the nos which we need to add
    return a + b; // it returns the added no or the result
}
console.log(add(5, 6)); // here we are giving the values  that needed to be added , and we are printing the called function which will eventually give us the result 


// write a function to add three nos 

function sumOfThreeNos(a, b, c) {
    return a + b + c;
}
console.log(sumOfThreeNos(1, 1, 1));

// make a function which checks a no is a odd no or a even no

function checkEvenNo(a) {
    return a % 2 == 0 ? "is a even no" : "is a odd no";
}
console.log(checkEvenNo(10));

// make a function which will take a string and will return its first character 

function checkForFirstChar(str) {
    return str[0];
}
console.log(checkForFirstChar("ja"));

// make a function which checks an array and checks for a particular no and if the target no is found return its index and if not found then return no is not found 

function arrWithNo(arr, notobefound) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === notobefound) {
            return i;
        }
    }
    return `no it is not there`
}
console.log(arrWithNo([1,2,3,4] , 3));


