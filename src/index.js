import './sass/main.scss';

import colors from './js/colors-data';

// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let colorIntervalId = null;

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

stopBtn.disabled = true;

function onBtnStartClick(e) {
  e.target.disabled = true;
  stopBtn.disabled = false;
  colorIntervalId = setInterval(
    (min, max) => {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
      localStorage.setItem('color', document.body.style.backgroundColor);
    },
    1000,
    0,
    colors.length - 1,
  );
}

function onBtnStopClick(e) {
  startBtn.disabled = false;
  e.target.disabled = true;
  clearInterval(colorIntervalId);
  localStorage.setItem('color', document.body.style.backgroundColor);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function savedColor() {
  const savedColor = localStorage.getItem('color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

savedColor();

// 2 спосіб
// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// let colorIntervalId = null;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// startBtn.addEventListener('click', e => {
//   e.target.disabled = true;
//   colorIntervalId = setInterval(() => {
//     document.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   startBtn.disabled = false;
//   clearInterval(colorIntervalId);
// });
