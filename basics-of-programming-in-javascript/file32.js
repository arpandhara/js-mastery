// array destructuring 

// it is a new feature came in es6

const arr = ["value1" , "value2"];
// let no1 = arr[0];
// let no2 = arr[1];
// console.log(no1 , no2);

// but there is a another way of doing it 

// let[myvar1 , myvar2]=arr // this is array destructuring here we are creating two variables var 1 and the var2 and in the var 1 it will automatically store the item in index 0 in the array arr
//   value1   value2
// console.log(myvar1);

// now if there are more elements in the array and we declared two variables only then nothing will happenn it will bw like it only 

// let [myvar1 , , myvar2] = arr;
// if there were 3 items in the array the second element will get skipped

// now if there we more elements we declared two variables and the rest we want to make a new array we could do this

let [myvar1 , myvar2 , ...mynewarray] = arr;
// here we used the spread operator and the rest of the items in the array will get stored in the new array 

