// singleton   literal se bnega toh singelton bnega agr constructor se bnega to hmesa singelton bneg a

// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {

    name: "Rajeev",

    age:   18,
    location: "Ghaziabad",
    email: "rajeevkumarq400@gmail.com",

    [mySym]: "mykey1",

    isLoggedIn: false,

    lastLoggedIn: ["Monday", " saturday"],


    


}
console.log(JsUser.email)

console.log(JsUser ["email"])

console.log(JsUser[mySym])


JsUser.email = "rajeev.kumar28@theporter.in";
console.log(JsUser.email)

// Object.freeze(JsUser)

JsUser.email = "rajeev2020it049@abesit.edu.in";

console.log(JsUser)



JsUser.greetings = function(){

    console.log("Hello Js User");
}

JsUser.greetingsTwo = function(){

    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greetings());

console.log(JsUser.greetingsTwo());