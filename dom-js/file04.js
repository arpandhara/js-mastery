// change text 
// textContent and the innerHtml 

const mainHeading = document.getElementById("main-heading"); // step-1 we selected the element
console.log(mainHeading.textContent); // step 2 this is how we see the text-content of the selected item
mainHeading.textContent = "this is the changed content" // step3 we are changing the text-content of the element
console.log(mainHeading.textContent); // now we are viewing the changed text content , it will also be displayed in the website 

// now the textContent will give all the text content of the html weather there is a hidden tag or disply none tag it will give all the content in the console 

// but if i want to see only the text shown in the website

console.log(mainHeading.innerText) // it will only give the text shown actally on the website 
