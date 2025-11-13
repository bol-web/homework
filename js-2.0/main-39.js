// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//     name: "Артём",
//     age: 19,
//     city: "Новосибирск",
// };

// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// const obj = {
    
// };

// function isEmpty(object) {
//     let k = 0;
//     for (const key in object) {
//         k += 1;
//     }

//     if (k === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isEmpty(obj);

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//     title: "Заголовок",
//     description: "Описание",
//     isCompleted: true,
// }

// const mod = {
//     title: "Фрилансер",
//     description: "Работает, когда удобно",
//     isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
//     const copy = { ...object };
//     copy.title = mod.title;
//     copy.description = mod.description;
//     copy.isCompleted = mod.isCompleted;
//     return copy;
// }

// const clone = cloneAndModify(task, mod);

// for (const key in clone) {
//     console.log(clone[key]);
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(myObject) {
    for (const key in myObject) {
        if (typeof(myObject[key]) === "function") {
            myObject[key]();
        } else {
            console.log(`${key} - ${myObject[key]}`)
        }
    }
}

callAllMethods(myObject);