// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name ="sachin"
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// object inside object 
const  regularUser = {
    email:"sachin12@gmai.com",
    fullName: {
        userFullName: {
            firstName: "sachin",
            lastName: "kumar"
         }
        }
    }

    // access the values using the dot notation 
//     console.log(regularUser.fullName );
//     console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName?.userFullName.firstName);   here question mark  is used to eliminate the if- else conditions

const obj1 ={ 1: "one", "a": "alpha", 2: "two"}
const obj2={3: " three",4:"beta"}
const obj4={5:"a" , 6:"b"}
// const obj3 = {obj1, obj2}


// object.assign()  mdn references 
// const obj3 = Object.assign({}, obj1, obj2, obj4);


const obj3 = {...obj1, ...obj2, ...obj4} // spread operator 
// console.log(obj3);

const users =[
    {
    id:1,
    email:"sachin@gmail.com" 
},
{
    id:2,
    email:"sachin12@gmail.com"
},
{
    id:3,
    email:"deepa12@gmail.com"
},
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output datatype is array 
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); // it will give us the key value pair in the form of array  of arrays  and output is also in array format
// console.log(tinderUser.hasOwnProperty("name")); // it will check the property is present or not and output is in boolean format

const course = {
    coursename : " js in hindi" ,
    preice :"999",
    courseInstructor : " hitesh"

}

// course.courseInstructor ="hitesh"
// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);

// json  just like object but is object ka koi nam nhi hota 
// {
//     "name" : "sachin",
//     "coursename":"js in hindi", 
//     "price" :"free"
// }

[
    {},
    {},
    {}
]
