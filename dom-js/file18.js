// how to get the dimensions of the elements 

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect() ; //this will give all the info of the section-todo
console.log(info);
sectionTodo.getBoundingClientRect().height // if we only want to get the height of the div 