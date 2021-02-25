webpackHotUpdate_N_E("pages/login",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJuYXYiLCJsZWZ0IiwicmVwbGFjZSIsImFsaWduU2VsZiIsInJpZ2h0IiwibWFyZ2luIiwiZm9udFNpemUiLCJwYXRobmFtZSIsImUiLCJwdXNoIiwic2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUVDLGdFQUFNLENBQUNDLEdBQWhCO0FBQUEsOEJBQ0U7QUFBSyxVQUFFLEVBQUVELGdFQUFNLENBQUNFLElBQWhCO0FBQUEsZ0NBQ0UscUVBQUMsaURBQUQ7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlLEdBQWYsQ0FBTjtBQUFBLFdBQWhCO0FBQTJDLGFBQUcsRUFBQyx1QkFBL0M7QUFBdUUsZUFBSyxFQUFDLE1BQTdFO0FBQW9GLGdCQUFNLEVBQUMsTUFBM0Y7QUFBa0csZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUF6RztBQUFrSSxhQUFHLEVBQUM7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUosZ0VBQU0sQ0FBQyxVQUFELENBQXRCO0FBQW9DLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUYsTUFBTSxDQUFDSyxPQUFQLENBQWUsWUFBZixDQUFOO0FBQUEsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLFVBQUUsRUFBRUgsZ0VBQU0sQ0FBQ0ssS0FBaEI7QUFBQSxnQ0FDRTtBQUFJLGVBQUssRUFBRTtBQUFFQyxrQkFBTSxFQUFDLENBQVQ7QUFBWUYscUJBQVMsRUFBQztBQUF0QixXQUFYO0FBQUEsa0NBQ0U7QUFBRyxpQkFBSyxFQUFFO0FBQUVHLHNCQUFRLEVBQUM7QUFBWCxhQUFWO0FBQStCLHFCQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUMrRCxHQUQvRCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssWUFBRSxFQUFFUCxnRUFBTSxDQUFDLFVBQUQsQ0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsWUFBS0EsZ0VBQU0sQ0FBQyxVQUFELENBQVgsY0FBMkJBLGdFQUFNLENBQUMsaUJBQUQsQ0FBakMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHRixNQUFNLENBQUNVLFFBQVAsS0FBb0IsUUFBcEIsaUJBQWdDO0FBQUssbUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLHFCQUFPWCxNQUFNLENBQUNZLElBQVAsQ0FBWSxRQUFaLENBQVA7QUFBQSxhQUFkO0FBQTRDLHFCQUFTLFlBQUtWLGdFQUFNLENBQUMsVUFBRCxDQUFYLGVBQTRCQSxnRUFBTSxDQUFDLGdCQUFELENBQWxDLENBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFTRTtBQUFLLFlBQUUsRUFBRUEsZ0VBQU0sQ0FBQ1csT0FBaEI7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXVCRDs7R0ExQnVCZixHO1VBQ1BHLHFEOzs7S0FET0gsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi45MTkwZjNmMWUyMTRjMDdiYzMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgaWQ9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVwbGFjZShcIi9cIil9IHNyYz1cIi9pbWFnZXMvbWVnYV9pY29uLmpwZ1wiIHdpZHRoPVwiNDJweFwiIGhlaWdodD1cIjQycHhcIiBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfX0gYWx0PVwibWVnYV9pY29uXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtZWdhLWJ0blwiXX0gb25DbGljaz17KCkgPT4gcm91dGVyLnJlcGxhY2UoXCIvcmVnaXN0ZXJiXCIpfT5NRUdBIGZvciBCdXNpbmVzczwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOjAsIGFsaWduU2VsZjpcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICA8aSBzdHlsZT17eyBmb250U2l6ZTpcIjE4cHhcIiB9fSBjbGFzc05hbWU9XCJmYXMgZmEtZ2xvYmVcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICA8c3Bhbj5FTjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXNbXCJidG4td3JhcFwiXX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZWdhLWJ0blwiXX0gJHtzdHlsZXNbXCJtZWdhLXNpZ251cC1idG5cIl19YH0+Q3JlYXRlIEFjY291bnQ8L2Rpdj5cclxuICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvbG9naW5cIiB8fCA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJtZWdhLWJ0blwiXX0gICR7c3R5bGVzW1wibWVnYS1sb2dpbi1idG5cIl19YH0+TG9naW48L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zaWRlYmFyfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=