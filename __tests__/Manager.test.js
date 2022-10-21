const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Instantiation', () => {
    it('Should create the Manager object', () => {
      const manager = new Manager(1, 'bob', 'email@email.com', 1);

      expect(manager).toEqual({
        id: 1,
        name: 'bob',
        email: 'email@email.com',
        officeNumber: 1,
        role: 'Manager',
      });
    });
    it('Manager object should be an instance of Employee object', () => {
      const manager = new Manager(2, 'Dan', 'dan@email.com', 1);

      expect(manager instanceof Employee);
    });
  });
  describe('Methods', () => {
    it(`getOfficeNumber() method should return the manager's officeNumber properties`, () => {
      const manager = new Manager();
      manager.officeNumber = 1;

      expect(manager.getOfficeNumber()).toEqual('Office Number: 1');
    });

    it(`getRole() method should return the manager's role properties`, () => {
      const manager = new Manager();

      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
