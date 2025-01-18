// document.createElement
// append
//prepend
//remove 


// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("learn js");
// newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem)
// console.log(newTodoItem);

// shorter approach 

const newTodoItem = document.createElement("li"); // first we created an element li
newTodoItem.textContent = "Teach students"; // we added a text content in that li
const todoList = document.querySelector(".todo-list"); // then we selected the ul with the class name todo-list
todoList.append(newTodoItem); // then we appended the newTodoItem in the todolist ,
// the append adds the item at the end 
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "complete learnings";
todoList.prepend(newTodoItem2) // the prepend will add item at the starting of the parent node

const firstList = document.querySelector(".todo-list li");//it will give the first list of the ul
firstList.remove() // and by the remove method we can remove it 
