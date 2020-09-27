# LAB: Express

Dynamic API Phase 2: Continue working on a multi-day build of a dynamic API

In this lab, we'll be using a moving away from `json-server` and creating a "real" API server of our own, using Express. Our express server will be coded for modularity and performance. You will replicate the input/output of `json-server` but storing data in memory to simulate full CRUD functionality, but without persistence.

We will continue working in the virtual storefront domain, creating a list of categories and products.

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Continue working in your `api-server` repository, in a new branch called `class-07`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [API Overview](../../apps-and-libraries/api-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

From a business requirements standpoint, nothing changes. `json-server` did a great job of serving as a "mock" API server for our application. In this phase ,we begin the transition towards making a "real" API server. Specifically, we will be replicating the same functionality `json-server` provided by writing our own server, using Express and Node.js

As a reminder, here are our user stories each of which are to be executed for both `categories` and `products` data models

- As a developer, I want to **CREATE** a new record in a database, using the POST method on a custom API
- As a developer, I want the API to return the record I create in JSON format
- As a developer, I want to **GET** list of all records in a database, using the GET method on a custom API
- As a developer, I want the API to return an object containing `count`, and a `results[]` array
- As a developer, I want to **GET** an existing in a database, using the GET method with an ID parameter on a custom API
- As a developer, I want the API to return an object containing the record from the database
- As a developer, I want to **UPDATE** an existing record in a database, using the PUT and PATCH methods with an ID parameter on a custom API
- As a developer, I want the API to return the record I updated in JSON format
- As a developer, I want to **DELETE** an existing record in a database, using the DELETE method with an ID parameter on a custom API
- As a developer, I want the API to return the record I updated in JSON format
- As a developer, I want Swagger documentation for this API so that I can make it easier for other developers to use and understand

## Technical Requirements / Notes

### API Server

We'll be creating a full express server today, with modular middleware and routes

- Create an express server, using 2 files
  - `index.js` at the root of your repository, which will act as the "entry point" to your server.
    - should require `lib/server.js`
    - should require `dotenv`, reading PORT from your `.env` file
    - It should call the `.start()` method from the server with the PORT set in your environment
  - `lib/server.js` which will serve as your server 'module' ... will contain all of the logic for the server
    - Must export an object with a `start()` method (it should not start on it's own)
- Create a middleware folder and add 4 middleware modules to it:
  - `timestamp.js`
    - Put the current timestamp (formatted like a proper date) on the `request` object in a property called `requestTime`
    - Import this into your server and set it up to run at the application level for all routes
  - `logger.js`
    - Execute a `console.log()` containing the request `path`, `method`, and the `requestTime` property of the request object
    - Import this into your server and set it up to run at the application level for all routes
  - `404.js`
    - Sends a 404/Not-Found message as the response (does not call `.next()`)
    - Import this into your server and set it up to be "used" after your other routes
  - `500.js`
    - Sends a 500/Server Error message as the response (does not call `.next()`)
    - Import this into your server and set it up to be "used" as the last route
- Create `routes` within your `server.js` for both "categories" and "products"
  - The "data" for these routes will be contained within the router itself, as an in-memory object or array of objects (your choice)
  - Define CRUD routes to handle requests for both categories and products that will use this in-memory "database"
    - `app.post('/products', (req, res) => {})` ... uses the object in the body of the request to create a new "record"
    - `app.get('/products', (req, res) => {})`
    - `app.get('/products/:id', (req, res) => {})`
    - `app.put('/products/:id', (req, res) => {})` ... uses the object in the body to replace the record with the `:id` specified
    - `app.delete('/products/:id', (req, res) => {})` ... deletes the record with the `:id` specified
    - ... and repeat for categories
  - Note that as you build and test this server, your data will be lost every time you restart the server.
    - Sorry.
    - In future phases, we will add a layer of persistence to save your data permanently

### Testing

- Reminder that if you don't separate the `index.js` and the `server.js` you will have an impossible time testing your server
  - Use `supergoose` or `supertest` to easily test your server without having to start it
- Write unit tests for the middleware
  - These should be testable in isolation

### Documentation

- Your swagger documentation, created in Phase 1, should still work. We've not changed the input/output of our server at all, just **HOW** we accomplished it, by swapping out `json-serve` for one of our own creation.

> **Engineering Notes** - *Refactoring* is a tool we can use to improve our code, while keeping the "api" (how people use it) unchanged ... *Modularity* is a tool that not only makes your code more readable and consumable by other developers, it helps you to think about how to break problems down

### Visual Validation

We have deployed a web application that's designed to test your API. This is a good way to ensure that your API works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/))
  - Click the "Module 2 (API)" Storefront link
  - In the form at the top of the page, enter the URL to your API Server
  - This server is configured to use the routes noted above, for `categories` and `products`
  - If your lab is working, this app will show your API Data and act like a web storefront

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
