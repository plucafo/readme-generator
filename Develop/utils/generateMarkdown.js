const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeFileSync("README.md", readmeContent);
    console.log("README.md generated successfully!");
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${data.description}
`;
}

module.exports = generateMarkdown;
