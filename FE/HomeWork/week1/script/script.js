const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const KJ = document.querySelector('#KJ');
const CU = document.querySelector('#CU');
const RN = document.querySelector("#RN");
const NM = document.querySelector("#NM");
const pro = document.querySelector('.progress-bar');
const FOOD = document.querySelector('#food');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');


const q = {
    1: {
        "title": "오늘따라 밥이 땡긴다!", 
        "type": "RN", 
        "A": "네", 
        "B": "아니오"
    },
    2: {"title": "나는 기름진 음식이 싫다!", "type": "CU", "A": "네", "B": "아니오"},
    3: {"title": "문제 3번", "type": "EI", "A": "E", "B": "I"},
    4: {"title": "문제 4번", "type": "SN", "A": "S", "B": "N"},
    5: {"title": "문제 5번", "type": "SN", "A": "S", "B": "N"},
    6: {"title": "문제 6번", "type": "SN", "A": "S", "B": "N"},
    7: {"title": "문제 7번", "type": "TF", "A": "T", "B": "F"},
    8: {"title": "문제 8번", "type": "TF", "A": "T", "B": "F"},
    9: {"title": "문제 9번", "type": "TF", "A": "T", "B": "F"},
    10: {"title": "문제 10번", "type": "JP", "A": "J", "B": "P"},
    11: {"title": "문제 11번", "type": "JP", "A": "J", "B": "P"},
    12: {"title": "문제 12번", "type": "JP", "A": "J", "B": "P"}
}
const result = {
    "ISTJ": {
        "animal": "하마", 
        "explain": "하마 설명", 
        "img": "lion.jpg"
    },
    "ISFJ": {"animal": "부엉이", "explain": "부엉이 설명", "img": "lion.jpg"},
    "INFJ": {"animal": "물소", "explain": "물소 설명", "img": "lion.jpg"},
    "INTJ": {"animal": "치타", "explain": "치타 설명", "img": "lion.jpg"},
    "ISTP": {"animal": "나무늘보", "explain": "나무늘보 설명", "img": "lion.jpg"},
    "ISFP": {"animal": "거북이", "explain": "거북이 설명", "img": "lion.jpg"},
    "INFP": {"animal": "코끼리", "explain": "코끼리 설명", "img": "lion.jpg"},
    "INTP": {"animal": "침팬지", "explain": "침팬지 설명", "img": "lion.jpg"},
    "ESTP": {"animal": "악어", "explain": "악어 설명", "img": "lion.jpg"},
    "ESFP": {"animal": "미어캣", "explain": "미어캣 설명", "img": "lion.jpg"},
    "ENFP": {"animal": "강아지", "explain": "강아지 설명", "img": "lion.jpg"},
    "ENTP": {"animal": "태양새", "explain": "태양새 설명", "img": "lion.jpg"},
    "ESTJ": {"animal": "기린", "explain": "기린 설명", "img": "lion.jpg"},
    "ESFJ": {"animal": "고릴라", "explain": "고릴라 설명", "img": "lion.jpg"},
    "ENFJ": {"animal": "카피바라", "explain": "카피바라 설명", "img": "lion.jpg"},
    "ENTJ": {
        "animal": "호랑이", 
        "explain": "호랑이 설명", 
        "img": "lion.jpg"
    }
}


let num = 1;
let foodResult = ''
//이 위까지 사전 제공 됨.
titleBtn.addEventListener('click', ()=>{
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
})

aBtn.addEventListener('click', ()=>{
    switch(type.innerHTML){
        case "KJ":
            let k = parseInt(KJ.value)
            KJ.setAttribute('value', k+1);
            break
        case "CU":
            let c = parseInt(CU.value)
            CU.setAttribute('value', c+1);
            break
        case "RN":
            let r = parseInt(RN.value)
            RN.setAttribute('value', r+1);
            break
        case "NM":
            let n = parseInt(NM.value)
            NM.setAttribute('value', n+1);
            break
        default:
            hello
    }
    updateQuestion();
})

bBtn.addEventListener('click', ()=>{
    updateQuestion();
})

function updateQuestion(){
    if (num==13){
        questionContainer.style.display='none';
        resultContainer.style.display='block';

        // KJ, CU 중 큰거 하나 고르고
        // RN, NM 중 큰거 하나 고르고.

        
        // console.log(mbti)
        FOOD.innerHTML = foodResult;
        explain.innerHTML = result[foodResult].explain
        image.setAttribute('src', result[mbti].img);
    } else{
        pro.setAttribute('style', `width: calc(100/12*${num}%);`)
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}