const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  const formatNumber = (number) => {
    return String(number).length === 1 ? `0${number}` : number;
  }

  return (seconds) => {
    let countdown = seconds;
    const timer = setInterval(function() {
      if (countdown <= 0) {
        clearInterval(timer);
        timerEl.innerHTML = '00:00:00';
      } else {
        let h = formatNumber(parseInt(countdown / 3600));
        let m = formatNumber(parseInt((countdown - h * 3600) / 60));
        let s = formatNumber(countdown - h * 3600 - m * 60);
        timerEl.innerHTML = `${h}:${m}:${s}`;
        countdown--;
      }
    }, 1000);
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const reg = /[^0-9]/g;
  inputEl.value = inputEl.value.replace(reg, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
