 //DataTypes 

 // primitive

 // 7 types : string,number,boolean,null undefined,symbol

 // reference(Non Primitive)

 // Array,Object,Function


const score = 200;
const scoreValue = 200.2;
const isLoggedin = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 123456789543210987667890n
// javascript is a dynamically type language because  we need never defined the datatypes for the variable.



const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Rajeev Momos",
    age: 20,
    city: "Noida",

}


 const myFunction = function () {
    console.log("HELLO RAJEEV")

}

//******************************************************************************

//Memory stack and heap.


let myYoutubename = "Golu vlogs"

let anothername = myYoutubename

anothername = "chhotadymond"

console.log(myYoutubename)

console.log(anothername);


let userOne = {
    email: "rajeevkumarq400@gmail.com",
    upi: "user@upi",



}


let userTwo = userOne;
userTwo.email = "rajeevkumarq400@gmail.com";       //object ko access krne ke liye dot ka use kr rhe hai 
console.log(userOne.email)
console.log(userTwo.email)

// primitive data types  stack. ke ander jate hai.   or.  non primitive data types 
// heap ke ander jate hai 
// copy lena ho to stack and reference lena ho to heap.



