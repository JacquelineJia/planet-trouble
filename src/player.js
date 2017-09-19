'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

var playerTemplate = {
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
  if(e.keyCode == 37) moveLeft(); // left arrow
  else if(e.keyCode == 38) moveUp(); // up arrow
  else if(e.keyCode == 39) moveRight(); // right arrow
  else if(e.keyCode == 40) moveDown(); // up arrow
  else printKeyCode(e.keyCode);
}

function printKeyCode(keyCode) {alert(keyCode);}

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
