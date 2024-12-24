// if else condition 


let age = 17;


// in if(here comes a boolean value either it is true or false ,it may come in some form of condition also)

if (age > 18) { //condition
    console.log(`he can play ddc`); //if it is true it will print this
}else{
    console.log(`he can watch pogo`); // if the statement turns to be false then it will print the statement in the else block 
}


let num = 15 ;
if (num%2===0) {
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}


// falsy values 

// false 
// ""
// null
// undefined
// 0

// truthy values are those other than the falsy values , 1, abc.. , anything other than falsy values 

// this all are falsy values there value is false 

let name = ""; //"" gives false 
if (name) { // statement turns out to be false
console.log(name);  // skips it
}else{
    console.log(`name is kinda empty`); //else block get printed
}

// here if null , 0 , undefined [let name;] then also the same would happen