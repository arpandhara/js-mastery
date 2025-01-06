// call apply and bind 

const user1 = {
    firstName : "arpan" ,
    age : 8 ,
    about : function(hobby , favartist){
        console.log(this.firstName , this.age , hobby , favartist);
    }
};
const user2 = {
    firstName : "zenice" ,
    age : 9 ,

}; // here we do not have the function and we want to use the function of user1 but i do not want to copy and paste in the function 
user1.about.call(user2 ); // to do that we use this call method , jab hum call method use karta hai tab uss this mai konsa object ayega ye decide hota hai , in our case we called the object user2 and used the function thid is how we can use the call method to use a function which is another object and use it for other object 

// if we do not say which object is to called ,i mean if we leave the () blankt then it gives us undefined . once we use  the call function we have to define which object to call 

user1.about.call(user1,"reading","talha anjum");


// apply 

user1.about.apply(user1 , ["reaing" , "umair"]); // apply call ki tarah hei same hai , bss waha pai parameters ki value alag alag value pass karna ki jagah hum bss directly usa array mai paas kar deta hai 


// bind

let func = user1.about.bind(user2 , "guitar" , "laura"); // bind does the same job , but the difference is that it reutrns a function 
// console.log(func.call(user2)) ;
func()

//  DO NOT DO THIS MISTAKE 

const myfunc = user1.about; // huma asa nahi karna asa karna se pura function uth ke ajata hai naki call hota hia . ab yaha call nahi ho rha to ye this mai user1 ko nahi bhejaga as a object 
myfunc(); //jab hum yaha pe func ko call kar raha hai then yaha pai ye window ko object ke taur pai bhej deta hai this mai and this it gives undefined 

function userFoods(food1 , food2){
    console.log(`this person named ${this.firstName} , likes ${food1} and ${food2}`)
};

const users1 = {
    firstName : "arpan"
};

userFoods.call(users1 , "luchi" , "icecream");