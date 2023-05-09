const clock = document.getElementById("clock")

const timer = setInterval(() => {
    renderTime();
    
}, 1000);

function getTime(){
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,0)
    const min = time.getMinutes().toString().padStart(2,0)
    const sec = time.getSeconds().toString().padStart(2,0)
    
    return {hour, min, sec};
}

function renderTime(){
    const {hour, min, sec} = getTime()
    clock.textContent = `${hour}:${min}:${sec}`
}

renderTime();