// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abs"

tinderUser.name = "Rajeev"

tinderUser.isLoggedIn = false



// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userFullname:{
            firstName: "Rajeev",
            lastName: "Kumar",


        }
    }

}

console.log(regularUser.fullname)

const obj1 = {
    1:  "a", 2: "b", 
}

const obj2 = {
    1: "c", 3: "d",
}

// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        
    }
]


// object ka second parts: 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rajeev"
}

course.courseInstructor


const {courseInstructor: instructor} = course

//console.log(courseInstructor);

console.log(instructor)

const navbar = ({company}) => {



}

navbar(company = "Rajeev");

// API CONCEPT 

//JSON

// {

//     "name":  "Rajeev",
//     "courcename": "js in hindi",
//     "price": "free"
    
    
// }


