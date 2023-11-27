const marval_heros = ["thor", "Ironman", "Spyderrman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)

console.log(marval_heros);

 const allHeros  = marval_heros.concat(dc_heros);  // concat new array return krta h.

console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]

console.log(all_new_heros);

console.log(Array.isArray("Rajeev"))


console.log(Array.from("Rajeev"));

console.log(Array.from({name: "Rajeev"}));   // interestinf for interview 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


