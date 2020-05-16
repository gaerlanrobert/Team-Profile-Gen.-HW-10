// * github  // GitHub username

//   * getGithub()

//   * getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");
class Engineer extends Employee {
  constrctor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGitHub() {
    return this.github;
  }
}
module.exports = Engineer;
