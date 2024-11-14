import Person from './Person.js';


class Employee extends Person {
  constructor (id, name) {
    super(name)
    this.id = id;
  }

  getId() {
    return `ID: ${this.id}-${this.name}`
  }

  doWork() {
    return `Employee ${this.name} is working...`
  }
}

export default Employee;