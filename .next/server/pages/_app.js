/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @paytweed/frontend-sdk-react */ \"@paytweed/frontend-sdk-react\");\n/* harmony import */ var _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const sendMessageToBackend = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (message)=>{\n        const response = await fetch(\"http://localhost:3010/message\", {\n            body: JSON.stringify({\n                message\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\"\n        });\n        const { answer  } = await response.json();\n        return answer;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100vw\",\n            height: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_2__.TweedFrontendSdkProvider, {\n            environment: 3,\n            sendMessageToBackend: sendMessageToBackend,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 143\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/pages/_app.tsx\",\n            lineNumber: 18,\n            columnNumber: 57\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzJDO0FBRXBDO0FBRXJCLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxNQUFNQyx1QkFBdUJKLGtEQUFXQSxDQUFDLE9BQU9LLFVBQW9CO1FBQ2xFLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxpQ0FBaUM7WUFDNURDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUw7WUFBUTtZQUMvQk0sU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLFFBQVE7UUFDVjtRQUVBLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUcsTUFBTVAsU0FBU1EsSUFBSTtRQUN0QyxPQUFPRDtJQUNULEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDRTtRQUFJQyxPQUFPO1lBQUNDLE9BQU87WUFBU0MsUUFBUTtRQUFPO2tCQUFHLDRFQUFDbkIsa0ZBQXdCQTtZQUFDb0IsYUFBYTtZQUFHZixzQkFBc0JBO3NCQUFzQiw0RUFBQ0Y7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUN0SyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtc2RrLW5leHRqcy1leGFtcGxlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgVHdlZWRGcm9udGVuZFNka1Byb3ZpZGVyIH0gZnJvbSAnQHBheXR3ZWVkL2Zyb250ZW5kLXNkay1yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgc2VuZE1lc3NhZ2VUb0JhY2tlbmQgPSB1c2VDYWxsYmFjayhhc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAxMC9tZXNzYWdlXCIsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSB9KSxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGFuc3dlciB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fT48VHdlZWRGcm9udGVuZFNka1Byb3ZpZGVyIGVudmlyb25tZW50PXszfSBzZW5kTWVzc2FnZVRvQmFja2VuZD17c2VuZE1lc3NhZ2VUb0JhY2tlbmR9PjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L1R3ZWVkRnJvbnRlbmRTZGtQcm92aWRlcj48L2Rpdj5cbn1cbiJdLCJuYW1lcyI6WyJUd2VlZEZyb250ZW5kU2RrUHJvdmlkZXIiLCJ1c2VDYWxsYmFjayIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlbmRNZXNzYWdlVG9CYWNrZW5kIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJhbnN3ZXIiLCJqc29uIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImVudmlyb25tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paytweed/frontend-sdk-react":
/*!***********************************************!*\
  !*** external "@paytweed/frontend-sdk-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paytweed/frontend-sdk-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();