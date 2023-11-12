const name = "Rajeev Kumar"
const repoCount = 33

// console.log(name + repoCount)


console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Rajeev Kumar')

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-12, 2)
console.log(anotherString)

const newStringOne = "            Rajeev           "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://rajeevkumar02.com"
console.log(url.replace('%20', '-'))