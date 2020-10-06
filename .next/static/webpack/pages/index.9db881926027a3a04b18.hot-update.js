webpackHotUpdate_N_E("pages/index",{

/***/ "./components/project-name.tsx":
/*!*************************************!*\
  !*** ./components/project-name.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/project-name.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar randomWords = __webpack_require__(/*! random-words */ \"./node_modules/random-words/index.js\");\n\nfunction ProjectName() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      projectName = _useState[0],\n      setProjectName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isBtnClick = _useState2[0],\n      setIsBtnClick = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('Creating a new board...'),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      errMessage = _useState4[0],\n      setErrMessage = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var addRouter = function addRouter(project) {\n    fetch(\"/api/add-router\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        project: project\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setMessage('Successfully created a board');\n        router.replace(\"/\".concat(data.data._id, \"/\").concat(data.data.project));\n      } else {\n        setTimeout(function () {\n          setError(false);\n          setErrMessage('');\n        }, 500);\n        setError(true);\n        setErrMessage('failed to create a project');\n        setIsBtnClick(false);\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while adding a route:\".concat(err.message));\n    });\n  };\n\n  var handleStartBtnClick = function handleStartBtnClick() {\n    setIsBtnClick(true);\n\n    if (projectName.length === 0) {\n      addRouter(randomWords());\n    } else {\n      addRouter(projectName);\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"home flex-center bg-head-0 flex-column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, isBtnClick ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, message) : __jsx(\"form\", {\n    className: \"project-name\",\n    noValidate: true,\n    autoComplete: \"off\",\n    onSubmit: function onSubmit() {\n      return handleStartBtnClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"project-name-text\",\n    id: \"standard-basic\",\n    label: \"project name\",\n    error: error,\n    disabled: isBtnClick,\n    value: projectName,\n    helperText: errMessage,\n    onChange: function onChange(e) {\n      return setProjectName(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    disabled: isBtnClick,\n    onClick: function onClick() {\n      return handleStartBtnClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, \"Start\")));\n}\n\n_s(ProjectName, \"Z6Eeo8gNdgsiTkRT589T2SO3sfg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ProjectName;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectName);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LW5hbWUudHN4P2JjZWIiXSwibmFtZXMiOlsicmFuZG9tV29yZHMiLCJyZXF1aXJlIiwiUHJvamVjdE5hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJpc0J0bkNsaWNrIiwic2V0SXNCdG5DbGljayIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZXJyTWVzc2FnZSIsInNldEVyck1lc3NhZ2UiLCJlcnJvciIsInNldEVycm9yIiwiYWRkUm91dGVyIiwicHJvamVjdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInJlcGxhY2UiLCJfaWQiLCJzZXRUaW1lb3V0IiwiZXJyIiwiY29uc29sZSIsImhhbmRsZVN0YXJ0QnRuQ2xpY2siLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBEQUFELENBQTNCOztBQUVBLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEcUIsa0JBRWlCQyxzREFBUSxDQUFTLEVBQVQsQ0FGekI7QUFBQSxNQUVkQyxXQUZjO0FBQUEsTUFFREMsY0FGQzs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxLQUFELENBSHZCO0FBQUEsTUFHZEcsVUFIYztBQUFBLE1BR0ZDLGFBSEU7O0FBQUEsbUJBSVNKLHNEQUFRLENBQUMseUJBQUQsQ0FKakI7QUFBQSxNQUlkSyxPQUpjO0FBQUEsTUFJTEMsVUFKSzs7QUFBQSxtQkFLZU4sc0RBQVEsQ0FBQyxFQUFELENBTHZCO0FBQUEsTUFLZE8s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SkosQ0FERjtBQTRCRDs7R0E3RVFoQyxXO1VBQ1FFLHFEOzs7S0FEUkYsVztBQThFTUEsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QtbmFtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSVJvdXRlckRhdGEgZnJvbSAnLi9pbnRlcmZhY2VzL2lyb3V0ZXJkYXRhJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgcmFuZG9tV29yZHMgPSByZXF1aXJlKCdyYW5kb20td29yZHMnIGFzIHN0cmluZyk7XG5cbmZ1bmN0aW9uIFByb2plY3ROYW1lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2lzQnRuQ2xpY2ssIHNldElzQnRuQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnQ3JlYXRpbmcgYSBuZXcgYm9hcmQuLi4nKTtcbiAgY29uc3QgW2Vyck1lc3NhZ2UsIHNldEVyck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhZGRSb3V0ZXIgPSAocHJvamVjdDogU3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvYWRkLXJvdXRlcmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGE6IElSb3V0ZXJEYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRNZXNzYWdlKCdTdWNjZXNzZnVsbHkgY3JlYXRlZCBhIGJvYXJkJyk7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoYC8ke2RhdGEuZGF0YS5faWR9LyR7ZGF0YS5kYXRhLnByb2plY3R9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgICAgICBzZXRFcnJNZXNzYWdlKCcnKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgICAgIHNldEVyck1lc3NhZ2UoJ2ZhaWxlZCB0byBjcmVhdGUgYSBwcm9qZWN0Jyk7XG4gICAgICAgICAgc2V0SXNCdG5DbGljayhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgd2hpbGUgYWRkaW5nIGEgcm91dGU6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdGFydEJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzQnRuQ2xpY2sodHJ1ZSk7XG4gICAgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYWRkUm91dGVyKHJhbmRvbVdvcmRzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRSb3V0ZXIocHJvamVjdE5hbWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZSBmbGV4LWNlbnRlciBiZy1oZWFkLTAgZmxleC1jb2x1bW5cIj5cbiAgICAgIHtpc0J0bkNsaWNrID8gKFxuICAgICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIlxuICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBoYW5kbGVTdGFydEJ0bkNsaWNrKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWUtdGV4dFwiXG4gICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgIGxhYmVsPVwicHJvamVjdCBuYW1lXCJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0J0bkNsaWNrfVxuICAgICAgICAgICAgdmFsdWU9e3Byb2plY3ROYW1lfVxuICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyTWVzc2FnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNCdG5DbGlja30gb25DbGljaz17KCkgPT4gaGFuZGxlU3RhcnRCdG5DbGljaygpfT5cbiAgICAgICAgICAgIFN0YXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TmFtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project-name.tsx\n");

/***/ })

})