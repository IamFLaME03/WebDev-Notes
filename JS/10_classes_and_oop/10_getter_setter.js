//class based

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    //its throw error if you define getter and not setter and vise-versa
    set email(value){
        // this.email = value       -> there will be problem during define instance of class cause constructor and setter both invokes for set value. and call stack will be full
        this._email = value         //we make new variable so we also return that variable in getter
    }

    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);