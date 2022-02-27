// include fs
const fs = require("fs");
// include inquirer
const inquirer = require('inquirer');

// import function from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js')

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
   'BSD 3-Clause License',
];

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// prompts for user
const init = () => {



   console.log(`
 =================
 For markdown syntax visit: https://www.markdownguide.org/cheat-sheet/
 
 For emojis visit: https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#phone
 =================
 `);

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
         name: 'tests',
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
         name: 'credits',
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
}

// function to write README file
function writeToFile(markdownContent) {

   // Inside the () for the new Promise, we provide it with a function that accepts two functions as parameters: resolve and reject
   // From there, we can write whatever asynchronous functionality we need to execute, 
   // and run the resolve() function when the code executes successfully or reject() when it fails to execute successfully
   return new Promise((resolve, reject) => {
      // run this function
      // provides ability to write the markdown code template to a file
      fs.writeFile('./dist/README.md', markdownContent, err => {
         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
         if (err) {
           reject(err);
           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
           return;
         }
         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
         resolve({
           ok: true,
           message: 'README.md created!'
         });
      });
   });
};

init()
   .then(projectData => {
      console.log(projectData);
      return generateMarkdown(projectData);
   })
   .then(pageREADME => {
      return writeToFile(pageREADME);
   })
   .then(writeFileResponse => {
      console.log(writeFileResponse);
   })
   .catch(err => {
      console.log(err);
   });