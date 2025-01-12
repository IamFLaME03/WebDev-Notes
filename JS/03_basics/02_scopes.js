// var c = 300
// let a = 300
if (true) {
    var c = 30
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

console.log(a);  //throw error because of let,const variable(which follows scope) 
// console.log(b);
console.log(c);

//-----------nested-scope---------
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //fuction can be call before declaration
function addone(num){
    return num + 1
}

// addTwo(5)    //but function can not be called if it is stored in variable 
//In JS variables are very powerfull, it can hold many things
const addTwo = function(num){
    return num + 2
}
