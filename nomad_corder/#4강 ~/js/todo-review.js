const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById('todo-list');

// 로컬 스토리지에 저장할
const TODOS_KEY = "todos";

// 리스트 배열
let toDos = [];

// 로컬 스티리지에 계속 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 로컬스티리지 & html 삭제
function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

// 완료 버튼 
function completeTodo(e) {
    const li = e.target.parentElement;
    li.classList.toggle("completed");
}

// 리스트 나타내기
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "⭕"
    delBtn.addEventListener("click", deleteTodo);
    doneBtn.addEventListener("click", completeTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    todoList.appendChild(li);
}

// 리스트 submit 넘기기 
function todoFormSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoItem = {
        text: newTodo,
        id: Date.now(), // 랜덤 난수 id값 만들기
    }
    toDos.push(newTodoItem); // 새로운 todo 저장
    paintTodo(newTodoItem); // 사용자에게 받은 value값
    saveToDos();
}
todoForm.addEventListener("submit", todoFormSubmit);


//새로고침 해도 남아있기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

