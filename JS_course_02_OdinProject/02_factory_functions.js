// ==> Clousures
function makeAdding(firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting(secondNumber) {
        // "second" is scoped within the resulting function
        const second = secondNumber;
        return first + second;
    }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
// console.log(add5(2)) // logs 7

// Functions in JavaScript form closures. A closure refers to the combination of a function and the surrounding state in which the function was declared. This surrounding state, also called its lexical environment, consists of any local variables that were in scope at the time the closure was made.
// Here, add5 is a reference to the resulting function, created when the makeAdding function is executed, thus it has access to the lexical environment of the resulting function, which contains the first variable, making it available for use.


// ==> factory function & its need :  https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#so-whats-wrong-with-constructors

const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser(name) {
    const discordName = "@" + name;
    return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword




// ==> Destructuring ; https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#destructuring

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array

const { c, ...others } = { c: 1, d: 2, e: 3 };
// console.log(others); // { d: 2, e: 3 }
const [first, ...others2] = [1, 2, 3];
// console.log(others2); // [2, 3]



// ==>Private variables and functions : https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#private-variables-and-functions
function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => ++reputation;

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
//reputation is private
// console.log(josh);  
josh.giveReputation();
josh.giveReputation();

// console.log({
//     discordName: josh.discordName,
//     reputation: josh.getReputation()
// });
// logs { discordName: "@josh", reputation: 2 }



//Prototypal inheritence with factories : https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#prototypal-inheritance-with-factories

// function createPlayer(name, level) {
//     const { getReputation, giveReputation } = createUser(name);

//     const increaseLevel = () => level++;
//     return { name, getReputation, giveReputation, increaseLevel };
// }
// const kk = createPlayer('kirtan', 2);

// console.log(kk);
// console.log(kk.name);
// console.log(kk.getReputation);
// console.log(kk.getReputation());
// console.log(kk.giveReputation());
// console.log(kk.increaseLevel);
// console.log(kk.increaseLevel());


function createPlayer(name, level) {
    const user = createUser(name);

    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });      //Object.assign used to combine all object into first parameter and if first and other have same key then others key:value is overlap on first's key
}
const kk = createPlayer('kirtan', 2);
console.log(kk);

// ==>Object.assign()
// let first1 = {a:1, b:2}
// let second2 = {b:1, c:2}
// let third3 = Object.assign(first1, second2)
// console.log(first1);    //{ a: 1, b: 1, c: 2 }
// console.log(third3);    //{ a: 1, b: 1, c: 2 }
// console.log(first1 === third3); // true


// modular JS : https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f


/* ==> Modular JS notes: 

some ground rule : 
- self-contained module : 
    - everything to do with my module is in my module
    - no global variables
    - if a module manages more than one thing it should be split up
- separation of concern
- DRY code : Don't repeat yourself
- efficient DOM usage :
    - very few ${selections}
- no memory leaks
    - all events can be unbound




*/