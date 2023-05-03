const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// localStorage에 저장
function saveToDos(){
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(); sring으로 저장
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    // todo는 number, li.id string 타입이라 다르기때문애 parseInt()로 변환해야한다.
    saveToDos();
}    

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handlerTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 새로고침했을때 저장된 todo에 값이 있다면 if
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos); 
    // JSON.parse() => array로 변환 시켜준다
    toDos = parsedToDos;  // 로컬스토리지에 있는 toDos에 덮어씌우지 않고 추가되게끔 설정
    parsedToDos.forEach(paintTodo); 
}

// filter( 무조건 true 반환해야함 )