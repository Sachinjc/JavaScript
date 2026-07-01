// fetch('https://something.com').then().catch().finally()

const promise1= new Promise(function (resolve , reject){
    // do an async task 
    // DB calls , cryptography , nettwork calls 
    setTimeout(function(){
        console.log('async task is completed ');
        resolve();
    },1000)

})
promise1.then(function(){
    console.log("promise consumed");
})


// this is our second promise 
// make sure is Promise 'p' is capital 
new Promise (function(resolve , reject){
    setTimeout(function(){
console.log("async task 2 is completed ")
    },1000)
}).then(function(){
    console.log( " premise 2 consumed ");
})

// now our third promise 
 const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        // mostly the parameter passed in the resolve is object but you can also pass the arary 
 resolve({
usrname: " sachin kumar ", 
email:" sachinmech@gmail.com"
 });
    }, 1000)
 })
  promise3.then(function(user){
console.log(user);
  })

  const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
let error=  true 
if(!error){
    resolve({username:"sachin kumar", password:"1234"})
}else {
 reject('error , something went wrong ')
}
    },1000)
  })

  promise4
  .then((user)=>{
    console.log(user);
     return user.username;
   })
   .then((username)=>{
 console.log(username)
   })
   .catch(function(error){
     console.log(error);
   }).finally(function(){
    console.log(" your promise is fially resolved ")
   })


    const promise5 = new Promise(function(resolve, reject){
           setTimeout(function(){
let error=  true 
if(!error){
    resolve({username:"javascript ", password:"1234"})
}else {
 reject('error ,  js  went wrong ')
}
    },1000)
  });

  //  now we are trying to accept the promise using theasync and await 

async function  consumepromise5(){
    // const response = await promise5
    //  console.log( response);

    try{
        const response = await promise5
        console.log( promise5);
    }catch (error){
        console.log( error );
    }
}
 consumepromise5()
  async function  getallusers(){
     try{
 const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =   await  response.json()
    console.log( data);
  } catch( error ){
     console.log( error);
  }
}
   getallusers()
