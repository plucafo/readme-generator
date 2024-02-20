// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description:",
  },
  // Add more prompts for other information you want to include in the README
];

function promptUser() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('../readme-generator/README.md', data);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);
      fs.writeFileSync(fileName, readmeContent);
      console.log("README.md generated successfully!");
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
