const inquirer = require('inquirer');
const generateReadme = require('./template.js');

// Data from user input
const readmePrompt = projectData => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter project title (required)',
        validate: title => {
          if (title) {
            return true;
          } else {
            console.log('Please enter a project title:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter project description (required)',
        validate: description => {
          if (description) {
            return true;
          } else {
            console.log('Please enter a project description:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Explain how users use this application'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: [
          'MIT',
          'Apache',
          'GPL'
          ]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter github username'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email to contact'
      }
    ]);
  };
