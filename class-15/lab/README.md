# Module 3 Final Project: API Server

Implement a fully functional, authenticated and authorized API Server using the latest coding techniques

Over the course of the previous 2 modules, you have separately created an `auth-server` and an `api-server` ... In this lab, you will be integrating those 2 servers to create a single, authenticated API server.

**NOTE** - You will be using this server as a base for all future work in this course. Other servers will be merged with it, and we'll be using it to serve data to our front-end applications later in the course. Completion of this final lab is essential to your future work being integrated.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

> Create a new GitHub repository for this assignment, called `authenticated-api-server`

## Requirements

- API Routes must now be protected with the proper permissions based on user capability, using Bearer Authentication and an ACL
  - `app.get(...)` should require authentication only, no specific roles
  - `app.post(...)` should require the `create` capability
  - `app.put(...)` should require the `update` capability
  - `app.patch(...)` should require the `update` capability
  - `app.delete(...)` should require the `delete` capability
- Clean and modularize Auth Middleware
- Clean/Tighten the Auth Model
- Stretch Goal
  - Turn authorization/authentication on or off using a variable in your `.env` file
  - This can allow us to run an API server that does or does not require authenticated users

> **Implementation Notes/Advice**

- Create a new repository for this project, called `authenticated-api-server`
- Import your previously built API server code and get it working
- Add the `auth` module/folder from the `auth-server` to this working API server
- Import and use the auth routes in the API server module
- Using the auth routes, create some users with appropriate roles to test with.
- Apply the appropriate auth middleware to each of your API (v1) routes to "protect" them with auth

### Testing

- Tests from both previous servers should work in the new merged server...
- 100% Test Coverage Goal For:
  - Auth router
    - Signup
    - Sign In via username/password or Token
  - Model Finder Middleware
  - Auth Middleware
    - Protected Routes
  - OAuth Chooser
  - API Routes
    - Make assertions on the data shapes returned from the API routes

#### Web Server Visual Tests

- Open this [Web Application](https://javascript-401.netlify.app/))
  - Click the "Module 3 (AUTH) / Authenticated API" Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - First login with a username and password
  - Then, you should see buttons that would invoke each of the routes described above.
  - Based on your role, each button will give you a good or a bad response

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
