// closures example 3 

function myFunction(power) {
    function cube(number) {
        return number ** power
    };
    return cube
}
const power = myFunction(3);
console.log(power(2));
