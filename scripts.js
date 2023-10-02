const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject,index)=>{                  // OTher than ARROW FUNCTION : todoList.forEach(function(todoObject,index){
    
    const { name, dueDate } = todoObject; //alternate of the above two lines.................

    const html = `<div>${name}</div> <div> ${dueDate}</div> <button class="delete-todo-button js-delete-todo-button";>Delete</button>`; // It is known as GENERATING A HTML technique
    todoListHTML += html;
    

  });

  
  //console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll('.   js-delete-todo-button')        // queryselectorall is used becoz all the delete buttons are selected at once by this 
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', ()=>{
      todoList.splice(index, 1); renderTodoList();
    });

  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,              // above two lines can be represented by this as property name and its value is same
    dueDate
  });
  //console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
