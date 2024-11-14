
import fetch from 'node-fetch'

const orderChatTime = (person, item) => {
  const amount = person.money.amount
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount >= item.price) {
        person.money.amount -= item.price
        resolve({
          item,
          currentMoney: person.money.amount,
          message: `Congratulations ${person.name}, you have ordered ${item.name} for ${amount} and it has been delivered to your address.`
        })
      } else {
        reject(`Sorry ${person.name}, you don't have enough money to order ${item.name}.`)
      }
    }, 2000)
  })
}

const person = {
  name: 'udin',
  money: {
    amount: 51_000
  }
}

const item1 = {
  name: 'milk tea',
  price: 25_000
}

const item2 = {
  name: 'hazelnut milk tea',
  price: 25_000
}
const cbFn = (res) => {
  console.log(res);

  return orderChatTime(person, item2)
}

orderChatTime(person, item1)
  .then(cbFn)
  .then((res) => {
    console.log(res);

    return orderChatTime(person, item2)
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

// console.log('Ngopi dulu ah')

// fetch('https://swapi.dev/api/people')
//   .then(response => response.json())
//   .then(data => data.results)
//   .then(people => people.filter(person => person.gender === 'female'))
//   .then(filteredPeople => {
//     console.log(filteredPeople);
//   })
//   .catch(error => console.error(error))

const getStarWarsChar = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/peoplee')
    const resJson = await response.json()
    const results = resJson.results
    const filteredPeople = results.filter(person => person.gender === 'female')
    console.log(filteredPeople);
  } catch (error) {
    console.error(error, 'handle error')
  }
}

(async () => {
  try {
    const orderMilkTea = await orderChatTime(person, item1)
    console.log(orderMilkTea)
    const orderHazelnutMilkTea = await orderChatTime(person, item2)
    console.log(orderHazelnutMilkTea)
    const orderHazelnutMilkTea2 = await orderChatTime(person, item2)
    console.log(orderHazelnutMilkTea2);

  } catch (error) {
    console.log(error);

  }
})()


getStarWarsChar()

console.log('Ngopi dulu ah');

