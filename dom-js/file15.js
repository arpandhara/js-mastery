// insertAdjacentHTML (where, html);
//beforebegin ---> works like before
// afterbegin --->  works like prepend
// beforeend ---> works like append
// afterend ---> works like after

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("afterbegin" , "<li>teach stundents<li/>");