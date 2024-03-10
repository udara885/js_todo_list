const todoList = document.getElementById(`todoList`);
const newTodo = document.getElementById(`newTodo`);
const addTodo = document.getElementById(`addTodo`);

addTodo.addEventListener(`click`, () => {
    const newTodoText = newTodo.value;
    if(newTodoText !== ""){
        const newTodoItem = document.createElement(`li`);
        newTodoItem.innerText = newTodoText;
        const deleteTodo = document.createElement(`button`);
        deleteTodo.innerText = `X`;
        deleteTodo.classList.add(`deleteTodo`);
        deleteTodo.addEventListener(`click`, function(){
            newTodoItem.remove();
        });
        newTodoItem.appendChild(deleteTodo);
        todoList.appendChild(newTodoItem);
        newTodo.value = ``;
    }
})

