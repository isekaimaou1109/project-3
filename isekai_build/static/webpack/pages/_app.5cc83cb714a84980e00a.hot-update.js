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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var _jsxFileName = "D:\\namespaces\\nextjs-blog\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_namespaces_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    token: js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("token") || "",
    username: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!user.token) {
      setUser({
        token: js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set("token", Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])())
      });
    }
  }); //   let userId = localStorage.getItem("userID") || uuidv4() 
  //   const privateKey = readFileSync(`${process.cwd()}\\private.key`);
  //   const token = sign({ userID: userId }, privateKey, { algorithm: 'RS256' });
  //   const login = function({ user, token }) {
  //     cookie.set('token', token, { expires: 14 })
  //     setUser(user)
  //     setToken(token)
  //     trigger(`/api/users/${user.id}`)
  //  }
  //   const logout = function() {
  //   }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AppContext.Provider, {
    // value={{
    //   user: user,
    //   token: cookieToken || token,
    //   login: login,
    //   logout: logout,
    //   setUser: setUser,
    // }}
    value: "",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsInNldCIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFUSxTQUFTQyxHQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFQyxnREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixLQUF3QixFQUFqQztBQUFxQ0MsWUFBUSxFQUFFO0FBQS9DLEdBQUQsQ0FEb0I7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsT0FEdUM7O0FBR3BEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNGLElBQUksQ0FBQ0osS0FBVCxFQUFnQjtBQUNkSyxhQUFPLENBQUM7QUFBRUwsYUFBSyxFQUFFQyxnREFBTyxDQUFDTSxHQUFSLENBQVksT0FBWixFQUFxQkMsK0NBQU0sRUFBM0I7QUFBVCxPQUFELENBQVA7QUFDRDtBQUNGLEdBSlEsQ0FBVCxDQUhvRCxDQVV0RDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVFLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLLEVBQUUsRUFSVDtBQUFBLDJCQVVFLHFFQUFDLFNBQUQsb0JBQWdCVixTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0QsQyxDQUdEO0FBQ0U7QUFDQTtBQUNBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXhEd0JGLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41Y2M4M2NiNzE0YTg0OTgwZTAwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnXHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHRyaWdnZXIsIG11dGF0ZSB9IGZyb20gJ3N3cidcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHsgdG9rZW46IENvb2tpZXMuZ2V0KFwidG9rZW5cIikgfHwgXCJcIiwgdXNlcm5hbWU6IFwiXCIgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCF1c2VyLnRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIoeyB0b2tlbjogQ29va2llcy5zZXQoXCJ0b2tlblwiLCB1dWlkdjQoKSkgfSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbi8vICAgbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpIHx8IHV1aWR2NCgpIFxyXG4vLyAgIGNvbnN0IHByaXZhdGVLZXkgPSByZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX1cXFxccHJpdmF0ZS5rZXlgKTtcclxuLy8gICBjb25zdCB0b2tlbiA9IHNpZ24oeyB1c2VySUQ6IHVzZXJJZCB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2JyB9KTtcclxuXHJcbi8vICAgY29uc3QgbG9naW4gPSBmdW5jdGlvbih7IHVzZXIsIHRva2VuIH0pIHtcclxuXHJcbi8vICAgICBjb29raWUuc2V0KCd0b2tlbicsIHRva2VuLCB7IGV4cGlyZXM6IDE0IH0pXHJcblxyXG4vLyAgICAgc2V0VXNlcih1c2VyKVxyXG4vLyAgICAgc2V0VG9rZW4odG9rZW4pXHJcbi8vICAgICB0cmlnZ2VyKGAvYXBpL3VzZXJzLyR7dXNlci5pZH1gKVxyXG4vLyAgfVxyXG5cclxuLy8gICBjb25zdCBsb2dvdXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbi8vICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIC8vIHZhbHVlPXt7XHJcbiAgICAgIC8vICAgdXNlcjogdXNlcixcclxuICAgICAgLy8gICB0b2tlbjogY29va2llVG9rZW4gfHwgdG9rZW4sXHJcbiAgICAgIC8vICAgbG9naW46IGxvZ2luLFxyXG4gICAgICAvLyAgIGxvZ291dDogbG9nb3V0LFxyXG4gICAgICAvLyAgIHNldFVzZXI6IHNldFVzZXIsXHJcbiAgICAgIC8vIH19XHJcbiAgICAgIHZhbHVlPXtcIlwifVxyXG4gICAgPlxyXG4gICAgICA8Q29tcG9uZW50ICB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSBcclxuXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAvLyBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIikgfHwgdXVpZHY0KCkgXHJcbiAgLy8gY29uc3QgcHJpdmF0ZUtleSA9IHJlYWRGaWxlU3luYyhgJHtwcm9jZXNzLmN3ZCgpfVxcXFxwcml2YXRlLmtleWApO1xyXG4gIC8vIGNvbnN0IHRva2VuID0gc2lnbih7IHVzZXJJRDogdXNlcklkIH0sIHByaXZhdGVLZXksIHsgYWxnb3JpdGhtOiAnUlMyNTYnIH0pO1xyXG4gIFxyXG4gIFxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgdXNlcklEOiB0b2tlblxyXG4vLyAgICAgfSwgXHJcbi8vICAgfVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==