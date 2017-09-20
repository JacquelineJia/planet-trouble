'use strict';

import { drawPlayer } from './player';
import { canvas, ctx } from './canvas';

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPlayer();

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
