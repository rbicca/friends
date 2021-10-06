module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[mid]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kuka/Training/NextJS/max02/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.data.image,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.data.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.data.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM1QixzQkFDSTtBQUFTLGFBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsTUFBNUI7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRUYsS0FBSyxDQUFDRyxJQUFOLENBQVdDLEtBQXJCO0FBQTRCLFNBQUcsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFBS0osS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLGdCQUFVTCxLQUFLLENBQUNHLElBQU4sQ0FBV0c7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUEsZ0JBQUlOLEtBQUssQ0FBQ0csSUFBTixDQUFXSTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFRSCxDQVREOztBQVdlUiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzJztcblxuY29uc3QgTWVldHVwRGV0YWlsID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9Jyc+PC9pbWc+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5kYXRhLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[mid]/index.js":
/*!******************************!*\
  !*** ./pages/[mid]/index.js ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _jsxFileName = \"/Users/kuka/Training/NextJS/max02/pages/[mid]/index.js\";\n//import { DATA } from '../index'\n\n\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: props.meetupData\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');\n  const db = client.db();\n  const eventos = db.collection('eventos');\n  const data = await eventos.find({}, {\n    _id: 1\n  }).toArray();\n  return {\n    fallback: false,\n    paths: data.map(e => ({\n      params: {\n        mid: e._id.toString()\n      }\n    })) //paths: [\n    //    { params: { mid: 'm1' } },\n    //    { params: { mid: 'm2' } },\n    //]\n\n  };\n}\nasync function getStaticProps(ctx) {\n  const id = ctx.params.mid; //console.log(id);\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');\n  const db = client.db();\n  const eventos = db.collection('eventos');\n  const e = await eventos.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(id)\n  });\n  return {\n    props: {\n      meetupData: {\n        title: e.title,\n        address: e.address,\n        image: e.image,\n        description: e.description,\n        id: e._id.toString()\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWlkXS9pbmRleC5qcz9iYzZmIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsIm1lZXR1cERhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwiZXZlbnRvcyIsImNvbGxlY3Rpb24iLCJkYXRhIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwiZSIsInBhcmFtcyIsIm1pZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJpZCIsImZpbmRPbmUiLCJPYmplY3RJZCIsInRpdGxlIiwiYWRkcmVzcyIsImltYWdlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDN0Isc0JBQ0kscUVBQUMsd0VBQUQ7QUFBYyxRQUFJLEVBQUVBLEtBQUssQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FKRDs7QUFPTyxlQUFlQyxjQUFmLEdBQStCO0FBQ2xDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CLDZGQUFwQixDQUFyQjtBQUNBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFFQSxRQUFNQyxPQUFPLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBaEI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUYsT0FBTyxDQUFDRyxJQUFSLENBQWEsRUFBYixFQUFpQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUFqQixFQUE0QkMsT0FBNUIsRUFBbkI7QUFFQSxTQUFPO0FBQ0hDLFlBQVEsRUFBRSxLQURQO0FBRUhDLFNBQUssRUFBRUwsSUFBSSxDQUFDTSxHQUFMLENBQVNDLENBQUMsS0FBSztBQUFFQyxZQUFNLEVBQUU7QUFBRUMsV0FBRyxFQUFFRixDQUFDLENBQUNMLEdBQUYsQ0FBTVEsUUFBTjtBQUFQO0FBQVYsS0FBTCxDQUFWLENBRkosQ0FJSDtBQUNBO0FBQ0E7QUFDQTs7QUFQRyxHQUFQO0FBU0g7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxHQUE5QixFQUFrQztBQUNyQyxRQUFNQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0osTUFBSixDQUFXQyxHQUF0QixDQURxQyxDQUVyQzs7QUFDQSxRQUFNZixNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQiw2RkFBcEIsQ0FBckI7QUFDQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBRUEsUUFBTUMsT0FBTyxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQWhCO0FBQ0EsUUFBTVEsQ0FBQyxHQUFHLE1BQU1ULE9BQU8sQ0FBQ2dCLE9BQVIsQ0FBZ0I7QUFBRVosT0FBRyxFQUFFYSx3REFBUSxDQUFDRixFQUFEO0FBQWYsR0FBaEIsQ0FBaEI7QUFHQSxTQUFPO0FBQ0h0QixTQUFLLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRTtBQUNSd0IsYUFBSyxFQUFFVCxDQUFDLENBQUNTLEtBREQ7QUFFUkMsZUFBTyxFQUFFVixDQUFDLENBQUNVLE9BRkg7QUFHUkMsYUFBSyxFQUFFWCxDQUFDLENBQUNXLEtBSEQ7QUFJUkMsbUJBQVcsRUFBRVosQ0FBQyxDQUFDWSxXQUpQO0FBS1JOLFVBQUUsRUFBRU4sQ0FBQyxDQUFDTCxHQUFGLENBQU1RLFFBQU47QUFMSTtBQURUO0FBREosR0FBUDtBQVdIO0FBRWNwQiw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttaWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBEQVRBIH0gZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyBNb25nb0NsaWVudCAsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnO1xuXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lZXR1cERldGFpbCBkYXRhPXtwcm9wcy5tZWV0dXBEYXRhfSAvPlxuICAgICk7XG59O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vdUhlcnZhbDpoZXJ2YWxAY2x1c3RlcjAudWJocGsubW9uZ29kYi5uZXQvbWF4bmV4dD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgZXZlbnRvcyA9IGRiLmNvbGxlY3Rpb24oJ2V2ZW50b3MnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZXZlbnRvcy5maW5kKHt9LCB7IF9pZDogMX0pLnRvQXJyYXkoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgcGF0aHM6IGRhdGEubWFwKGUgPT4gKHsgcGFyYW1zOiB7IG1pZDogZS5faWQudG9TdHJpbmcoKSB9IH0pKVxuICAgICAgICBcbiAgICAgICAgLy9wYXRoczogW1xuICAgICAgICAvLyAgICB7IHBhcmFtczogeyBtaWQ6ICdtMScgfSB9LFxuICAgICAgICAvLyAgICB7IHBhcmFtczogeyBtaWQ6ICdtMicgfSB9LFxuICAgICAgICAvL11cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KXtcbiAgICBjb25zdCBpZCA9IGN0eC5wYXJhbXMubWlkO1xuICAgIC8vY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vdUhlcnZhbDpoZXJ2YWxAY2x1c3RlcjAudWJocGsubW9uZ29kYi5uZXQvbWF4bmV4dD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgZXZlbnRvcyA9IGRiLmNvbGxlY3Rpb24oJ2V2ZW50b3MnKTtcbiAgICBjb25zdCBlID0gYXdhaXQgZXZlbnRvcy5maW5kT25lKHsgX2lkOiBPYmplY3RJZChpZCl9KTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lZXR1cERhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZS50aXRsZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGUuaW1hZ2UsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaWQ6IGUuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[mid]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });