// generate a random color w=and when the start button is clicked then the color of the background start changing and when we click the stop button then it will stop and the last background color remains in the web page 


// first generate the  random colors 

const randomcolor = function(){
    const hex = "0123456789ABCDEF"

      let color ='#'
      for(let i=0;i<6;i++){
 color += hex[Math.floor(Math.random()*16)]
      }
       return color;
}

let intervalId
 const startChangingcolor = function(){
     if(!intervalId){
        intervalId = setInterval(changebgcolor,2000)
     }

    function changebgcolor(){
 document.body.style.backgroundColor = randomcolor()
 
    }
}

  const stopChangingcolor = function(){
clearInterval(intervalId);
intervalId= null;
  }

document.querySelector("#start").addEventListener
('click', startChangingcolor)

document.querySelector("#stop").addEventListener
('click', stopChangingcolor)

console.log(randomcolor());