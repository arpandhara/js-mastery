// static list vs live list 

// querySelectorAll huma static list degi 
// getElementsBySomething hame live list degi 


const listItems = document.querySelectorAll(".todo-list li");
const newLii = document.createElement("li");
newLii.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(newLii);
console.log(listItems); // will give a node list a static one as it has been selected by the querySelectorAll

const listItems2 = ul.getElementsByTagName("li");
console.log(listItems2); // it will also give a html collection but a live one as it has been selected by the getElementsByTagName which gives a live list 
