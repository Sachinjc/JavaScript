  const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
let error= true
if(!error){
    resolve({username:"sachin kumar", password:"1234"})
}else {
 reject('error , something went wrong ')
}
    },1000)
  })

   const username =promise4.then((user)=>{
    console.log(user);
    // console.log(user.username);
     return user.username;
   })
    console.log( username )