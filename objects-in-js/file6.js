// object destructuring 


const band = {
    bandName: "led zepplin",
    famousSong : "stairway to heaven",
    year : 1993 ,
    anotherfamoussong : "lalal"
};
// const bandName = band["bandName"] ; // we can access the keys from an object like this and store it in a value 
// console.log(bandName);

// but there is a shortcut and it is object destructuring 

let {bandName , famousSong} = band; // this is object destructuring and here we have to take the variables name as of the keys name 
bandName = "queen" // here we can change the varible name as we have used let , but if we have used const then we might be able to change it
console.log(bandName);

// but if we want to store the varible name something else then we have to use this method 

let {year : var3} = band; // we have to write the key name , then give a colon the write the variable name 
console.log(var3); //1993

// if we want the other keys to get stored in another object then 
let {...restprops} = band // spreading the remaining object will store it in  anew object 
console.log(restprops);



