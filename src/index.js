'use strict';

import { Player } from './player';
import { canvas, ctx } from './canvas';

export const player = new Player();

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.draw(ctx);

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
