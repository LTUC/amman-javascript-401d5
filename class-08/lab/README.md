# LAB - Express Routing & Connected API

Dynamic API Phase 3: Continue working on a multi-day build of a dynamic API

In this 3rd phase of development, we'll be modularizing our server, making it easier to manage as well as adding a much needed persistence layer, saving all API data to a Mongo database.

We will continue working in the virtual storefront domain, creating a list of categories and products.

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Continue working in your `api-server` repository, in a new branch called `class-08`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [API Overview](../../apps-and-libraries/api-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

From a business requirements standpoint, nothing changes. In this phase, we continue the transition towards making a "real" API server. Specifically, we will be migrating from in-memory data storage to using Mongo to store our data permanently, and modularizing our routes for flexibility. Through it all, we will be providing the same interface to our users. To the outside world, our API remains unchanged

As a reminder, here are our user stories each of which must to be executed for both `categories` and `products` data models

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

In Phase 3, we have 2 primary goals:

- Modularizing the server, specifically focusing on the `category` and `product` routes being moved into their own modules
- Adding persistence by replacing our in-memory data objects with real Mongoose schemas and collections

Noted here are the relevant changes you'll need to make to your server to complete Phase 3:

#### Update the `index.js`

- Require the mongoose library
- Prior to calling `start()` on your imported server module, it connect to Mongo, via `mongoose`

#### Prepare the `server.js` for modularization

- Require the category and product router modules (see the bullet points below)
- `app.use()` each them in your app so that your routes will respond

#### Write new routing modules for your server

- Create the files/folders: `routes/categories.js` and `routes/product.js`
- Create a router module for each of your data types
- In each
  - Create an instance of `express.Router()` and export it
  - **Move** the appropriate route definitions and route handlers from `server.js` here
  - Redefine the definitions as `route` definitions (not `app` definitions)
  - Confirm that your server works as before, but now modular
  - Begin the conversion from memory data to persistent data ...
    - Import and initialize the appropriate Mongoose Collection (see bullet points below)
    - In your handler methods, rather than change your in-memory data store, call the appropriate model methods

#### Add Persistence with Mongoose Collections

- Work in `lib/models/categories` and `lib/models/products`
- For each, create both a schema and collection file
  - i.e. `categories.schema.js` and `categories.collection.js`
- The **schema** file should define your data model as a Mongoose schema
- The **collection** file should be a class that:
  - Imports the schema
  - Exports a class with CRUD methods, coded to work with your schema
    - `read()` performs a `find()` query in your schema
    - `create()` performs a `save()` query in your schema for a new record
    - `update()` performs a `findOneByIdAndUpdate()` operation in your schema for an existing record
    - `delete()` performs a `findOneByIdAndDelete()` in your schema for a new record

> **Engineering Note** - *Modularity is a tool that not only makes your code more readable and consumable by other developers, it helps you to think about how to break problems down*

### Testing

- Write tests as follows
  - Unit tests for your middleware
  - Route tests for our server
    - Every route should respond with the right status code and the expected data
  - CRUD tests for your collection classes
  - Use the `supergoose` testing library to ensure that none of your data is persisted into a live database and that your server need not be started.

### Visual Validation

We have deployed a web application that's designed to test your API. This is a good way to ensure that your API works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 2 (API)" Storefront link
  - In the form at the top of the page, enter the URL to your API Server
  - This server is configured to use the routes noted above, for `categories` and `products`
  - If your lab is working, this app will show your API Data and act like a web storefront

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
