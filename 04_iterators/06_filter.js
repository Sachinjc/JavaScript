// const coding=["js","ruby","java","python","cpp"]

// coding.forEach((item)=>{
//     console.log(item)
// })

// suppose i want to store it in a variable then  i do something like that 

// const value = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log( value )


const mynums = [1,2,3,4,5]

// const result = mynums.filter( num => num%2===0)
// console.log(result )

// const result1 = mynums.filter(num =>  num >3)
//  console.log( result1)


 // when we use a curly braces then we need to return  a value but when we do not use a curly braces then we do not need to return 
//  const result2 = mynums.filter((num)=>{
//     return num>4
//  })


 

const arr= []

mynums.forEach((num) =>{
    if(num >4){
        arr.push(num)
    }
})

console.log(arr)


// example 

const books =[
    {title:'Book one',genre:'fiction', publish:1981,
         edition : 2004 },
          {title:'Book two',genre:' non fiction', publish:1992,
         edition : 2008},
          {title:'Book three',genre:'history', publish:1999,
         edition : 2007 },
          {title:'Book four',genre:' non fiction', publish:1989,
         edition : 2010 },
          {title:'Book five',genre:'science', publish:2009,
         edition : 2014 },
          {title:'Book six',genre:'fiction', publish:1987,
         edition : 2010 },
          {title:'Book seven',genre:'history', publish:1986,
         edition : 1996 },
          {title:'Book eight',genre:'science', publish:2011,
         edition : 2016 },
     {title:'Book nine   ',genre:'non fiction', publish:1981,
         edition : 1989},
];
 const userbooks =  books.filter((bk) => bk.genre === 'history')

 console.log(userbooks )

//  const userbooks1 = books.filter((bk)=> bk.publish >= 2000)

//  console.log( userbooks1)
// we an also write it like that 
 const userbooks1 = books.filter((bk)=> {
    return bk.publish >= 2000})

 console.log( userbooks1)

 const userbooks2 = books.filter((bk) => bk.publish >1900 && bk.genre ==='history' )
  console.log( userbooks2)