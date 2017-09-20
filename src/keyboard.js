'use strict';
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

const pressed = new Set();

function keydown({ key }) {
  pressed.add(key);
}

function keyup({ key }) {
  pressed.delete(key);
}

export function check(key) {
  return pressed.has(key);
}

export const LEFT = 'ArrowLeft';
export const RIGHT = 'ArrowRight';
export const UP = 'ArrowUp';
export const DOWN = 'ArrowDown';
