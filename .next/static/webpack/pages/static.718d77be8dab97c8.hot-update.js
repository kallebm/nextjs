"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/static",{

/***/ "./src/pages/static.tsx":
/*!******************************!*\
  !*** ./src/pages/static.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Static = (props)=>{\n    _s();\n    const [clientSideData, setClientSideData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        const data = await fetch(\"/api/hello\").then((res)=>res.json());\n        setClientSideData(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        tag: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-5\",\n                children: \"Como funcionam as renderiza\\xe7\\xf5es do Next.js\"\n            }, void 0, false, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Gerado estaticament durante o build:\"\n                        }, void 0, false, {\n                            fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Gerado no cliente:\"\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: clientSideData === null || clientSideData === void 0 ? void 0 : clientSideData.timestamp.toString()\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Static, \"qW+hTzbgs6WHbvuQkSm+pZU2od8=\");\n_c = Static;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Static);\nvar _c;\n$RefreshReg$(_c, \"Static\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3RhdGljLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1RDtBQUNOO0FBV2pELE1BQU1LLFNBQW1CLENBQUNDOztJQUN4QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQTtJQUVwREQsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxZQUFZO1FBQ2hCLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSxjQUFjQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUM3RE4sa0JBQWtCRTtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDUCxpREFBU0E7UUFBQ1ksS0FBSTs7MEJBQ2IsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFPOzs7Ozs7MEJBRXJCLDhEQUFDYiwyQ0FBR0E7O2tDQUNGLDhEQUFDRiwyQ0FBR0E7a0NBQ0YsNEVBQUNnQjtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBR04sOERBQUNoQiwyQ0FBR0E7OzBDQUNGLDhEQUFDZ0I7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUlaLDJCQUFBQSxxQ0FBQUEsZUFBZ0JhLFNBQVMsQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pEO0dBNUJNaEI7S0FBQUE7O0FBOEJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdGF0aWMudHN4PzJjZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuaW50ZXJmYWNlIEFwaVJlc3BvbnNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IERhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN0YXRpY0RhdGEgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElVUkx9L2FwaS9oZWxsb2ApO1xufTtcblxuY29uc3QgU3RhdGljOiBOZXh0UGFnZSA9IChwcm9wczogeyBjaGlsZHJlbj86IFJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFtjbGllbnRTaWRlRGF0YSwgc2V0Q2xpZW50U2lkZURhdGFdID0gdXNlU3RhdGU8QXBpUmVzcG9uc2U+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL2hlbGxvXCIpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgc2V0Q2xpZW50U2lkZURhdGEoZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHRhZz1cIm1haW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteS01XCI+Q29tbyBmdW5jaW9uYW0gYXMgcmVuZGVyaXphw6fDtWVzIGRvIE5leHQuanM8L2gxPlxuXG4gICAgICA8Um93PlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxoMz5HZXJhZG8gZXN0YXRpY2FtZW50IGR1cmFudGUgbyBidWlsZDo8L2gzPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxoMz5HZXJhZG8gbm8gY2xpZW50ZTo8L2gzPlxuICAgICAgICAgIDxoMj57Y2xpZW50U2lkZURhdGE/LnRpbWVzdGFtcC50b1N0cmluZygpfTwvaDI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2wiLCJDb250YWluZXIiLCJSb3ciLCJTdGF0aWMiLCJwcm9wcyIsImNsaWVudFNpZGVEYXRhIiwic2V0Q2xpZW50U2lkZURhdGEiLCJmZXRjaERhdGEiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRhZyIsImgxIiwiY2xhc3NOYW1lIiwiaDMiLCJoMiIsInRpbWVzdGFtcCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/static.tsx\n"));

/***/ })

});