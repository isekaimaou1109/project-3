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

  var logout = function logout(change) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token");
    change({
      token: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
      username: "anonymous"
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AppContext.Provider, {
    value: {
      onLogin: setUser,
      onLogout: logout,
      userInfo: user
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsInNldCIsInV1aWR2NCIsImxvZ291dCIsImNoYW5nZSIsInJlbW92ZSIsIm9uTG9naW4iLCJvbkxvZ291dCIsInVzZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRVEsU0FBU0MsR0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDO0FBQUVDLFNBQUssRUFBRUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosS0FBd0IsRUFBakM7QUFBcUNDLFlBQVEsRUFBRTtBQUEvQyxHQUFELENBRG9CO0FBQUEsTUFDN0NDLElBRDZDO0FBQUEsTUFDdkNDLE9BRHVDOztBQUdwREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxDQUFDRixJQUFJLENBQUNKLEtBQVQsRUFBZ0I7QUFDZEssYUFBTyxDQUFDO0FBQUVMLGFBQUssRUFBRUMsZ0RBQU8sQ0FBQ00sR0FBUixDQUFZLE9BQVosRUFBcUJDLCtDQUFNLEVBQTNCO0FBQVQsT0FBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLENBQVQsQ0FIb0QsQ0FVdEQ7QUFDQTtBQUNBOztBQUVFLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVNDLE1BQVQsRUFBaUI7QUFDOUJULG9EQUFPLENBQUNVLE1BQVIsQ0FBZSxPQUFmO0FBQ0FELFVBQU0sQ0FBQztBQUFFVixXQUFLLEVBQUVRLCtDQUFNLEVBQWY7QUFBbUJMLGNBQVEsRUFBRTtBQUE3QixLQUFELENBQU47QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQ0UsU0FBSyxFQUFFO0FBQ0xTLGFBQU8sRUFBRVAsT0FESjtBQUVMUSxjQUFRLEVBQUVKLE1BRkw7QUFHTEssY0FBUSxFQUFFVjtBQUhMLEtBRFQ7QUFBQSwyQkFPRSxxRUFBQyxTQUFELG9CQUFnQk4sU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELEMsQ0FHRDtBQUNFO0FBQ0E7QUFDQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E3Q3dCRixHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTdhMGVjMjAwYzk5YzYyZjA0MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoeyB0b2tlbjogQ29va2llcy5nZXQoXCJ0b2tlblwiKSB8fCBcIlwiLCB1c2VybmFtZTogXCJcIiB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXVzZXIudG9rZW4pIHtcclxuICAgICAgc2V0VXNlcih7IHRva2VuOiBDb29raWVzLnNldChcInRva2VuXCIsIHV1aWR2NCgpKSB9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuLy8gICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIikgfHwgdXVpZHY0KCkgXHJcbi8vICAgY29uc3QgcHJpdmF0ZUtleSA9IHJlYWRGaWxlU3luYyhgJHtwcm9jZXNzLmN3ZCgpfVxcXFxwcml2YXRlLmtleWApO1xyXG4vLyAgIGNvbnN0IHRva2VuID0gc2lnbih7IHVzZXJJRDogdXNlcklkIH0sIHByaXZhdGVLZXksIHsgYWxnb3JpdGhtOiAnUlMyNTYnIH0pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSBmdW5jdGlvbihjaGFuZ2UpIHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIilcclxuICAgIGNoYW5nZSh7IHRva2VuOiB1dWlkdjQoKSwgdXNlcm5hbWU6IFwiYW5vbnltb3VzXCIgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBvbkxvZ2luOiBzZXRVc2VyLFxyXG4gICAgICAgIG9uTG9nb3V0OiBsb2dvdXQsXHJcbiAgICAgICAgdXNlckluZm86IHVzZXJcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbXBvbmVudCAgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0gXHJcblxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpIHx8IHV1aWR2NCgpIFxyXG4gIC8vIGNvbnN0IHByaXZhdGVLZXkgPSByZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX1cXFxccHJpdmF0ZS5rZXlgKTtcclxuICAvLyBjb25zdCB0b2tlbiA9IHNpZ24oeyB1c2VySUQ6IHVzZXJJZCB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2JyB9KTtcclxuICBcclxuICBcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIHVzZXJJRDogdG9rZW5cclxuLy8gICAgIH0sIFxyXG4vLyAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=