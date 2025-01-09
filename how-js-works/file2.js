console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
};

var firstName = "Harshit";
var lastName = "sharma";
var fullName = firstName + "" + lastName;
console.log(fullName);


/*
NOW LETS SEE THE FULL EXECUTION IS DONE

code parts mai divide hoga [lexing]
then wo sare code ko analize karega and then the  
js will see ki global scope mai kitna varibles hai  [finding appropriate scope for the varible]

it has the firstname  
it has the lastname  
it has the fullname
and there is a function in global scope which is myFunction

now the code has to executed 

then there it will be global execution context 

there is a creation phase 

there is a window , provided by the browser 
then there is a this which is set equal to the window object  

now the firstname --> undefined 
now the lastname --> undefined 
now the fullname --> undefined 
myFunction is added 

NOW THE CODE EXECUTION [it will go synchoronously]


1 console.log(this); this = window object{}
2 console.log(window); window object printed {}
3 console.log(myFunction); as the function is not called then the whole function is printed 

                           function myFunction(){
                           console.log("this is my function");
                           };


4 console.log(fullName); undefined 

5 function myFunction(){
    console.log("this is my function");
};

6 var firstName = "Harshit";   now the firstName value is set to "harshit"
7 var lastName = "sharma"; now the lastName is set to "sharma"
8 var fullName = firstName + "" + lastName; now the fullName is "harshit sharma"
9 console.log(fullName); now the fullName is printed as "harshit sharma"




*/

