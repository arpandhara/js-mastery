// useful string method 

// trim()
// toUpperCase()
// toLowerCase()
// slice




// NOTE : STRINGS ARE IMMUTABLE  


// trim

let firstName = '    arpan   ' // spaces are there and it is counted while counting length 
console.log(firstName.length); //length is 12

// let newStirng = firstName.trim(); // trim cuts the spaces in stirng 
// console.log(newStirng.length);  // lenght is 5 , as now the spaces are removed 



// we can also use it by using the name of the varible in which the stirng is declared 
// EX:

// firstName = firstName.trim()
// console.log(firstName.length) // output is 5


// ----------------------------------------------------------------------------------------------------


// toUpperCase 

let secondName = "atul";
console.log(secondName.toUpperCase()) //output is ATUL , it convert the lower case character to upper case 



// ----------------------------------------------------------------------------------------------------


// toLowerCase 
let thirdName = "meDhadPtya";
console.log(thirdName.toLowerCase()) //output will be medhadptya , it converts the upper case character to lower case 

// slice 


// how slice works ?
// decide kaha se kaha tak chahiyr aur then uska index dekho 
// slice(starting index , end index + 1) , as it does not includes the last index 

let name = "abhijitaaaa"
console.log(name.slice(0 , 6)) //abhijit



