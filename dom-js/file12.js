// add new html elements to page 

// innerHtml toadd html elements 

const todolist = document.querySelector(".todo-list");
console.log(todolist.innerText);
todolist.innerHTML = todolist.innerHTML + "<li>new todo</li>" // this is how we can add new elements in html


// when you should use it , when you should not 