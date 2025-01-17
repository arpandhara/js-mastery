// loop


const navItems = document.getElementsByClassName("nav-item");
console.log(navItems.length);

// for (let i = 0; i < navItems.length; i++) {
//    const navItem = navItems[i];
//    navItem.style.backgroundColor = "white";
//    navItem.querySelector("a").style.color = "red";
//    navItem.querySelector("a").style.fontWeight = "bold"
// } // this is for loop

// now with for o loop 

for (const navItem of navItems) {
    navItem.style.backgroundColor ="red";
    navItem.querySelector("a").style.color = "white";
};




