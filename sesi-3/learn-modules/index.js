import Employee from "./Employee.js";
import names, { generateRandomId, generateRandomName } from './helper.js'

const unknownName = new Employee(generateRandomId(), generateRandomName())

console.log(names);
console.log(unknownName.getName());
console.log(unknownName.getId());
console.log(unknownName.doWork());


