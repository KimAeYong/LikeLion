const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')
const todoList = document.querySelector('.todo-list')
const leftItems = document.querySelector('.left-items')
const todoDelBtn = document.querySelector('.delBtn')
const checkbox = document.querySelector('.checkbox')

let todoNumber = 0

class Todo{
    constructor(input){
        todoNumber++
        updateLeftItems()
        this.isCompleted = 0
        
        let newGeneratedTodo = document.createElement("li")
        let newGeneratedInput = document.createElement("input")
        let newGeneratedDelBtn = document.createElement("button")
        let newGeneratedCheckBtn = document.createElement("button")
        newGeneratedTodo.setAttribute('class', '.todo-item')
        newGeneratedInput.setAttribute('class', 'todo-input')
        newGeneratedDelBtn.setAttribute('class', 'delBtn')
        newGeneratedDelBtn.innerHTML='X'
        newGeneratedDelBtn.style.color='lightgray'
        newGeneratedCheckBtn.setAttribute('class', 'checkbox')
        newGeneratedCheckBtn.innerHTML='✔︎'
        newGeneratedCheckBtn.style.color='black'
        newGeneratedInput.value = input
        newGeneratedTodo.appendChild(newGeneratedCheckBtn)
        newGeneratedTodo.appendChild(newGeneratedInput)
        newGeneratedTodo.appendChild(newGeneratedDelBtn)
        todoList.appendChild(newGeneratedTodo)

        this.checkBtn = newGeneratedCheckBtn
        this.delBtn = newGeneratedDelBtn

        //마우스 갖다대면 삭제버튼 보이게
        newGeneratedTodo.addEventListener('mouseover', ()=>{
            newGeneratedDelBtn.style.opacity=1
        })
        newGeneratedTodo.addEventListener('mouseout', ()=>{
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
    }
}

function updateLeftItems(){
    leftItems.innerHTML = '🥕 오늘 할 일이 '+todoNumber+'개 남았습니다 🥕'
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