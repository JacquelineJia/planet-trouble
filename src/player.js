'use strict';
import { canvas, ctx } from './canvas';

const playerTemplate = {
  x : canvas.width/2,
  y : canvas.height/2,
  fillcolor : 'lightgreen',
  radius : 15
};

export function drawPlayer() {
  ctx.beginPath();
  ctx.arc(playerTemplate.x, playerTemplate.y, playerTemplate.radius, 0, Math.PI*2);
  ctx.fillStyle = playerTemplate.fillcolor;
  ctx.fill();
  ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if(e.key === 'ArrowLeft') moveLeft();
  else if(e.key === 'ArrowUp') moveUp();
  else if(e.key === 'ArrowRight') moveRight();
  else if(e.key === 'ArrowDown') moveDown();
  else printKeyCode(e.key);
}

function printKeyCode(keyCode) {
  alert(keyCode);
}

function moveLeft() {
  playerTemplate.x -= 25;
}

function moveUp() {
  playerTemplate.y -= 25;
}

function moveRight() {
  playerTemplate.x += 25;
}

function moveDown() {
  playerTemplate.y += 25;
}
