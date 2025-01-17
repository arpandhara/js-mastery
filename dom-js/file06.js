// get and set attribute 

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1)); // this is how we can get the attribute of the elements
link.setAttribute("href" , "https://www.cosmos.so/home"); // this is how we can change the attribute of the elements 
console.log(link.getAttribute("href"));


const form = document.querySelector(".form-todo input"); // here we first selected the elements and the the element we want to get in the class
console.log(form.getAttribute("type")); // then the type attribute of the input elements . we got it by the get attribute method 

