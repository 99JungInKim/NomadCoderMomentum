const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const successList = document.querySelector("#success-list");
const TODOS_KEY = "todos";
const SUCCESS_KEY = "success";
let toDos = [];
let success = [];
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function saveSuccess() {
    localStorage.setItem(SUCCESS_KEY, JSON.stringify(success));
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function deleteSuccess(event){
    const li = event.target.parentElement;
    li.remove();
    success = success.filter((success) => success.id !== parseInt(li.id));
    saveSuccess();
}
function successToDo(event){
    const li = event.target.parentElement;
    const newSuccess = {text : this.previousSibling.previousSibling.innerText, id: Date.now()}; // 선택한요소의 형제 조회
    success.push(newSuccess);
    paintSuccess(newSuccess);
    saveSuccess();
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.innerText = " X";
    button2.innerText = " V";
    button1.addEventListener("click", deleteToDo);
    button2.addEventListener("click", successToDo);
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    toDoList.appendChild(li);
}
function paintSuccess(sucTodo){
    const li = document.createElement("li");
    li.id = sucTodo.id;
    const span = document.createElement("span");
    span.innerText = sucTodo.text;
    const button = document.createElement("button");
    button.innerText = " X";
    button.addEventListener("click",deleteSuccess);
    li.appendChild(span); li.appendChild(button);
    successList.appendChild(li);

}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);   
}
const savedSuccess = localStorage.getItem(SUCCESS_KEY);
if(savedSuccess !== null){
    const parsedSuccess = JSON.parse(savedSuccess);
    success = parsedSuccess;
    parsedSuccess.forEach(paintSuccess);
}