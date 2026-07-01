// here we are learing about the reduce method 
const mynums =[1,2,3,4,5]
//  const result = mynums.reduce((acc,num)=> acc +num , 0)
//   console.log( result )

  // expanded form of arrow function 

  const result = mynums.reduce(function(acc,num){
    return acc+num
  })
  console.log(result )


const shoppingcart =[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python ",
        price:999
    },
    {
        itemName:"java course",
        price:9999
    },
    {
        itemName:"cpp cpourse",
        price:7999
    },
]  


 const pricetopay = shoppingcart.reduce((acc, item) => acc+ item.price,0)

 console.log(pricetopay)