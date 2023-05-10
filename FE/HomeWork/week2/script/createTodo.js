const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')
const todoList = document.querySelector('.todo-list')
const leftItems = document.querySelector('.left-items')

numberTodo = 0

getTodoValue()

function getTodoValue() {
    enterBtn.addEventListener('click', ()=>{
        if (todoInput.value==""){
            alert("할일을 입력해주세요.")
        }else{
            genereateTodo(todoInput.value)
            todoInput.value=''
        }
    })
    todoInput.addEventListener('keypress', (e)=>{
        if(e.key==='Enter'){
            if (todoInput.value==""){
                alert("할일을 입력해주세요.")
            }else{
                genereateTodo(todoInput.value)
                todoInput.value=''
            }
        }
    })
}

function genereateTodo(todo){
    let newGeneratedTodo = document.createElement("li")
    let newGeneratedInput = document.createElement("input")
    let newGeneratedDelBtn = document.createElement("button")
    let newGeneratedCheckBtn = document.createElement("button")
    newGeneratedTodo.setAttribute('class', '.todo-item')
    newGeneratedInput.setAttribute('class', 'todo-input')
    newGeneratedDelBtn.setAttribute('class', 'delBtn')
    newGeneratedCheckBtn.setAttribute('class', 'checkbox')

    newGeneratedDelBtn.addEventListener('mouseover', ()=>{
        newGeneratedDelBtn.style.opacity=1
    })
    newGeneratedDelBtn.addEventListener('mouseout', ()=>{
        newGeneratedDelBtn.style.opacity=0
    })
    newGeneratedDelBtn.addEventListener('click', ()=>{
        newGeneratedDelBtn.parentElement.parentElement.removeChild(newGeneratedDelBtn.parentElement)
        numberTodo--
        leftItemsController()
    })

    newGeneratedTodo.appendChild(newGeneratedCheckBtn)
    newGeneratedTodo.appendChild(newGeneratedInput)
    newGeneratedTodo.appendChild(newGeneratedDelBtn)
    todoList.appendChild(newGeneratedTodo)
    newGeneratedInput.value = todo
    numberTodo++
    leftItemsController()
}

function leftItemsController(){
    leftItems.innerHTML = "🥕 오늘 할 일이 "+ numberTodo + "개 남았습니다 🥕"
}



