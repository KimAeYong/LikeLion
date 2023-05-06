const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const KO = document.querySelector('#KO');
const RB = document.querySelector('#RB');
const HL = document.querySelector("#HL");
const EC = document.querySelector("#EC");
const pro = document.querySelector('.progress-bar');
const FOOD = document.querySelector('#food');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');


const q = {
    1: {
        "title": "나는 오늘 한식이 땡긴다!", 
        "type": "KO", 
        "A": "네", 
        "B": "아니오"
    },
    2: {"title": "나는 기름진 음식이 싫다", "type": "KO", "A": "네", "B": "아니오"},
    3: {"title": "평소에 먹던 음식이 좋다", "type": "KO", "A": "네", "B": "아니오"},
    4: {"title": "빵이나 면 보다 밥을 선호한다", "type": "RB", "A": "네", "B": "아니오"},
    5: {"title": "든든하게 먹고싶다", "type": "RB", "A": "네", "B": "아니오"},
    6: {"title": "건강에 신경을 쓰는 편이다", "type": "RB", "A": "네", "B": "아니오"},
    7: {"title": "가벼운 음식 보다 헤비한 음식이 좋다", "type": "HL", "A": "네", "B": "아니오"},
    8: {"title": "맛있으면 0칼로리다", "type": "HL", "A": "네", "B": "아니오"},
    9: {"title": "음식을 먹을 때 살찔까봐 걱정하지 않는 편이다", "type": "HL", "A": "네", "B": "아니오"},
    10: {"title": "음식을 먹을 때 돈을 아끼지 않는 편이다", "type": "EC", "A": "네", "B": "아니오"},
    11: {"title": "여유자금이 꽤 있다", "type": "EC", "A": "네", "B": "아니오"},
    12: {"title": "당장의 행복이 더 중요하다", "type": "EC", "A": "네", "B": "아니오"}
}
const result = {
    "KRHE": {
        "restaurant": "핵밥", 
        "explain": "후문에 위치한 핵밥에서 소곱창덮밥을 먹어보는건 어떨까요?", 
        "img": "./img/KRHE.png"
    },
    "KRHC": {"restaurant": "봉구스밥버거", "explain": "정문의 봉구스밥버거에서 든든한 봉구킹을 먹어보세요", "img": "./img/KRHC.png"},
    "KRLE": {"restaurant": "손시스시", "explain": "손시스시에서 초밥을 먹어봐요", "img": "./img/KRLE.png"},
    "KRLC": {"restaurant": "봉구스밥버거", "explain": "정문의 봉구스밥버거에서 간단하게 기본 밥버거 어떨까요", "img": "./img/KRLC.png"},
    "KBHE": {"restaurant": "닭칼국수", "explain": "현풍닭칼국수에서 닭칼국수를 먹어봐요", "img": "./img/KBHE.png"},
    "KBHC": {"restaurant": "라면", "explain": "중도학식당에서 라면을 먹어요", "img": "./img/KBHC.png"},
    "KBLE": {"restaurant": "비빔막국수", "explain": "일월막국수에서 비빔면을 먹는건 어떨까요?", "img": "./img/KBLE.png"},
    "KBLC": {"restaurant": "가야밀면", "explain": "가야밀면에서 밀면을 먹어요", "img": "./img/KBLC.png"},
    "ORHE": {"restaurant": "리조또", "explain": "에이바이트키친에서 크림리조또를 먹어요", "img": "./img/ORHE.png"},
    "ORHC": {"restaurant": "필라프", "explain": "쿠치나에서 필라프를 먹는건 어때요?", "img": "./img/ORHC.png"},

    "ORLE": {"restaurant": "케이크", "explain": "그리다빵에서 케이크를 먹어요", "img": "./img/ORLE.png"},
    "ORLC": {"restaurant": "빵", "explain": "밀로우에서 간단히 빵을 먹는건 어떨까요?", "img": "./img/ORLC.png"},
    "OBHE": {"restaurant": "커리", "explain": "살라딘에서 커리를 먹어봐요", "img": "./img/OBHE.png"},
    "OBHC": {"restaurant": "꼬뱅", "explain": "꼬뱅에서 토스트를 먹어요", "img": "./img/OBHC.png"},
    "OBLE": {"restaurant": "서브웨이", "explain": "서브웨이에서 샌드위치를 먹어요", "img": "./img/OBLE.png"},
    "OBLC": {
        "restaurant": "파스타", 
        "explain": "미스터봉파스타에서 파스타를 먹어요", 
        "img": "./img/OBLC.png"
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
        case "KO":
            let k = parseInt(KO.value)
            KO.setAttribute('value', k+1);
            break
        case "RB":
            let r = parseInt(RB.value)
            RB.setAttribute('value', r+1);
            break
        case "HL":
            let h = parseInt(HL.value)
            HL.setAttribute('value', h+1);
            break
        case "EC":
            let e = parseInt(EC.value)
            EC.setAttribute('value', e+1);
            break
        default:
            break
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
        
        (foodResult += parseInt(KO.value)>2?"K":"O");
        (foodResult += parseInt(RB.value)>2?"R":"B");
        (foodResult += parseInt(HL.value)>2?"H":"L");
        (foodResult += parseInt(EC.value)>2?"E":"C");

        FOOD.innerHTML = result[foodResult].restaurant;
        explain.innerHTML = result[foodResult].explain
        image.setAttribute('src', result[foodResult].img);
    } else{
        pro.setAttribute('style', `width: calc(100/12*${num}%);`)
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}