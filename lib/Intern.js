// * school

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
const Employee = require("./Employee");
class Intern extends Employee {
  constrctor(name, id, email, school) {
    super(name, id, email);
    this.officeNumber = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
