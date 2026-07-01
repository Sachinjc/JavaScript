// function print_hello(){
//     console.log(" hello my name is sachin ");
// }
// print_hello();


// below function does not return anything 
// function addtwonum(a,b){
//     console.log(a+b);
// }
// addtwonum(4,7);
// addtwonum();
// addtwonum(4,"7");
// addtwonum(4,"a");
// addtwonum(4,null);

// const result =addtwonum(4,7);
// console.log(result); // output is undefined because the function does not return anything



// another way to define a function add that add two number and return their addtion 

// function add(a,b){
//     let result = a+b;
//     return  result     //it will not execute because it is unreachable and return is the last statement of the function 
//     // after return if we write anythhing it will not be printed 
//     console.log("i am last");
// }

// const result =add(3,5);
// //  console.log("Result =" ,result )


// function loginusermessage(username="shyam "){  // here we gave a  default value to the parameter if user gave value during the calling then function use that value if any value is no given then function use a default value 
//     // if(username === undefined){
//     //     return "Please enter a valid username";
//     // }

//     if(!username){
//        console.log("Please enter a valid username");
//        return 
//     }
//     return `${username} just logged it `
// }

// console.log(loginusermessage("sachin")) // o/p -   sachin just logged in 
// console.log(loginusermessage(""))   //  o/p -   just logged in 
// console.log(loginusermessage())   // o/p ->  undefined just logged in




function calculateprice(num1){
    return num1;
}

console.log(calculateprice(100)); // o/p - 100
console.log(calculateprice(100,200)); // o/p - 100 because function only takes one parameter and ignore the second one 


function calculateprice1(...num1){  // rest operator 
    return num1;
}

console.log(calculateprice1(100,200,300));



function calculateprice3(val1, val2, ...num1){
    return num1;
}
console.log(calculateprice3(100,200,300,2000));



const user={
    username:"sachin",
    price:2000
}

function  handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);  // here e are trying to access prices not price so its vale is undefined in my user object 
}

// handleobject(user);
handleobject({
    username:"deepak",
    price:399
})

const myNewArray = [1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[3];
}

// console.log(returnSecondValue(myNewArray)); 

console.log(returnSecondValue([200,300, 400,500]));