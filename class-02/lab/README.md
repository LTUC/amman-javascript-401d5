# LAB: Classes, Inheritance, Functional Programming

Notesy Phase 2: Continue working on a multi-day build of a command-line (Terminal-based) note taking application.

In this lab, we'll be implementing phase 2 of a 4-part build of an application called `Notesy`. Today, the goal is to focus on upgrading the internal wiring of the application using some more advanced engineering techniques, as well as repeatable testing.

You will be doing your first "refactoring", migrating from standard constructor function exported from the notes and input node modules into ES6 Classes, while keeping the functionality (and the interface) exactly the same.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

### Getting Started

> Building off of your previous day's branch, create a new branch for today called 'classes' and continue to work in your 'notes' repository.

## Business Requirements

Refer to the [Notesy Overview](../../apps-and-libraries/notesy/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

From a business/user perspective, the requirements remain unchanged from the previous lab:

Our notes application will accept and validate the user's input, and confirm that the note was valid.

- As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
- As a user, I expect that the application will confirm my intent.

## Technical Requirements / Notes

From a technical perspective, we will be modifying our code using modern techniques (Classes) and improving the quality through automated testing.

- Refactor your previous work by re-implementing both the `Input` and `Notes` library modules as proper ES6 Classes
  - Previously, these were written using **Constructor Functions**, with **Prototype** instance methods
  - Ensure that your client (the main application) works the same
    - i.e. `let input = new Input()` should work the same after your refactor
- Using the `jest` framework, write tests to assert that your application is working correctly.
  - As noted in the Application Requirements document, tests must be in the `__tests__` folder
    - Make sure that your `package.json` file is setup with a `test` script
      - You will need this to be able to run `npm test` on your machine
      - GitHub Actions will also use that command to run your tests in the cloud
  - For the `input` module tests, you will need to assert the following:
    - Given good input:
      - The Class' `valid()` method returns true
      - The input module creates a new instance with both `action` and `payload` properties
    - Given invalid input:
      - The Class' `valid()` method returns false
    - HINT: You will need to **mock** the minimist library so you can fake a user providing good and bad input
  - For the `notes` module tests, you will need to assert the following:
    - Nothing is logged to the console if there was no command given
    - If the command (add) and data (the note) were both valid, assert that the console shows the output.
      - HINT: You will need to use a [`spy`](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname) to check that `console.log` was properly called

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
