'use strict';
import { canvas } from './canvas';
import { player } from './index';

// let's make this a class! I broke some stuff but you can fix :)
export class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 15;
    this.fillcolor = 'lightgreen';
  }
  onKeyDown() {}

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.fillcolor;
    ctx.fill();
    ctx.closePath();
  }
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
  player.x -= 25;
}

function moveUp() {
  player.y -= 25;
}

function moveRight() {
  player.x += 25;
}

function moveDown() {
  player.y += 25;
}
