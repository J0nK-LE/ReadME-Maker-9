// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

let projectTitle;
let projectDescription;
let installation;
let usage;
let license;
let contributions;
let tests;
let contactMe;
let repoName;
let gitName;



// readmeText = `

// <h1 align="center">${projectTitle}</h1>

// <div align="center">

// ## About The Project

// ${projectDescription}

// Link to repo - [https://github.com/${gitName}/${repoName}](https://github.com/${gitName}/${repoName})

// Link to deployed  - [https://${gitName}.github.io/${repoName}](https://${gitName}.github.io/${repoName})
// </div>


// ## Table of Contents
// <summary>Table of Contents</summary>
// <ol>
//   <li><a href="#about-the-project">About The Project</a></li>
//   <li><a href="#Installation">Installation</a></li>
//   <li><a href="#Usage">Usage</a></li>
//   <li><a href="#License">License</a></li>
//   <li><a href="#Contributing">Contributing</a></li>
//   <li><a href="#Tests">Tests</a></li>
//   <li><a href="#Questions">Questions</a></li>
// </ol>

// ## Installation
// ${installation}

// ## Usage
// ${usage}

// ## License
// ${license}

// ## Contributions
// ${contributions}

// ## Tests
// ${tests}

// ## Questions
// Email - ${contactMe}

// GitHub - [https://github.com/${gitName}](https://github.com/${gitName})

// `

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Write a short description of your project: ',
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
    choices: ['MIT', 'Apache', 'GNU', 'IBM', 'ISC', 'Mozilla']
  },
  {
    type: 'input',
    message: 'Guidelines to contribute to this project:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'How are tests run?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Email to receive any questions:',
    name: 'contactMe',
  },

];

// TODO: Create a function to write README file

// fs.writeFile("ReadMe.md", readmeText, function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('ReadMe Saved')
//   }

// })


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response)

      let readmeText = `<h1 align="center">${response.projectTitle}</h1>
<div align="center">

## About The Project
${response.projectDescription}

Link to repo - [https://github.com/${response.gitName}/${response.repoName}](https://github.com/${response.gitName}/${response.repoName})

Link to deployed  - [https://${response.gitName}.github.io/${response.repoName}](https://${response.gitName}.github.io/${response.repoName})

[![License][${response.license}-bdg]][${response.license}-url]</div>

## Table of Contents
<summary>Table of Contents</summary>
     <ol>
       <li><a href="#about-the-project">About The Project</a></li>
       <li><a href="#installation">Installation</a></li>
       <li><a href="#usage">Usage</a></li>
       <li><a href="#license">License</a></li>
       <li><a href="#contributing">Contributing</a></li>
       <li><a href="#tests">Tests</a></li>
       <li><a href="#questions">Questions</a></li>
     </ol>

## Installation
${response.installation}
## Usage
${response.usage}
## License
Uses the [${response.license} license][${response.license}-url]
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
Email - ${response.contactMe}

GitHub - [https://github.com/${response.gitName}](https://github.com/${response.gitName})


[MIT-bdg]:https://img.shields.io/badge/License-MIT-yellow.svg
[MIT-url]:https://opensource.org/licenses/MIT
[Apache-bdg]:https://img.shields.io/badge/License-Apache_2.0-blue.svg
[Apache-url]:https://opensource.org/licenses/Apache-2.0
[GNU-bdg]:https://img.shields.io/badge/License-GPLv3-blue.svg
[GNU-url]:https://www.gnu.org/licenses/gpl-3.0
[IBM-bdg]:https://img.shields.io/badge/License-IPL_1.0-blue.svg
[IBM-url]:https://opensource.org/licenses/IPL-1.0
[ISC-bdg]:https://img.shields.io/badge/License-ISC-blue.svg
[ISC-url]:https://opensource.org/licenses/ISC
[Mozilla-bdg]:https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg
[Mozilla-url]:https://opensource.org/licenses/MPL-2.0
`
      fs.writeFile("ReadMe.md", readmeText, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log('ReadMe Saved')
        }

      })


    });

}

// Function call to initialize app
init();
