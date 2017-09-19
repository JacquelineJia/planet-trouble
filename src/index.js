'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

function game() {
  ctx.clearRect(0, 0, 150, 75);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
