// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseSection } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'What is the title of the project?', 'Provide a description for the project: ',
    'Provide installation instructions: ', 'Provide usage information: ', 'Provide contribution guidelines: ', 'Provide testing instructions: '
];

const tableOfCon = "# Table of Contents \n1. [Description](#description)\n2. [Installation](#installation)\n3. " +
    "[Usage](#usage)\n4. [Contributions](Contributions)\n5. [Testing](#testing)\n";

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const name = "## Author: \n" + JSON.stringify(data.name).replace(/['"]+/g, '') + "\n";
    const title = JSON.stringify(data.title).replace(/['"]+/g, '') + "\n";
    const description = "## Description: \n" + JSON.stringify(data.description).replace(/['"]+/g, '') + "\n";
    const install = "## Installation: \n" + JSON.stringify(data.install).replace(/['"]+/g, '') + "\n";
    const usage = "## Usage: \n" + JSON.stringify(data.usage).replace(/['"]+/g, '') + "\n";
    const contribute = "## Contributions: \n" + JSON.stringify(data.contribute).replace(/['"]+/g, '') + "\n";
    const test = "## Testing: \n" + JSON.stringify(data.test).replace(/['"]+/g, '') + "\n";
    const badge = renderLicenseSection(data.license) + "\n";
    const text = "# " + title + "\n" + "------\n" + name + "\n" + tableOfCon + "\n" + badge + "\n" + description + "\n" + install + "\n" + usage + "\n" + contribute +
        "\n" + test;
    fs.appendFile(fileName + '.md', text, function(err) {
        if (err) throw err;
        console.log("README created!")
    });
}


//Function to prompt the user for input
function getAnswers() {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: questions[0],
    }, {
        name: 'title',
        type: 'input',
        message: questions[1]
    }, {
        name: 'description',
        type: 'input',
        message: questions[2]
    }, {
        name: 'install',
        type: 'input',
        message: questions[3]
    }, {
        name: 'usage',
        type: 'input',
        message: questions[4]
    }, {
        name: 'contribute',
        type: 'input',
        message: questions[5]
    }, {
        name: 'test',
        type: 'input',
        message: questions[6]
    }, {
        name: 'license',
        type: 'list',
        message: 'Please select a license: ',
        choices: ['GNU GPLv3', 'MIT', 'ISC', 'Apache License 2.0']
    }]).then(answer => {
        writeToFile(generateMarkdown(answer), answer);
    })
}

// TODO: Create a function to initialize app
function init() {
    getAnswers();
}

// Function call to initialize app
init();