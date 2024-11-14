class Person {
  constructor (name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Student extends Person {
  constructor (tableNumber, name) {
    super(name)
    this.tableNumber = tableNumber
  }

  goLearn() {
    return 'Ashiaaaap!'
  }

  getName() {
    return `Name: ${this.name}-${this.tableNumber}`
  }
}

class Employee extends Person {
  constructor (id, name) {
    super(name)
    this.id = id
  }

  doWork() {
    return 'siap!'
  }

  getId() {
    return `ID: ${this.id}-${this.name}`
  }
}


let bambang = new Person('Bambang')
// console.log(bambang.getName());


let udin = new Employee('123098', 'Udin')

// console.log(udin.getName());
// console.log(udin.doWork());
// console.log(udin.getId());

let john = new Student('A123', 'John')

console.log(john.getName());
console.log(john.goLearn());




const roundNumber = (num) => {
  return Math.round(num)
}

const getLength = (str) => {
  return str.length
}

console.log(getLength(123123));

console.log(roundNumber(3.5));
// 4
console.log(roundNumber(2.7));
// 3
console.log(roundNumber(1.4));
// 1

console.log(roundNumber('haha'));