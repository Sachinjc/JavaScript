// const  arr=  [1,2,3,4,5]

// arr.forEach(function ( item){
// console.log(item )
// })  

 let   arr=  [1,2,3,4,5]

arr.forEach(function ( val){
console.log(val)
})  

// when we are usinf the for each loop then it not only collect the item of array it also contain the index and whole arrayList
arr.forEach(function ( val, index , arr){
console.log(val, index, arr)
})  

 console.log('\n')
arr.forEach((val)=>{
    console.log(val)
})


console.log('\n')
function printme(item){
     console.log(item);
}

arr.forEach((val)=>{
    printme(val);
})


console.log('\n')
arr.forEach(printme)


// array of object 
const mycoding = [
    {
language :"javascript",
languagefile:"js"
    },

    {
language :"python",
languagefile:"py"
    },

        {
language :"java",
languagefile:"java "
    }
]

mycoding.forEach( (item) =>{
    console.log(item.language , item.languagefile)
})