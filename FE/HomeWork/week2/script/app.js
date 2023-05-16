const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')
const todoList = document.querySelector('.todo-list')
const leftItems = document.querySelector('.left-items')
const todoDelBtn = document.querySelector('.delBtn')
const checkbox = document.querySelector('.checkbox')
const showAllBtn = document.querySelector('#all')
const showActiveBtn = document.querySelector('#active')
const showCompletedBtn = document.querySelector('#completed')
const clearAllBtn = document.querySelector('#clear')
const todoTitle = document.querySelector('.todo-title')

let todoNumber = 0
const todoListArray = []
const todoListHtmlArray = []

class Todo{
    constructor(input){
        todoNumber++
        updateLeftItems()
        this.isCompleted = 0
        
        this.newGeneratedTodo = document.createElement("li")
        let newGeneratedInput = document.createElement("input")
        let newGeneratedDelBtn = document.createElement("button")
        let newGeneratedCheckBtn = document.createElement("button")
        this.newGeneratedTodo.setAttribute('class', 'todo-item')
        newGeneratedInput.setAttribute('class', 'todo-input')
        newGeneratedDelBtn.setAttribute('class', 'delBtn')
        newGeneratedDelBtn.innerHTML='X'
        newGeneratedDelBtn.style.color='lightgray'
        newGeneratedCheckBtn.setAttribute('class', 'checkbox')
        newGeneratedCheckBtn.innerHTML='✔︎'
        newGeneratedCheckBtn.style.color='black'
        newGeneratedInput.value = input.trim()
        this.newGeneratedTodo.appendChild(newGeneratedCheckBtn)
        this.newGeneratedTodo.appendChild(newGeneratedInput)
        this.newGeneratedTodo.appendChild(newGeneratedDelBtn)
        todoList.appendChild(this.newGeneratedTodo)
        todoListHtmlArray.push(this.newGeneratedTodo)

        this.checkBtn = newGeneratedCheckBtn
        this.delBtn = newGeneratedDelBtn

        this.newGeneratedTodo.addEventListener('mouseover', ()=>{
            newGeneratedDelBtn.style.opacity=1
        })
        this.newGeneratedTodo.addEventListener('mouseout', ()=>{
            newGeneratedDelBtn.style.opacity=0
        })

        this.delBtn.addEventListener('click', ()=>{
            this.delBtn.parentElement.parentElement.removeChild(this.delBtn.parentElement)
            if (this.isCompleted===0){
                todoNumber--
                updateLeftItems()
            }
        })
        this.checkBtn.addEventListener('click',()=>{
            if (this.isCompleted===0){
                newGeneratedInput.style.color='lightgray'
                newGeneratedCheckBtn.style.color='lightgray'
                newGeneratedInput.value.strike()
                //TODO: strike to string
                this.isCompleted=1
                todoNumber--
                updateLeftItems()
            }else{
                newGeneratedInput.style.color='black'
                newGeneratedCheckBtn.style.color='black'
                this.isCompleted=0
                todoNumber++
                updateLeftItems()
            }
        })
        todoListArray.push(this)
    }
    hideDisplay(){
        this.newGeneratedTodo.style.display='none'
    }
    showDisplay(){
        this.newGeneratedTodo.style.display='flex'
    }
}


function updateLeftItems(){
    leftItems.textContent = `🥕 오늘 할 일이 ${todoNumber}개 남았습니다 🥕`
}

enterBtn.addEventListener('click', ()=>{
    if (todoInput.value==""){
        alert("할일을 입력해주세요.")
    }else{
        if (todoInput.value.trim()===''){
            alert("공백은 입력할 수 없습니다.")
            todoInput.value=''
        } else{
            newtodo = new Todo(todoInput.value)
            todoInput.value=''
        }
    }
})
todoInput.addEventListener('keypress', (e)=>{
    if(e.key==='Enter'){
        if (todoInput.value==""){
            alert("할일을 입력해주세요.")
        }else{
            if (todoInput.value.trim()===''){
                alert("공백은 입력할 수 없습니다.")
                todoInput.value=''
            } else{
                newtodo = new Todo(todoInput.value)
                todoInput.value=''
            }
        }
    }
})

showActiveBtn.addEventListener('click', ()=>{
    todoListArray.forEach((todo)=>{
        todo.isCompleted?todo.hideDisplay():todo.showDisplay()
    })
})

showCompletedBtn.addEventListener('click', ()=>{
    todoListArray.forEach((todo)=>{
        todo.isCompleted?todo.showDisplay():todo.hideDisplay()
    })
})

showAllBtn.addEventListener('click',()=>{
    todoListArray.forEach((todo)=>{
        todo.showDisplay()
    })
})

function deleteTodo(){
    todoList.children.forEach((todo)=>{
        todo.hideDisplay()
    })
    todoNumber=0
    updateLeftItems()
}

clearAllBtn.addEventListener('click',()=>{
    todoListArray.splice(0,  todoListArray.length)
    todoListHtmlArray.forEach((todoHtml) => {
        todoHtml.remove()
    })
    todoListHtmlArray.splice(0, todoListHtmlArray.length)
    todoNumber=0
    updateLeftItems()
    
})

updateTime()
setInterval(updateTime, 1000)
function updateTime(){
    const now = new Date
    let hour = String(now.getHours()).padStart(2,'0')
    let min = String(now.getMinutes()).padStart(2,'0')
    let second = String(now.getSeconds()).padStart(2,'0')
    todoTitle.textContent = `${hour}:${min}:${second}`
}