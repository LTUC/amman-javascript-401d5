# LAB: HTTP and REST

Dynamic API: Phase 1

In Phase1, we're going to build a simple API (with no code) to gain some clarity and visuals on proper route structure and the data contracts. We will use a product called 'json-server' to build a simple API server that fulfills all of our business requirements in a "sandbox"

> Specifically, we will be building an API to serve data for a virtual storefront, which displays categories and products to a potential shopper

In future phases, we will be building out this functionality manually, with Express.

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository for this project, called `api-server` and work in a branch called `class-06`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [API Overview](../../apps-and-libraries/api-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

For the first phase, our API will perform CRUD operations using ReST methods on 2 data models using `json-server`, an installable and configurable API application used to "spin up" servers for testing purposes.  We will be using this to set the goal for our business requirements, and create working documentation.

Each of the following user stories are to be executed for both `categories` and `products` data models

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

### Build a working API Server using `json-server`

- Install `json-server` globally on your computer
- Work in your `api-server` repository
- Create a folder called `data` with a `db.json` file, with containers for your data models
  - `{ "categories" : [], "products": [] }`
- Start json-server from within your working folder and "watch" your database file
  - `json-server --watch ./data/db.json`
- Your api will automatically respond to the following endpoints:
  - `/categories`  GET, POST
  - `/categories/:id/` PUT, DELETE
  - `/products`  GET, POST
  - `/products/:id/` PUT, DELETE
- Use `httpie` (command line), Insomnia, Postman, or any other "ReST" testing application to POST some categories and products, using JSON, into your API so that you have some data in there.
  - Note that `json-server` does not validate your data, it'll just save whatever you send it. Be sure that you obey these rules for your data as you create/update it:
    - Data models should contain the following fields:
      - `categories`
        - `id`, `name`, `display_name`, `description`
      - `products`
        - `id`, `category`, `name`, `display_name`, `description`
- Using your ReST testing tool, also confirm that you can UPDATE, DELETE, and GET records for both categories and products from your API using the routes above
  - GET ALL: GET - <http://localhost:3000/categories>
  - GET SOME: GET - <http://localhost:3000/categories?category=electronics>
  - GET ONE: GET - <http://localhost:3000/categories/1>
  - UPDATE ONE: PATCH or PUT - <http://localhost:3000/categories/1>
  - DELETE ONE: DELETE - <http://localhost:3000/categories/1>
- Confirm that your API's output matches exactly the specifications given in the requirements document

### Swagger Documentation

- In your API, Create a folder called `docs`
- Go to swagger.io and use the Inspector application to test your api
- Write and publish swagger documentation with Swagger Inspector
  - It will publish it to "Swagger Hub"
  - Convert the YAML to JSON and then copy and paste swagger.json from the editor and add to your server project.
  - For submission, this file needs to be in your repository
  - Additionally, add the URL to the swagger hub page where you build the docs to your README

### Visual Validation

We have deployed a web application that's designed to test your API. This is a good way to ensure that your API works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 2 (API)" Storefront link
  - In the form at the top of the page, enter the URL to your API Server
  - This server is configured to use the routes noted above, for `categories` and `products`
  - If your lab is working, this app will show your API Data and act like a web storefront

### Stretch Goal

- Alter json-server to produce proper standardized API output
  - It always sends a simple array of objects when performing a "GET" that returns multiple records
  - Our business requirement specifies an object, however.

      ```json
      {
        "count": 15,
        "results": [
          {},
          {}
        ]
      }
      ```

  - Alter `json-server` to produce the properly formatted output for a group of records
    - To do this, you'll need to stop using `json-server` as you have been and instead create a new application based on it
    - Create a file called server.js that requires json-server as a module
      - Within, override the renderer to produce the output you prefer.
      - You will find instructions and examples on the [json-server github page](https://github.com/typicode/json-server)
    - Alter the swagger docs to reflect the new json format
    - Note: The www server provided above will auto-recognize the new format and will continue to work

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

### For your README.md

- You are not required to deploy your JSON server today
- Do submit a PR with your db.json and another configuration or server changes that you did make (stretch goals)
- Add a link to the Swagger documentation you created at Swagger Hub
