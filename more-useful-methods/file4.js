// clone using Object.assign 

const obj  = {
    key1 : "value1",
    key2 : 'value2'
};
// there is a another way to clone an object and this is how 

const obj2 = Object.assign({} , obj) // we give an empty object and then , we give the object that has to be cloned in the new object 
