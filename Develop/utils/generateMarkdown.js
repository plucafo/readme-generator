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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
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

${renderLicenseSection(data.includeLicense)}

${renderLicenseLink(data.license)}

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
