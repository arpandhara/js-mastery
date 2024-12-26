// if 
// else if 
// else if 
// else if 
// else 

// this is else if when we want to check more than two condition we use this type of else if statement , a thing to note here is if one statement brings a true value then the other statements will automatically get ignored and wont be checked 

let tempInDegree = 40;

if (tempInDegree < 0) {
    console.log("extremly cold outside");
}else if(tempInDegree <= 16){
    console.log("it id cold outside , be home and enjoy a cup of tea");
}else if(tempInDegree <=25){
    console.log("weather is okay");
}else if(tempInDegree <=35){
    console.log("lets go for a swim");
}else if(tempInDegree<=45){
    console.log("turn on AC");
}else{
    console.log("too hot outside!!");
}