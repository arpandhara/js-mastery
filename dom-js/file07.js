// get multiple elements using getElements by class name 
// get multiple elements using querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); // it returns an array / an htmlcollection
console.log(navItems[0]); // thus by index we can target the elements individually 

const navItem = document.querySelectorAll(".nav-item"); // it returns an node list 
console.log(navItem);
