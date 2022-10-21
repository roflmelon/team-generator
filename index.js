const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/Questions');
const generateHtml = require('./helper/generateHtml');
const generateCards = require('./helper/generateCards');
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

//command line
//takes employee info
//based on input, creates appropriate object
//takes input and generates new index.html page

inquirer.prompt(questions).then((response) => {
  let allCards = ``;
  let manager = new Manager(
    response.id,
    response.name,
    response.email,
    response.officeNumber
  );

  let allStaff = [manager];

  for (let i = 0; i < response.employees.length; i++) {
    if (response.employees[i].role === 'Intern') {
      allStaff.push(
        new Intern(
          response.employees[i].id,
          response.employees[i].name,
          response.employees[i].email,
          response.employees[i].school
        )
      );
    } else {
      allStaff.push(
        new Engineer(
          response.employees[i].id,
          response.employees[i].name,
          response.employees[i].email,
          response.employees[i].github
        )
      );
    }
  }

  console.log(allStaff);
  for (let i = 0; i < allStaff.length; i++) {
    allCards += generateCards(allStaff[i]);
  }

  generateHtml(allCards);
});
