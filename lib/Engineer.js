const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(id, name, email, githubName) {
    super(id, name, email);
    this.githubName = githubName;
    this.role = 'Engineer';
  }
  getGithub() {
    return `GitHub: <a href="https://github.com/${this.githubName}">${this.githubName}</a>`;
  }
  //overrides the one in employee and return "engineer"
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
