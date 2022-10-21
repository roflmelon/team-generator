class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return `<a href="mailto:${this.email}">${this.email}</a>`;
  }
  getRole() {
    return 'N/A';
  }
}

module.exports = Employee;
