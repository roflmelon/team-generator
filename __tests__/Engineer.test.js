const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Instantiation', () => {
    it('Should create the Engineer object', () => {
      const engineer = new Engineer(1, 'bob', 'email@email.com', 'bobgithub');

      expect(engineer).toEqual({
        id: 1,
        name: 'bob',
        email: 'email@email.com',
        githubName: 'bobgithub',
        role: 'Engineer',
      });
    });
    it('Engineer object should be an instance of Employee object', () => {
      const engineer = new Engineer(2, 'Dan', 'dan@email.com', 'dangithub');

      expect(engineer instanceof Employee);
    });
  });
  describe('Methods', () => {
    it(`getGithub() method should return the engineer's github properties`, () => {
      const engineer = new Engineer();
      engineer.githubName = 'githubprofile';

      expect(engineer.getGithub()).toEqual(
        'GitHub: <a href="https://github.com/githubprofile">githubprofile</a>'
      );
    });

    it(`getRole() method should return the engineer's role properties`, () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
