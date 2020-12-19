// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');
function renderLicenseBadge(license) {
  let userLicense = license;
  if (userLicense === 'Creative Commons') {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]`
  } else if (userLicense === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {(http://creativecommons.org/publicdomain/zero/1.0/)}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const tableTitle = (data) => {
  if (data.table) return `## Table of Contents`;
  return '';
}
const tableData = (data) => {
   const tableDataArr = data;

    let headerList = '';
    if (data) {
      tableDataArr.forEach(item => {
        headerList +=  `- [${item}](#${item})\n`
      });
    }
    return headerList
};
const confirmContribTitle = (data) => {
  if (data.confirmContributing) return `## Contributors`;
  return '';
};

const titleData = (data) => {
  let dataString = '';
   if (data) {
    dataString += data
   }
   return dataString
};

const confirmTest = (data) => {
  if (data.confirmTest) return `## Test`;
  return '';
};


function generateMarkdown(data) {
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

${tableTitle(data)}
${tableData(data.headers)}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is under the ${data.license} license.

${confirmContribTitle(data)}
${titleData(data.contributing)}

${confirmTest(data)}
${titleData(data.test)}
`;
}

module.exports = generateMarkdown;

