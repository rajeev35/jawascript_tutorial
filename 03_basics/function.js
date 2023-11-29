

function sayMname(){

console.log("R");
console.log("a");
console.log("j");
console.log("e");
console.log("e");
console.log("v");



}

sayMname()


// function addTwonumbers(number1,number2){ // parameters

//     console.log(number1+number2)


// }


function addTwonumbers(number1,number2){ // parameters

    let result  = number1+number2;
    return result;


}


 const result = addTwonumbers(3,4) // arguments

 console.log("Result: ",result);
 
 function loginUserMessage (username = "sam"){

    if(username === undefined){

        console.log("Please enter thr user name");
        return

    }
    return `${username} just logged in`
 }


 console.log(loginUserMessage("Rajeev"));

 