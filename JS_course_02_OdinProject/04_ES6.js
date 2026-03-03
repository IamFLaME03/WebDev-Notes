// link : https://www.theodinproject.com/lessons/javascript-es6-modules 

// fact that a file can have multiple named exports but only one default export
// one.js
export default "Hello, Odinite!";   //default export
export const farewell = "Bye bye, Odinite!";       //named export
// two.js
import greeting , { farewell } from "./one.js";     
console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"

//default export and import don't have curly braces ' {} '.

// something more such as aliases and namespace imports :   
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

//video : https://youtu.be/cRHQNNcYf6s
//commonJS vs ES6 Module : https://blog.logrocket.com/commonjs-vs-es-modules-node-js/





// ===> webpack : https://www.theodinproject.com/lessons/javascript-webpack

