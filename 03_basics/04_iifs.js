
// named iife 
(function chai(){
    console.log("i am iife")
})();

// iife with parameter 

(function  chai1(name){
    console.log(`${name} i am in iife`)
})("sachin");


//  unnamed  or simple iife 
(()=>{
    console.log(" i am iife with arrow function")
})()