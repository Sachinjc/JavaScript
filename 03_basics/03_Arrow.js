const user ={
     username:"sachin",
     price :990,

     welcomeMessage: function(){
        console.log(`${this.username},  welcome to website `)
        console.log(this)  //
     }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()


console.log(this) //



// function chai(){
//     let username ="sachin"
//      console.log(this.username)
// }

// chai()


//   declare functions with the help of  arrow function
const chai = function(){
     let username = "sachin"
     console.log(this.username);
}
chai()

const chai1 = () =>{
    let username ="deepak"
    console.log(this)
}
chai1()


// basic structure of arrow function 

const addTwo = (num1, num2) => {
    return num1+num2;
}
console.log(addTwo(3,4))


// arrow function can also be used in another way called implicit return  ( here e dont use {} parenthesis 

// const addTwo1 = (num1, num2) => num1+num2
const addTwo1 = (num1, num2) => (num1+num2)
console.log(addTwo1(3,8))


// jab hum curly braces lagate hai to hue return statement dena padta hai but when we using small bracket()  then e do not need a return statement 


// when we are trying to return an object then  we have to close it in small bracket
const user1=(username , price)=>  ({username, price, name: "sachin"})
console.log(user1("sachin", 990))

