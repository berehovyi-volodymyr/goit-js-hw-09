function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}

let timerId = null;

ref.btnStart.addEventListener('click', onStart)
ref.btnStop.addEventListener('click', onStop)

function onStart() {
    timerId  = setInterval(() => {
        ref.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    ref.btnStart.setAttribute("disabled", "disabled")
}

function onStop() {
    ref.btnStart.removeAttribute("disabled")
    clearInterval(timerId)
}