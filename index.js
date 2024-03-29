const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')


btn.addEventListener('click', addTodoHandler)

let todos = []

function addTodoHandler(event){
    let val = input.value
    input.value = ''

    todos.push(val)

    addTodo()

}


function addTodo(){
    res.innerHTML= ''
    for(const todo of todos){
    res.innerHTML +=`
    <li>${todo}</li>`
}
}








