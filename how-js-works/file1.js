// compilation 
// code execution 

// why compilation 

// how javascript code executes

// what is global executive context ?
// what is local execution context?
// closures 


console.log(this);
console.log(window);
console.log(firstName);
var firstName = "arpan";

/* STEP1 :   complie means to compile which means ki sara code run hone se pehla complier humara sara code dekhta hai
             complitation phase - lexing , parsing , code generation 
             lexing - ye code ko chota chota tukro mai tood deta hai 
             parsing - ye is choote chhoote tukro ko samajh ta hai and by abstruct syntax tree usko ek executed file mai convert karta hai 
             
             in ecma script official documentation there is no where written that the code is complied fitst 
             but it is said there should be early error checking and determining appropritate scopes for variable 
             
             and to do this the code must be parsed 
             
             thus the code is compiled differnetly differnt browsers , they might also share meta info to boost the performance of the website 
             
             thus the purpose of compling is to early error checking and finding appropriate scope for variables
             
             
             
             now what is determining appropriate scope for varibles 
             
             the code is parsed konsa variable konsa variable kaha belong karta hai and to where it is accessible 
             
             now how does it is done 
             to jab code parse hota hai to js pehla hei dekh leta hai 
             ki konsa varible kaha tak accessible hai 
             
             
             NOW THE SECOND PHASE --- THE CODE EXECUTION 
             
             js mai jitna bhi code hota hai it is all executed under execution context 
             
             jo sabse pehla execution hota hai wo hota hai global execution context 
             
             the global execution phase is created in two phases 
             
             the creation phase 
             and the 
             code execution phase 
             


             js is on it self is a synchronous programming language , the asynchronous feature is provided by the browser 
             and it is a single threaded programming language 

             which means jab tak ek line execute na ho jati tab tak dusra line execute nahi hoga  


             lets see it with an example 
             
             var firstName = "arpan";
             console.log(firstName) 

             now in creation phase the varible 
             var will be stored and its value will be set undefined

             then a this will be there which is equal to the window object 

             now there is a code 

            1 console.log(this);  now in global execution this is which is strored equal to the value of window
            2 console.log(window); window is also printed 
            3 consdole.log(firstName); now the firstname in global execution is stored as undefined so the undefined is printed 
            4 var firstName = "arpan"; now the firstname value is stored as arpan 
            5 console.log(firstName); now here the arpan is printed 
             */ 