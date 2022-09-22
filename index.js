// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// function readmeText(){}

readMeResults += `
#${projectTitle}

## About The Project
${projectDescription}

## Table of Contents

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributions
${contributions}

## tests
${tests}

## Contact Me
${contactMe}

`

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Write a short description of your project',
        name: 'projectDescription',
      },
      {
        type: 'input',
        message: 'What is the name of your Repo?',
        name: 'repoName',
      },
      {
        type: 'confirm',
        message: 'Is your Repo deployed?',
        name: 'deployed',
      },
      {
        type: 'confirm',
        message: 'Would you like a table of contents?',
        name: 'tableOfContents',
      },
      {
        type: 'input',
        message: 'What is needed for installation?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the uses of this project?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What licenses are used?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU', 'ISC']
      },
      {
        type: 'input',
        message: 'Who contributed to the project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'How are tests run?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Email to receive any questions:',
        name: 'contactME',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
