'use strict';
import { canvas } from './canvas';
import GHOST from './images/ghost.png';
import { UP, LEFT, RIGHT, DOWN } from './directions';

const GHOST_IMAGE = new Image();
GHOST_IMAGE.src = GHOST;

export class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 40;
    this.height = 46;
    this.image = GHOST_IMAGE;
    this.direction = DOWN;
    this.fillcolor = 'lightgreen';
    this.animationStep = 0;
  }

  update() {
    this.animationStep += 0.2;
    if(this.animationStep >= 4) {
      this.animationStep = 0;
    }
  }

  onKeyDown(key) {
    if(key === 'ArrowLeft')       this.moveLeft();
    else if(key === 'ArrowUp')    this.moveUp();
    else if(key === 'ArrowRight') this.moveRight();
    else if(key === 'ArrowDown')  this.moveDown();
  }

  moveLeft() {
    this.x -= 5;
    this.direction = LEFT;
  }

  moveUp() {
    this.y -= 5;
    this.direction = UP;
  }

  moveRight() {
    this.x += 5;
    this.direction = RIGHT;
  }

  moveDown() {
    this.y += 5;
    this.direction = DOWN;
  }

  draw(ctx) {
    let xx = 0, yy = 0;
    switch(this.direction) {
      case UP:
        yy = this.height * 0;
        break;
      case LEFT:
        yy = this.height * 1;
        break;
      case DOWN:
        yy = this.height * 2;
        break;
      case RIGHT:
        yy = this.height * 3;
        break;
    }
    xx = this.width * Math.floor(this.animationStep);
    if(this.animationStep >= 3) { xx = this.width * 1; }
    ctx.drawImage(this.image, xx, yy, 40, 40, this.x, this.y, this.width, this.height);
  }
}
