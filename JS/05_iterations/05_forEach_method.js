//for-each as method - Executes a function for each array element

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } )
//note that function called as argument of forEach is referred as callback function 
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
//note that we give reference of printMe in argument of forEach (not calling printMe) 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )