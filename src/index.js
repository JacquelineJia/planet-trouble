'use strict';

import { Player } from './player';
import { canvas, ctx } from './canvas';

const player = new Player();
document.addEventListener("keydown", e => player.onKeyDown(e.key), false);

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  player.draw(ctx);

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
