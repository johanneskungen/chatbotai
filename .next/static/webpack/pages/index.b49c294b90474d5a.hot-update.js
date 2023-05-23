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

/***/ "./components/Chatbot.jsx":
/*!********************************!*\
  !*** ./components/Chatbot.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst styles = \"absolute w-32 rounded-full cursor-pointer h-32 right-12 bottom-12 bg-gray-600\";\n\nfunction Chatbot(param) {\n    let { setActive  } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"system\",\n            content: \"You are an order tracking expert.\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addMessage = async ()=>{\n        setLoading(true);\n        setMessages((prev)=>[\n                ...prev,\n                {\n                    role: \"user\",\n                    content: message\n                }\n            ]);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/chatbot\", {\n            message: JSON.stringify(messages)\n        });\n        const newA = [\n            ...messages,\n            {\n                role: \"user\",\n                content: message\n            },\n            {\n                role: \"assistant\",\n                content: response.data.chatbotResponse.content\n            }\n        ];\n        setMessages(newA);\n        setLoading(false);\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \" h-[550px] w-[19rem] bg-white absolute bottom-12 right-12 shadow-xl rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-gray-400 font-semibold text-base text-center py-2 font-semiobold\",\n                        children: \"Chatbot\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setActive(false),\n                        className: \"text-xs font-bold text-gray-400 cursor-pointer\",\n                        children: \"close\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[75%] bg-white mx-4 text-xs flex flex-col overflow-y-scroll scroll-smooth\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3 bg-gray-400 max-w-[65%] rounded-2xl m-2 shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRobot, {\n                                    size: 23\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                \" Hey what can I help you with today?\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    messages === null || messages === void 0 ? void 0 : messages.filter((c)=>c.role != \"system\").map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xs mx-2 my-1 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs shadow-lg p-3 rounded-2xl max-w-[65%] flex items-center gap-2 \".concat(m.role === \"user\" ? \"float-right bg-blue-500 text-white\" : \"float-left bg-gray-400\"),\n                                children: [\n                                    m.role === \"assistant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRobot, {\n                                        size: 24\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 44\n                                    }, this),\n                                    \" \",\n                                    m.content\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        }, i, false, {\n                            fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    addMessage();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Chat with the chatbot!!\",\n                        className: \"chatbot\",\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: loading ? \"loading...\" : \"send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\johan\\\\OneDrive\\\\Dokument\\\\Programmering\\\\Projekt_utvecklat\\\\tiktok_video_creator\\\\components\\\\Chatbot.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Chatbot, \"Hcf40G3XYZw42cUqVnP9UreTp7I=\");\n_c = Chatbot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chatbot);\nvar _c;\n$RefreshReg$(_c, \"Chatbot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRib3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUMxQixNQUFNSSxTQUNKO0FBQ3VDO0FBRXpDLFNBQVNFLFFBQVEsS0FBYSxFQUFFO1FBQWYsRUFBRUMsVUFBUyxFQUFFLEdBQWI7O0lBQ2YsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDO1lBQUVVLE1BQU07WUFBVUMsU0FBUztRQUFvQztLQUNoRTtJQUNELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNYyxhQUFhLFVBQVk7UUFDN0JQLFdBQVcsSUFBSTtRQUNmRSxZQUFZLENBQUNNLE9BQVM7bUJBQUlBO2dCQUFNO29CQUFFTCxNQUFNO29CQUFRQyxTQUFTQztnQkFBUTthQUFFO1FBRW5FLE1BQU1JLFdBQVcsTUFBTWYsa0RBQVUsQ0FBQyxnQkFBZ0I7WUFDaERXLFNBQVNNLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDMUI7UUFFQSxNQUFNWSxPQUFPO2VBQ1JaO1lBQ0g7Z0JBQUVFLE1BQU07Z0JBQVFDLFNBQVNDO1lBQVE7WUFDakM7Z0JBQUVGLE1BQU07Z0JBQWFDLFNBQVNLLFNBQVNLLElBQUksQ0FBQ0MsZUFBZSxDQUFDWCxPQUFPO1lBQUM7U0FDckU7UUFFREYsWUFBWVc7UUFDWmIsV0FBVyxLQUFLO1FBQ2hCTSxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDQzt3QkFBR0YsV0FBVTtrQ0FBd0U7Ozs7OztrQ0FHdEYsOERBQUNDO3dCQUNDRSxTQUFTLElBQU10QixVQUFVLEtBQUs7d0JBQzlCbUIsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDSTs0QkFBRUosV0FBVTs7OENBQ1gsOERBQUNyQixtREFBT0E7b0NBQUMwQixNQUFNOzs7Ozs7Z0NBQU07Ozs7Ozs7Ozs7OztvQkFJeEJyQixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQ0dzQixNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRXJCLElBQUksSUFBSSxVQUN6QnNCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDUCw4REFBQ1Q7NEJBQVlELFdBQVk7c0NBQ3ZCLDRFQUFDSTtnQ0FDQ0osV0FBVyx5RUFJVixPQUhDUyxFQUFFdkIsSUFBSSxLQUFLLFNBQ1AsdUNBQ0Esd0JBQXdCOztvQ0FHN0J1QixFQUFFdkIsSUFBSSxLQUFLLDZCQUFlLDhEQUFDUCxtREFBT0E7d0NBQUMwQixNQUFNOzs7Ozs7b0NBQU87b0NBQUVJLEVBQUV0QixPQUFPOzs7Ozs7OzJCQVJ0RHVCOzs7O2lDQVdWOzs7Ozs7OzBCQUVOLDhEQUFDQztnQkFDQ0MsVUFBVSxDQUFDQyxJQUFNO29CQUNmQSxFQUFFQyxjQUFjO29CQUNoQnhCO2dCQUNGOztrQ0FFQSw4REFBQ3lCO3dCQUNDQyxhQUFZO3dCQUNaaEIsV0FBVTt3QkFDVmlCLE9BQU83Qjt3QkFDUDhCLFVBQVUsQ0FBQ0wsSUFBTXhCLFdBQVd3QixFQUFFTSxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFNUMsOERBQUNHO3dCQUFPQyxNQUFLO2tDQUFVdkMsVUFBVSxlQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQS9FU0Y7S0FBQUE7QUFpRlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Ym90LmpzeD9iZDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuY29uc3Qgc3R5bGVzID1cclxuICBcImFic29sdXRlIHctMzIgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIGgtMzIgcmlnaHQtMTIgYm90dG9tLTEyIGJnLWdyYXktNjAwXCI7XHJcbmltcG9ydCB7IEZhUm9ib3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRib3QoeyBzZXRBY3RpdmUgfSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJZb3UgYXJlIGFuIG9yZGVyIHRyYWNraW5nIGV4cGVydC5cIiB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9XSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jaGF0Ym90XCIsIHtcclxuICAgICAgbWVzc2FnZTogSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmV3QSA9IFtcclxuICAgICAgLi4ubWVzc2FnZXMsXHJcbiAgICAgIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IG1lc3NhZ2UgfSxcclxuICAgICAgeyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiByZXNwb25zZS5kYXRhLmNoYXRib3RSZXNwb25zZS5jb250ZW50IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHNldE1lc3NhZ2VzKG5ld0EpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCIgaC1bNTUwcHhdIHctWzE5cmVtXSBiZy13aGl0ZSBhYnNvbHV0ZSBib3R0b20tMTIgcmlnaHQtMTIgc2hhZG93LXhsIHJvdW5kZWQteGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgcHktMiBmb250LXNlbWlvYm9sZFwiPlxyXG4gICAgICAgICAgQ2hhdGJvdFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIGNsb3NlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzc1JV0gYmctd2hpdGUgbXgtNCB0ZXh0LXhzIGZsZXggZmxleC1jb2wgb3ZlcmZsb3cteS1zY3JvbGwgc2Nyb2xsLXNtb290aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLWdyYXktNDAwIG1heC13LVs2NSVdIHJvdW5kZWQtMnhsIG0tMiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxGYVJvYm90IHNpemU9ezIzfSAvPiBIZXkgd2hhdCBjYW4gSSBoZWxwIHlvdSB3aXRoIHRvZGF5P1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7bWVzc2FnZXNcclxuICAgICAgICAgID8uZmlsdGVyKChjKSA9PiBjLnJvbGUgIT0gXCJzeXN0ZW1cIilcclxuICAgICAgICAgIC5tYXAoKG0sIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHRleHQteHMgbXgtMiBteS0xIGB9PlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzIHNoYWRvdy1sZyBwLTMgcm91bmRlZC0yeGwgbWF4LXctWzY1JV0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgJHtcclxuICAgICAgICAgICAgICAgICAgbS5yb2xlID09PSBcInVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJmbG9hdC1yaWdodCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiZmxvYXQtbGVmdCBiZy1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bS5yb2xlID09PSBcImFzc2lzdGFudFwiICYmIDxGYVJvYm90IHNpemU9ezI0fSAvPn0ge20uY29udGVudH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgYWRkTWVzc2FnZSgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hhdCB3aXRoIHRoZSBjaGF0Ym90ISFcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hhdGJvdFwiXHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57bG9hZGluZyA/IFwibG9hZGluZy4uLlwiIDogXCJzZW5kXCJ9PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Ym90O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGVzIiwiRmFSb2JvdCIsIkNoYXRib3QiLCJzZXRBY3RpdmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiYWRkTWVzc2FnZSIsInByZXYiLCJyZXNwb25zZSIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3QSIsImRhdGEiLCJjaGF0Ym90UmVzcG9uc2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJvbkNsaWNrIiwicCIsInNpemUiLCJmaWx0ZXIiLCJjIiwibWFwIiwibSIsImkiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Chatbot.jsx\n"));

/***/ })

});