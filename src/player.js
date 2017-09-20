'use strict';
import { canvas } from './canvas';

export class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 15;
    this.fillcolor = 'lightgreen';
  }

  onKeyDown(key) {
    if(key === 'ArrowLeft') this.moveLeft();
    else if(key === 'ArrowUp') this.moveUp();
    else if(key === 'ArrowRight') this.moveRight();
    else if(key === 'ArrowDown') this.moveDown();
    else printKeyCode(e.key);
  }

  moveLeft() {
    this.x -= 25;
  }

  moveUp() {
    this.y -= 25;
  }

  moveRight() {
    this.x += 25;
  }

  moveDown() {
    this.y += 25;
  }


  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.fillcolor;
    ctx.fill();
    ctx.closePath();
  }
}

function printKeyCode(keyCode) {
  alert(keyCode);
}
