# LAB: TCP Server / Message Application

**CAPS Phase 2:** Continue working on a multi-day build of our delivery tracking system.

In this lab, we'll be moving away from a single application and creating separate applications for the drivers, stores, and a server that ties them all together.

As you can imagine, in the CAPS system the Vendors and the Drivers will each be on different computers and can't be using the same running application, so we'll need a way to keep everything in sync over the network.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'tcp' and continue to work in your 'caps' repository.

## Business Requirements

Refer to the [CAPS System Overview](../../apps-and-libraries/caps/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In Phase 2, we'll be spreading the functionality of our CAPS application into multiple applications, so that users on different computers and connections can continue to communicate in real time as packages are prepared, picked up, and delivered.

The core functionality we've already built remains the same. The difference in this phase is that we'll be using multiple applications to raise and listen for the events. The majority of the user stories remain unchanged, but there's a difference in **how** we deal with the events.

- As a vendor, I want to alert the system when I have a package to be picked up
- As a driver, I want to be notified when there is a package to be delivered
- As a driver, I want to alert the system when I have picked up a package and it is in transit
- As a driver, I want to alert the system when a package has been delivered
- As a vendor, I want to be notified when my package has been delivered

And as developers, here are some of the development stories that are relevant to the above

- **As a developer, I want to create a networked event driven system so that I can write code that responds to events originating from other computers**

## Technical Requirements / Notes

In order to create a "real world" delivery system where vendors, stores and our central server can all know the status of packages being delivered, we will create 3 separate applications that can run independently on any machine.

Create each of these in a separate folder within your repository, each with it's own `package.json` so that they can be independently distributed and started

Your console output while the applications are all running should look something like this:

<img src="./lab-17-output.png" width="800" align="center">

> Note: In a real world scenario, each of these applications would be in a separate repository, able to be separately installed. For our purposes, we'll be keeping them in a common repo, but separating them by folder for ease of working/grading

### CAPS Application Server

The Hub Server has one job -- accept all inbound events and data, validate them, and and then re-broadcast them to everyone except the sender. It doesn't perform any logic other than to ensure that the inbound events are properly formatted before it broadcasts them.

- Creates a pool of connected clients
- Accept inbound TCP connections on a declared port
- On new connections, add the client to the connection pool
- On incoming `data` from a client
  - Read and parse the incoming data/payload
  - Verify that the data is legitimate
    - Is it a JSON object with both an `event` and `payload` properties?
  - If the payload is ok, broadcast the raw data back out to each of the other connected clients

### Vendor Application

This application is intended to be run by store owners. As soon as they have a package ready for pickup/delivery, they will be sending an event to the hub server with the data describing the delivery. Additionally, the application needs to be listening to the server for other events. Store owners definitely want to know when their packages are picked up, and when they actually get delivered.

Application Workflow

- Use .env to set your store name
- Connect to the CAPS server
- Every 5 seconds, simulate a new customer order
  - Create an order object with your store name, order id, customer name, address
    - HINT: Have some fun by using the [faker](https://www.npmjs.com/package/faker) library to make up phony information
  - Create a message object with the following keys:
    - `event` - 'pickup'
    - `payload` - the order object you created in the above step
  - Write that message (as a string) to the CAPS server
- Listen for the `data` event coming in from the CAPS server
  - When data arrives, parse it (it should be JSON) and look for the `event` property
  - If the event is called `delivered`
    - Log "thank you for delivering `id`" to the console
  - Ignore any data that specifies a different event

### Driver Application

This application is intended to be run by delivery drivers in their vehicles. If the application is running, say on their phone, anytime a package is ready for pickup, they would get a notification. When they pickup the package, they might hit a button to let the system know that the package is in transit. And once they deliver the package to the customer, they could again hit a button that would let everyone (especially the store owner) know that the package was delivered.

Application Workflow

- Connect to the CAPS server
- Listen for the `data` event coming in from the CAPS server
  - When data arrives, parse it (it should be JSON) and look for the `event` property and begin processing...
  - If the event is called `pickup`
    - **Simulate picking up the package**
      - Wait 1 second
      - Log "picking up `id`" to the console
      - Create a message object with the following keys:
        - `event` - 'in-transit'
        - `payload` - the payload from the data object you just received
      - Write that message (as a string) to the CAPS server
    - **Simulate delivering the package**
      - Wait 3 seconds
      - Create a message object with the following keys:
        - `event` - 'delivered'
        - `payload` - the payload from the data object you just received
      - Write that message (as a string) to the CAPS server

### Notes

- You will need to start your servers up in the right order so that you can visually test things out.

1. `CAPS` - needs to be up so that it can accept and re-emit events
1. `vendor` - needs to have a running server to connect to, so that it can hear events
1. `driver` - also needs the server to be running and for vendors to be placing orders

### Testing

- Write tests around all of your units
- Test event handler function (not event triggers themselves)
- Use spies to help testing your logger methods (assert that console.log was called right)

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
