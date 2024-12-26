// break keyword 

// for ex lets make print nos from no 1- 10 ,  but there is a condition we have to print from  1 - 10 , bu tit will break or stop when the no is 4 


for (let i = 0; i < 10; i++) { // here first i = 0 --> 1 -->2 -->3-->4
   if (i === 4) { // 0 != 4 , 1 != 4 , 2 != 4 ,3!=4  , 4=4 the loop stops bcs of the break statement
    break ; // break breaks the statement ot stops the program when the condition is satisfied 
   }
    console.log(i) // 0 , 1 , 2 , 3
}

// continue keyword 

for (let i = 0; i < 10; i++) { // 0 --> 1 --> 2 --> 3 --> 4 -->5 .... 
        if (i===4) { // 0!= 4 , 1!= 4 , 2!= 4 , 3!= 4 , 4= 4  
        continue; // when 4 = 4 it will become true and the continue will return the flow of the loop to the loop statement without executing the console.log(i) , bcs of this the no 4 will not get printed
    }
    console.log (i); // 0123 56789
}

