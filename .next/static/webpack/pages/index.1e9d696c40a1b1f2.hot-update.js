"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\n// const DUMMY_MEETUPS = [\n//   {\n//     id: 'm1',\n//     title: 'A First Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some Address 5, 12345 Some City',\n//     description: 'This is a first meetup.',\n//   },\n//   {\n//     id: 'm2',\n//     title: 'A Second Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some Address 5, 12345 Some City',\n//     description: 'This is a second meetup.',\n//   },\n//   {\n//     id: 'm3',\n//     title: 'A Third Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some Address 5, 12345 Some City',\n//     description: 'This is a third meetup.',\n//   },\n//   {\n//     id: 'm4',\n//     title: 'A Fourth Meetup',\n//     image:\n//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some Address 5, 12345 Some City',\n//     description: 'This is a fourth meetup.',\n//   },\n// ];\nvar HomePage = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\elli_\\\\React Course Max\\\\Next-js\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\index.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, _this);\n};\n_c = HomePage;\nvar __N_SSG = true;\n// Runs for every request, good for very frequently changing data.\n// export const getServerSideProps = async (context) => {\n//   const req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// };\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQzBEO0FBRTFELDBCQUEwQjtBQUMxQixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixhQUFhO0FBQ2Isa0lBQWtJO0FBQ2xJLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsT0FBTztBQUNQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixrSUFBa0k7QUFDbEksa0RBQWtEO0FBQ2xELCtDQUErQztBQUMvQyxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiwrQkFBK0I7QUFDL0IsYUFBYTtBQUNiLGtJQUFrSTtBQUNsSSxrREFBa0Q7QUFDbEQsOENBQThDO0FBQzlDLE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLGdDQUFnQztBQUNoQyxhQUFhO0FBQ2Isa0lBQWtJO0FBQ2xJLGtEQUFrRDtBQUNsRCwrQ0FBK0M7QUFDL0MsT0FBTztBQUNQLEtBQUs7QUFFTCxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQzFCLHFCQUFPLDhEQUFDRixzRUFBVTtRQUFDRyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7YUFBSSxDQUFDO0FBQ2hELENBQUM7QUFGS0YsS0FBQUEsUUFBUTs7QUEyQmQsa0VBQWtFO0FBQ2xFLHlEQUF5RDtBQUN6RCw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBRTdCLGFBQWE7QUFDYixlQUFlO0FBQ2YsZ0NBQWdDO0FBQ2hDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAnbTEnLFxyXG4vLyAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4vLyAgICAgYWRkcmVzczogJ1NvbWUgQWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHknLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwLicsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20yJyxcclxuLy8gICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbi8vICAgICBhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwLicsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogJ20zJyxcclxuLy8gICAgIHRpdGxlOiAnQSBUaGlyZCBNZWV0dXAnLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcclxuLy8gICAgIGFkZHJlc3M6ICdTb21lIEFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5JyxcclxuLy8gICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIHRoaXJkIG1lZXR1cC4nLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6ICdtNCcsXHJcbi8vICAgICB0aXRsZTogJ0EgRm91cnRoIE1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTpcclxuLy8gICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4vLyAgICAgYWRkcmVzczogJ1NvbWUgQWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHknLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZm91cnRoIG1lZXR1cC4nLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufTtcclxuXHJcbi8vIFBhZ2Ugd2lsbCBiZSBmYXN0ZXIsIGRhdGEgd2lsbCBiZSBjYWNoZWQgYW5kIHJldXNlZC5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAnbW9uZ29kYitzcnY6Ly9ldHVybmVyYmlzc2V0Ok16U1dKRUxiMmVJQlFRN2dAY2x1c3RlcjAuYW1zc3NkNi5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwJ1xyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gUnVucyBmb3IgZXZlcnkgcmVxdWVzdCwgZ29vZCBmb3IgdmVyeSBmcmVxdWVudGx5IGNoYW5naW5nIGRhdGEuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});