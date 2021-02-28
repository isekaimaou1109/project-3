module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: AppContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContext\", function() { return AppContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/root/nextjs/project-3/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // import { Sequelize, QueryTypes } from 'sequelize'\n\nconst AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])();\nfunction App({\n  Component,\n  pageProps\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    username: \"anonymous\",\n    password: \"\",\n    email: \"\"\n  });\n  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"token\", Object(uuid__WEBPACK_IMPORTED_MODULE_4__[\"v4\"])(), {\n    path: \"/\"\n  });\n\n  if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"token\", {\n    path: \"/\"\n  })) {\n    fetch(`http://localhost:3000/api/${js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"token\", {\n      path: \"/\"\n    })}`, {\n      method: \"GET\",\n      credentials: \"same-origin\"\n    }).then(client => client.json()).then(data => {\n      data.forEach(item => {\n        if (item.tokenId == js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"token\", {\n          path: \"/\"\n        })) {\n          setUser({\n            username: item.firstname,\n            password: item.password,\n            email: item.email\n          });\n        }\n      });\n    }).catch(e => console.error(e));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AppContext.Provider, {\n    value: {\n      username: user,\n      onSetUser: setUser\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiQ29va2llcyIsInNldCIsInV1aWR2NCIsInBhdGgiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwidGhlbiIsImNsaWVudCIsImpzb24iLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b2tlbklkIiwiZmlyc3RuYW1lIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwib25TZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBRUE7O0FBRU8sTUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFUSxTQUFTQyxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDO0FBQUVDLFlBQVEsRUFBRSxXQUFaO0FBQXlCQyxZQUFRLEVBQUUsRUFBbkM7QUFBdUNDLFNBQUssRUFBRTtBQUE5QyxHQUFELENBQWhDO0FBRUFDLGtEQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCQywrQ0FBTSxFQUEzQixFQUErQjtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUEvQjs7QUFFQSxNQUFHSCxnREFBTyxDQUFDSSxHQUFSLENBQVksT0FBWixFQUFxQjtBQUFFRCxRQUFJLEVBQUU7QUFBUixHQUFyQixDQUFILEVBQXdDO0FBQ3RDRSxTQUFLLENBQUUsNkJBQTRCTCxnREFBTyxDQUFDSSxHQUFSLENBQVksT0FBWixFQUFxQjtBQUFFRCxVQUFJLEVBQUU7QUFBUixLQUFyQixDQUFvQyxFQUFsRSxFQUFxRTtBQUN4RUcsWUFBTSxFQUFFLEtBRGdFO0FBRXhFQyxpQkFBVyxFQUFFO0FBRjJELEtBQXJFLENBQUwsQ0FHR0MsSUFISCxDQUdRQyxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUhsQixFQUlHRixJQUpILENBSVFHLElBQUksSUFBSTtBQUNaQSxVQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBSSxJQUFJO0FBQ25CLFlBQUdBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQmQsZ0RBQU8sQ0FBQ0ksR0FBUixDQUFZLE9BQVosRUFBb0I7QUFBQ0QsY0FBSSxFQUFDO0FBQU4sU0FBcEIsQ0FBbkIsRUFBb0Q7QUFDbERSLGlCQUFPLENBQUM7QUFBRUUsb0JBQVEsRUFBRWdCLElBQUksQ0FBQ0UsU0FBakI7QUFBNEJqQixvQkFBUSxFQUFFZSxJQUFJLENBQUNmLFFBQTNDO0FBQXFEQyxpQkFBSyxFQUFFYyxJQUFJLENBQUNkO0FBQWpFLFdBQUQsQ0FBUDtBQUNEO0FBQ0YsT0FKRDtBQUtELEtBVkgsRUFXR2lCLEtBWEgsQ0FXU0MsQ0FBQyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsQ0FBZCxDQVhkO0FBWUQ7O0FBRUQsc0JBQ0UscUVBQUMsVUFBRCxDQUFZLFFBQVo7QUFDRSxTQUFLLEVBQUU7QUFDTHBCLGNBQVEsRUFBRUgsSUFETDtBQUVMMEIsZUFBUyxFQUFFekI7QUFGTixLQURUO0FBQUEsMkJBTUUscUVBQUMsU0FBRCxvQkFBZ0JGLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIlxuLy8gaW1wb3J0IHsgU2VxdWVsaXplLCBRdWVyeVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJ1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiYW5vbnltb3VzXCIsIHBhc3N3b3JkOiBcIlwiLCBlbWFpbDogXCJcIiB9KVxuXG4gIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgdXVpZHY0KCksIHsgcGF0aDogXCIvXCIgfSlcblxuICBpZihDb29raWVzLmdldChcInRva2VuXCIsIHsgcGF0aDogXCIvXCIgfSkpIHtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8ke0Nvb2tpZXMuZ2V0KFwidG9rZW5cIiwgeyBwYXRoOiBcIi9cIiB9KX1gLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgfSkudGhlbihjbGllbnQgPT4gY2xpZW50Lmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS50b2tlbklkID09IENvb2tpZXMuZ2V0KFwidG9rZW5cIix7cGF0aDpcIi9cIn0pKSB7XG4gICAgICAgICAgICBzZXRVc2VyKHsgdXNlcm5hbWU6IGl0ZW0uZmlyc3RuYW1lLCBwYXNzd29yZDogaXRlbS5wYXNzd29yZCwgZW1haWw6IGl0ZW0uZW1haWwgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgb25TZXRVc2VyOiBzZXRVc2VyXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgIHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });