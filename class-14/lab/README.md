# LAB: Access Control

Authentication Server Phase 4: Role Based Access Control

Being able to login is great. But controlling access at a more granular level is vital to creating a scalable system. In this lab, you will implement Role Based Access Control (RBAC) using an Access Control List (ACL), allowing to not only restrict access to routes for valid users, but also based on the individual permissions we give each user.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Continue working in your `auth-server` repository, in a new branch called `class-14`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

In the final phase, the new requirement is to expand the restrictive capabilities of our routes. As it currently stands, a valid user with a valid token is able to access a route. We need to add an optional and additional layer of control, allowing us to ensure that based on the users' role in our organization, we can further restrict/allow access.

Specifically, we want to make the following restrictions:

- Regular users can **READ**
- Writers can **READ** and **CREATE**
- Editors can **READ**, **CREATE**, and **UPDATE**
- Administrators can **READ**, **CREATE**, **UPDATE**, and **DELETE**

Routes that end up performing those actions in our API/Database need to be protected by both a valid user and that user's permissions

Today's **new** user stories:

- As a user, I want to present my token instead of my username and password so that I can access protected routes more securely
- As a user, I expect not to be able to access routes that my access level does not allow me to see
- As a developer, I want to protect any route on my server by requiring a valid token to access it
- As a developer, I want to create a rule by which I can restrict access to a route by naming a capability
- As a developer, I want to protect any route on my server by checking the users' capabilities against the route's rules

> **Note:** All previous requirements and user stories are still required. This Phase is intended to add functionality to our existing authentication server.

## Technical Requirements / Notes

In Phase 3, we will need to implement a new user/data flow

1. Add middleware to any route, in conjunction with **Bearer Token Validation**, in order to specify which capability is required to access
1. Following token validation, check permissions
1. If the user's role grants them a capability that matches what is declared on the route, grant access
   - If not - return an error message and deny access

Noted here are the relevant changes you'll need to make to your server to complete Phase 4:

- The users model will need a list of roles, and for each role a list of capabilities that the role allows
- Middleware that is added to each route which validates a user based on their token
- Middleware (curried) that accepts a capability as an argument, that can query the user model to validate capability
- A new method in the users model to check a specified capability agains the role that the user is assigned to

### "Protect" routes by restricting access without a valid token AND a specific capability.

As the purpose behind authorization is to restrict access to our system to valid users with proper permissions. Let's begin by creating a route on the server that we can use to prove our system will work on a larger scale. If we can prove that we can protect one route, we can protect any route the same way.

The idea here will be to create multiple middleware methods that run in series. Either one of them could throw an error and prevent access, allowing us to first check for a valid user and then their capabilities

In your `extra-routes.js` module, add new routes designed to simulate CRUD operations

- Protect each of them with the bearer middleware we've already built **as well as** the middleware you're about to write
- For simplicity's sake, have each route simply respond with "Route /read worked" (change the text for each)
- ... we're only wiring these up as a means of ensuring that our authorization system works well
- `app.get('/read', bearerAuth, permissions('read'), ...)`
- `app.post('/add', bearerAuth, permissions('create'), ...)`
- `app.put('/change', bearerAuth, permissions('update'), ...)`
- `app.delete('/remove', bearerAuth, permissions('delete'), ...)`

> Note: until you create the **permissions** middleware module itself these routes will not work

### Permissions Middleware Module

Once we have a route (or more) that we'd like to restrict access to, implement the actual middleware method that'll compare the user's permissions against the permission required to access the route

1. Create a new middleware module called `authorize.js` in your auth module's middleware folder
1. This should be required by new `extra-routes` router and attached inline to all of your routes as described

- This middleware will need to do the following:
  - Take note of the capability being identified by the route
    - **Note** -- this is a middleware call that takes a parameter, meaning your middleware method must be "curried"
  - Read the value of the `Bearer` Token in the `authorization` header
  - Invoke a method in the user model to check that the user's role has the permission called for
  - If the user has the capability, use `next()` to continue on to the actual route handler
  - If not, the middleware should invoke the error handler by calling `next()` with an error

### Users Model

Declare, in your users model, an object or a `set()` that declares the roles we must support, and a list of capabilities that each role supports. You'll use this as the mechanism to validate users.

We'll need a new method in the Users model to check the users permission against the capability the middleware is asking for.

- Create a new method, perhaps called `.can(permission)` that will accept a capability
  - Validate this against the permissions on the user, granted by the Role they are assigned to
  - Otherwise, return an error

### Stretch Goal

Implement your ACL using a separate model called "roles" populated as a **virtual field** in the users table

- If you are going to use a virtual join...
  - You will need to create, roles and capabilities permissions in a new collection called 'roles' in  your mongoose database before anything will work properly
  - There are a few ways to do this
    - Create a route that lets you create a role (similar to a POST in the API) and create them one at a time
    - Create a route that builds the roles collection using an array
    - Manually create records in the mongo database from the CLI

### Testing

You will need to seed your database with multiple users, each with unique "roles" that match those you've created in your users model. Your users model has a "role" column declared already, so create users that now have values in that field ('user', 'admin', etc) to match your role definitions.

Then, as you're testing your system, you can login as each user, and then use the returned token to try and then hit the different routes. As each user type, you should be able to hit some of the routes, but be denied others, based on your role setup.

- **httpie**: http post :3000/secret "Authorization:Bearer TOKENSTRING"
- **Postman** or **Insomnia**:  Set authorization header with Bearer TOKENSTRING"
- Chrome directly, using the Headers extension

For your automated tests:

- Add test coverage to the auth tests to assert that each user type has the correct permissions
- Each user type can only see (i.e. get a 200 response) from routes that their capabilities allow them to

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 3 (AUTH) / ACL" Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - First login with a username and password
  - Then, you should see buttons that would invoke each of the routes described above.
  - Based on your role, each button will give you a good or a bad response.

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
