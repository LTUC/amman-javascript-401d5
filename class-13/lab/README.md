# LAB: Bearer Authorization

Authentication Server Phase 3: Token (Bearer) Authentication

At this point, our `auth-server` is able to handle Basic Authentication (user provides a username + password) and OAuth (user authenticates through a 3rd party). When a "good" login happens, the user is considered to be "authenticated" and our auth-server generates a JWT signed "Token" which is returned to the application

We will now be using that Token to re-authenticate users to shield access to any route that requires a valid login to access.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

1. Continue working in your `auth-server` repository, in a new branch called `class-13`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In this phase, the new requirement is that any user with a valid token (retrieved from either Basic Authentication or OAuth) is able to use that token to login to the system and potentially access protected routes

Today's **new** user stories:

- As a user, I want to present my token instead of my username and password so that I can access protected routes more securely
- As a developer, I want to protect any route on my server by requiring a valid token to access it
- As a developer, I want to create and manage secure tokens so that my users information will be secure

> **Note:** All previous requirements and user stories are still required. This Phase is intended to add functionality to our existing authentication server.

## Technical Requirements / Notes

In Phase 3, we will need to implement a new user/data flow

1. Add middleware to any route we want to require a valid user account in order to access to access
1. Parse and Validate the presented token, if any, from the request header
1. If the token is valid and the user is legitimate, grant access to the route handler
   - If not - return an error message and deny access

Noted here are the relevant changes you'll need to make to your server to complete Phase 3:

### "Protect" routes by restricting access without a valid token.

As the purpose behind authentication is to restrict access to our system to valid users, let's begin by creating a route on the server that we can use to prove our system will work on a larger scale. If we can prove that we can protect one route, we can protect any route the same way.

1. Create a new module called `extra-routes.js` in your main server folder and import it into your server
   - This will serve to house routes used for testing purposes
   - *we don't want test routes to be a part of our actual auth module*
1. In the new route module, create a new route called `/secret` in your server
1. Wire this route to use **bearerToken** middleware to potentially restrict access
   `router.get('/secret', bearerMiddleware, (req,res) => {} );`

> Note: until you create the bearerMiddleware module itself, this route will not work.

### BearerToken Middleware Module

Once we have a route (or more) that we'd like to restrict access to, implement the actual middleware method that'll take care of that logic for you.

1. Create a new middleware module called `bearer-auth.js` in your auth module's middleware folder
1. This should be required by new `extra-routes` router and attached inline to the `/secret` route

- Implement simple Bearer Authentication within your Auth server
- Add additional security measures to your token validation system.

  - This middleware will need to do the following:
    - Read the value of the `Bearer` Token in the `authorization` header
    - Invoke the User model to validate the token
    - Retrieve the user's account information from the Provider
    - If the user is valid, use `next()` to continue on to the actual route handler
    - If not, the middleware should invoke the error handler by calling `next()` with an error

### Users Model

We'll need a new method in the Users model to validate the token that the middleware has passed in. Since we created that token when the user first logged in, we simply now need to parse it with the same secret.

- Create a new method that will accept a token
  - Use the JWT library to validate it with the secret
  - If it's valid look up the user by the id in the token and return it
  - Otherwise, return an error

### Add additional security to the core bearer authorization system...

Once you have the basic system operational, where you can login, get a token, and then use that token to get to a restricted route, it's time to examine the security of that token. As it stands, it's a token with the user ID that lasts forever. It's easy to see inside, and it doesn't expire

#### Add a minimum of 2 additional security measures to your token validation system

- Implement any 2 of these security measures, or any other measure that you can think of or have researched. Use a configuration option for these (i.e. an env setting) so that your system can handle multiple authorization schemes and easily turn them off/on

- Some ideas:
  - Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
  - Add support for the creation and usage of 'single-use' JWTs
    - With every authenticated access, re-send a new JWT token as a cookie or header
    - Disable those that you've already authenticated
  - Implement Sessions
    - Rather than store a user's information in the token, create a "session" with an "id"
      - On the server, store lookup information in a session model using that ID
      - Sessions should timeout or be invalidated in some automated fashion
  - Add an additional layer of encryption

### Testing

To test your routes manually, you'll need to first login with a valid user to get a token, and then use httpie or postman to hit the routes using a Bearer Token

- **httpie**: http post :3000/secret "Authorization:Bearer TOKENSTRING"
- **Postman** or **Insomnia**:  Set authorization header with Bearer TOKENSTRING"
- Chrome directly, using the Headers extension

For your automated tests:

- Add test coverage to the auth tests to assert that:
  - given a good token user is able to "log in"
  - Tokens can optionally be expired
  - Expired tokens do not allow a user to login

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "Module 3 (AUTH) / Bearer Auth" Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - First login with a username and password
  - Then, assuming you see a button, click it to invoke the `/secret` route
  - If your lab is working, this app will show the content your secret route sends in the response

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
