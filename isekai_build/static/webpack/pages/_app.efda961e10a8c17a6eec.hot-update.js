webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: AppContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var D_namespaces_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var _jsxFileName = "D:\\namespaces\\nextjs-blog\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_namespaces_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") || "",
    username: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!user.token) {
      setUser({
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])())
      });
    }
  }); //   let userId = localStorage.getItem("userID") || uuidv4() 
  //   const privateKey = readFileSync(`${process.cwd()}\\private.key`);
  //   const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });

  var logout = function logout(userInfo) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AppContext.Provider, {
    value: {
      onLogin: setUser,
      onLogout: logout,
      userInfo: user
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps(context) {
// let userId = localStorage.getItem("userID") || uuidv4() 
// const privateKey = readFileSync(`${process.cwd()}\\private.key`);
// const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });
//   return {
//     props: {
//       userID: token
//     }, 
//   }
// }

_s(App, "cdvkj/Z2LPzRC13KFJhtbvSmzaI=");

_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsInNldCIsInV1aWR2NCIsImxvZ291dCIsInVzZXJJbmZvIiwicmVtb3ZlIiwib25Mb2dpbiIsIm9uTG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRVEsU0FBU0MsR0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDO0FBQUVDLFNBQUssRUFBRUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosS0FBd0IsRUFBakM7QUFBcUNDLFlBQVEsRUFBRTtBQUEvQyxHQUFELENBRG9CO0FBQUEsTUFDN0NDLElBRDZDO0FBQUEsTUFDdkNDLE9BRHVDOztBQUdwREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxDQUFDRixJQUFJLENBQUNKLEtBQVQsRUFBZ0I7QUFDZEssYUFBTyxDQUFDO0FBQUVMLGFBQUssRUFBRUMsZ0RBQU8sQ0FBQ00sR0FBUixDQUFZLE9BQVosRUFBcUJDLCtDQUFNLEVBQTNCO0FBQVQsT0FBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLENBQVQsQ0FIb0QsQ0FVdEQ7QUFDQTtBQUNBOztBQUVFLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVNDLFFBQVQsRUFBbUI7QUFDaENULG9EQUFPLENBQUNVLE1BQVIsQ0FBZSxPQUFmO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUNFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUVQLE9BREo7QUFFTFEsY0FBUSxFQUFFSixNQUZMO0FBR0xDLGNBQVEsRUFBRU47QUFITCxLQURUO0FBQUEsMkJBT0UscUVBQUMsU0FBRCxvQkFBZ0JOLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCxDLENBR0Q7QUFDRTtBQUNBO0FBQ0E7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBNUN3QkYsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVmZGE5NjFlMTBhOGMxN2E2ZWVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHsgdG9rZW46IENvb2tpZXMuZ2V0KFwidG9rZW5cIikgfHwgXCJcIiwgdXNlcm5hbWU6IFwiXCIgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCF1c2VyLnRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIoeyB0b2tlbjogQ29va2llcy5zZXQoXCJ0b2tlblwiLCB1dWlkdjQoKSkgfSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbi8vICAgbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpIHx8IHV1aWR2NCgpIFxyXG4vLyAgIGNvbnN0IHByaXZhdGVLZXkgPSByZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX1cXFxccHJpdmF0ZS5rZXlgKTtcclxuLy8gICBjb25zdCB0b2tlbiA9IHNpZ24oeyB1c2VySUQ6IHVzZXJJZCB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2JyB9KTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gZnVuY3Rpb24odXNlckluZm8pIHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBvbkxvZ2luOiBzZXRVc2VyLFxyXG4gICAgICAgIG9uTG9nb3V0OiBsb2dvdXQsXHJcbiAgICAgICAgdXNlckluZm86IHVzZXJcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbXBvbmVudCAgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0gXHJcblxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpIHx8IHV1aWR2NCgpIFxyXG4gIC8vIGNvbnN0IHByaXZhdGVLZXkgPSByZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX1cXFxccHJpdmF0ZS5rZXlgKTtcclxuICAvLyBjb25zdCB0b2tlbiA9IHNpZ24oeyB1c2VySUQ6IHVzZXJJZCB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2JyB9KTtcclxuICBcclxuICBcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIHVzZXJJRDogdG9rZW5cclxuLy8gICAgIH0sIFxyXG4vLyAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=