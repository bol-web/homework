import { todoKeys } from "./constants.js"
import {
    createTodo,
    completeTodoById,
    deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

const formElement = document.querySelector('.form');
const inputElement = document.querySelector('.input');
const todosElement = document.querySelector('.todos');

function createTodoElement(todo) {

    const todoItem = document.createElement('li');
    todoItem.className = 'todo';
    todoItem.dataset.id = todo[todoKeys.id];

    todoItem.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
        <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
        </div>
    `;
    return todoItem;
}

export const renderTodos = (todos) => {
    todosElement.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        if (todo[todoKeys.is_completed]) {
            todoElement.classList.add("completed");
        }
        todosElement.prepend(todoElement);
    })
}

const handleCreateTodo = (todos, text) => {
    const todo = createTodo(todos, text);
    const todoElement = createTodoElement(todo);
    setTodosToLocalStorage(todos);
    todosElement.prepend(todoElement);
};


export const initTodoHandlers = todos => {
    formElement.addEventListener("submit", event => {
        event.preventDefault();

        const text = inputElement.value.trim();
        if (!text) return;

        handleCreateTodo(todos, text);
        inputElement.value = "";
    })

    todosElement.addEventListener("click", ({ target }) => {
        const todo = target.closest(".todo");
        // const button = target.closest(".button");
        // if (!button) return;
        if (!todo) return;

        const todoId = Number(todo.dataset.id);

        if (target.matches(".button-complete")) {
            completeTodoById(todos, todoId);
            setTodosToLocalStorage(todos);
            todo.classList.toggle("completed");
        }

        if (target.matches(".button-delete")) {
            deleteTodoById(todos, todoId);
            setTodosToLocalStorage(todos);
            todo.remove();
        }
    });
}



// моя реализация кнопок

// todosElement.addEventListener('click', (event) => {
//   if (event.target.classList.contains('button-complete')) {
//     const elem = event.target.closest('.todo');
//     if (!elem.classList.contains('completed')) {
//       completeTodoById(todos, parseInt(elem.dataset.id));
//       elem.classList.add('completed');
//     }
//   } else if (event.target.classList.contains('button-delete')) {
//     const elem = event.target.closest('.todo');
//     if (!elem.classList.contains('completed')) {
//       deleteTodoById(todos, parseInt(elem.dataset.id));
//       elem.remove();
//     }
//   }
// })
