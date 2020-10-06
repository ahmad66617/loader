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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/Render.js":
/*!**********************************!*\
  !*** ./src/js/classes/Render.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\nclass Render {\n  constructor(component) {\n    this.component = component;\n  }\n\n  init() {\n    this[this.component]();\n  }\n\n  app() {\n    const root = document.createElement('div');\n    root.id = 'root';\n    document.body.prepend(root);\n    this.app = document.querySelector('#root');\n    return this;\n  }\n\n  loaderRender() {\n    const container = document.createElement('div');\n    container.className = 'container';\n    let num = 1;\n\n    do {\n      const circle = document.createElement('div');\n      circle.classList.add('circle', 'circle-' + num);\n      container.appendChild(circle);\n      num++;\n      container.appendChild(circle);\n    } while (num <= 5);\n\n    this.app.appendChild(container);\n    return this;\n  }\n\n  listRender() {\n    const wrap = document.createElement('div');\n    const wrapTitle = document.createElement('div');\n    const line = document.createElement('hr');\n    wrapTitle.innerHTML = 'Изучайте актуальны темы';\n    wrap.classList.add('list-wrap');\n    wrapTitle.classList.add('list-wrap-title');\n    wrapTitle.appendChild(line);\n    wrap.prepend(wrapTitle);\n    this.app.appendChild(wrap);\n    this.listWrap = this.app.querySelector('.list-wrap');\n    return this;\n  }\n\n  _listItem(item) {\n    const itemWrap = document.createElement('div');\n    const itemTitle = document.createElement('div');\n    const itemDescription = document.createElement('div');\n    const itemBadge = document.createElement('span');\n    const divider = document.createElement('hr');\n    const coursesNum = item.groups.length;\n    let endCoursesString;\n    itemWrap.classList.add('list-wrap-item');\n    itemTitle.classList.add('list-wrap-item-title');\n    itemDescription.classList.add('list-wrap-item-description');\n    itemBadge.classList.add('list-wrap-item-badge');\n    itemTitle.innerHTML = item.direction.title;\n\n    if (+coursesNum === 1) {\n      endCoursesString = 'курс';\n    } else if (+coursesNum >= 5) {\n      endCoursesString = 'курсов';\n    } else {\n      endCoursesString = 'курса';\n    }\n\n    itemDescription.innerHTML = `${coursesNum} ${endCoursesString}`;\n    itemBadge.style.backgroundColor = item.direction.badge.bgColor;\n    divider.style.width = '100%';\n    itemWrap.prepend(itemTitle);\n    itemWrap.append(itemDescription);\n    itemWrap.appendChild(itemBadge);\n    itemWrap.appendChild(divider);\n    this.listWrap.appendChild(itemWrap);\n  }\n\n  resultRender(result) {\n    if (result.data.length === 0) return;\n    result.data.forEach(item => this._listItem(item));\n  }\n\n  loaderRemove() {\n    this.app.querySelector('.container').remove();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/classes/Render.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-data */ \"./src/js/modules/get-data.js\");\n/* harmony import */ var _classes_Render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Render */ \"./src/js/classes/Render.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const app = new _classes_Render__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('app');\n  app.init();\n  app.loaderRender();\n  Object(_modules_get_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(result => {\n    app.loaderRemove();\n    app.listRender();\n    app.resultRender(result);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/get-data.js":
/*!************************************!*\
  !*** ./src/js/modules/get-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\nasync function getData() {\n  try {\n    const request = await fetch('https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json');\n    return await request.json();\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/get-data.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Can't find stylesheet to import.\\n  ╷\\n1 │ @import \\\"mixins\\\";\\n  │         ^^^^^^^^\\n  ╵\\n  src/sass/index.scss 1:9  root stylesheet\\n    at /Users/ahmad/Desktop/loader/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/ahmad/Desktop/loader/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/ahmad/Desktop/loader/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/ahmad/Desktop/loader/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at /Users/ahmad/Desktop/loader/node_modules/sass-loader/dist/index.js:56:7\\n    at Function.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:89281:16)\\n    at _render_closure1.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:78489:12)\\n    at _RootZone.runBinary$3$3 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:26472:18)\\n    at _FutureListener.handleError$1 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25000:19)\\n    at _Future__propagateToListeners_handleError.call$0 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25297:49)\\n    at Object._Future__propagateToListeners (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4489:77)\\n    at _Future._completeError$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25130:9)\\n    at _AsyncAwaitCompleter.completeError$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24473:12)\\n    at Object._asyncRethrow (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4238:17)\\n    at /Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:13081:20\\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4263:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24494:12)\\n    at _awaitOnObject_closure0.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24486:25)\\n    at _RootZone.runBinary$3$3 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:26472:18)\\n    at _FutureListener.handleError$1 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25000:19)\\n    at _Future__propagateToListeners_handleError.call$0 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25297:49)\\n    at Object._Future__propagateToListeners (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4489:77)\\n    at _Future._completeError$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:25130:9)\\n    at _AsyncAwaitCompleter.completeError$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24473:12)\\n    at Object._asyncRethrow (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4238:17)\\n    at /Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:15723:20\\n    at _wrapJsFunctionForAsync_closure.$protected (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:4263:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24494:12)\\n    at _awaitOnObject_closure0.call$2 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:24486:25)\\n    at _RootZone.runBinary$3$3 (/Users/ahmad/Desktop/loader/node_modules/sass/sass.dart.js:26472:18)\");\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/ahmad/Desktop/loader/src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! /Users/ahmad/Desktop/loader/src/sass/index.scss */\"./src/sass/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/sass/index.scss?");

/***/ })

/******/ });