// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//--------------Object.assign()---------------
// const obj3 = { obj1, obj2 }      //add whole obj1 and obj2 as elements of obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  //add element of obj1 and obj2 as elements of obj3
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email = 'k@gmail.com'

// console.log(users);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//---------Object Destructuring----------
// course.courseInstructor  //common way to access element

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//mostly use in react for example, 
// const navbar = ({company}) => {      // instead of writing props.company -> {company}

// }
// navbar(company = 'hitesh')


//--------JSON---------
//it gives error but no issue in code, it is correct
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//also data may be given in array format.
[
    {},
    {},
    {}
]

