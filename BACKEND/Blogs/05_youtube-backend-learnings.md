# Learning Concepts

This file contains concepts, points that i learned while building youtube-backend project from chaiaurcode yt channel.

## [6. How to setup professional backend project](https://youtu.be/9B4CvtzXRpc?si=qCptsK8RANoudvoM)

- **Image/file Storing** : When we use any third party service like azure,aws or cloudinary, we use to store files/photos temporary store on our server, for in case if connection lost we have that files and later post them on third party service by using third process.(Some organisation use to directly upload, So it depends on organisation)

---

- We can not push empty folder on git, but it is important for us to track and push these folders. There is standard approach we follows to create a empty file `.gitkeep` inside the folder

> gitignore generator : https://mrkandreev.name/snippets/gitignore-generator/

---

- **Prefere installing prettier package** because when we write professional grade code, we will write code along with other developers and may be someone have not prettier VS code extension. So when we merge everything on github, there are so many conflicts. Thats why it is important for the team to be on the same page. Not just a extension, the settings of prettier also have to be added on a basis of project.

  - after installing prettier package, there are some files we have to add manually.

   ```js
      // .prettierrc
      {
         "singleQuote": false,
         "bracketSpacing": true,
         "tabWidth": 2,
         "trailingComma": "es5",
         "semi": true
      }

      // .prettierignore
      /.vscode 
      /node_modules
      ./dist

      *.env
      .env
      .env*
   ```

## [7. How to connect database in MERN](https://youtu.be/w4z8Py-UoNk?si=784Qivqlsy4A0eGd)

- we stores confidential and sensitive info in `.env` and other thing like DB name, port in `constants.js` file

- There are two approach for connecting DB.
   1. All connection code fuction inside `index.js` file adn call there.
   2. All code inside separate file `db/` and export it to `index.js` and run it

---

- **Note that** Database is always in another continent means it takes time and second point is there are chances to face failures or error while working with DB

   *"So always use try-catch or use promise (hadles error by resolve-reject) and use async-await"*

---

- When professionals write IIFE(Immediately Invoked Function Expression), they use semicolon before it for cleaning purpose if editor missed semicolon in previous line.

   ```js
   ;( async () => {} )()
   ```

---

- Async function returns Promise when asynchronous task get done, so we can use .then() after it

## [8. Custom API response and Error handling](https://youtu.be/S5EpsMjel-M?si=xB17NpY1rz_ABIg8)

- Implemeting CORS - a security mechanism that allows a server to explicitly specify which external origins (domains, protocols, or ports) can access its resources

```js
   import cors from "cors"

   app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true,
}))
```

---

Mostly we use app.use() to add middleware or do configurations.

- `req.body` Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use **body-parsing middleware** such as `express.json()` or `express.urlencoded()`

