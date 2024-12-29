// spread operator in objects 

const obj = {
    key1 : "value1" ,
    key2 : "value2" ,
    key1 : "value3" // of there are two keys with same name like here key1 , the object will have the value of key1 which is at the last and ignore the first value that is assigned to it earlier 
}
// console.log(obj); //{ key1: 'value3', key2: 'value2' }

const obj2 = {
    key1 : "value1" ,
    key2 : "value2" ,
    key3 : "value3" // of there are two keys with same name like here key1 , the object will have the value of key1 which is at the last and ignore the first value that is assigned to it earlier 
}
const obj1 = {
    key5 : "value5" ,
    key6 : "value6" ,
    key7 : "value7" // of there are two keys with same name like here key1 , the object will have the value of key1 which is at the last and ignore the first value that is assigned to it earlier 
}
const newObject = {...obj2,...obj1}; // this is how we use spread operator in objects 
console.log(newObject);

const anotherObject = {...["item1" , "item2"]}
console.log(anotherObject); //{ '0': 'item1', '1': 'item2' } , it will automatically give it a index 0,1,2,3....
