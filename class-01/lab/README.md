# LAB: Node Ecosystem

Time to get hands on with Node.js development! Today, you'll begin a multi-day build of a command-line (Terminal-based) note taking application.

This begins the first of a 4-part build of an application called `Notesy`. Today, our goal will be to get the basic wiring of the application in place, ensuring that our notes app can receive user input (a note) and provide some basic output in response.

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository for this project, called `notes` and work in a branch called `class-01`, created from `master`
1. Following completion of this assignment, you may merge this branch back into your `master` branch.

## Business Requirements

Refer to the [Notesy Overview](../../apps-and-libraries/notesy/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

For the first phase, our notes application will accept and validate the user's input, and confirm that the note was valid.

- As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
- As a user, I expect that the application will confirm my intent.

### For Example:

```bash
node nodes.js --add "This is a really cool thing that I wanted to remember for later"
```

The system should respond with an on-screen confirmation message as follows

```bash
Adding Note: This is a really cool thing that I wanted to remember for later
```

## Technical Requirements / Notes

- Write this application in JavaScript as a Node.js application
- The application must be able to parse command line arguments
  - e.g.
    - The `--add` (or `-a`) is used to tell your application that the user wants to ADD a new note
    - All of the text following the `-a`, within quotes is the text of the note itself
- If the user doesn't provide a valid argument (`-a`), show them an error
- If the user specifies the flag, but doesn't provide any text, show them an error
- Otherwise, display a confirmation of the note text that they specified

Use the following files/structure

### `index.js` - Your application's "entry point"

- Requires the library files you will be writing (input, notes)
- Instantiates an instance of an "Input" parser module
  - Parses the command line input and returns the command and data
- Passes the command to the Notes library, which executes the command

### `lib/input.js`

- Exports a constructor function
- Uses `minimist` (or any other node/npm library of your choosing) to read command line arguments
- On instantiation, evaluates and validates the input
  - Is the command (i.e. '--add') a valid command
  - Is there data associated with the command
- Returns an instance containing the **action** to perform and the **payload** for the action
  - for example:

      ```javascript
        {
          action: "add";
          payload: "This is a really cool thing that I wanted to remember for later"
        }
      ```

### `lib/notes.js`

- Exports a constructor function
- Has a prototype method called `execute()` that executes the correct operation, given the above object
  - How will you use that object to run the correct method?
    - You can predict that `add` won't be the only action we're going to have to handle...
- Write a prototype method called `add()` that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the `add` command is executed

### Assignment Submission Instructions

In Canvas, submit a link to your completed `README.md` file from today's working branch according to standards.

 Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for a review of the complete lab submission process and expectations
