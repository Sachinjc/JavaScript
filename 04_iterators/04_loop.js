const myobj ={
    js:'javascript',
    cpp:'c plus plus',
    rb:'ruby',
    swift:'swift by apple'
}

// print keys 
// for(const key in myobj){
//      console.log(key)
// }

// print values 
// for( const key in myobj){
//      console.log(myobj[key])
// }

// print kry values together 

for( const key in myobj){
     console.log(key +" -> " + myobj[key])
}

const  programming =["js", "rb","py","java","cpp"]

// it will prints the index of array [keys of array are indexes   ]
for(const key in programming){
     console.log(key)
}

// it will prints the value of array 
for(const key in programming){
     console.log(programming[key])
}


// map are not iteratable so we cannot access them like that 
const map= new Map()
map.set('IN',"India")
map.set('US',"united states of america ")
 map.set('Fr' , "France" )

 for( const element in map){
      console.log( element );
 }