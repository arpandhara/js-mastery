// type of operator 


// data types [primitive data types]
// data types are how you can store data or the ways of storing data 

// 1.number = 2,3,4
// 2.string = "lala"
// 3. bolleans = true or false 
// 4. undefined 
// 5. null
// 6. BigInt
// 7. symbol 


// the type of operator tell you the data type of a value 

let data1 = "lla"//string
let data2 = 4 //number
let data3 = true //boolean
let data4 = null //object
let data5 = undefined //undefined

console.log(typeof data1 , typeof data2 , typeof data3 , typeof data4 , typeof data5)

// convert number to string 

// to change a number to string just add an empty stirng "" to the variable name in which the number is stored 


let rollNo = 20304020 ; 
console.log(typeof (rollNo + ""))

// another way 

let age = 18;
age = String(age); // use the string func to change it to string 
console.log(typeof age)

// convert string to number

// to change a strig containing numbers to a number just add a + in front of the string

let str = +"20304020";
console.log(typeof str);

// another way 

let phoneNo = "8918290236";
phoneNo = Number(phoneNo); // use the number()  func to change a string to number 
console.log(typeof phoneNo);




