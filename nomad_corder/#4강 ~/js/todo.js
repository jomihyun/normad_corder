const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    li.appendChild(button);
    span.innerText = newTodo;
    button.innerText = "❌";
    todoList.appendChild(li);
}

function handlerTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handlerTodoSubmit);