webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _project_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-name */ \"./components/project-name.tsx\");\n/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disclaimer */ \"./components/disclaimer.tsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board */ \"./components/board.tsx\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('project-name'),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      projectName = _React$useState2[0],\n      setProjectName = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isAcceptDisclaimer = _useState2[0],\n      setIsAcceptDisclaimer = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (localStorage.getItem('omegakanbanaccept')) {\n      setIsAcceptDisclaimer(true);\n    }\n  });\n  var element = null;\n\n  switch (view) {\n    case 'project-name':\n      element = __jsx(_project_name__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        setView: setView,\n        setProjectName: setProjectName,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      });\n      break;\n\n    case 'board':\n      element = __jsx(_board__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        setView: setView,\n        setProjectName: setProjectName,\n        projectName: projectName,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      });\n      break;\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, element, !isAcceptDisclaimer && __jsx(_disclaimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setIsAcceptDisclaimer: setIsAcceptDisclaimer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Main, \"a+zY8M8YdW53SYHTbtVh4zj9agw=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsInVzZVN0YXRlIiwidmlldyIsInNldFZpZXciLCJSZWFjdCIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJpc0FjY2VwdERpc2NsYWltZXIiLCJzZXRJc0FjY2VwdERpc2NsYWltZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUEwQjtBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLGNBQUQsQ0FETztBQUFBLE1BQ2hDQyxJQURnQztBQUFBLE1BQzFCQyxPQUQwQjs7QUFBQSx3QkFFREMsNENBQUssQ0FBQ0gsUUFBTixDQUFlLEVBQWYsQ0FGQztBQUFBO0FBQUEsTUFFaENJLFdBRmdDO0FBQUEsTUFFbkJDLGNBRm1COztBQUFBLG1CQUdhTCxzREFBUSxDQUFDLEtBQUQsQ0FIckI7QUFBQSxNQUdoQ00sa0JBSGdDO0FBQUEsTUFHWkMscUJBSFk7O0FBS3ZDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NILDJCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRDtBQUNGLEdBSlEsQ0FBVDtBQU1BLE1BQUlJLE9BQU8sR0FBRyxJQUFkOztBQUNBLFVBQVFWLElBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRVUsYUFBTyxHQUNMLE1BQUMscURBQUQ7QUFBYSxlQUFPLEVBQUVULE9BQXRCO0FBQStCLHNCQUFjLEVBQUVHLGNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUdBOztBQUNGLFNBQUssT0FBTDtBQUNFTSxhQUFPLEdBQ0wsTUFBQyw4Q0FBRDtBQUNFLGVBQU8sRUFBRVQsT0FEWDtBQUVFLHNCQUFjLEVBQUVHLGNBRmxCO0FBR0UsbUJBQVcsRUFBRUQsV0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFPQTtBQWRKOztBQWlCQSxTQUNFLG1FQUNHTyxPQURILEVBRUcsQ0FBQ0wsa0JBQUQsSUFDQyxNQUFDLG1EQUFEO0FBQVkseUJBQXFCLEVBQUVDLHFCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FERjtBQVFEOztHQXJDdUJULEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvamVjdE5hbWUgZnJvbSAnLi9wcm9qZWN0LW5hbWUnO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wczogYW55KSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCdwcm9qZWN0LW5hbWUnIGFzIHN0cmluZyk7XG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycgYXMgYW55KTtcbiAgY29uc3QgW2lzQWNjZXB0RGlzY2xhaW1lciwgc2V0SXNBY2NlcHREaXNjbGFpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb21lZ2FrYW5iYW5hY2NlcHQnKSkge1xuICAgICAgc2V0SXNBY2NlcHREaXNjbGFpbWVyKHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICBzd2l0Y2ggKHZpZXcpIHtcbiAgICBjYXNlICdwcm9qZWN0LW5hbWUnOlxuICAgICAgZWxlbWVudCA9IChcbiAgICAgICAgPFByb2plY3ROYW1lIHNldFZpZXc9e3NldFZpZXd9IHNldFByb2plY3ROYW1lPXtzZXRQcm9qZWN0TmFtZX0gLz5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib2FyZCc6XG4gICAgICBlbGVtZW50ID0gKFxuICAgICAgICA8Qm9hcmRcbiAgICAgICAgICBzZXRWaWV3PXtzZXRWaWV3fVxuICAgICAgICAgIHNldFByb2plY3ROYW1lPXtzZXRQcm9qZWN0TmFtZX1cbiAgICAgICAgICBwcm9qZWN0TmFtZT17cHJvamVjdE5hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZWxlbWVudH1cbiAgICAgIHshaXNBY2NlcHREaXNjbGFpbWVyICYmIChcbiAgICAgICAgPERpc2NsYWltZXIgc2V0SXNBY2NlcHREaXNjbGFpbWVyPXtzZXRJc0FjY2VwdERpc2NsYWltZXJ9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})