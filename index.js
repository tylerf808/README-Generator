// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'What is the title of the project?', 'Provide a description for the project: ',
    'Provide installation instructions: ', 'Provide usage information: ', 'Provide contribution guidelines: ', 'Provide testing instructions: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName + '.md', data, err => {
        if (err) {
            console.error(err)
            return
        }
    });
}

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
    }]).then(answer => {

    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();