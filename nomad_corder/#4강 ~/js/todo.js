const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// localStorage에 저장한다
function saveToDos(){
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(); sring으로 저장하고 싶을때 
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    // console.log(e.target.parentElement.innerText);
}    

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handlerTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value; //input의 현재 value를 새로운 변수에 복사하는것
    // console.log(todoInput.value); 
    todoInput.value = ""
    // console.log(newTodo, todoInput.value);  // todoInput.value => empty처리("")로 안나올것임
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handlerTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse() => array로 변환 시켜준다
    parsedToDos.forEach( (item) => console.log("아이템", item));

}
