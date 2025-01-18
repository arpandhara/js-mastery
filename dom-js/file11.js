const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); // by using classlist we can see how many classes are there in the section todo

sectionTodo.classList.add("bg-dark") // this way we can add classes 
// sectionTodo.classList.remove("container") this way we can remove a class from an element
const ans =sectionTodo.classList.contains("container"); // this way we can check weather a class is there or not 
console.log(ans);

sectionTodo.classList.toggle("bg-dark"); // what toggle do is if there is bg-dark class is there then it will remove bg-dark and if not present then it will add bg-dark class in it 

const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");





