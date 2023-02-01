function setNumber(num) {
  const el = document.querySelector('#number');
  el.innerHTML = num.toString();
}

function setContent(content) {
  const el = document.querySelector('#content');
  el.innerHTML = content;
}

function nextAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    const slip = data.slip;
    setNumber(slip.id);
    setContent(slip.advice);
  })
}

function setNextHandler() {
  document.querySelector('#next')
    .addEventListener('click', nextAdvice);
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    setNextHandler();
    nextAdvice();
  },
  { once: true })
