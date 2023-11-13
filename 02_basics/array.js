// Array

const myArr = [0,1,2,3,4,5,6,7,8,9]

const myHero = ["shaktiman", "DHIRA", "viston" ];

const mArr2 = new Array (1,2,3,4)

console.log(myArr[0]);



// Array Method
// myArr.push(12)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(111)
// console.log(myArr)


// console.log(myArr.includes(9));

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice or splice 

console.log("A ", myArr)

const myn1 = myArr.slice(1,6);
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,6)
console.log("C ", myArr)
console.log(myn2);