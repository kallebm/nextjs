"use strict";
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

/***/ "./src/hooks/useCart.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useCart.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst CartContextProvider = (props)=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedCart = localStorage.getItem(\"shopping-cart\");\n        if (storedCart) {\n            setCart(JSON.parse(storedCart));\n        }\n    }, []);\n    const addProduct = (product)=>{\n        const updatedCart = [\n            ...cart,\n            product\n        ];\n        localStorage.setItem(\"shopping-cart\", JSON.stringify(updatedCart));\n        setCart(updatedCart);\n    };\n    const removeProduct = (productId)=>{\n        const productIndex = cart.findIndex((product)=>product.id === productId);\n        if (productIndex !== -1) {\n            const updatedCart = [\n                ...cart\n            ];\n            updatedCart.splice(productIndex, 1);\n            localStorage.setItem(\"shopping-cart\", JSON.stringify(updatedCart));\n            setCart(updatedCart);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addProduct,\n            removeProduct\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/kalleb/Documents/next/nextproject/src/hooks/useCart.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQ2FydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1lO0FBU2YsTUFBTUssNEJBQWNKLG9EQUFhQSxDQUFrQixDQUFDO0FBRTdDLE1BQU1LLHNCQUFzQixDQUFDQztJQUNsQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWdCLEVBQUU7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1FBRXhDLElBQUlGLFlBQVk7WUFDZEQsUUFBUUksS0FBS0MsS0FBSyxDQUFDSjtRQUNyQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGFBQWEsQ0FBQ0M7UUFDbEIsTUFBTUMsY0FBYztlQUFJVDtZQUFNUTtTQUFRO1FBQ3RDTCxhQUFhTyxPQUFPLENBQUMsaUJBQWlCTCxLQUFLTSxTQUFTLENBQUNGO1FBQ3JEUixRQUFRUTtJQUNWO0lBRUEsTUFBTUcsZ0JBQWdCLENBQUNDO1FBQ3JCLE1BQU1DLGVBQWVkLEtBQUtlLFNBQVMsQ0FBQyxDQUFDUCxVQUFZQSxRQUFRUSxFQUFFLEtBQUtIO1FBRWhFLElBQUlDLGlCQUFpQixDQUFDLEdBQUc7WUFDdkIsTUFBTUwsY0FBYzttQkFBSVQ7YUFBSztZQUM3QlMsWUFBWVEsTUFBTSxDQUFDSCxjQUFjO1lBQ2pDWCxhQUFhTyxPQUFPLENBQUMsaUJBQWlCTCxLQUFLTSxTQUFTLENBQUNGO1lBQ3JEUixRQUFRUTtRQUNWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1osWUFBWXFCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBTU87WUFBWUs7UUFBYztrQkFDNURiLE1BQU1xQixRQUFROzs7Ozs7QUFHckIsRUFBRTtBQUVLLE1BQU1DLFVBQVUsSUFBTTNCLGlEQUFVQSxDQUFDRyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhY2stbmV4dGpzLy4vc3JjL2hvb2tzL3VzZUNhcnQudHN4PzU0OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9kdWN0c1wiO1xuXG50eXBlIENhcnRDb250ZXh0VHlwZSA9IHtcbiAgY2FydDogUHJvZHVjdFR5cGVbXTtcbiAgYWRkUHJvZHVjdDogKHByb2R1Y3Q6IFByb2R1Y3RUeXBlKSA9PiB2b2lkO1xuICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdElkOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlPih7fSBhcyBDYXJ0Q29udGV4dFR5cGUpO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHRQcm92aWRlciA9IChwcm9wczogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8UHJvZHVjdFR5cGVbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvcHBpbmctY2FydFwiKTtcblxuICAgIGlmIChzdG9yZWRDYXJ0KSB7XG4gICAgICBzZXRDYXJ0KEpTT04ucGFyc2Uoc3RvcmVkQ2FydCkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdDogUHJvZHVjdFR5cGUpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydCA9IFsuLi5jYXJ0LCBwcm9kdWN0XTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNob3BwaW5nLWNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhcnQpKTtcbiAgICBzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdEluZGV4ID0gY2FydC5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJZCk7XG5cbiAgICBpZiAocHJvZHVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlZENhcnQgPSBbLi4uY2FydF07XG4gICAgICB1cGRhdGVkQ2FydC5zcGxpY2UocHJvZHVjdEluZGV4LCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvcHBpbmctY2FydFwiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FydCkpO1xuICAgICAgc2V0Q2FydCh1cGRhdGVkQ2FydCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnQsIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJjYXJ0Iiwic2V0Q2FydCIsInN0b3JlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJ1cGRhdGVkQ2FydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVQcm9kdWN0IiwicHJvZHVjdElkIiwicHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJzcGxpY2UiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VDYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useCart.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ..//hooks/useCart */ \"./src/hooks/useCart.tsx\");\n// pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useCart__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kalleb/Documents/next/nextproject/src/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCOztBQUU2QjtBQUVVO0FBRXhELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILCtEQUFtQkE7a0JBQ2xCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFjay1uZXh0anMvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLnRzeFxuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IENhcnRDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vL2hvb2tzL3VzZUNhcnRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ2FydENvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();