# LAB: Advanced Mongo/Mongoose

Notesy Phase 4: Continue working on a multi-day build of a command-line (Terminal-based) note taking application.

In this lab, we'll be refining our persistence layer by implementing a CRUD interface to our Mongoose Schema as a collection of data models.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'collection' and continue to work in your 'notes' repository.

## Business Requirements

Refer to the [Notesy Overview](../../apps-and-libraries/notesy/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

From a business/user perspective, the requirements remain unchanged from the previous lab

Users will be able to create and save notes to a database, organize them into categories, view, and delete them.

Upon completion of this phase, your Notesy application should be complete and ready for final delivery

## Technical Requirements / Notes

Although the requirements are the same as the previous lab, in this assignment you'll be refactoring the application as follows

- Create a notes "collection" through which you will perform CRUD operations with your notes mongoose schema.
- `model/notes-collection.js`
  - Requires the `notes-schema.js` module
  - Implement the following collection interface methods for CRUD operations
    - `get()`
    - `create()`
    - `update()`
    - `delete()`
  - Each method should invoke the proper mongoose method via your schema
  - Write a suite of tests, using TDD to get the tests and your model working in sync.
  - Use `@code-fellows/supergoose`
- Refactor your `lib/notes.js` module to save, list, delete notes using the collection interface rather than the schema/mongoose methods directly

### Stretch Goals

As this is the last build day for the **notes** application, finalize it.

- Write proper JSDoc formatted documentation for all of your functions and methods
- Achieve 100% test coverage
- Deploy your application to NPM, under your own organization
  - Add a proper 'bin' property in your `package.json`
    - `"bin": { "notes": "notes.js" }`
  - Add a correct 'shebang' line to the top of your notes.js file to make it executable
    `#!/usr/bin/env node`
  - Get your npmjs.org account setup, create an organization and then publish your module
    - <https://docs.npmjs.com/creating-and-publishing-scoped-public-packages>
  - Test it by installing it globally
    - i.e. `npm install -g @myapps/notes`
    - Run it `notes -a "test note" -c fun`

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
