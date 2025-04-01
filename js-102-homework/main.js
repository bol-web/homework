const person = {
    name: 'Artem',
    age: 18,
    city: 'Moscow',
    hobby: 'Programming',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

person.sayHello('Tom')

// ==============================

const listUsers = [
    {
        name: 'Artem',
        age: 28,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 19,
        isAdmin: true
    },
    {
        name: 'John',
        age: 20,
        isAdmin: false
    }
]

let simpleUser = 0

for (let i = 0; i < listUsers.length; i++) {
    if (listUsers[i].isAdmin == false) {
        simpleUser += 1
    }
}

console.log(simpleUser)