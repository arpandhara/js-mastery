// change the styles of the elements 

const mainHeadings = document.querySelector("#main-heading");
console.log(mainHeadings.style); // it will show all the style 
mainHeadings.style.backgroundColor = "green"; // this is how we can change the styles of the elements in js 


// now by the query selector i can choose a h2 in a div 

const headLine = document.querySelector("div.headline h2"); // this is how we can choose a h2 in a div . here what we did id selected div attribute and then targeted the specific div with its class and then gave a space and then targeted the element inside that div
console.log(headLine);
