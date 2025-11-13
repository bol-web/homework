// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]
users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true });

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let middleAge = 0;
    users.forEach(element => {
        middleAge += element.age;
    });
    middleAge /= users.length;

    return middleAge;
}

console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.


function getAllAdmins(users) {
    let AllAdmins = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin) {
            AllAdmins.push(users[i]);
        } else {
            continue;
        }
    }

    return AllAdmins;
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function first(arr, n) {
    if (n == 0) {
        return [];
    } else if (n == undefined) {
        let mass = [];
        mass[0] = arr.shift();
        return mass;
    } else {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(arr[i]);
        }
        return result;
    }
}

console.log(first(x, 3));