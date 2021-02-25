webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

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



var _jsxFileName = "D:\\namespaces\\nextjs-blog\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_namespaces_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();
function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {// window.
  }); //   const [token, setToken] = useState()
  //   let userId = localStorage.getItem("userID") || uuidv4() 
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
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

_s(App, "hT6C72rcbfRUedrDq+TPaFfRI/M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR08sSUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFUSxTQUFTQyxHQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDNUJDLHNEQUFRLEVBRG9CO0FBQUEsTUFDN0NDLElBRDZDO0FBQUEsTUFDdkNDLE9BRHVDOztBQUdwREMseURBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDRCxHQUZRLENBQVQsQ0FIb0QsQ0FNdEQ7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVFLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLLEVBQUUsRUFSVDtBQUFBLDJCQVVFLHFFQUFDLFNBQUQsb0JBQWdCSixTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0QsQyxDQUdEO0FBQ0U7QUFDQTtBQUNBO0FBSUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXREd0JGLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43OGE1ZDUyNmQxYTcwMDIxMTgzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnXHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHRyaWdnZXIsIG11dGF0ZSB9IGZyb20gJ3N3cidcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHdpbmRvdy5cclxuICB9KVxyXG4vLyAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKVxyXG5cclxuLy8gICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIikgfHwgdXVpZHY0KCkgXHJcbi8vICAgY29uc3QgcHJpdmF0ZUtleSA9IHJlYWRGaWxlU3luYyhgJHtwcm9jZXNzLmN3ZCgpfVxcXFxwcml2YXRlLmtleWApO1xyXG4vLyAgIGNvbnN0IHRva2VuID0gc2lnbih7IHVzZXJJRDogdXNlcklkIH0sIHByaXZhdGVLZXksIHsgYWxnb3JpdGhtOiAnUlMyNTYnIH0pO1xyXG5cclxuLy8gICBjb25zdCBsb2dpbiA9IGZ1bmN0aW9uKHsgdXNlciwgdG9rZW4gfSkge1xyXG5cclxuLy8gICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4sIHsgZXhwaXJlczogMTQgfSlcclxuXHJcbi8vICAgICBzZXRVc2VyKHVzZXIpXHJcbi8vICAgICBzZXRUb2tlbih0b2tlbilcclxuLy8gICAgIHRyaWdnZXIoYC9hcGkvdXNlcnMvJHt1c2VyLmlkfWApXHJcbi8vICB9XHJcblxyXG4vLyAgIGNvbnN0IGxvZ291dCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgLy8gdmFsdWU9e3tcclxuICAgICAgLy8gICB1c2VyOiB1c2VyLFxyXG4gICAgICAvLyAgIHRva2VuOiBjb29raWVUb2tlbiB8fCB0b2tlbixcclxuICAgICAgLy8gICBsb2dpbjogbG9naW4sXHJcbiAgICAgIC8vICAgbG9nb3V0OiBsb2dvdXQsXHJcbiAgICAgIC8vICAgc2V0VXNlcjogc2V0VXNlcixcclxuICAgICAgLy8gfX1cclxuICAgICAgdmFsdWU9e1wiXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxDb21wb25lbnQgIHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59IFxyXG5cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIGxldCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJRFwiKSB8fCB1dWlkdjQoKSBcclxuICAvLyBjb25zdCBwcml2YXRlS2V5ID0gcmVhZEZpbGVTeW5jKGAke3Byb2Nlc3MuY3dkKCl9XFxcXHByaXZhdGUua2V5YCk7XHJcbiAgLy8gY29uc3QgdG9rZW4gPSBzaWduKHsgdXNlcklEOiB1c2VySWQgfSwgcHJpdmF0ZUtleSwgeyBhbGdvcml0aG06ICdSUzI1NicgfSk7XHJcbiAgXHJcbiAgXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICB1c2VySUQ6IHRva2VuXHJcbi8vICAgICB9LCBcclxuLy8gICB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9