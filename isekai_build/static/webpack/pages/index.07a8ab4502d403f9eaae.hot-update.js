webpackHotUpdate_N_E("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.module.scss */ "./styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\namespaces\\nextjs-blog\\components\\nav.js",
    _s = $RefreshSig$();




function Nav(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: function onClick() {
            return router.replace("/");
          },
          src: "/images/mega_icon.jpg",
          width: "42px",
          height: "42px",
          style: {
            alignSelf: "center"
          },
          alt: "mega_icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-btn"],
          onClick: function onClick() {
            return router.replace("/registerb");
          },
          children: "MEGA for Business"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.changelang,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            style: {
              fontSize: "18px"
            },
            className: "fas fa-globe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "EN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["btn-wrap"],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick() {
              return router.push("/register");
            },
            className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-btn"], " ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-signup-btn"]),
            children: "Create Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), router.pathname === "/login" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick(e) {
              return router.push("/login");
            },
            className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-btn"], "  ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-login-btn"]),
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/javascripts/popup.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Nav, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJuYXYiLCJsZWZ0IiwicmVwbGFjZSIsImFsaWduU2VsZiIsInJpZ2h0IiwiY2hhbmdlbGFuZyIsImZvbnRTaXplIiwicHVzaCIsInBhdGhuYW1lIiwiZSIsInNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssUUFBRSxFQUFFQyxnRUFBTSxDQUFDQyxHQUFoQjtBQUFBLDhCQUNFO0FBQUssVUFBRSxFQUFFRCxnRUFBTSxDQUFDRSxJQUFoQjtBQUFBLGdDQUNFLHFFQUFDLGlEQUFEO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFNSixNQUFNLENBQUNLLE9BQVAsQ0FBZSxHQUFmLENBQU47QUFBQSxXQUFoQjtBQUEyQyxhQUFHLEVBQUMsdUJBQS9DO0FBQXVFLGVBQUssRUFBQyxNQUE3RTtBQUFvRixnQkFBTSxFQUFDLE1BQTNGO0FBQWtHLGVBQUssRUFBRTtBQUFFQyxxQkFBUyxFQUFFO0FBQWIsV0FBekc7QUFBa0ksYUFBRyxFQUFDO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVKLGdFQUFNLENBQUMsVUFBRCxDQUF0QjtBQUFvQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1GLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlLFlBQWYsQ0FBTjtBQUFBLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxVQUFFLEVBQUVILGdFQUFNLENBQUNLLEtBQWhCO0FBQUEsZ0NBQ0U7QUFBSSxZQUFFLEVBQUVMLGdFQUFNLENBQUNNLFVBQWY7QUFBQSxrQ0FDRTtBQUFHLGlCQUFLLEVBQUU7QUFBRUMsc0JBQVEsRUFBQztBQUFYLGFBQVY7QUFBK0IscUJBQVMsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBQytELEdBRC9ELGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxZQUFFLEVBQUVQLGdFQUFNLENBQUMsVUFBRCxDQUFmO0FBQUEsa0NBQ0U7QUFBSyxtQkFBTyxFQUFFO0FBQUEscUJBQU1GLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLFdBQVosQ0FBTjtBQUFBLGFBQWQ7QUFBOEMscUJBQVMsWUFBS1IsZ0VBQU0sQ0FBQyxVQUFELENBQVgsY0FBMkJBLGdFQUFNLENBQUMsaUJBQUQsQ0FBakMsQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR0YsTUFBTSxDQUFDVyxRQUFQLEtBQW9CLFFBQXBCLGlCQUFnQztBQUFLLG1CQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxxQkFBT1osTUFBTSxDQUFDVSxJQUFQLENBQVksUUFBWixDQUFQO0FBQUEsYUFBZDtBQUE0QyxxQkFBUyxZQUFLUixnRUFBTSxDQUFDLFVBQUQsQ0FBWCxlQUE0QkEsZ0VBQU0sQ0FBQyxnQkFBRCxDQUFsQyxDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBU0U7QUFBSyxZQUFFLEVBQUVBLGdFQUFNLENBQUNXLE9BQWhCO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFvQkU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGO0FBQUEsa0JBREY7QUF3QkQ7O0dBM0J1QmYsRztVQUNQRyxxRDs7O0tBRE9ILEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdhOGFiNDUwMmQ0MDNmOWVhYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBpZD17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZXBsYWNlKFwiL1wiKX0gc3JjPVwiL2ltYWdlcy9tZWdhX2ljb24uanBnXCIgd2lkdGg9XCI0MnB4XCIgaGVpZ2h0PVwiNDJweFwiIHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fSBhbHQ9XCJtZWdhX2ljb25cIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lZ2EtYnRuXCJdfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9yZWdpc3RlcmJcIil9Pk1FR0EgZm9yIEJ1c2luZXNzPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgIDxoNCBpZD17c3R5bGVzLmNoYW5nZWxhbmd9PlxyXG4gICAgICAgICAgICA8aSBzdHlsZT17eyBmb250U2l6ZTpcIjE4cHhcIiB9fSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmVcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5FTjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXNbXCJidG4td3JhcFwiXX0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIil9IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVnYS1idG5cIl19ICR7c3R5bGVzW1wibWVnYS1zaWdudXAtYnRuXCJdfWB9PkNyZWF0ZSBBY2NvdW50PC9kaXY+XHJcbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgfHwgPGRpdiBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wibWVnYS1idG5cIl19ICAke3N0eWxlc1tcIm1lZ2EtbG9naW4tYnRuXCJdfWB9PkxvZ2luPC9kaXY+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9qYXZhc2NyaXB0cy9wb3B1cC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9