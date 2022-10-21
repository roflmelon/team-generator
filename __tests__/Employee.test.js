const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Instantiation', () => {
    it('Should create the employee object', () => {
      const employee = new Employee(1, 'bob', 'email@email.com');

      expect(employee).toEqual({
        id: 1,
        name: 'bob',
        email: 'email@email.com',
      });
    });
  });
  describe('Methods', () => {
    it(`getName() method should return the object's name properties`, () => {
      const employee = new Employee();
      employee.name = 'bob';

      expect(employee.getName()).toEqual('bob');
    });

    it(`getId() method should return the object's id properties`, () => {
      const employee = new Employee();
      employee.id = 22;

      expect(employee.getId()).toEqual(22);
    });

    it(`getEmail() method should return the object's email properties within a HTML <a> tag string`, () => {
      const employee = new Employee();
      employee.email = 'bob@email.com';

      expect(employee.getEmail()).toEqual(
        '<a href="mailto:bob@email.com">bob@email.com</a>'
      );
    });

    it(`getRole() method should return N/A`, () => {
      const employee = new Employee();

      expect(employee.getRole()).toEqual('N/A');
    });
  });
});
