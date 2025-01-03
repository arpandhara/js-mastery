// functions inside functions 

const app = () => {
    const helloworld = () => {
        console.log("hello world"); // here how we make a function inside function
    }
    const sumOfTwoNo = (a, b) => { //another function
        return a + b;
    }
    console.log("inside app");
    helloworld();  // now if we can when the parent function is called then the child functions should also be executed then we call the function inside that function only 
    console.log(sumOfTwoNo(5,9));
}
app();
