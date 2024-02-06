let count = 0;
let fontSize = 1.5;
let msgArr = [
    "Are You Sure?",
    "Sure sure??",
    "Think about it again...",
    "Please reconsider your decision",
    "Pookie Please",
    "I will be very sad",
    "What's holding you back from saying yes?",
    "Is there anything I can do to change your mind?",
    "Please say yes",
    "Oh come on...",
    "I'm asking for one last time"
]

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const gif = document.getElementById('gif');
const text = document.getElementById('text');

yesBtn.addEventListener('click',()=>{
    gif.src = './img/mochi-cat-love.gif';
    text.innerText = "Yaaaaaaaaaaaaayyyyyyyyyyy!!!!!!!";
    hide(yesBtn);
    hide(noBtn);
})

noBtn.addEventListener('click',()=>{
    if (count===11) {
        hide(noBtn);
    }
    noBtn.innerText= msgArr[count];
    count++;
    fontSize+=4
    yesBtn.style.fontSize = fontSize +"rem"
})


function hide(ele){
    ele.style.display = 'none'
}