// for of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}


const obj = ["sachin" , "deepak"," jyoti"]
// for( const i of obj){
//      console.log(i)
// }

for( const i of obj){
console.log(` each name  is ${i}`);
}

// Maps 

const map= new Map()
map.set('IN',"India")
map.set('US',"united states of america ")
 map.set('Fr' , "France" )

 console.log(map)
 for(const entry of map){
    console.log(entry);
 }

for(const [key, value] of map){
    console.log(key , '-' , value);
 }

  

 const myobj ={
    'game1':'NFS',
    'game2':'spiderman'
 }


 // object attribute does not work fine here like that 
//  for(const [key, value] of myobj){
//     console.log(key, value)
//  }

 