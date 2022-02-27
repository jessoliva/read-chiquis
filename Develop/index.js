// include fs
const fs = require("fs");
// include inquirer
const inquirer = require('inquirer');

// array of questions for user input
const questions = [
   'Enter project title: ', 
   'Enter description for project: ', 
   'Enter installation instructions: ',
   'Enter usage information: ', 
   'Enter contribution guidelines: ', 
   'Enter test instructions: ',
   'Select a license: ', 
   'Enter full name for license copyright: ',
   'Enter credits: ',
   'Enter GitHub Username: ',
   'Enter Email: '
];

// array of licenses
const licenses = [
   'MIT',
   'Apache-2.0',
   'Boost',
];

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// questions for user
const init = () => {

   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: questions[0],
         validate: nameInput => { // ensure a project title is entered
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter a title for your project!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'description',
         message: questions[1],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter a description for your project!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'installation',
         message: questions[2],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter installation instructions for your project!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'usage',
         message: questions[3],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter usage information for your project!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'contribution',
         message: questions[4],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter information on how to contribute!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'test',
         message: questions[5],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter test instructions!');
               return false;
            }
        }
      },
      {
         type: 'list',
         name: 'license',
         message: questions[6],
         choices: licenses,
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please select a license!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'name',
         message: questions[7],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please select a license!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'name',
         message: questions[8],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter anyone you want to give credit to!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'github',
         message: questions[9],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter GitHub username!');
               return false;
            }
        }
      },
      {
         type: 'input',
         name: 'email',
         message: questions[10],
         validate: nameInput => { 
            if (nameInput) {
               return true;
            } else {
               console.log('Please enter email!');
               return false;
            }
        }
      },
   ])
   .then(projectData => console.log(projectData))
}
init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// // TODO: Create an array of questions for user input
// const questions = [
//    {
//       question: 'Enter project title: ',
//       name: 'title'
//    },
//    {
//       question: 'Enter description for project: ',
//       name: 'description'
//    },
//    {
//       question: 'Enter usage information: ',
//       name: 'usage'
//    },
//    {
//       question: 'Enter contribution guidelines: ', 
//       name: 'contribution'
//    },
//    {
//       question: 'Enter test instructions: ',
//       name: 'instructions'
//    },
//    {
//       question: 'Select a license: ',
//       name: 'license'
//    },
//    {
//       question: 'Enter GitHub Username: ',
//       name: 'github'
//    },
//    {
//       question: 'Enter Email: ',
//       name: 'email'
//    },
// ];

// // questions for user
// const init = () => {



//    return inquirer.prompt([

      
      
//       {
//          type: 'input',
//          name: 'title',
//          message: questions[0],
//          validate: titleInput => { // ensure a project title is entered
//             if (titleInput) {
//                return true;
//             } else {
//                console.log('Please enter a title for your project!');
//                return false;
//             }
//         }
//       },
//    ])

// }
// init();
