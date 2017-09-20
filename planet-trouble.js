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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const canvas = document.querySelector('#game');
/* harmony export (immutable) */ __webpack_exports__["a"] = canvas;

const ctx = canvas.getContext('2d');
/* harmony export (immutable) */ __webpack_exports__["b"] = ctx;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas__ = __webpack_require__(0);





function game() {
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].height);
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].fillStyle = "#222222";
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].height);

  Object(__WEBPACK_IMPORTED_MODULE_0__player__["a" /* drawPlayer */])();

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawPlayer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);



const playerTemplate = {
  x : __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width/2,
  y : __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height/2,
  fillcolor : 'lightgreen',
  radius : 15
};

function drawPlayer() {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath();
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].arc(playerTemplate.x, playerTemplate.y, playerTemplate.radius, 0, Math.PI*2);
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = playerTemplate.fillcolor;
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill();
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].closePath();
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
  playerTemplate.x -= 25;
}

function moveUp() {
  playerTemplate.y -= 25;
}

function moveRight() {
  playerTemplate.x += 25;
}

function moveDown() {
  playerTemplate.y += 25;
}


/***/ })
/******/ ]);