// while loop 

// task print no 0-9 
// what it will do 

// total = total + 0 , we can do the 0 --> 1 --> 2 by i++
// total = total + 1
// total = total + 2
// total = total + 3
// total = total + 4
// total = total + 5
// total = total + 6
// total = total + 7
// total = total + 8
// total = total + 9

let num = 0; // num is set to 0
let i = 0; //here i is set to 0 
while (i<=10) {
    num = num + i; // here the addition happens
    i++; // here the i gets incremented and returns to the for loop condition to checks if it is true or false if true it again enters the ffor loop and the cycle continue until the condition gets false
}
console.log(num); // at the end when the for loop gets false then it gets printed 

// there is another way of doing it 

let num1 = 10;
let total = (num1*(num1+1))/2
console.log(total);



