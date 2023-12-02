const user = {
    username: "Rajeev",
    price: 199,
    welcomeMessage: function(){

        console.log(`${this.username} , welcome to website`)

        console.log(this) // this current context(vaalue ki baat krta h );

    }
}

user.welcomeMessage()

// console.log(this)

// function chai(){

//     let username = "Rajeev"
//     console.log(this.username);   // function ke under this ka use nhi kr skte kuki function ke ander use krne se undefined print krega 


// }

// chai()


const chai = () =>
{

    let username = "Rajeev"
    console.log(this)
}

chai()


const addTwo = (num1,num2)  => {
    return num1+num2;
}

console.log(addTwo(3, 4))


