// use of const for creating arrays 



const arr = [1, 2, 3, 4, 5]; 
arr.pop(); // here we do not get a error as arrays are stored in heap memory and the the address in not changed thus all the array modification mehtods work properly 
console.log(arr);

// but if we try to reassign the array then we get a error as the address of the array is changed and the const does not allow to change the address of the array
