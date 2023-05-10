const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')

getTodoValue()

function getTodoValue() {
    enterBtn.addEventListener('click', ()=>{
        console.log(todoInput.value)
        
    })
    todoInput.addEventListener('keydown', ()=>{
        if(event.keyCode==13){
            console.log(todoInput.value)
        }
    })
}

