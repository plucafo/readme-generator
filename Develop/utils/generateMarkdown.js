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
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
# ${data.title}
 
## Description

${data.description}

## Table of Contents

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributing](#Contributing)

- [Tests](#Tests)

- [Questions](#Questions)

## Installation

To install the app placeholder text to be replaced later.

## Usage

To use the app placeholder text to be replaced later.

## License

This is where the license will be displayed

## Contributing

To contribute to the app placeholder text that will be replaced later

## Tests

To test the app placeholder text to be replaced later.

## Questions

You can reach out with any questions you have:

github profile: [${data.github}](https://github.com/${data.github})

email: [${data.email}](emailto:${data.email})

`;
}

module.exports = generateMarkdown;
