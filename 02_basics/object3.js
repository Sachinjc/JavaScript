// singleton 
// object.create

// object literals 
// const Jsuser={
//     name :"sachin ",
//     "full name":"sachin Kumar",
//     age :18,
//     location:"faridabad",
//     email:"sachinkumar@example.com",
//     isLoggedIn:false,
//     lastLoginDetails : ["Monday","Saturday"]

// }
// console.log(Jsuser.email);
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])


// symbol
// declare symbol as a key of object and print  it 

const mysym = Symbol("key1")
const Jsuser={
    name :"sachin ",
    "full name":"sachin Kumar",
    [mysym] :"mykey1",
    age :18,
    location:"faridabad",
    email:"sachinkumar@example.com",
    isLoggedIn:false,
    lastLoginDetails : ["Monday","Saturday"]

}
console.log(Jsuser.email);
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mysym])  // at thus point it is not used as  a symbol 
console.log(typeof mysym)
// console.log(typeof Jsuser[mysum])
// we have to add the mysum key of Jsuser object in square brackets 
