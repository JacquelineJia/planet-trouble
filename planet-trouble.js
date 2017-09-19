/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(1);




const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

function game() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222222";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  Object(__WEBPACK_IMPORTED_MODULE_0__player__["a" /* drawPlayer */])();

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawPlayer;


const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

var playerTemplate = {
  x : canvas.width/2,
  y : canvas.height/2,
  fillcolor : 'lightgreen',
  radius : 15
};

function drawPlayer() {
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


/***/ })
/******/ ]);