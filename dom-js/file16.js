// clone nodes 

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "study js";
ul.append(li); // when we first appended the li it was at the end 
ul.prepend(li); // and then we tried to prepend the same li at the start of the ul 

// we expected two li to get added one at the first and then at the end 
// but that will not happen as the li is a single node and either it will get appended at the end or get prepended at the first 

// here it will get prepended as it comes after and js executes line by line 

const li2 = li.cloneNode(true); // this is how we clone a node and by writting true we will deep clone the node means all its child will be cloned too
ul.append(li2);
