function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username) //username not seems in output
    //SetUsername.call(username)  //here call is holds references of function.
    SetUsername.call(this, username)    //here we gives this of createUser function because setusername's this is removed at the end. thats why we use createUser's this 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);