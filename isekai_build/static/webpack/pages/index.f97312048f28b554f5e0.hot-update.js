webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.module.scss */ "./styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./components/header.js");


var _jsxFileName = "D:\\namespaces\\nextjs-blog\\components\\layout.js";


function Container(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Container;

var _c;

$RefreshReg$(_c, "Container");

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.module.scss */ "./styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_nav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav.js */ "./components/nav.js");
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");



var _jsxFileName = "D:\\namespaces\\nextjs-blog\\pages\\index.js",
    _s = $RefreshSig$();








var items = [{
  title: "Desktop Service",
  content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
  isToggle: true
}, {
  title: "Desktop Service",
  content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
  isToggle: false
}, {
  title: "Desktop Service",
  content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
  isToggle: false
}, {
  title: "Desktop Service",
  content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
  isToggle: false
}, {
  title: "Desktop Service",
  content: "Easy automated synchronization between your computer and your MEGA cloud. Available for Windows, Mac and Linux.",
  isToggle: false
}];
var benefits = [{
  path: "/images/mega_icon_lock.jpg",
  title: "Privacy",
  content: "By properly applying end-to-end encryption, MEGA achieves actual privacy by design.",
  ableToLearn: true
}, {
  path: "/images/mega_icon_cloud.jpg",
  title: "Powerful",
  content: "MEGA is a cloud based service which can be used from all major devices and platforms from anywhere with Internet.",
  ableToLearn: false
}, {
  path: "/images/mega_icon_chatter.jpg",
  title: "Secure",
  content: "MEGA is carefully engineered to achieve the highest level of security for its users.",
  ableToLearn: true
}, {
  path: "/images/mega_icon_user.jpg",
  title: "Transparent",
  content: "MEGA’s client apps are Public Source. Its cryptographic architecture is specified in a comprehensive Security Whitepaper.",
  ableToLearn: true
}, {
  path: "/images/mega_icon_document.jpg",
  title: "Reliable",
  content: "MEGA owns and operates its redundant server infrastructure directly, ensuring that your data always remains available.",
  ableToLearn: true
}, {
  path: "/images/mega_icon_cert.jpg",
  title: "Generous",
  content: "MEGA is one of the most generous cloud services on the Internet, with easy ways to expand and extend your free storage.",
  ableToLearn: false
}];
var fn_items = [{
  path: "/images/chat_fn.png",
  title: "Chat securely",
  content: "Connect with your contacts on MEGA and stay in touch; securely exchange messages and have audio, video or group calls with MEGAchat."
}, {
  path: "/images/cloud_fn.png",
  title: "Backup",
  content: "Automatically backup photos and videos from your mobile device with Camera Uploads, and sync your computer data with MEGA’s Desktop App. MEGA automatically maintains historic versions of your files, allowing you to easily revert when needed."
}, {
  path: "/images/sync_fn.png",
  title: "Synchronize",
  content: "Easy automated synchronization between your computer and your MEGA Cloud."
}, {
  path: "/images/transfer_fn.png",
  title: "Share",
  content: "Export securely keyed links to your files and folders, or share folders directly with your contacts on MEGA."
}];
var evalutions = [{
  stars: 5,
  evalution: "MEGA is our hands-down winner for free cloud storage and backup. If this Kiwi company's 50GB of free storage isn't enough for your business needs, they offer four more tiers of service, with plans from 200GB to 8TB, all available for less than US$25 per month.",
  url_web: "https://www.inc.com/technology/mega-review-best-free-cloud-storage-backup-for-small-business.html"
}, {
  stars: 5,
  evalution: "Mega puts its security credentials front and centre. Unlike some of its rivals, this service provides encryption in every part of the process. Anything you send to the cloud is encrypted locally, on-route, and on the destination server.”",
  url_web: "https://www.techadvisor.co.uk/test-centre/internet/best-cloud-storage-2018-3614269/"
}, {
  stars: 5,
  evalution: "“S'enrichissant de nouvelles fonctionnalités au fil des mois, Mega est l'un des meilleurs choix possible lorsqu’on souhaite déposer un gros volume de données sur le Cloud. On apprécie aussi sa fonction de partage, la plus simple d'emploi qui soit”",
  url_web: "https://www.tomsguide.fr/2016/12/07/stockage-en-ligne-gratuit-quel-service-choisir/"
}, {
  stars: 5,
  evalution: "and a simple drag-and-drop interface, New Zealand based Mega is one of the cloud storage heavyweights. There's a handy mobile app to allow you to upload files and photos, as well as sync clients with desktop machines.",
  url_web: "https://www.techradar.com/news/the-best-cloud-storage"
}];
function Index() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Trang ch\u1EE7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_nav_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "/javascripts/navbar-trackdown.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.homepage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "title-homepage",
          style: {
            fontSize: '32px',
            width: "700px",
            lineHeight: 1.5
          },
          children: "Secure Cloud Storage and Communication. Privacy by Design."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "desc",
          children: ["Create a MEGA account to get ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "50 GB FREE*"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 60
          }, this), " storage"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: function onClick() {
            return router.push("/register");
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Create Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 83
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/images/mega-cloud.jpg",
          style: {
            width: "80vw",
            WebkitUserDrag: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          style: {
            color: "#888"
          },
          children: "*Subject to your participation in our achievements program."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.introduce,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Reliable Storage and Fast Transfers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "We make secure cloud storage simple and convenient. Create a free MEGA account today."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Get started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/start_img2-v2@2x.png",
              width: "100%",
              height: "60%",
              style: {
                padding: "20% 0px 20% 0px",
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
            style: {
              width: "60%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/mega-star.jpg",
              width: "100%",
              height: "60%",
              style: {
                height: "90%",
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "End-to-End Encryption"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 42
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Your MEGA files and chats are encrypted with keys controlled by you."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Learn more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Secure Communication"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 42
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "You can exchange messages, share your files and have audio/video calls with MEGA\u2019s end-to-end encrypted chat."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Get started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 149
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 137
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/start_img2-v2@2x.png",
              width: "100%",
              height: "60%",
              style: {
                height: "90%",
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 43
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          style: {
            backgroundColor: "#f6f6f6!important"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/mega_diagram.png",
              width: "100%",
              height: "60%",
              style: {
                padding: "20% 0px 20% 0px",
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.left,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "The Secure Solution for Your Business"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 42
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Take the security of your company\u2019s data and communication to the next level with MEGA\u2019s end-to-end encrypted business solution."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Learn more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 174
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 162
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          style: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "32px",
              textAlign: "center"
            },
            children: "How does MEGA compare?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrap,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.item,
              src: "/images/upload-3.png",
              style: {
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.item,
              src: "/images/upload-1.png",
              style: {
                height: "100%",
                border: "1px solid #75cfb8",
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.item,
              src: "/images/upload-2.png",
              style: {
                WebkitUserDrag: "none"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              paddingTop: "50px"
            },
            children: ["Get MEGA Pro? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: "Upgrade Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 63
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          style: {
            flexDirection: "column",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "32px"
            },
            children: "Seamless Software for All Your Devices"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["box-container"],
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.img,
              style: {
                width: "60%",
                alignSelf: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/start-sl-img1.png",
                style: {
                  width: "100%",
                  WebkitUserDrag: "none"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.arcordion,
              children: items.map(function (item, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.item,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    "aria-label": "item-" + index,
                    "data-istoggle": item.isToggle,
                    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["wrap-title"],
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "fas fa-chevron-right"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.expansion,
                    "aria-hidden": !item.isToggle,
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: item.content
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Learn more "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fab fa-apple"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 54
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fab fa-windows"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fab fa-linux"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 23
                  }, _this)]
                }, "container" + index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "data-unique": true,
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,
          style: {
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 80px 20px 80px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              fontSize: "36px",
              color: "#999"
            },
            children: "Why Use MEGA?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.benefits,
            children: benefits.map(function (benefit, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["item-benefit"],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  src: benefit.path,
                  width: "64px",
                  height: "64px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: benefit.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: benefit.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 21
                }, _this), benefit.ableToLearn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  href: "#",
                  children: "Learn more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 45
                }, _this)]
              }, "benefit-".concat(i), true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.functions,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            style: {
              margin: "0px"
            },
            children: "What can you do with MEGA?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["wrap-function"],
            children: fn_items.map(function (fn, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["item-function"],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  src: fn.path,
                  width: "fit-content",
                  height: "169px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    padding: "10px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: fn.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      lineHeight: 1.5
                    },
                    children: fn.content
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 21
                }, _this)]
              }, "fn" + i, true, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.functions,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Our Service Speaks for Itself"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            children: "Millions of users choose MEGA. Here is why:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.evalutions,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["previous-btn"],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fas fa-arrow-left"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), evalutions.map(function (evalution, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.evalution,
                "data-main": i == 2 ? true : false,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fas fa-star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: evalution.evalution
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: evalution.url_web
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 21
                }, _this)]
              }, "eval" + i, true, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 19
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a["next-btn"],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fas fa-arrow-right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/javascripts/sidebar.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/javascripts/hidden.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "/javascripts/dropdown.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImNoaWxkcmVuIiwidGl0bGUiLCJzdHlsZXMiLCJpdGVtcyIsImNvbnRlbnQiLCJpc1RvZ2dsZSIsImJlbmVmaXRzIiwicGF0aCIsImFibGVUb0xlYXJuIiwiZm5faXRlbXMiLCJldmFsdXRpb25zIiwic3RhcnMiLCJldmFsdXRpb24iLCJ1cmxfd2ViIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJob21lcGFnZSIsImZvbnRTaXplIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiYnRuIiwicHVzaCIsIldlYmtpdFVzZXJEcmFnIiwiY29sb3IiLCJpbnRyb2R1Y2UiLCJib3giLCJsZWZ0IiwicmlnaHQiLCJwYWRkaW5nIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsIndyYXAiLCJpdGVtIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJpbWciLCJhbGlnblNlbGYiLCJhcmNvcmRpb24iLCJtYXAiLCJpbmRleCIsImV4cGFuc2lvbiIsImJlbmVmaXQiLCJpIiwiZnVuY3Rpb25zIiwibWFyZ2luIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBd0M7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3JELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBUSxXQUFLLEVBQUVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVDLGdFQUFNLENBQUMsV0FBRCxDQUF0QjtBQUFBLGdCQUNH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SkU7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEpGLGVBaUpFO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpKRixlQWtKRTtBQUFRLFNBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsSkY7QUFBQSxrQkFERjtBQXNKRDs7R0F6SnVCWSxLO1VBQ1BFLHFEOzs7S0FET0YsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mOTczMTIwNDhmMjhiNTU0ZjVlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyBjaGlsZHJlbiwgdGl0bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcydcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYuanMnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgeyBcbiAgICB0aXRsZTogXCJEZXNrdG9wIFNlcnZpY2VcIiwgXG4gICAgY29udGVudDogXCJFYXN5IGF1dG9tYXRlZCBzeW5jaHJvbml6YXRpb24gYmV0d2VlbiB5b3VyIGNvbXB1dGVyIGFuZCB5b3VyIE1FR0EgY2xvdWQuIEF2YWlsYWJsZSBmb3IgV2luZG93cywgTWFjIGFuZCBMaW51eC5cIixcbiAgICBpc1RvZ2dsZTogdHJ1ZVxuICB9LFxuICB7IFxuICAgIHRpdGxlOiBcIkRlc2t0b3AgU2VydmljZVwiLCBcbiAgICBjb250ZW50OiBcIkVhc3kgYXV0b21hdGVkIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHlvdXIgY29tcHV0ZXIgYW5kIHlvdXIgTUVHQSBjbG91ZC4gQXZhaWxhYmxlIGZvciBXaW5kb3dzLCBNYWMgYW5kIExpbnV4LlwiLFxuICAgIGlzVG9nZ2xlOiBmYWxzZVxuICB9LFxuICB7IFxuICAgIHRpdGxlOiBcIkRlc2t0b3AgU2VydmljZVwiLCBcbiAgICBjb250ZW50OiBcIkVhc3kgYXV0b21hdGVkIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHlvdXIgY29tcHV0ZXIgYW5kIHlvdXIgTUVHQSBjbG91ZC4gQXZhaWxhYmxlIGZvciBXaW5kb3dzLCBNYWMgYW5kIExpbnV4LlwiLFxuICAgIGlzVG9nZ2xlOiBmYWxzZVxuICB9LFxuICB7IFxuICAgIHRpdGxlOiBcIkRlc2t0b3AgU2VydmljZVwiLCBcbiAgICBjb250ZW50OiBcIkVhc3kgYXV0b21hdGVkIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHlvdXIgY29tcHV0ZXIgYW5kIHlvdXIgTUVHQSBjbG91ZC4gQXZhaWxhYmxlIGZvciBXaW5kb3dzLCBNYWMgYW5kIExpbnV4LlwiLFxuICAgIGlzVG9nZ2xlOiBmYWxzZVxuICB9LFxuICB7IFxuICAgIHRpdGxlOiBcIkRlc2t0b3AgU2VydmljZVwiLCBcbiAgICBjb250ZW50OiBcIkVhc3kgYXV0b21hdGVkIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHlvdXIgY29tcHV0ZXIgYW5kIHlvdXIgTUVHQSBjbG91ZC4gQXZhaWxhYmxlIGZvciBXaW5kb3dzLCBNYWMgYW5kIExpbnV4LlwiLFxuICAgIGlzVG9nZ2xlOiBmYWxzZVxuICB9XG5dXG5cbmNvbnN0IGJlbmVmaXRzID0gW1xuICB7XG4gICAgcGF0aDogXCIvaW1hZ2VzL21lZ2FfaWNvbl9sb2NrLmpwZ1wiLFxuICAgIHRpdGxlOiBcIlByaXZhY3lcIixcbiAgICBjb250ZW50OiBcIkJ5IHByb3Blcmx5IGFwcGx5aW5nIGVuZC10by1lbmQgZW5jcnlwdGlvbiwgTUVHQSBhY2hpZXZlcyBhY3R1YWwgcHJpdmFjeSBieSBkZXNpZ24uXCIsXG4gICAgYWJsZVRvTGVhcm46IHRydWVcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2ltYWdlcy9tZWdhX2ljb25fY2xvdWQuanBnXCIsXG4gICAgdGl0bGU6IFwiUG93ZXJmdWxcIixcbiAgICBjb250ZW50OiBcIk1FR0EgaXMgYSBjbG91ZCBiYXNlZCBzZXJ2aWNlIHdoaWNoIGNhbiBiZSB1c2VkIGZyb20gYWxsIG1ham9yIGRldmljZXMgYW5kIHBsYXRmb3JtcyBmcm9tIGFueXdoZXJlIHdpdGggSW50ZXJuZXQuXCIsXG4gICAgYWJsZVRvTGVhcm46IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pbWFnZXMvbWVnYV9pY29uX2NoYXR0ZXIuanBnXCIsXG4gICAgdGl0bGU6IFwiU2VjdXJlXCIsXG4gICAgY29udGVudDogXCJNRUdBIGlzIGNhcmVmdWxseSBlbmdpbmVlcmVkIHRvIGFjaGlldmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHkgZm9yIGl0cyB1c2Vycy5cIixcbiAgICBhYmxlVG9MZWFybjogdHJ1ZVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvaW1hZ2VzL21lZ2FfaWNvbl91c2VyLmpwZ1wiLFxuICAgIHRpdGxlOiBcIlRyYW5zcGFyZW50XCIsXG4gICAgY29udGVudDogXCJNRUdB4oCZcyBjbGllbnQgYXBwcyBhcmUgUHVibGljIFNvdXJjZS4gSXRzIGNyeXB0b2dyYXBoaWMgYXJjaGl0ZWN0dXJlIGlzIHNwZWNpZmllZCBpbiBhIGNvbXByZWhlbnNpdmUgU2VjdXJpdHkgV2hpdGVwYXBlci5cIixcbiAgICBhYmxlVG9MZWFybjogdHJ1ZVxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvaW1hZ2VzL21lZ2FfaWNvbl9kb2N1bWVudC5qcGdcIixcbiAgICB0aXRsZTogXCJSZWxpYWJsZVwiLFxuICAgIGNvbnRlbnQ6IFwiTUVHQSBvd25zIGFuZCBvcGVyYXRlcyBpdHMgcmVkdW5kYW50IHNlcnZlciBpbmZyYXN0cnVjdHVyZSBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCB5b3VyIGRhdGEgYWx3YXlzIHJlbWFpbnMgYXZhaWxhYmxlLlwiLFxuICAgIGFibGVUb0xlYXJuOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pbWFnZXMvbWVnYV9pY29uX2NlcnQuanBnXCIsXG4gICAgdGl0bGU6IFwiR2VuZXJvdXNcIixcbiAgICBjb250ZW50OiBcIk1FR0EgaXMgb25lIG9mIHRoZSBtb3N0IGdlbmVyb3VzIGNsb3VkIHNlcnZpY2VzIG9uIHRoZSBJbnRlcm5ldCwgd2l0aCBlYXN5IHdheXMgdG8gZXhwYW5kIGFuZCBleHRlbmQgeW91ciBmcmVlIHN0b3JhZ2UuXCIsXG4gICAgYWJsZVRvTGVhcm46IGZhbHNlXG4gIH0sXG5dXG5cbmNvbnN0IGZuX2l0ZW1zID0gW1xuICB7XG4gICAgcGF0aDogXCIvaW1hZ2VzL2NoYXRfZm4ucG5nXCIsXG4gICAgdGl0bGU6IFwiQ2hhdCBzZWN1cmVseVwiLFxuICAgIGNvbnRlbnQ6IFwiQ29ubmVjdCB3aXRoIHlvdXIgY29udGFjdHMgb24gTUVHQSBhbmQgc3RheSBpbiB0b3VjaDsgc2VjdXJlbHkgZXhjaGFuZ2UgbWVzc2FnZXMgYW5kIGhhdmUgYXVkaW8sIHZpZGVvIG9yIGdyb3VwIGNhbGxzIHdpdGggTUVHQWNoYXQuXCJcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2ltYWdlcy9jbG91ZF9mbi5wbmdcIixcbiAgICB0aXRsZTogXCJCYWNrdXBcIixcbiAgICBjb250ZW50OiBcIkF1dG9tYXRpY2FsbHkgYmFja3VwIHBob3RvcyBhbmQgdmlkZW9zIGZyb20geW91ciBtb2JpbGUgZGV2aWNlIHdpdGggQ2FtZXJhIFVwbG9hZHMsIGFuZCBzeW5jIHlvdXIgY29tcHV0ZXIgZGF0YSB3aXRoIE1FR0HigJlzIERlc2t0b3AgQXBwLiBNRUdBIGF1dG9tYXRpY2FsbHkgbWFpbnRhaW5zIGhpc3RvcmljIHZlcnNpb25zIG9mIHlvdXIgZmlsZXMsIGFsbG93aW5nIHlvdSB0byBlYXNpbHkgcmV2ZXJ0IHdoZW4gbmVlZGVkLlwiXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pbWFnZXMvc3luY19mbi5wbmdcIixcbiAgICB0aXRsZTogXCJTeW5jaHJvbml6ZVwiLFxuICAgIGNvbnRlbnQ6IFwiRWFzeSBhdXRvbWF0ZWQgc3luY2hyb25pemF0aW9uIGJldHdlZW4geW91ciBjb21wdXRlciBhbmQgeW91ciBNRUdBIENsb3VkLlwiXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9pbWFnZXMvdHJhbnNmZXJfZm4ucG5nXCIsXG4gICAgdGl0bGU6IFwiU2hhcmVcIixcbiAgICBjb250ZW50OiBcIkV4cG9ydCBzZWN1cmVseSBrZXllZCBsaW5rcyB0byB5b3VyIGZpbGVzIGFuZCBmb2xkZXJzLCBvciBzaGFyZSBmb2xkZXJzIGRpcmVjdGx5IHdpdGggeW91ciBjb250YWN0cyBvbiBNRUdBLlwiXG4gIH1cbl1cblxuY29uc3QgZXZhbHV0aW9ucyA9IFtcbiAge1xuICAgIHN0YXJzOiA1LFxuICAgIGV2YWx1dGlvbjogXCJNRUdBIGlzIG91ciBoYW5kcy1kb3duIHdpbm5lciBmb3IgZnJlZSBjbG91ZCBzdG9yYWdlIGFuZCBiYWNrdXAuIElmIHRoaXMgS2l3aSBjb21wYW55J3MgNTBHQiBvZiBmcmVlIHN0b3JhZ2UgaXNuJ3QgZW5vdWdoIGZvciB5b3VyIGJ1c2luZXNzIG5lZWRzLCB0aGV5IG9mZmVyIGZvdXIgbW9yZSB0aWVycyBvZiBzZXJ2aWNlLCB3aXRoIHBsYW5zIGZyb20gMjAwR0IgdG8gOFRCLCBhbGwgYXZhaWxhYmxlIGZvciBsZXNzIHRoYW4gVVMkMjUgcGVyIG1vbnRoLlwiLFxuICAgIHVybF93ZWI6IFwiaHR0cHM6Ly93d3cuaW5jLmNvbS90ZWNobm9sb2d5L21lZ2EtcmV2aWV3LWJlc3QtZnJlZS1jbG91ZC1zdG9yYWdlLWJhY2t1cC1mb3Itc21hbGwtYnVzaW5lc3MuaHRtbFwiLFxuICB9LFxuICB7XG4gICAgc3RhcnM6IDUsXG4gICAgZXZhbHV0aW9uOiBcIk1lZ2EgcHV0cyBpdHMgc2VjdXJpdHkgY3JlZGVudGlhbHMgZnJvbnQgYW5kIGNlbnRyZS4gVW5saWtlIHNvbWUgb2YgaXRzIHJpdmFscywgdGhpcyBzZXJ2aWNlIHByb3ZpZGVzIGVuY3J5cHRpb24gaW4gZXZlcnkgcGFydCBvZiB0aGUgcHJvY2Vzcy4gQW55dGhpbmcgeW91IHNlbmQgdG8gdGhlIGNsb3VkIGlzIGVuY3J5cHRlZCBsb2NhbGx5LCBvbi1yb3V0ZSwgYW5kIG9uIHRoZSBkZXN0aW5hdGlvbiBzZXJ2ZXIu4oCdXCIsXG4gICAgdXJsX3dlYjogXCJodHRwczovL3d3dy50ZWNoYWR2aXNvci5jby51ay90ZXN0LWNlbnRyZS9pbnRlcm5ldC9iZXN0LWNsb3VkLXN0b3JhZ2UtMjAxOC0zNjE0MjY5L1wiXG4gIH0sXG4gIHtcbiAgICBzdGFyczogNSxcbiAgICBldmFsdXRpb246IFwi4oCcUydlbnJpY2hpc3NhbnQgZGUgbm91dmVsbGVzIGZvbmN0aW9ubmFsaXTDqXMgYXUgZmlsIGRlcyBtb2lzLCBNZWdhIGVzdCBsJ3VuIGRlcyBtZWlsbGV1cnMgY2hvaXggcG9zc2libGUgbG9yc3F14oCZb24gc291aGFpdGUgZMOpcG9zZXIgdW4gZ3JvcyB2b2x1bWUgZGUgZG9ubsOpZXMgc3VyIGxlIENsb3VkLiBPbiBhcHByw6ljaWUgYXVzc2kgc2EgZm9uY3Rpb24gZGUgcGFydGFnZSwgbGEgcGx1cyBzaW1wbGUgZCdlbXBsb2kgcXVpIHNvaXTigJ1cIixcbiAgICB1cmxfd2ViOiBcImh0dHBzOi8vd3d3LnRvbXNndWlkZS5mci8yMDE2LzEyLzA3L3N0b2NrYWdlLWVuLWxpZ25lLWdyYXR1aXQtcXVlbC1zZXJ2aWNlLWNob2lzaXIvXCJcbiAgfSxcbiAge1xuICAgIHN0YXJzOiA1LFxuICAgIGV2YWx1dGlvbjogXCJhbmQgYSBzaW1wbGUgZHJhZy1hbmQtZHJvcCBpbnRlcmZhY2UsIE5ldyBaZWFsYW5kIGJhc2VkIE1lZ2EgaXMgb25lIG9mIHRoZSBjbG91ZCBzdG9yYWdlIGhlYXZ5d2VpZ2h0cy4gVGhlcmUncyBhIGhhbmR5IG1vYmlsZSBhcHAgdG8gYWxsb3cgeW91IHRvIHVwbG9hZCBmaWxlcyBhbmQgcGhvdG9zLCBhcyB3ZWxsIGFzIHN5bmMgY2xpZW50cyB3aXRoIGRlc2t0b3AgbWFjaGluZXMuXCIsXG4gICAgdXJsX3dlYjogXCJodHRwczovL3d3dy50ZWNocmFkYXIuY29tL25ld3MvdGhlLWJlc3QtY2xvdWQtc3RvcmFnZVwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJUcmFuZyBjaOG7p1wiIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2phdmFzY3JpcHRzL25hdmJhci10cmFja2Rvd24uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lcGFnZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtaG9tZXBhZ2VcIiBzdHlsZT17eyBmb250U2l6ZTonMzJweCcsIHdpZHRoOlwiNzAwcHhcIiwgbGluZUhlaWdodDogMS41IH19PlxuICAgICAgICAgICAgU2VjdXJlIENsb3VkIFN0b3JhZ2UgYW5kIENvbW11bmljYXRpb24uIFByaXZhY3kgYnkgRGVzaWduLjwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+Q3JlYXRlIGEgTUVHQSBhY2NvdW50IHRvIGdldCA8c3Ryb25nPjUwIEdCIEZSRUUqPC9zdHJvbmc+IHN0b3JhZ2U8L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpfT48YT5DcmVhdGUgQWNjb3VudDwvYT48L2J1dHRvbj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWVnYS1jbG91ZC5qcGdcIiBzdHlsZT17eyB3aWR0aDpcIjgwdndcIiwgV2Via2l0VXNlckRyYWc6IFwibm9uZVwiIH19IC8+XG4gICAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiBcIiM4ODhcIiB9fT4qU3ViamVjdCB0byB5b3VyIHBhcnRpY2lwYXRpb24gaW4gb3VyIGFjaGlldmVtZW50cyBwcm9ncmFtLjwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvZHVjZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICAgICAgPHNwYW4+UmVsaWFibGUgU3RvcmFnZSBhbmQgRmFzdCBUcmFuc2ZlcnM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPldlIG1ha2Ugc2VjdXJlIGNsb3VkIHN0b3JhZ2Ugc2ltcGxlIGFuZCBjb252ZW5pZW50LiBDcmVhdGUgYSBmcmVlIE1FR0EgYWNjb3VudCB0b2RheS48L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4+R2V0IHN0YXJ0ZWQ8L3NwYW4+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N0YXJ0X2ltZzItdjJAMngucG5nXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjAlXCIgc3R5bGU9e3sgcGFkZGluZzpcIjIwJSAwcHggMjAlIDBweFwiLCBXZWJraXRVc2VyRHJhZzogXCJub25lXCIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9IHN0eWxlPXt7IHdpZHRoOlwiNjAlXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tZWdhLXN0YXIuanBnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjAlXCIgc3R5bGU9e3sgaGVpZ2h0OlwiOTAlXCIsIFdlYmtpdFVzZXJEcmFnOlwibm9uZVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+PHNwYW4+RW5kLXRvLUVuZCBFbmNyeXB0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICA8cD5Zb3VyIE1FR0EgZmlsZXMgYW5kIGNoYXRzIGFyZSBlbmNyeXB0ZWQgd2l0aCBrZXlzIGNvbnRyb2xsZWQgYnkgeW91LjwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3Bhbj5MZWFybiBtb3JlPC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+PHNwYW4+U2VjdXJlIENvbW11bmljYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIDxwPllvdSBjYW4gZXhjaGFuZ2UgbWVzc2FnZXMsIHNoYXJlIHlvdXIgZmlsZXMgYW5kIGhhdmUgYXVkaW8vdmlkZW8gY2FsbHMgd2l0aCBNRUdBJnJzcXVvO3MgZW5kLXRvLWVuZCBlbmNyeXB0ZWQgY2hhdC48L3A+PGEgaHJlZj1cIiNcIj48c3Bhbj5HZXQgc3RhcnRlZDwvc3Bhbj48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PjxpbWcgc3JjPVwiL2ltYWdlcy9zdGFydF9pbWcyLXYyQDJ4LnBuZ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwJVwiIHN0eWxlPXt7IGhlaWdodDpcIjkwJVwiLCBXZWJraXRVc2VyRHJhZzpcIm5vbmVcIiB9fSAvPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjZjZmNmY2IWltcG9ydGFudFwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tZWdhX2RpYWdyYW0ucG5nXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjAlXCIgc3R5bGU9e3sgcGFkZGluZzpcIjIwJSAwcHggMjAlIDBweFwiLCBXZWJraXRVc2VyRHJhZzpcIm5vbmVcIiB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PjxzcGFuPlRoZSBTZWN1cmUgU29sdXRpb24gZm9yIFlvdXIgQnVzaW5lc3M8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPlRha2UgdGhlIHNlY3VyaXR5IG9mIHlvdXIgY29tcGFueSZyc3F1bztzIGRhdGEgYW5kIGNvbW11bmljYXRpb24gdG8gdGhlIG5leHQgbGV2ZWwgd2l0aCBNRUdBJnJzcXVvO3MgZW5kLXRvLWVuZCBlbmNyeXB0ZWQgYnVzaW5lc3Mgc29sdXRpb24uPC9wPjxhIGhyZWY9XCIjXCI+PHNwYW4+TGVhcm4gbW9yZTwvc3Bhbj48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0gc3R5bGU9e3sgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTpcIjMycHhcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIgfX0+SG93IGRvZXMgTUVHQSBjb21wYXJlPzwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0gc3JjPVwiL2ltYWdlcy91cGxvYWQtMy5wbmdcIiBzdHlsZT17eyBXZWJraXRVc2VyRHJhZzpcIm5vbmVcIiB9fSAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IHNyYz1cIi9pbWFnZXMvdXBsb2FkLTEucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOlwiMXB4IHNvbGlkICM3NWNmYjhcIiwgV2Via2l0VXNlckRyYWc6XCJub25lXCIgfX0gLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBzcmM9XCIvaW1hZ2VzL3VwbG9hZC0yLnBuZ1wiIHN0eWxlPXt7IFdlYmtpdFVzZXJEcmFnOlwibm9uZVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdUb3A6XCI1MHB4XCIgfX0+R2V0IE1FR0EgUHJvPyA8YSBocmVmPVwiI1wiPlVwZ3JhZGUgQWNjb3VudDwvYT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczpcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6XCIzMnB4XCIgfX0+U2VhbWxlc3MgU29mdHdhcmUgZm9yIEFsbCBZb3VyIERldmljZXM8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYm94LWNvbnRhaW5lclwiXX0gc3R5bGU9e3sgZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHN0eWxlPXt7IHdpZHRoOlwiNjAlXCIsIGFsaWduU2VsZjpcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdGFydC1zbC1pbWcxLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOlwiMTAwJVwiLCBXZWJraXRVc2VyRHJhZzpcIm5vbmVcIiB9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcmNvcmRpb259PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IGtleT17XCJjb250YWluZXJcIiArIGluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9e1wiaXRlbS1cIiArIGluZGV4fSBkYXRhLWlzdG9nZ2xlPXtpdGVtLmlzVG9nZ2xlfSBjbGFzc05hbWU9e3N0eWxlc1tcIndyYXAtdGl0bGVcIl19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leHBhbnNpb259IGFyaWEtaGlkZGVuPXshaXRlbS5pc1RvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5MZWFybiBtb3JlIDwvYT48aSBjbGFzc05hbWU9XCJmYWIgZmEtYXBwbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aW5kb3dzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGludXhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtdW5pcXVlPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5ib3h9IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBwYWRkaW5nOlwiMjBweCA4MHB4IDIwcHggODBweFwiIH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6XCIzNnB4XCIsIGNvbG9yOlwiIzk5OVwiIH19PldoeSBVc2UgTUVHQT88L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJlbmVmaXRzfT5cbiAgICAgICAgICAgICAge2JlbmVmaXRzLm1hcCgoYmVuZWZpdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaXRlbS1iZW5lZml0XCJdfSBrZXk9e2BiZW5lZml0LSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YmVuZWZpdC5wYXRofSB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntiZW5lZml0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57YmVuZWZpdC5jb250ZW50fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIHtiZW5lZml0LmFibGVUb0xlYXJuICYmIDxMaW5rIGhyZWY9XCIjXCI+TGVhcm4gbW9yZTwvTGluaz59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bmN0aW9uc30+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOlwiMHB4XCIgfX0+V2hhdCBjYW4geW91IGRvIHdpdGggTUVHQT88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndyYXAtZnVuY3Rpb25cIl19PlxuICAgICAgICAgICAgICB7Zm5faXRlbXMubWFwKChmbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaXRlbS1mdW5jdGlvblwiXX0ga2V5PXtcImZuXCIgKyBpfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Zm4ucGF0aH0gd2lkdGg9XCJmaXQtY29udGVudFwiIGhlaWdodD1cIjE2OXB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOlwiMTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57Zm4udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBsaW5lSGVpZ2h0OjEuNSB9fT57Zm4uY29udGVudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnVuY3Rpb25zfT5cbiAgICAgICAgICAgIDxoMj5PdXIgU2VydmljZSBTcGVha3MgZm9yIEl0c2VsZjwvaDI+XG4gICAgICAgICAgICA8aDY+TWlsbGlvbnMgb2YgdXNlcnMgY2hvb3NlIE1FR0EuIEhlcmUgaXMgd2h5OjwvaDY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2YWx1dGlvbnN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicHJldmlvdXMtYnRuXCJdfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtldmFsdXRpb25zLm1hcCgoZXZhbHV0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZhbHV0aW9ufSBrZXk9e1wiZXZhbFwiICsgaX0gZGF0YS1tYWluPXtpID09IDIgPyB0cnVlIDogZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZXZhbHV0aW9uLmV2YWx1dGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntldmFsdXRpb24udXJsX3dlYn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibmV4dC1idG5cIl19PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxzY3JpcHQgc3JjPVwiL2phdmFzY3JpcHRzL3NpZGViYXIuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiL2phdmFzY3JpcHRzL2hpZGRlbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCIvamF2YXNjcmlwdHMvZHJvcGRvd24uanNcIj48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==