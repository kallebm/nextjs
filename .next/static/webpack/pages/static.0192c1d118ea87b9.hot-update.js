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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Static = (props)=>{\n    var _props_staticData;\n    _s();\n    const [clientSideData, setClientSideData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        const data = await fetch(\"/api/hello\").then((res)=>res.json());\n        setClientSideData(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        tag: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-5\",\n                children: \"Como funcionam as renderiza\\xe7\\xf5es do Next.js\"\n            }, void 0, false, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Gerado estaticament durante o build:\"\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: (_props_staticData = props.staticData) === null || _props_staticData === void 0 ? void 0 : _props_staticData.timestamp.toString()\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Gerado no cliente:\"\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: clientSideData === null || clientSideData === void 0 ? void 0 : clientSideData.timestamp.toString()\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/static.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Static, \"qW+hTzbgs6WHbvuQkSm+pZU2od8=\");\n_c = Static;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Static);\nvar _c;\n$RefreshReg$(_c, \"Static\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3RhdGljLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1RDtBQUNOO0FBbUJqRCxNQUFNSyxTQUFtQixDQUFDQztRQXNCWEE7O0lBbEJiLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBO0lBRXBERCxnREFBU0EsQ0FBQztRQUNSUztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFlBQVk7UUFDaEIsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLGNBQWNDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBQzdETixrQkFBa0JFO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNQLGlEQUFTQTtRQUFDWSxLQUFJOzswQkFDYiw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQU87Ozs7OzswQkFFckIsOERBQUNiLDJDQUFHQTs7a0NBQ0YsOERBQUNGLDJDQUFHQTs7MENBQ0YsOERBQUNnQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzsyQ0FBSWIsb0JBQUFBLE1BQU1jLFVBQVUsY0FBaEJkLHdDQUFBQSxrQkFBa0JlLFNBQVMsQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUczQyw4REFBQ3BCLDJDQUFHQTs7MENBQ0YsOERBQUNnQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBSVosMkJBQUFBLHFDQUFBQSxlQUFnQmMsU0FBUyxDQUFDQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakQ7R0FoQ01qQjtLQUFBQTs7QUFrQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N0YXRpYy50c3g/MmNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogRGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3RhdGljRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSVVSTH0vYXBpL2hlbGxvYFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc3RhdGljRGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgU3RhdGljOiBOZXh0UGFnZSA9IChwcm9wczoge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgc3RhdGljRGF0YT86IEFwaVJlc3BvbnNlO1xufSkgPT4ge1xuICBjb25zdCBbY2xpZW50U2lkZURhdGEsIHNldENsaWVudFNpZGVEYXRhXSA9IHVzZVN0YXRlPEFwaVJlc3BvbnNlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS9oZWxsb1wiKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgIHNldENsaWVudFNpZGVEYXRhKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciB0YWc9XCJtYWluXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXktNVwiPkNvbW8gZnVuY2lvbmFtIGFzIHJlbmRlcml6YcOnw7VlcyBkbyBOZXh0LmpzPC9oMT5cblxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICA8aDM+R2VyYWRvIGVzdGF0aWNhbWVudCBkdXJhbnRlIG8gYnVpbGQ6PC9oMz5cbiAgICAgICAgICA8aDI+e3Byb3BzLnN0YXRpY0RhdGE/LnRpbWVzdGFtcC50b1N0cmluZygpfTwvaDI+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPGgzPkdlcmFkbyBubyBjbGllbnRlOjwvaDM+XG4gICAgICAgICAgPGgyPntjbGllbnRTaWRlRGF0YT8udGltZXN0YW1wLnRvU3RyaW5nKCl9PC9oMj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbCIsIkNvbnRhaW5lciIsIlJvdyIsIlN0YXRpYyIsInByb3BzIiwiY2xpZW50U2lkZURhdGEiLCJzZXRDbGllbnRTaWRlRGF0YSIsImZldGNoRGF0YSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGFnIiwiaDEiLCJjbGFzc05hbWUiLCJoMyIsImgyIiwic3RhdGljRGF0YSIsInRpbWVzdGFtcCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/static.tsx\n"));

/***/ })

});