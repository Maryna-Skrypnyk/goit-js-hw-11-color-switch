import './sass/main.scss';

import colors from './js/colors-data';

// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  e.target.disabled = true;
  console.log(555);
  timerId = setInterval(
    (min, max) => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    },
    1000,
    0,
    colors.length - 1,
  );
}

function onBtnStopClick() {
  startBtn.disabled = false;
  console.log(685);
  clearInterval(timerId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 2 спосіб
// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// let timerId = null;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// startBtn.addEventListener('click', e => {
//   e.target.disabled = true;
//   timerId = setInterval(() => {
//     document.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   startBtn.disabled = false;
//   clearInterval(timerId);
// });
