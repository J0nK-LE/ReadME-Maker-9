// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// function readmeText(){}

let projectTitle = "test";
let projectDescription = "test";
let installation = "test";
let usage = "test";
let license = "test";
let contributions = "test";
let tests = "test";
let contactMe = "test";
let repoName = "test";
let gitName = "test";



readmeText = `

<h1 align="center">${projectTitle}</h1>

<div align="center">

## About The Project

${projectDescription}

Link to repo - [https://github.com/${gitName}/${repoName}](https://github.com/${gitName}/${repoName})

Link to deployed  - [https://${gitName}.github.io/${repoName}](https://${gitName}.github.io/${repoName})
</div>
 

## Table of Contents
<summary>Table of Contents</summary>
<ol>
  <li><a href="#about-the-project">About The Project</a></li>
  <li><a href="#Installation">Installation</a></li>
  <li><a href="#Usage">Usage</a></li>
  <li><a href="#License">License</a></li>
  <li><a href="#Contributing">Contributing</a></li>
  <li><a href="#Tests">Tests</a></li>
  <li><a href="#Questions">Questions</a></li>
</ol>

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributions
${contributions}

## Tests
${tests}

## Questions
Email - ${contactMe}

GitHub - [https://github.com/${gitName}](https://github.com/${gitName})

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
    message: 'What is your GitHub username?',
    name: 'gitName',
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

fs.writeFile("ReadMe.md", readmeText, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('ReadMe Saved')
  }

})


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
