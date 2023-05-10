const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')
const todoList = document.querySelector('.todo-list')

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

    newGeneratedTodo.appendChild(newGeneratedCheckBtn)
    newGeneratedTodo.appendChild(newGeneratedInput)
    newGeneratedTodo.appendChild(newGeneratedDelBtn)
    todoList.appendChild(newGeneratedTodo)
    newGeneratedInput.value = todo
}