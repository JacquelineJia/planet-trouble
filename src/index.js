'use strict';

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

function game() {
  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);
