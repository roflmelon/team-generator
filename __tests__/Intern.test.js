const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Instantiation', () => {
    it('Should create the Intern object', () => {
      const intern = new Intern(1, 'bob', 'email@email.com', 'school name');

      expect(intern).toEqual({
        id: 1,
        name: 'bob',
        email: 'email@email.com',
        schoolName: 'school name',
        role: 'Intern',
      });
    });
    it('Intern object should be an instance of Employee object', () => {
      const intern = new Intern(2, 'Dan', 'dan@email.com', 'dangithub');

      expect(intern instanceof Employee);
    });
  });
  describe('Methods', () => {
    it(`getSchool() method should return the intern's schoolName properties`, () => {
      const intern = new Intern();
      intern.schoolName = 'school name';

      expect(intern.getSchool()).toEqual('School: school name');
    });

    it(`getRole() method should return the intern's role properties`, () => {
      const intern = new Intern();

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
