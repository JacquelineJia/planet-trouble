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
  // left arrow
  if(e.keyCode == 37) moveLeft();
  // up arrow
  else if(e.keyCode == 38) moveUp();
  // right arrow
  else if(e.keyCode == 39) moveRight();
  // up arrow
  else if(e.keyCode == 40) moveDown();

  else testKeyCode(e.keyCode);
}

function testKeyCode(keyCode) {
  alert(keyCode);
}

function moveLeft() {
  playerTemplate.x -= 20;
}

function moveUp() {
  playerTemplate.y -= 20;
}

function moveRight() {
  playerTemplate.x += 20;
}

function moveDown() {
  playerTemplate.y += 20;
}
