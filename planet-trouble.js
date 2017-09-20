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





const player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */]();
document.addEventListener("keydown", e => player.onKeyDown(e.key), false);

function game() {
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].height);
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].fillStyle = "#222222";
  __WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */].fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_1__canvas__["a" /* canvas */].height);

  player.update();
  player.draw(__WEBPACK_IMPORTED_MODULE_1__canvas__["b" /* ctx */]);

  window.requestAnimationFrame(game);
}

window.requestAnimationFrame(game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_ghost_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_ghost_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__images_ghost_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directions__ = __webpack_require__(4);





const GHOST_IMAGE = new Image();
GHOST_IMAGE.src = __WEBPACK_IMPORTED_MODULE_1__images_ghost_png___default.a;

class Player {
  constructor() {
    this.x = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width / 2;
    this.y = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height / 2;
    this.width = 40;
    this.height = 46;
    this.image = GHOST_IMAGE;
    this.direction = __WEBPACK_IMPORTED_MODULE_2__directions__["a" /* DOWN */];
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
    this.direction = __WEBPACK_IMPORTED_MODULE_2__directions__["b" /* LEFT */];
  }

  moveUp() {
    this.y -= 5;
    this.direction = __WEBPACK_IMPORTED_MODULE_2__directions__["d" /* UP */];
  }

  moveRight() {
    this.x += 5;
    this.direction = __WEBPACK_IMPORTED_MODULE_2__directions__["c" /* RIGHT */];
  }

  moveDown() {
    this.y += 5;
    this.direction = __WEBPACK_IMPORTED_MODULE_2__directions__["a" /* DOWN */];
  }

  draw(ctx) {
    let xx = 0, yy = 0;
    switch(this.direction) {
      case __WEBPACK_IMPORTED_MODULE_2__directions__["d" /* UP */]:
        yy = this.height * 0;
        break;
      case __WEBPACK_IMPORTED_MODULE_2__directions__["b" /* LEFT */]:
        yy = this.height * 1;
        break;
      case __WEBPACK_IMPORTED_MODULE_2__directions__["a" /* DOWN */]:
        yy = this.height * 2;
        break;
      case __WEBPACK_IMPORTED_MODULE_2__directions__["c" /* RIGHT */]:
        yy = this.height * 3;
        break;
    }
    xx = this.width * Math.floor(this.animationStep);
    if(this.animationStep >= 3) { xx = this.width * 1; }
    ctx.drawImage(this.image, xx, yy, 40, 40, this.x, this.y, this.width, this.height);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const UP = Symbol('up');
/* harmony export (immutable) */ __webpack_exports__["d"] = UP;

const LEFT = Symbol('left');
/* harmony export (immutable) */ __webpack_exports__["b"] = LEFT;

const RIGHT = Symbol('right');
/* harmony export (immutable) */ __webpack_exports__["c"] = RIGHT;

const DOWN = Symbol('down');
/* harmony export (immutable) */ __webpack_exports__["a"] = DOWN;



/***/ })
/******/ ]);