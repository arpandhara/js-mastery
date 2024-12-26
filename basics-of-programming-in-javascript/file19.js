// switch statement 

// switch is just like else if but another way of doing it

let day = 2; //this is the input 

switch(day){
    case 0: //if the day is 0 then this 
        console.log("sunday");
        break; // break is used so that after a certain case is executed then it jumps out of the switch statement 
    case 1: // if the day is 1 then this 
        console.log("monday");
        break;
    case 2: // if the day is 2 then this 
        console.log("tuesday");
        break;
    case 3: // if the day is 3 then this 
        console.log("wednasday");
        break;
    case 4: // if the day is 4 then this 
        console.log("thrusday");
        break;
    case 5: // if the day is 5 then this 
        console.log("friday");
        break;
    case 6: // if the day is 6 then this 
        console.log("saturday");
        break;
    default: // if the day is a invalid day other than 0123456 then this 
        console.log("invalid day");
        break;
}