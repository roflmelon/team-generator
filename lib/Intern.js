const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, name, email, schoolName) {
    super(id, name, email);
    this.schoolName = schoolName;
    this.role = 'Intern';
  }
  getSchool() {
    return `School: ${this.schoolName}`;
  }
  //overrides the one in employee and return "intern"
  getRole() {
    return this.role;
  }
}

module.exports = Intern;
