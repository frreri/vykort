import { joke } from './randomJoke.js';

joke().then(j => {
  document.getElementById('joke-text').textContent = j;
});

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

setInterval(() => {
  document.body.style.backgroundColor = `rgb(${randomNum(0, 255)},${randomNum(
    0,
    255
  )},${randomNum(0, 255)})`;
}, 1000);
