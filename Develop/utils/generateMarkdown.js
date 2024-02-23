// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)";
    case "MIT":
      return "[MIT](https://choosealicense.com/licenses/mit/)";
    case "GNU":
      return "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? "## License" : "";
}

function renderLicenseTableOfContents(license) {
  return license ? "- [License](#license)" : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
# ${data.title}
 
## Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

${renderLicenseTableOfContents(data.includeLicense)}

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install the application:

1. Clone the repository \`git clone git@github.com:${data.github}/${data.githubRepo}.git\`
2. Navigate to the project directory \`cd ./${data.githubRepo}\`
3. Install dependencies \`npm i inquirer@v8.2.4\`
4. Run the application \`node index.js\`

## Usage

To use the README generator app type \`node index.js\` in your command line interface

${renderLicenseSection(data.includeLicense)}

${renderLicenseLink(data.license)}

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Tests

***UPDATE*** this section with your apps specific testing instructions

## Questions

You can reach out with any questions you have:

Github Profile: [${data.github}](https://github.com/${data.github})

Link to Repo: [${data.githubRepo}](https://github.com/${data.github}/${data.githubRepo})

Email: [${data.email}](emailto:${data.email})

`;
}

module.exports = generateMarkdown;
