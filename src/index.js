'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

function game() {
  ctx.clearRect(0, 0, 150, 75);
  ctx.fillStyle = "#222222";
  ctx.fillRect(0,0,832,512);

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
