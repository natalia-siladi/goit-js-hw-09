let intervalId = null;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onStartBtnClick() {
    intervalId = setInterval(() => refs.body.style.backgroundColor = getRandomHexColor(), 1000);

}

function onStopBtnClick() {
    clearInterval(intervalId);
};

