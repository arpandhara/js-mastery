// closure examples 3 

// const myFunction = () => {
//     let counter = 0;
//     return functionInside = () => {
//         if (counter < 1) {
//             console.log(`hi you called me !!`);
//             counter++;
//         } else {
//             console.log(`mai ek bar call ho chuka hu`)
//         };
//     };
// }

// const ans = myFunction();
// ans();
// ans()


const myFunc = () => {
    let counter = 0
    return functionInside = () => {
        if (counter <1) {
            console.log(`hi you called me!!`);
            counter++;
        }else{
            console.log(`mai ek bar call ho chuka hu `);
        };
    };
};
const ans = myFunc();
ans();
ans()