let obj = {};

const kotaTempatTinggalProp = 'kota tempat tinggal'
obj.name = "Bambang";
obj['address'] = "Jl. Kemanggisan";
obj[kotaTempatTinggalProp] = 'Jakarta';

// console.log(obj, "obj");


const passedClassProp = "passsed class";

let student = {
  name: "Udin",
  gpa: 3.5,
  [passedClassProp]: ["Math", "English", "Science"],
  gpa: 4
};

student["passsed class"] = [];
student.name = {}
student.name.first = "Udin"
student.name.last = "Sedunia"

// console.log(Object.values(student.name));



// console.log(student, "student");


let campus = {}

campus.students = ['Andy']

campus.students.push('Bambang')
campus.students.push('Udin')


// console.log(campus, "campus");


let objWithNumAsKey = {}

objWithNumAsKey[1] = 'satu'
objWithNumAsKey[15] = 'limabelas'
objWithNumAsKey[5] = 'lima'



function showText() {
  console.log("Hello World");
}

function sayHelloWithName(name) {
  console.log(`Hello my name is ${name}`)
}

function showWithReturnText() {
  return "Hello World with Return";
}

// const showTextResult = showText()
// console.log(showTextResult, '<== showTextResult');
// const showWithReturnTextResult = showWithReturnText()
// console.log(showWithReturnTextResult, '<== showWithReturnTextResult');

// sayHelloWithName("Bambang")

// callback function
const add = function (num1, num2) {
  return num1 + num2;
}

// arrNum: [1, 2, 3, 4]
// cbAdd: const add = function() {}

// higher order function
const calculation = function (arrNum, cb) {
  const res1 = cb(arrNum[0], arrNum[1]) // 1 + 2
  const res2 = cb(arrNum[2], arrNum[3]) // 3 + 4

  return res1 + res2; // 3 + 7
}

const res = calculation([1, 2, 3, 4], add)
const res1 = calculation([1, 2, 3, 4], function (n1, n2) {
  return n1 * n2;
})
// console.log(res);
// console.log(res1);

const fn1 = () => {
  console.log('Hello World');
}

const fn2 = (name) => {
  console.log(`Hello ${name}`);
}

const fn3 = () => {
  return 'Hello World with Return';
}

// fn1();
// fn2('Bambang');
// const fn3Result = fn3();
// console.log(fn3Result);

const arrowAdd = (num1, num2) => num1 + num2;


const arrowAddResult = arrowAdd(2, 3)
// console.log(arrowAddResult, '<== arrowAddResult');


const cbFn = () => {
  console.log('Hello World after 2 seconds');
}

// setTimeout(cbFn, 2000)

const listOfName = ['Bambang', 'Udin', 'Andy']

// const bambang = listOfName[0]
// const udin = listOfName[1]
// const andy = listOfName[2]

const [bambang, _udin, andy] = listOfName;
const lastName = 'My last name'
const myProp = {
  firstName: 'Udin',
  lastName: 'Sedunia',
  age: 25,
}

const { age, lastName: myPropLastname } = myProp;
// console.log(age, myPropLastname, '<== destructuring myProp');

const getUser = () => ({
  firstName: 'Udin',
  lastName: 'Sedunia',
  age: 25,
})

const { age: userAge, lastName: userLastname } = getUser();
// console.log(userAge, userLastname, '<== destructuring getUser');
this.about = 'learning this keyword'
// console.log(this, '<== this')

const counter = {
  count: 0,
  increment: function () {
    this.count++;
  }
}

// console.log(counter.count, '<== counter.count');
// counter.increment()
// console.log(counter.count, '<== counter.count after increment');

function basicFn() {
  console.log(this, '<== this in basicFn');
}

const arrFn = () => {
  console.log(this, '<== this in arrFn');
}

// basicFn()
// arrFn()

function Counter() {
  this.val = 0;
  setTimeout(function () {
    console.log(this, '<== this.val in setTimeout in Counter');
    this.val++;
    console.log(this.val, '<== this.val after increment in setTimeout in Counter');
  }, 1000)
}

function Counter1() {
  this.val = 0;
  setTimeout(() => {
    console.log(this, '<== this.val in setTimeout in Counter1');
    this.val++;
    console.log(this.val, '<== this.val after increment in setTimeout in Counter1');
  }, 1000)
}

// const counter1 = new Counter();
// const counter2 = new Counter1();


const authorization = (role) => {
  // process logic to handle role
  return (user) => { // user2
    return user.role === role;
  }
}


const user1 = {
  name: 'Bambang',
  role: 'editor'
}

const user2 = {
  name: 'Udin',
  role: 'admin'
}

const isAdmin = authorization('admin')
const isEditor = authorization('editor')
console.log(isAdmin(user2));
console.log(isAdmin(user1));


const animals = [
  { name: 'Lion', type: 'Mammal' },
  { name: 'Tiger', type: 'Mammal' },
  { name: 'Giraffe', type: 'Reptile' },
  { name: 'Hippopotamus', type: 'Reptile' }
]


const animalNames = animals.map((animal) => {
  return animal.name
})

const reptileNames = animals
  .filter((animal) => animal.type === 'Reptile')
  .map(animal => animal.name)

console.log(reptileNames, '<== reptileNames');



const hofMap = (arr, cb) => {
  const newMap = []
  for (let i = 0;i < arr.length;i++) {
    const res = cb(arr[i])
    newMap.push(res)
  }
  return newMap
}

const hofFilter = (arr, cb) => {
  const newMap = []
  for (let i = 0;i < arr.length;i++) {
    const res = cb(arr[i])
    if (res) {
      newMap.push(arr[i])
    }
  }
  return newMap
}

const animalTypes = hofMap(animals, (animal) => {
  return animal.type
})
const reptileTypes = hofFilter(animals, (animal) => animal.type === 'Reptile')
const reptileNames2 = hofMap(reptileTypes, (animal) => animal.name)
// const animalNames = hofAnimals(animals, (animal) => {
//   return animal.name
// })

// console.log(animalTypes, '<== animalTypes');
// console.log(animalNames, '<== animalNames');
console.log(reptileNames2, '<== reptileNames2');


const orders = [
  { id: 1, customer: 'Bambang', total: 10000 },
  { id: 2, customer: 'Udin', total: 20000 },
  { id: 3, customer: 'Andy', total: 30000 },

]

const totalPrice = orders.reduce((acc, order) => {
  return acc + order.total
}, 0)

const hofReduce = (arr, cb, initialValue) => {
  let acc = initialValue
  for (let i = 0;i < arr.length;i++) {
    acc = cb(acc, arr[i])
  }
  return acc
}

const totalPrice2 = hofReduce(orders, (acc, order) => {
  return acc + order.total
}, 0)

console.log(totalPrice, '<== totalPrice');
console.log(totalPrice2, '<== totalPrice2');

