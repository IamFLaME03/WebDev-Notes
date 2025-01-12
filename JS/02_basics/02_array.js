const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //now its 4th element is array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh", id:123})) //object doesn't have length property and not iterable. JS doesn't know how to handle it and return empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// every() - Checks if all elements satisfy the condition.
// let arr = [1, 2, 3];
// console.log(arr.some((x) => x > 2)); // true

