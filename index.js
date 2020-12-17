// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your product (What does it do, How does it work, etc.).',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('No description was entered. Please describe your product (What does it do, How does it work, etc.')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'contents',
        message: 'Do you want to enter a table of contents for this application? (Helpful for long Readmes)',
        default: true
    },
    {
        type: 'checkbox',
        name: 'headers',
        choices: ['Installation', 'Usage', 'License', 'Contributors', 'Tests'],
        when: (response) => response.contents === true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your application.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Nothing was entered. Please explain how to install your application.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your application.',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Nothing was entered. Please explain the usage of your application.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license of your application?',
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Nothing was entered. Please detail the license status of your application.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter GitHub profile names of the contributors for this application.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("No Github was entered. Please share a Github link for this project")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'test',
        message: 'Do you have a test example for this project?.',
        default: false
    },
    {
        type: 'input',
        name: 'example',
        message: 'Enter your test example',
        when: (answer) => answer.test === true
    },
];

// TODO: Create a function to write README file
// Why are they passing two arguments here? I don't understand what the purpose is? I am going to need to do a fs.writeFile, which is going to contain the destination, data object, and the err function. 
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const askUser = () => {
    inquirer.prompt(questions);
};
askUser()
    .then(responseData => {
        console.log(responseData);
        // return generateMarkdown(responseData);
    })