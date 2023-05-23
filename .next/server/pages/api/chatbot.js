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
exports.id = "pages/api/chatbot";
exports.ids = ["pages/api/chatbot"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/chatbot.js":
/*!******************************!*\
  !*** ./pages/api/chatbot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst chatlog = [];\nasync function handler(req, res) {\n    const message = req.body.message;\n    chatlog.push(message);\n    try {\n        const response = await openai.createChatCompletion({\n            model: \"gpt-3.5-turbo\",\n            max_tokens: 3060,\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are a helpful chatbot that helps with almost anything like answering questions about the weather or helping the user to find out specific data like how many goals cristiano Ronaldo has scored in Champions League.\"\n                },\n                ...message\n            ]\n        });\n        const chatbotResponse = response.data.choices[0].message;\n        chatlog.push(chatbotResponse);\n        return res.json({\n            chatbotResponse\n        });\n    } catch (err) {\n        console.log(err.message);\n        return res.status(500).json({\n            errMessage: \"Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdGJvdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDcEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3QixNQUFNTSxVQUFVLEVBQUU7QUFFSCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxVQUFVRixJQUFJRyxJQUFJLENBQUNELE9BQU87SUFFaENKLFFBQVFNLElBQUksQ0FBQ0Y7SUFFYixJQUFJO1FBQ0YsTUFBTUcsV0FBVyxNQUFNUixPQUFPUyxvQkFBb0IsQ0FBQztZQUNqREMsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07b0JBQ05DLFNBQ0U7Z0JBQ0o7bUJBQ0dUO2FBQ0o7UUFDSDtRQUNBLE1BQU1VLGtCQUFrQlAsU0FBU1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDWixPQUFPO1FBRXhESixRQUFRTSxJQUFJLENBQUNRO1FBRWIsT0FBT1gsSUFBSWMsSUFBSSxDQUFDO1lBQUVIO1FBQWdCO0lBQ3BDLEVBQUUsT0FBT0ksS0FBSztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLElBQUlkLE9BQU87UUFDdkIsT0FBT0QsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLSixJQUFJLENBQUM7WUFBRUssWUFBWTtRQUFRO0lBQ3BEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rpa3Rva192aWRlb19jcmVhdG9yLy4vcGFnZXMvYXBpL2NoYXRib3QuanM/ZDNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXHJcbn0pO1xyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuY29uc3QgY2hhdGxvZyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSByZXEuYm9keS5tZXNzYWdlO1xyXG5cclxuICBjaGF0bG9nLnB1c2gobWVzc2FnZSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XHJcbiAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcclxuICAgICAgbWF4X3Rva2VuczogMzA2MCxcclxuICAgICAgbWVzc2FnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICByb2xlOiBcInN5c3RlbVwiLFxyXG4gICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgXCJZb3UgYXJlIGEgaGVscGZ1bCBjaGF0Ym90IHRoYXQgaGVscHMgd2l0aCBhbG1vc3QgYW55dGhpbmcgbGlrZSBhbnN3ZXJpbmcgcXVlc3Rpb25zIGFib3V0IHRoZSB3ZWF0aGVyIG9yIGhlbHBpbmcgdGhlIHVzZXIgdG8gZmluZCBvdXQgc3BlY2lmaWMgZGF0YSBsaWtlIGhvdyBtYW55IGdvYWxzIGNyaXN0aWFubyBSb25hbGRvIGhhcyBzY29yZWQgaW4gQ2hhbXBpb25zIExlYWd1ZS5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLm1lc3NhZ2UsXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNoYXRib3RSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlO1xyXG5cclxuICAgIGNoYXRsb2cucHVzaChjaGF0Ym90UmVzcG9uc2UpO1xyXG5cclxuICAgIHJldHVybiByZXMuanNvbih7IGNoYXRib3RSZXNwb25zZSB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVyck1lc3NhZ2U6IFwiRXJyb3JcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwiY2hhdGxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXNzYWdlIiwiYm9keSIsInB1c2giLCJyZXNwb25zZSIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtYXhfdG9rZW5zIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImNoYXRib3RSZXNwb25zZSIsImRhdGEiLCJjaG9pY2VzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJlcnJNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/chatbot.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chatbot.js"));
module.exports = __webpack_exports__;

})();