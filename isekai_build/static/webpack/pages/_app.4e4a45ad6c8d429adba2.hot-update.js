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
    token: "",
    username: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var privateKey = fs.readFileSync('private.key');
  var token = jwt.sign({
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])()
  }, privateKey, {
    algorithm: 'RS256'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!user.token) {
      setUser({
        username: "anonymous",
        token: window
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
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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

_s(App, "+DEMHDCJoigr9nt9pI1v1T5tYWA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidG9rZW4iLCJ1c2VybmFtZSIsInVzZXIiLCJzZXRVc2VyIiwicHJpdmF0ZUtleSIsImZzIiwicmVhZEZpbGVTeW5jIiwiand0Iiwic2lnbiIsImlkIiwidXVpZHY0IiwiYWxnb3JpdGhtIiwidXNlRWZmZWN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVRLFNBQVNDLEdBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFRLEVBQUU7QUFBdkIsR0FBRCxDQURvQjtBQUFBLE1BQzdDQyxJQUQ2QztBQUFBLE1BQ3ZDQyxPQUR1Qzs7QUFHcEQsTUFBSUMsVUFBVSxHQUFHQyxFQUFFLENBQUNDLFlBQUgsQ0FBZ0IsYUFBaEIsQ0FBakI7QUFDQSxNQUFJTixLQUFLLEdBQUdPLEdBQUcsQ0FBQ0MsSUFBSixDQUFTO0FBQUVDLE1BQUUsRUFBRUMsK0NBQU07QUFBWixHQUFULEVBQTJCTixVQUEzQixFQUF1QztBQUFFTyxhQUFTLEVBQUU7QUFBYixHQUF2QyxDQUFaO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUcsQ0FBQ1YsSUFBSSxDQUFDRixLQUFULEVBQWdCO0FBQ2RHLGFBQU8sQ0FBQztBQUFFRixnQkFBUSxFQUFFLFdBQVo7QUFBeUJELGFBQUssRUFBRWE7QUFBaEMsT0FBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLENBQVQsQ0FOb0QsQ0FhdEQ7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFRSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBSyxFQUFFLEVBUlQ7QUFBQSwyQkFVRSxxRUFBQyxTQUFELG9CQUFnQmYsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNELEMsQ0FHRDtBQUNFO0FBQ0E7QUFDQTtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0EzRHdCRixHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGU0YTQ1YWQ2YzhkNDI5YWRiYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBtdXRhdGUgfSBmcm9tICdzd3InXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IHRva2VuOiBcIlwiLCB1c2VybmFtZTogXCJcIiB9KVxyXG5cclxuICB2YXIgcHJpdmF0ZUtleSA9IGZzLnJlYWRGaWxlU3luYygncHJpdmF0ZS5rZXknKTtcclxuICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1dWlkdjQoKSB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2J30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXVzZXIudG9rZW4pIHtcclxuICAgICAgc2V0VXNlcih7IHVzZXJuYW1lOiBcImFub255bW91c1wiLCB0b2tlbjogd2luZG93IH0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG4vLyAgIGxldCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJRFwiKSB8fCB1dWlkdjQoKSBcclxuLy8gICBjb25zdCBwcml2YXRlS2V5ID0gcmVhZEZpbGVTeW5jKGAke3Byb2Nlc3MuY3dkKCl9XFxcXHByaXZhdGUua2V5YCk7XHJcbi8vICAgY29uc3QgdG9rZW4gPSBzaWduKHsgdXNlcklEOiB1c2VySWQgfSwgcHJpdmF0ZUtleSwgeyBhbGdvcml0aG06ICdSUzI1NicgfSk7XHJcblxyXG4vLyAgIGNvbnN0IGxvZ2luID0gZnVuY3Rpb24oeyB1c2VyLCB0b2tlbiB9KSB7XHJcblxyXG4vLyAgICAgY29va2llLnNldCgndG9rZW4nLCB0b2tlbiwgeyBleHBpcmVzOiAxNCB9KVxyXG5cclxuLy8gICAgIHNldFVzZXIodXNlcilcclxuLy8gICAgIHNldFRva2VuKHRva2VuKVxyXG4vLyAgICAgdHJpZ2dlcihgL2FwaS91c2Vycy8ke3VzZXIuaWR9YClcclxuLy8gIH1cclxuXHJcbi8vICAgY29uc3QgbG9nb3V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAvLyB2YWx1ZT17e1xyXG4gICAgICAvLyAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIC8vICAgdG9rZW46IGNvb2tpZVRva2VuIHx8IHRva2VuLFxyXG4gICAgICAvLyAgIGxvZ2luOiBsb2dpbixcclxuICAgICAgLy8gICBsb2dvdXQ6IGxvZ291dCxcclxuICAgICAgLy8gICBzZXRVc2VyOiBzZXRVc2VyLFxyXG4gICAgICAvLyB9fVxyXG4gICAgICB2YWx1ZT17XCJcIn1cclxuICAgID5cclxuICAgICAgPENvbXBvbmVudCAgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0gXHJcblxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gbGV0IHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpIHx8IHV1aWR2NCgpIFxyXG4gIC8vIGNvbnN0IHByaXZhdGVLZXkgPSByZWFkRmlsZVN5bmMoYCR7cHJvY2Vzcy5jd2QoKX1cXFxccHJpdmF0ZS5rZXlgKTtcclxuICAvLyBjb25zdCB0b2tlbiA9IHNpZ24oeyB1c2VySUQ6IHVzZXJJZCB9LCBwcml2YXRlS2V5LCB7IGFsZ29yaXRobTogJ1JTMjU2JyB9KTtcclxuICBcclxuICBcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIHVzZXJJRDogdG9rZW5cclxuLy8gICAgIH0sIFxyXG4vLyAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=