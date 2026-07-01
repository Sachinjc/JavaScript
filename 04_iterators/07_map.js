const myarr =[1,2,3,4,5,6,7]

// const result = myarr.map((num) => num+10)
// console.log(result)

// const newnums = myarr
//                     .map((num) => num*10)
//                     .map((num)=> num+1)
//  console.log(newnums )

const newnums = myarr
                    .map((num) => num*10)
                    .map((num)=> num+1)
                    .filter((num) => num> 50)
 console.log(newnums )

