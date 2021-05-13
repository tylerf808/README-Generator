// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseSection } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'What is the title of the project?', 'Provide a description for the project: ',
    'Provide installation instructions: ', 'Provide usage information: ', 'Provide contribution guidelines: ', 'Provide testing instructions: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const name = JSON.stringify(data.name).replace(/['"]+/g, '');
    const badge = renderLicenseSection(data.license)
    const text = (name + badge)
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