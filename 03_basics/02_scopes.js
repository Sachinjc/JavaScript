// let a=10;
// const b =20
// var c=30

// console.log(a)
// console.log(b)
//  console.log(c)


if(true){
let a=10;
const b =20
var c=30
}

// console.log(a)  // wwhen we trying to print it , it will gave error 
// console.log(b)  // when we trying to protn it it will gave error 
 console.log(c)   // but when trying to print it will print the 30 



//  function one(){
//     const username = "sachin"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website )
//     // two()
//  }

//  one()

//  if(true){
//     const username = "sachin"
//     if(username == "sachin"){
//         const website = " youtube"
//         console.log(username + website )
//     }
    // console.log(website)

//  }
//  console.log(username ) 


//   ******************* interestion *******************

// they are like function
console.log(addone(5))  // run smoothly if we call it before its decleration 
function addone(num){
    return num+1
}
// console.log(addone(5))


// they are also function  but sometime call expression 
const addtwo =   function(num){
    return num+2
}  
console.log(addtwo(5))  //but  it will gave error when we are trying to call the function before its declaration
