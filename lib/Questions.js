const {
  validateId,
  validateName,
  validateInput,
} = require('../helper/validate');

let questions = [
  {
    type: 'input',
    name: 'name',
    message: `What is the team manager's name?`,
    validate: validateName,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the team manager's ID number?`,
    validate: validateId,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the team manager's email?`,
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: `What is the team manager's office number?`,
    validate: validateInput,
  },
  {
    type: 'loop',
    name: 'employees',
    message: 'Add a new employee?',
    questions: [
      {
        type: 'list',
        name: 'role',
        message: 'Which role would you like to add?',
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter employee name:',
        validate: validateName,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id:',
        validate: validateId,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email:',
        validate: validateInput,
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
        when: (answer) => answer.role === 'Engineer',
        validate: validateInput,
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your school name?',
        when: (answer) => answer.role === 'Intern',
        validate: validateInput,
      },
    ],
  },
];

module.exports = questions;
