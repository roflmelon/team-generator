const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }
  //overrides the one in employee and return "manager"
  getOfficeNumber() {
    return `Office Number: ${this.officeNumber}`;
  }
  getRole() {
    // returns manager
    return this.role;
  }
}

module.exports = Manager;
