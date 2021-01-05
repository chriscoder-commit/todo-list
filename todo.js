const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos-ul')
const submit = document.getElementById('submit')


// this section of code is what withdraws saves todos along with the subsequent if statement
const todos = JSON.parse(localStorage.getItem('todos'))

// this performs the create a todo function below on previously existing todos, to render them
if(todos) {
  todos.forEach(todo => makeTodo(todo))
}



submit.addEventListener('click', (event) => {
  event.preventDefault()
  makeTodo()
});

function makeTodo(todo) {

  let todoText = input.value 
  
  if(todoText) {
    const listItem = document.createElement('li')
    listItem.innerText = todoText
    todosUl.appendChild(listItem)

    input.value = "enter a new todo!"
  }
}
