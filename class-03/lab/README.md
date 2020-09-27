# LAB: Data Modeling & NoSQL Databases

Notesy Phase 3: Continue working on a multi-day build of a command-line (Terminal-based) note taking application.

In this lab, we'll be using a database to save our notes (persistence). You will use the Mongo NoSQL database with a Mongoose Schema and Data Model to implement CRUD functionality to your note taking application

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'mongo' and continue to work in your 'notes' repository.

Your app needs a new dependency today: **mongoose**

- `npm i mongoose`
- Remember to start your mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Business Requirements

Refer to the [Notesy Overview](../../apps-and-libraries/notesy/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

We will be extending the functionality of the notes application by adding a persistence layer to allow users to save notes to a database, organize them into categories, view, and delete them.

- As a user, I want my notes to be saved in a database so that I can retrieve them later.
- As a user, I want to categorize my notes so that I can more easily find them.
- As a user, I want to be able to see a list of my notes so that I can manage them.
- As a user, I want to be able to delete a note

### For Example

- When a user adds a new note, **save it to the database**
  - i.e. `node notes.js -add "This is fun" --category school
  - The application should display a confirmation message
  - `note saved This is fun`

- Users should be able to list notes from the database
  - All Notes: `node notes.js --list`
  - Notes in a category: `node notes.js --list school`

    ```bash
    apps/notesy $ node notes.js --list

    Do your homework
    Category: school  ID: 5eab5d440caea5493833c65f
    --------------------------------------------------
    Drive carefully
    Category: life  ID: 5eab5d609dbdbb494bc70c21
    --------------------------------------------------
    ```

- Users should be able to delete a single note
  - Send the --delete argument, with the id of the note to delete

    ```bash
    node notes.js --delete 5eab650143bfc84e595b8eaa`
    Deleted Note 5eab650143bfc84e595b8eaa
    ```

## Technical Requirements / Notes

### Create a Mongoose Schema called `notes`

- The `notes` schema should 2 properties
  - text (string, required)
  - category (string, required)
- If you want to store (or ask for) more information
  - Ensure that add a new property and rules for it in your schema
  - Alter (possibly) your input class to support new command line arguments

### Add "CRUD" functionality to the `notes.js` class

- Bring in `mongoose` as a library
- Create a new method for each of the allowed commands
  - Based on the payload of the command, perform the appropriate action using Mongoose methods and your notes schema
  - `add()`
    - Should do a .save() of a new note object with the note and the category
  - `delete()`
    - Should delete a record by the ID
  - `list()`
    - Should do a find of all notes, perhaps with a category if it was specified by the user

### Testing

Extend your tests on the "notes" library to assert that it is now saving to the database correctly

- You'll need the `supergoose` library to "mock" mongo (so you don't save test data to your real database)
- Test that after an `add()`:
  - The schema returned you an object with an ID
  - Assert that a `schema.find({id})` can see the directly record in the database
- Test that after doing a `delete()` that you can no longer see the note in a `list()`
  - Assert that you can do a `schema.find({id})` and see that the record is no longer in the database
- Test that after the user performs a `--list` action that the expected records are returned to the method.

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
