# Data Modelling for Backend with Mongoose

the difference between a junior and a senior developer is that a senior developer spends more time planning the data structure than writing the actual code.

## Core Concepts

- The "Why": Before writing controllers for Login or Signup, you must define what a "User" looks like in the database. If the foundation (data model) is weak, the entire application will eventually break.

- Mongoose Role: In the MERN stack, Mongoose acts as the bridge between Node.js and MongoDB. It provides a schema-based solution to model application data.

- Professional Approach: Large corporates use specific tools for visualizing data flow before coding. While this video uses code directly, the process mimics professional architectural planning.

## Mongoose Essentials

- <b>Schema</b>: A blueprint that defines the structure of the documents within a collection (e.g., what fields a user has).

- <b>Model</b>: A wrapper on the Mongoose schema that provides an interface to the database for creating, querying, updating, and deleting records.

- <b>Types & Validations</b>: Defining data types (String, Number, Boolean) and constraints (required, unique, lowercase) directly in the model.

Practice Case Study: Todo Application
data modelling through a Todo app structure:

### User Model

Contains fields like username, email, and password.

```js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
   
   {
      // username: String   --> it is true but for validations we use to write...
      username: {
         type: String,
         required: true,
         unique: true,
         lowercase: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true
      },
      password: {
         type: String,
         required: true,
      }
   },
   {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
//here we given name User, but in mongoDB it converts into users(lowercase + plural)
```

### Todo Model

Contains the content of the todo and its status (completed or not).

```js
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   content: {
      type: String,
      required: true,
   },
   complete: {
      type: Boolean,
      default: false,
   },
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"   // make sure it should be same that you given in first parameter of mongoose.model
   },
   subTodos: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "SubTodo"
      }
   ],
}, {timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)
```

> Relationships: How to link a Todo to a specific User (Referencing).

### Sub-Todos

Modelling nested data or small helper tasks within a main Todo.

```js
import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
   content: {
      type: String,
      required: true,
   },
   complete: {
      type: Boolean,
      default: false,
   },
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },

}, {timestamps: true})

export const subTodo = mongoose.model("Subtodo", subTodoSchema)
```

### Key Takeaways

<b>Don't Rush to Code</b>: Always visualize your data first. Ask: "What data do I need?" and "How is it related to other data?" [00:59].

<b>Data Types</b>: Be strict with data types (e.g., using timestamps: true to automatically get createdAt and updatedAt fields).

<b>References</b>: Use mongoose.Schema.Types.ObjectId to create relationships between different models (like linking a Todo to a User).

### Common Folder Pattern for Models

models are kept in a dedicated directory:

``` text
src/
└── models/
    ├── user.models.js      // Schema for users
    ├── todo.models.js      // Schema for main tasks
    └── sub_todo.models.js  // Schema for sub-tasks
```