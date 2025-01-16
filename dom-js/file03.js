// select elements using query selector 

const mainHeading = document.querySelector("#main-heading"); // this is how we can select an id using query selector 
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item"); // here in the html file there are 3 elements having the class nav-items but it will select only the first element with the class nav-item . it will ignore the other elements with the class
// to get all the elements with the class name nav-items 

const navItems = document.querySelectorAll(".nav-item"); // this will select all the items or elements with the class nav-items . it will reutrn a node list with all the elements having the same class name 
console.log(navItems);
console.log(navItem);
console.log(header);
console.log(mainHeading);


// as we have learnt that getelement by id can only target elements having an id but the query selector can target all elements 