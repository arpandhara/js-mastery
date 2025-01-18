// innerHtml

const headLine = document.querySelector(".headline");

console.log(headLine.innerHTML); // by the innerHtml we can see what ever is written in the div headline

headLine.innerHTML = "<h1>Inner html changed</h1>"
console.log(headLine.innerHTML);

