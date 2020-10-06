webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./pages/[_id]/[project].tsx":
/*!***********************************!*\
  !*** ./pages/[_id]/[project].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main */ \"./components/main.tsx\");\n/* harmony import */ var _components_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/index-page */ \"./components/index-page.tsx\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/pages/[_id]/[project].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isValid = _useState[0],\n      setIsValid = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var _router$query = router.query,\n      _id = _router$query._id,\n      project = _router$query.project;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_id) getRouter(_id);\n  }, [_id]);\n\n  var getRouter = function getRouter(_id) {\n    fetch(\"/api/get-router\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        _id: _id\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setIsValid(true);\n      } else {\n        router.replace('/');\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting a route:\".concat(err.message));\n    });\n  };\n\n  return __jsx(notistack__WEBPACK_IMPORTED_MODULE_3__[\"SnackbarProvider\"], {\n    maxSnack: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(_components_index_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), isValid ? _id && project ? __jsx(_components_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    _id: _id,\n    projectName: project,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'white',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'rgb(95, 188, 190)',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"Please check the url\")));\n}\n\n_s(Index, \"4/E5nJ/i3SMejySVJD+E9RpQ3bk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW19pZF0vW3Byb2plY3RdLnRzeD9jMWE1Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiX2lkIiwicHJvamVjdCIsInVzZUVmZmVjdCIsImdldFJvdXRlciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInJlcGxhY2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsS0FBRCxDQURSO0FBQUEsTUFDdkJDLE9BRHVCO0FBQUEsTUFDZEMsVUFEYzs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUY4QixzQkFHTEQsTUFBTSxDQUFDRSxLQUhGO0FBQUEsTUFHdEJDLEdBSHNCLGlCQUd0QkEsR0FIc0I7QUFBQSxNQUdqQkMsT0FIaUIsaUJBR2pCQSxPQUhpQjtBQUs5QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsR0FBSixFQUFTRyxTQUFTLENBQUNILEdBQUQsQ0FBVDtBQUNWLEdBRlEsRUFFTixDQUFDQSxHQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxHQUFELEVBQWlCO0FBQ2pDSSxTQUFLLG9CQUFvQjtBQUN2QkMsWUFBTSxFQUFFLE1BRGU7QUFFdkJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmM7QUFLdkJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJULFdBQUcsRUFBSEE7QUFEbUIsT0FBZjtBQUxpQixLQUFwQixDQUFMLENBU0dVLElBVEgsQ0FTUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQVRSLEVBVUdGLElBVkgsQ0FVUSxVQUFDRyxJQUFELEVBQXVCO0FBQzNCLFVBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNoQmxCLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGNBQU0sQ0FBQ2tCLE9BQVAsQ0FBZSxHQUFmO0FBQ0Q7QUFDRixLQWhCSCxXQWlCUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLDBEQUNvREYsR0FBRyxDQUFDRyxPQUR4RDtBQUdELEtBckJIO0FBc0JELEdBdkJEOztBQXlCQSxTQUNFLE1BQUMsMERBQUQ7QUFBa0IsWUFBUSxFQUFFLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHeEIsT0FBTyxHQUNOSyxHQUFHLElBQUlDLE9BQVAsR0FDRSxNQUFDLHdEQUFEO0FBQU0sT0FBRyxFQUFFRCxHQUFYO0FBQTBCLGVBQVcsRUFBRUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBR0U7QUFDRSxTQUFLLEVBQUU7QUFDTG1CLHFCQUFlLEVBQUUsT0FEWjtBQUVMQyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxZQUFNLEVBQUUsT0FISDtBQUlMQyxhQUFPLEVBQUUsTUFKSjtBQUtMQyxtQkFBYSxFQUFFLFFBTFY7QUFNTEMsZ0JBQVUsRUFBRSxRQU5QO0FBT0xDLG9CQUFjLEVBQUU7QUFQWCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUpJLEdBbUJOO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLHFCQUFlLEVBQUUsbUJBRFo7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsWUFBTSxFQUFFLE9BSEg7QUFJTEMsYUFBTyxFQUFFLE1BSko7QUFLTEMsbUJBQWEsRUFBRSxRQUxWO0FBTUxDLGdCQUFVLEVBQUUsUUFOUDtBQU9MQyxvQkFBYyxFQUFFO0FBUFgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFYRixDQXJCSixDQURGO0FBc0NEOztHQXhFdUJqQyxLO1VBRVBLLHFEOzs7S0FGT0wsSyIsImZpbGUiOiIuL3BhZ2VzL1tfaWRdL1twcm9qZWN0XS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5kZXgtcGFnZSc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IElSb3V0ZXJEYXRhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcy9pcm91dGVyZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IF9pZCwgcHJvamVjdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9pZCkgZ2V0Um91dGVyKF9pZCBhcyBzdHJpbmcpO1xuICB9LCBbX2lkXSk7XG5cbiAgY29uc3QgZ2V0Um91dGVyID0gKF9pZDogU3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvZ2V0LXJvdXRlcmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgX2lkLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YTogSVJvdXRlckRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHNldElzVmFsaWQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSBnZXR0aW5nIGEgcm91dGU6JHtlcnIubWVzc2FnZX1gXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTbmFja2JhclByb3ZpZGVyIG1heFNuYWNrPXszfT5cbiAgICAgIDxJbmRleFBhZ2UgLz5cbiAgICAgIHtpc1ZhbGlkID8gKFxuICAgICAgICBfaWQgJiYgcHJvamVjdCA/IChcbiAgICAgICAgICA8TWFpbiBfaWQ9e19pZCBhcyBzdHJpbmd9IHByb2plY3ROYW1lPXtwcm9qZWN0IGFzIHN0cmluZ30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoOTUsIDE4OCwgMTkwKScsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5QbGVhc2UgY2hlY2sgdGhlIHVybDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[_id]/[project].tsx\n");

/***/ })

})