const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos-ul')
const submit = document.getElementById('submit')

// this section of code is what withdraws saves todos along with the subsequent if statement
const todos = JSON.parse(localStorage.getItem('todos'))

// this performs the create a todo function below on previously existing todos, to render them when the app opens
if (todos) {
  todos.forEach(todo => makeTodo(todo))
}

// adding even listener for a click on the submit variable - which has stored the html button which is imported at the top of this script. then also calls the makeTodo function which is what
// actually creates the todo.
submit.addEventListener('click', (event) => {
  event.preventDefault()
  makeTodo()
});

function makeTodo(todo) {
  // the block below first sets a variable containing the input a user gives (.value) from the submission box (input). then `if` there is something passed through (i.e. a submission or argument of `todo`)
  // per the function, then todoText's value will be reassigned to equal that. this allows a first entry to be made - equalling the thing written in submission box, and from then onwards that value is reassigned.
  // to what is typed. 
  let todoText = input.value
  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const listItem = document.createElement('li')

    listItem.innerText = todoText

    todosUl.appendChild(listItem)

    input.value = " "

    updateLocalStorage()

    listItem.addEventListener('contextmenu', (event) => {
      event.preventDefault()
      listItem.remove()
      updateLocalStorage()
    })
  }


}

// this function is what I use to permanently store the todos so they don't vanish when the page is refreshed
// it involes collecting all of the todos which have been created within list items, then pushing them into an empty array and storing them in localstorage.
function updateLocalStorage() {
  listItems = document.querySelectorAll("li")

  const todos = []

  listItems.forEach(listItem => {
    todos.push({
      text: listItem.innerText
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}


