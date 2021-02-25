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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
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
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-btn"],
          onClick: function onClick() {
            return router.replace("/registerb");
          },
          children: "MEGA for Business"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          style: {
            margin: 0,
            alignSelf: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            style: {
              fontSize: "18px"
            },
            className: "fas fa-globe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "EN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
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
            lineNumber: 21,
            columnNumber: 13
          }, this), router.pathname === "/login" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: function onClick(e) {
              return router.push("/login");
            },
            className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-btn"], "  ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mega-login-btn"]),
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJuYXYiLCJsZWZ0IiwicmVwbGFjZSIsImFsaWduU2VsZiIsInJpZ2h0IiwibWFyZ2luIiwiZm9udFNpemUiLCJwdXNoIiwicGF0aG5hbWUiLCJlIiwic2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUVDLGdFQUFNLENBQUNDLEdBQWhCO0FBQUEsOEJBQ0U7QUFBSyxVQUFFLEVBQUVELGdFQUFNLENBQUNFLElBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsaURBQUQ7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlLEdBQWYsQ0FBTjtBQUFBLFdBQWhCO0FBQTJDLGFBQUcsRUFBQyx1QkFBL0M7QUFBdUUsZUFBSyxFQUFDLE1BQTdFO0FBQW9GLGdCQUFNLEVBQUMsTUFBM0Y7QUFBa0csZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUF6RztBQUFrSSxhQUFHLEVBQUM7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUosZ0VBQU0sQ0FBQyxVQUFELENBQXRCO0FBQW9DLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUYsTUFBTSxDQUFDSyxPQUFQLENBQWUsWUFBZixDQUFOO0FBQUEsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLFVBQUUsRUFBRUgsZ0VBQU0sQ0FBQ0ssS0FBaEI7QUFBQSxnQ0FDRTtBQUFJLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFDLENBQVQ7QUFBWUYscUJBQVMsRUFBQztBQUF0QixXQUFYO0FBQUEsa0NBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUVHLHNCQUFRLEVBQUM7QUFBWCxhQUFWO0FBQStCLHFCQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUMrRCxHQUQvRCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssWUFBRSxFQUFFUCxnRUFBTSxDQUFDLFVBQUQsQ0FBZjtBQUFBLGtDQUNFO0FBQUssbUJBQU8sRUFBRTtBQUFBLHFCQUFNRixNQUFNLENBQUNVLElBQVAsQ0FBWSxXQUFaLENBQU47QUFBQSxhQUFkO0FBQThDLHFCQUFTLFlBQUtSLGdFQUFNLENBQUMsVUFBRCxDQUFYLGNBQTJCQSxnRUFBTSxDQUFDLGlCQUFELENBQWpDLENBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdGLE1BQU0sQ0FBQ1csUUFBUCxLQUFvQixRQUFwQixpQkFBZ0M7QUFBSyxtQkFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEscUJBQU9aLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLFFBQVosQ0FBUDtBQUFBLGFBQWQ7QUFBNEMscUJBQVMsWUFBS1IsZ0VBQU0sQ0FBQyxVQUFELENBQVgsZUFBNEJBLGdFQUFNLENBQUMsZ0JBQUQsQ0FBbEMsQ0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFO0FBQUssWUFBRSxFQUFFQSxnRUFBTSxDQUFDVyxPQUFoQjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUJEOztHQTFCdUJmLEc7VUFDUEcscUQ7OztLQURPSCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkYTg0YWYyOTZiOGVmYmY4MDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBpZD17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmxlZnR9PlxyXG4gICAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZXBsYWNlKFwiL1wiKX0gc3JjPVwiL2ltYWdlcy9tZWdhX2ljb24uanBnXCIgd2lkdGg9XCI0MnB4XCIgaGVpZ2h0PVwiNDJweFwiIHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fSBhbHQ9XCJtZWdhX2ljb25cIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lZ2EtYnRuXCJdfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9yZWdpc3RlcmJcIil9Pk1FR0EgZm9yIEJ1c2luZXNzPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46MCwgYWxpZ25TZWxmOlwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxpIHN0eWxlPXt7IGZvbnRTaXplOlwiMThweFwiIH19IGNsYXNzTmFtZT1cImZhcyBmYS1nbG9iZVwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuPkVOPC9zcGFuPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlc1tcImJ0bi13cmFwXCJdfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZWdhLWJ0blwiXX0gJHtzdHlsZXNbXCJtZWdhLXNpZ251cC1idG5cIl19YH0+Q3JlYXRlIEFjY291bnQ8L2Rpdj5cclxuICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvbG9naW5cIiB8fCA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZWdhLWJ0blwiXX0gICR7c3R5bGVzW1wibWVnYS1sb2dpbi1idG5cIl19YH0+TG9naW48L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zaWRlYmFyfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=