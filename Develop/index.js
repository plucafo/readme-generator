// TODO: Include packages needed for this application
const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username:',
      },
      {
        type: 'list',
        name: 'color',
        message: 'Pick a color:',
        choices: ['Red', 'Green', 'Blue'],
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
        default: true,
      },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
