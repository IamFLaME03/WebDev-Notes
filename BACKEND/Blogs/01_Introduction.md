# Backend Development Introduction

### There are two major components

1. A Programming language - Java, JS, php, golang, c++
2. A Database - Mongo, MySQL, Postgres, sqlite

#### API - It is a set of rules and definations that enable different software applications to communicate and share data with each other.

### JS based Backend

- Node.js is runtime environment that allows us to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it efficient and scalable for building server-side applications.

- We have Deno, Bun as alternatives to Node.js but they are not as popular as Node.js and have a smaller ecosystem of libraries and tools.

- We use express(A web application framework for Node.js) and mongoose(ODM - object data modeling Library for MongoDB and Node.js).

- We always deal with these three - Data, File or Third party API.

- We use express to create a server and handle HTTP requests and responses, while mongoose allows us to interact with MongoDB databases in an object-oriented way.


### Folder Structure

``` text

backend/src/

├── index.js      // Entry point of the application, connects to the database and starts the server.
├── app.js     // Sets up the Express application, including middleware and routes.
├── constants.js     // Contains constant values used throughout the application, such as error messages and configuration settings.
├── DB/     // Contains database connection logic and configuration.
├── models/    // Contains Mongoose schemas and models for the application's data entities.
├── controllers/    // Contains functions that handle the business logic for each route, such as creating, reading, updating, and deleting data.
├── routes/    // Contains route definitions that map HTTP requests to controller functions.
├── middlewares/     // Contains middleware functions that can be used to process requests and responses, such as authentication and error handling.
├── utils/     // Contains utility functions that can be used throughout the application, such as data validation and formatting.
├── More(depends)/   

```
