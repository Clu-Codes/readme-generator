// TODO: Include packages needed for this application
//ßconst { writeFile } = require('./src/generateReadMe.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const mockData = {
//     title: 'The Greatest Test ReadMe',
//     description: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
//     headers: ['Installation', 'Usage', 'License', 'Contributors', 'Tests'],
//     installation: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
//     usage: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
//     license: 'MIT',
//     contributors: 'Big thanks to Clu-Codes',
//     test: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.'
// }
// =================================================
// UNCOMMENT THIS WHEN YOU WANT TO RUN LIVE VERSION
// =================================================
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
        name: 'table',
        message: 'Do you want to enter a table of contents for this application? (Helpful for long Readmes)',
        default: true
    },
    {
        type: 'checkbox',
        name: 'headers',
        choices: ['Installation', 'Usage', 'License', 'Contributors', 'Tests'],
        when: (response) => response.table === true
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
        type: 'list',
        name: 'license',
        message: 'What is the license of your application?',
        choices: ['GNU/GPL', 'MIT', 'Creative Commons'],
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Do you want to add a way for others to contribute to this project?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can developers contribute to this project?',
        when: (answer) => answer.confirmContributing === true
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
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github name.',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Nothing was entered. Please enter the name of your Github.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please share you email for others to reach out to you about your project.',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Nothing was entered. Please enter your email for others to contact you.')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


// Mock Function
// var mockFunc = () => {
//     console.log(mockData);
//     const readMock = generateMarkdown(mockData);
//     // console.log(JSON.stringify(mockData));
//      return readMock;
// };

// mockFunc();

const askUser = () => {
    inquirer.prompt(questions)
    .then(responseData => {
        console.log(responseData);
    writeToFile('./dist/readme.md', generateMarkdown(responseData));
        // return generateMarkdown(responseData);
    });
};

askUser();


// Or
fs.writeFileSync('./dist/readme.md', 'Hey there!');

// const writeFile = readContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/readme.md', readContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve({
//                     ok: true,
//                     message: 'ReadMe Created!'
//                 });
//             };
//         });
//     })
    
// }

// writeFile(mockFunc);
// ================================================
// UNCOMMENT THIS WHEN YOU WANT TO RUN LIVE VERSION
// ================================================
    
        
   