// before 
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Student"

const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem)