- We use [express.json()](https://expressjs.com/en/5x/api.html#express.json) to parse incomming requests with JSON payloads.
- Sometimes we get data from URL, there is different encoder/decoder mechanism like  whitespace converts into %20 or +, For handling these data we use [express.urlencoded()](https://expressjs.com/en/5x/api.html#express.urlencoded)

- [express.static](https://expressjs.com/en/5x/api.html#express.static) serves static files and is based on serve-static

- We use `cookie-parser` to do secure CRUD operation in user's device, it gives way to securely set cookies on user's device, only server can read/write that cookies

```js
   app.use(express.json({
      limit: "16kb"
   }))

   app.use(express.urlencoded({
      extended: true, // enable parsing nested objects
      limit: "16kb"
   }))

   app.use(express.static("public")) // public is foldername

   app.use(cookieParser())
```

---

- Mostly we will create many async function wrapped in try-catch block, so why not making a utillity that handle these functions. `/src/utils/asyncHandler.js`

```js
// Two ways :
// using Promise 
const asyncHandler = (requestHandler) => {
   (req, res, next) => {
      Promise
         .resolve(requestHandler(req, res, next))
         .catch((error) => next(error))
   }
}

// using async-await and try-catch block
const asyncHandler = (fn) => async (req, res, next) => {
   try {
      await fn(req, res, next)
   } catch (error) {
      res.status(error.code || 500).json({
         success: false,
         message: error.message
      })
   }
}
```

- Node.js provide [Error class](https://nodejs.org/api/errors.html), but for custom error handling we create ApiError class that overwrites the Error class and also create ApiResponse class to handle response

## [9. User and Video model with hooks and JWT](https://youtu.be/eWnZVUXMq8k?si=2flN75HDrW5T8fUt)

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true   // Indexing
  }
});
```

- **Without index:** MongoDB scans every document in the collection (Full Collection Scan)
- **With index:** MongoDB directly jumps to the matching value.
- Indexes also speed up sorting.
- Indexes improve read performance but slightly slow writes (insert/update), because MongoDB also updates the index. So **don't index every field, only frequently searched ones**

---

### [mongoose-aggregate-paginate-v2](https://www.npmjs.com/package/mongoose-aggregate-paginate-v2) package

this package allows us to write aggregations queries
> [Docs of Aggregation Pipeline in MongoDB](https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php)

---

### [bcrypt](https://www.npmjs.com/package/bcrypt) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) package

- bcrypt helps to hash a password
- jsonwebtoken helps to create tokens : [jwt.io](https://www.jwt.io)

---

### [pre hook in mongoose](https://mongoosejs.com/docs/middleware.html#pre)

Pre middleware functions are executed one after another.

```js
const schema = new Schema({ /* ... */ });
schema.pre('save', function() {
  // do stuff
});
```

**Note :** make sure don't write schema.pre('save', () => {}). Here callback function don't get referense of this. It don't have context of userSchema

---

- we can check if field is modified or not using `isModified`. For example

```js
userSchema.pre("save", async function (next) {
   if(!this.isModified("password")) return next()
   
   this.password = bcrypt.hash(this.password, 10)
   next()
})
```

---

- We can create custom methods in mongoose, by directly assigning function to `schema.methods`

```js
userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}
```

## [10. How to upload a file in backend](https://youtu.be/6KPXn2Ha0cM?si=P3RKTOnj_8W7_r4F)

When we want file upload, we use one of two packages: 1. `express-fileupload` and 2. `multer`. Currently multer is popular. ([Multer DOCS](https://www.npmjs.com/package/multer))

- Monstly in production, they choose to step file upload, first they upload on server and then upload to cloudinary or other service, so if any error face they can reupload file from own server

---

- Node js provide built in fs(`file system`) library. Thay have many methods we can use to perform file operation like read, write, open, change permission or unlink file

- [fsPromises.unlink(path)](https://nodejs.org/api/fs.html#fspromisesunlinkpath) : If path refers to a symbolic link, then the link is removed without affecting the file or directory to which that link refers. If the path refers to a file path that is not a symbolic link, the file is deleted

---

- We created middleware for using multer, we can create normal function and use directly - It is also right but, we want this function to be called whenever we want to use file upload facility

---

### Use of multer

- here we can get json data from req, But you can get access of file inside which you get all files uploaded by user
- That's *why we use multer* because we already configured for accessing json data from request body but there is no file.

```js
import multer from "multer";

const storage = multer.diskStorage({
   // cb => callback fn
   destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
   },
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
   }
})

export const upload = multer({ storage: storage })
```

## [11. HTTP Header and methods](https://youtu.be/qgZiUvV41TI?si=Le3i1igJGVqL4v44)

- **Http headers :** when we send http request we share some meta-data also.

  - metadata : data about data... key-value pais set along with request-response
- Headers use for caching, authentication, manage state
  - Request header -> from client
  - Response header -> from server
  - Representation header -> encoding/compression
  - Payload header -> data

---

- Http methods:

  - GET : retrive a resource
  - HEAD : no message body (response headers only)
  - OPTIONS : what operation are available
  - TRACE : loopback test(get some data)
  - POST : interect with resourse (mostly add)
  - PUT : replace a whole resource
  - PATCH : change/replace specific part of resource
  - DELETE : remove a resource

---

- Http Status Codes:
  - 1xx -> Informational
  - 2xx -> Success
  - 3xx -> Redirectional
  - 4xx -> Client Error
  - 5xx -> Server Error
  - Examples:
    - 101 Continue
    - 102 Processing
    - 200 Ok
    - 201 Created
    - 202 Accepted
    - 307 temporary redirect
    - 308 permanant redirect
    - 400 Bad request
    - 401 Unauthorised request
    - 402 Payment Required request
    - 404 Not Found
    - 500 Internal Server Error
    - 504 Gateway Timeout

