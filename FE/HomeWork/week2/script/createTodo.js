const todoInput = document.querySelector('.todo-input')
const enterBtn = document.querySelector('.enter')
const todoList = document.querySelector('.todo-list')
const leftItems = document.querySelector('.left-items')
class Todo{
    constructor(){
        this.isCompleted = 0
        
    }
    
}
// //할일의 총 합
// numberTodo = 0

// getTodoValue()


// //할일을 읽어오고 엔터나 
// function getTodoValue() {
//     enterBtn.addEventListener('click', ()=>{
//         if (todoInput.value==""){
//             alert("할일을 입력해주세요.")
//         }else{
//             if (todoInput.value.trim()===''){
//                 alert("공백은 입력할 수 없습니다.")
//                 todoInput.value=''
//             } else{
//                 genereateTodo(todoInput.value.trim())
//                 todoInput.value=''
//             }
//         }
//     })
//     todoInput.addEventListener('keypress', (e)=>{
//         if(e.key==='Enter'){
//             if (todoInput.value==""){
//                 alert("할일을 입력해주세요.")
//             }else{
//                 if (todoInput.value.trim()===''){
//                     alert("공백은 입력할 수 없습니다.")
//                     todoInput.value=''
//                 } else{
//                     genereateTodo(todoInput.value.trim())
//                     todoInput.value=''
//                 }
//             }
//         }
//     })
// }

// //할일을 생성해요
// function genereateTodo(todo){
//     let newGeneratedTodo = document.createElement("li")
//     let newGeneratedInput = document.createElement("input")
//     let newGeneratedDelBtn = document.createElement("button")
//     let newGeneratedCheckBtn = document.createElement("button")
//     newGeneratedTodo.setAttribute('class', '.todo-item')
//     newGeneratedInput.setAttribute('class', 'todo-input')
//     newGeneratedDelBtn.setAttribute('class', 'delBtn')
//     newGeneratedDelBtn.innerHTML='X'
//     newGeneratedDelBtn.style.color='lightgray'
//     newGeneratedCheckBtn.setAttribute('class', 'checkbox')
//     newGeneratedCheckBtn.innerHTML='✔︎'
//     newGeneratedCheckBtn.style.color='lightgray'

//     newGeneratedTodo.addEventListener('mouseover', ()=>{
//         newGeneratedDelBtn.style.opacity=1
//     })
//     newGeneratedTodo.addEventListener('mouseout', ()=>{
//         newGeneratedDelBtn.style.opacity=0
//     })
//     deleteTodo(newGeneratedDelBtn)

//     newGeneratedTodo.appendChild(newGeneratedCheckBtn)
//     newGeneratedTodo.appendChild(newGeneratedInput)
//     newGeneratedTodo.appendChild(newGeneratedDelBtn)
//     todoList.appendChild(newGeneratedTodo)
//     newGeneratedInput.value = todo
//     numberTodo++
//     doneTodo(newGeneratedCheckBtn, newGeneratedInput)
//     leftItemsCounter()
// }

// //남은 할일을 카운트 해줘요
// function leftItemsCounter(){
//     if(numberTodo>=0){
//         leftItems.innerHTML = "🥕 오늘 할 일이 "+ numberTodo + "개 남았습니다 🥕"
//     }else{
//         leftItems.innerHTML = "🥕 오늘 할 일이 0개 남았습니다 🥕"
//     }
// }

// //btn을 누르면 할일이 사라져요
// function deleteTodo(btn) {
//     btn.addEventListener('click', ()=>{
//         btn.parentElement.parentElement.removeChild(btn.parentElement)
//         numberTodo--
//         leftItemsCounter()
//     })
// }

// //btn을 누르면 newgeninput의 완료한 일 체크가 돼요
// function doneTodo(btn, newGeneratedInput) {
//     btn.addEventListener('click', ()=>{
//         newGeneratedInput.style.color='lightgray'
//         newGeneratedInput.innerHTML=`<strike>${newGeneratedInput.value}</strike>`;
//         numberTodo --
//         leftItemsCounter()
//     })
// }



