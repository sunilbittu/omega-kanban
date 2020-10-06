webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./pages/[_id]/[project].tsx":
/*!***********************************!*\
  !*** ./pages/[_id]/[project].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main */ \"./components/main.tsx\");\n/* harmony import */ var _components_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/index-page */ \"./components/index-page.tsx\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/pages/[_id]/[project].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isValid = _useState[0],\n      setIsValid = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var _router$query = router.query,\n      _id = _router$query._id,\n      project = _router$query.project;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_id) getRouter(_id);\n  }, [_id]);\n\n  var getRouter = function getRouter(_id) {\n    fetch(\"/api/get-router\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        _id: _id\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setIsValid(true);\n      } else {\n        setTimeout(function () {\n          router.replace('/');\n        }, 500);\n        setMessage('URL is not valid.');\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting a route:\".concat(err.message));\n    });\n  };\n\n  return __jsx(notistack__WEBPACK_IMPORTED_MODULE_3__[\"SnackbarProvider\"], {\n    maxSnack: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_components_index_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), isValid ? _id && project ? __jsx(_components_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    _id: _id,\n    projectName: project,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'rgb(95, 188, 190)',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'rgb(95, 188, 190)',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, message)));\n}\n\n_s(Index, \"/jXO/7n7r8Ocml9F6+St7+sFvi4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW19pZF0vW3Byb2plY3RdLnRzeD9jMWE1Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJfaWQiLCJwcm9qZWN0IiwidXNlRWZmZWN0IiwiZ2V0Um91dGVyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInJlcGxhY2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUN2QkMsT0FEdUI7QUFBQSxNQUNkQyxVQURjOztBQUFBLG1CQUVBRixzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRXZCRyxPQUZ1QjtBQUFBLE1BRWRDLFVBRmM7O0FBRzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIOEIsc0JBSUxELE1BQU0sQ0FBQ0UsS0FKRjtBQUFBLE1BSXRCQyxHQUpzQixpQkFJdEJBLEdBSnNCO0FBQUEsTUFJakJDLE9BSmlCLGlCQUlqQkEsT0FKaUI7QUFNOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLEdBQUosRUFBU0csU0FBUyxDQUFDSCxHQUFELENBQVQ7QUFDVixHQUZRLEVBRU4sQ0FBQ0EsR0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsR0FBRCxFQUFpQjtBQUNqQ0ksU0FBSyxvQkFBb0I7QUFDdkJDLFlBQU0sRUFBRSxNQURlO0FBRXZCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZjO0FBS3ZCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CVCxXQUFHLEVBQUhBO0FBRG1CLE9BQWY7QUFMaUIsS0FBcEIsQ0FBTCxDQVNHVSxJQVRILENBU1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FUUixFQVVHRixJQVZILENBVVEsVUFBQ0csSUFBRCxFQUF1QjtBQUMzQixVQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEJwQixrQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNELE9BRkQsTUFFTztBQUNMcUIsa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZsQixnQkFBTSxDQUFDbUIsT0FBUCxDQUFlLEdBQWY7QUFDRCxTQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0FwQixrQkFBVSxDQUFDLG1CQUFELENBQVY7QUFDRDtBQUNGLEtBbkJILFdBb0JTLFVBQUNxQixHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLDBEQUNvREYsR0FBRyxDQUFDdEIsT0FEeEQ7QUFHRCxLQXhCSDtBQXlCRCxHQTFCRDs7QUE0QkEsU0FDRSxNQUFDLDBEQUFEO0FBQWtCLFlBQVEsRUFBRSxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR0YsT0FBTyxHQUNOTyxHQUFHLElBQUlDLE9BQVAsR0FDRSxNQUFDLHdEQUFEO0FBQU0sT0FBRyxFQUFFRCxHQUFYO0FBQTBCLGVBQVcsRUFBRUMsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEdBR0U7QUFDRSxTQUFLLEVBQUU7QUFDTG1CLHFCQUFlLEVBQUUsbUJBRFo7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsWUFBTSxFQUFFLE9BSEg7QUFJTEMsYUFBTyxFQUFFLE1BSko7QUFLTEMsbUJBQWEsRUFBRSxRQUxWO0FBTUxDLGdCQUFVLEVBQUUsUUFOUDtBQU9MQyxvQkFBYyxFQUFFO0FBUFgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FKSSxHQW1CTjtBQUNFLFNBQUssRUFBRTtBQUNMTixxQkFBZSxFQUFFLG1CQURaO0FBRUxDLFdBQUssRUFBRSxNQUZGO0FBR0xDLFlBQU0sRUFBRSxPQUhIO0FBSUxDLGFBQU8sRUFBRSxNQUpKO0FBS0xDLG1CQUFhLEVBQUUsUUFMVjtBQU1MQyxnQkFBVSxFQUFFLFFBTlA7QUFPTEMsb0JBQWMsRUFBRTtBQVBYLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTS9CLE9BQU4sQ0FYRixDQXJCSixDQURGO0FBc0NEOztHQTVFdUJKLEs7VUFHUE8scUQ7OztLQUhPUCxLIiwiZmlsZSI6Ii4vcGFnZXMvW19pZF0vW3Byb2plY3RdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleC1wYWdlJztcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgSVJvdXRlckRhdGEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL2lyb3V0ZXJkYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtpc1ZhbGlkLCBzZXRJc1ZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBfaWQsIHByb2plY3QgfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChfaWQpIGdldFJvdXRlcihfaWQgYXMgc3RyaW5nKTtcbiAgfSwgW19pZF0pO1xuXG4gIGNvbnN0IGdldFJvdXRlciA9IChfaWQ6IFN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpL2dldC1yb3V0ZXJgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIF9pZCxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGE6IElSb3V0ZXJEYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBzZXRJc1ZhbGlkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIHNldE1lc3NhZ2UoJ1VSTCBpcyBub3QgdmFsaWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBTb21ldGhpbmcgd3JvbmcgaGFwcGVuZWQgd2hpbGUgZ2V0dGluZyBhIHJvdXRlOiR7ZXJyLm1lc3NhZ2V9YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17M30+XG4gICAgICA8SW5kZXhQYWdlIC8+XG4gICAgICB7aXNWYWxpZCA/IChcbiAgICAgICAgX2lkICYmIHByb2plY3QgPyAoXG4gICAgICAgICAgPE1haW4gX2lkPXtfaWQgYXMgc3RyaW5nfSBwcm9qZWN0TmFtZT17cHJvamVjdCBhcyBzdHJpbmd9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDk1LCAxODgsIDE5MCknLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDk1LCAxODgsIDE5MCknLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[_id]/[project].tsx\n");

/***/ })

})