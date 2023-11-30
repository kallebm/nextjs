"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/components/ProductCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_imageWidth_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/imageWidth.module.css */ \"./styles/imageWidth.module.css\");\n/* harmony import */ var _styles_imageWidth_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_imageWidth_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n/* harmony import */ var _SuccessToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuccessToast */ \"./src/components/SuccessToast.tsx\");\n// src/components/ProductCard.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { product } = param;\n    _s();\n    const [toastIsOpen, setToastIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { id, name, imageUrl, price } = product;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/products/\".concat(id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"card-img-top \".concat((_styles_imageWidth_module_css__WEBPACK_IMPORTED_MODULE_6___default().abc)),\n                            src: imageUrl,\n                            alt: \"Product\",\n                            height: 0,\n                            width: 0,\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardBody, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/products/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"card-title\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.CardSubtitle, {\n                                className: \"mb-3 text-muted\",\n                                tag: \"h6\",\n                                children: [\n                                    \"R$ \",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                color: \"dark\",\n                                className: \"pb-2\",\n                                block: true,\n                                onClick: ()=>{\n                                    setToastIsOpen(true);\n                                    setTimeout(()=>setToastIsOpen(false), 1000 * 3);\n                                },\n                                children: \"Adicionar ao Carrinho\"\n                            }, void 0, false, {\n                                fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SuccessToast__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                toastIsOpen: toastIsOpen,\n                setToastIsOpen: setToastIsOpen\n            }, void 0, false, {\n                fileName: \"/home/kalleb/Documents/next/nextproject/src/components/ProductCard.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductCard, \"BrRI1NgaLdtGh/tjC4T8JupqCLo=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFpQzs7O0FBRXVCO0FBQ3pCO0FBQ0Y7QUFDVztBQUMwQjtBQUV4QjtBQU0xQyxNQUFNVSxjQUEwQztRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDMUQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sRUFBRVUsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdOO0lBRXRDLHFCQUNFOzswQkFDRSw4REFBQ0wsNENBQUlBOztrQ0FDSCw4REFBQ0osa0RBQUlBO3dCQUFDZ0IsTUFBTSxhQUFnQixPQUFISjtrQ0FDdkIsNEVBQUNiLG1EQUFLQTs0QkFDSmtCLFdBQVcsZ0JBQTJCLE9BQVhuQiwwRUFBVTs0QkFDckNxQixLQUFLTDs0QkFDTE0sS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEMsSUFBSTs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNsQixnREFBUUE7OzBDQUNQLDhEQUFDTCxrREFBSUE7Z0NBQUNnQixNQUFNLGFBQWdCLE9BQUhKOzBDQUN2Qiw0RUFBQ1k7b0NBQUdQLFdBQVU7b0NBQWFRLE9BQU87d0NBQUVDLFFBQVE7b0NBQVU7OENBQ25EYjs7Ozs7Ozs7Ozs7MENBSUwsOERBQUNQLG9EQUFZQTtnQ0FBQ1csV0FBVTtnQ0FBa0JVLEtBQUk7O29DQUFLO29DQUM3Q1o7Ozs7Ozs7MENBR04sOERBQUNaLDhDQUFNQTtnQ0FDTHlCLE9BQU07Z0NBQ05YLFdBQVU7Z0NBQ1ZZLEtBQUs7Z0NBQ0xDLFNBQVM7b0NBQ1BuQixlQUFlO29DQUNmb0IsV0FBVyxJQUFNcEIsZUFBZSxRQUFRLE9BQU87Z0NBQ2pEOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTUwsOERBQUNKLHFEQUFZQTtnQkFBQ0csYUFBYUE7Z0JBQWFDLGdCQUFnQkE7Ozs7Ozs7O0FBRzlEO0dBOUNNSDtLQUFBQTtBQWdETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3g/NjBiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3hcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ltYWdlV2lkdGgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRTdWJ0aXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9kdWN0c1wiO1xuaW1wb3J0IFN1Y2Nlc3NUb2FzdCBmcm9tIFwiLi9TdWNjZXNzVG9hc3RcIjtcblxudHlwZSBQcm9kdWN0Q2FyZFByb3BzID0ge1xuICBwcm9kdWN0OiBQcm9kdWN0VHlwZTtcbn07XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICBjb25zdCBbdG9hc3RJc09wZW4sIHNldFRvYXN0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpZCwgbmFtZSwgaW1hZ2VVcmwsIHByaWNlIH0gPSBwcm9kdWN0O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7aWR9YH0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJkLWltZy10b3AgJHtzdHlsZXMuYWJjfWB9XG4gICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgICAgYWx0PVwiUHJvZHVjdFwiXG4gICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpZH1gfT5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxDYXJkU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMyB0ZXh0LW11dGVkXCIgdGFnPVwiaDZcIj5cbiAgICAgICAgICAgIFIkIHtwcmljZX1cbiAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYi0yXCJcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRvYXN0SXNPcGVuKHRydWUpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRvYXN0SXNPcGVuKGZhbHNlKSwgMTAwMCAqIDMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGljaW9uYXIgYW8gQ2FycmluaG9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAgPFN1Y2Nlc3NUb2FzdCB0b2FzdElzT3Blbj17dG9hc3RJc09wZW59IHNldFRvYXN0SXNPcGVuPXtzZXRUb2FzdElzT3Blbn0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkU3VidGl0bGUiLCJTdWNjZXNzVG9hc3QiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJ0b2FzdElzT3BlbiIsInNldFRvYXN0SXNPcGVuIiwiaWQiLCJuYW1lIiwiaW1hZ2VVcmwiLCJwcmljZSIsImhyZWYiLCJjbGFzc05hbWUiLCJhYmMiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsImZpbGwiLCJoNSIsInN0eWxlIiwiY3Vyc29yIiwidGFnIiwiY29sb3IiLCJibG9jayIsIm9uQ2xpY2siLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCard.tsx\n"));

/***/ })

});