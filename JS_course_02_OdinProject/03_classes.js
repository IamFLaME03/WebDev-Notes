// Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same thing without using the class keyword at all:
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// Usage:
let user1 = new User("John");
user1.sayHi();

// ===> rewriting class User in pure functions
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it
// 2. Add the method to prototype
User.prototype.sayHi = function() {
  alert(this.name);
};
// Usage:
let user2 = new User("John");
user2.sayHi();

// ===> What class User {...} construct really does is:
// 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// 2. Stores class methods, such as sayHi, in User.prototype.


// ===> getter & setter : https://javascript.info/property-accessors
// Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
// If we try to supply both get and value in the same descriptor, there will be an error:
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {   return 1   },
  value: 2
});

// ===> Adding a getter for age solves the problem:
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));
alert( john.birthday ); // birthday is available
alert( john.age ); 


// ===> Private methods, properties, static methods : 
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;
  #privateMethod() {
    // …
  }
  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}





