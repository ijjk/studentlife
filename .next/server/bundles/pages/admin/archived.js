module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(24);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./redux/actions/index.js + 41 modules
var actions = __webpack_require__(2);

// CONCATENATED MODULE: ./redux/reducers/contact.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var contact_initialState = {
  ids: [],
  error: null,
  hasMore: false,
  pending: false
};

function contact() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : contact_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["n" /* CONTACT_PENDING */]:
      {
        return _objectSpread({}, contact_initialState, {
          pending: true
        });
      }

    case actions["m" /* CONTACT_MORE_PENDING */]:
      {
        return _objectSpread({}, state, {
          error: null,
          pending: true
        });
      }

    case actions["l" /* CONTACT_FAIL */]:
      {
        return _objectSpread({}, state, {
          pending: false,
          error: action.error
        });
      }

    case actions["p" /* CONTACT_SUCCESS */]:
      {
        return _objectSpread({}, state, {
          pending: false
        }, action.msgs, {
          hasMore: action.hasMore,
          ids: _toConsumableArray(state.ids).concat(_toConsumableArray(action.ids))
        });
      }

    case actions["k" /* CONTACT_CREATED */]:
      {
        var _objectSpread2;

        var msgId = action.msgId,
            msg = action.msg;
        var hasMore = state.hasMore,
            ids = state.ids;
        if (state[msgId]) return state;
        var numIds = ids.length + 1;

        if (hasMore && numIds > actions["_29" /* contactLimit */] || numIds === actions["_29" /* contactLimit */]) {
          hasMore = true;
          delete state[ids.pop()];
        }

        return _objectSpread({}, state, (_objectSpread2 = {
          hasMore: hasMore
        }, _defineProperty(_objectSpread2, msgId, msg), _defineProperty(_objectSpread2, "ids", [msgId].concat(_toConsumableArray(ids))), _objectSpread2));
      }

    case actions["o" /* CONTACT_REMOVED */]:
      {
        var _objectSpread3;

        var _msgId = action.msgId;
        if (!state[_msgId]) return state;
        return _objectSpread({}, state, (_objectSpread3 = {}, _defineProperty(_objectSpread3, _msgId, null), _defineProperty(_objectSpread3, "ids", state.ids.filter(function (id) {
          return id !== _msgId;
        })), _objectSpread3));
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_contact = (contact);
// CONCATENATED MODULE: ./redux/reducers/dialog.js
function dialog__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { dialog__defineProperty(target, key, source[key]); }); } return target; }

function dialog__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var dialog_initialState = {
  title: null,
  message: null,
  button1Txt: null,
  button2Txt: null,
  button1Act: null,
  button2Act: null
};

function dialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dialog_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["_17" /* SET_DIALOG */]:
      {
        return dialog__objectSpread({}, dialog_initialState, action.payload);
      }

    case actions["d" /* CLEAR_DIALOG */]:
      {
        return dialog_initialState;
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_dialog = (dialog);
// CONCATENATED MODULE: ./redux/reducers/mngUsers.js
function mngUsers__toConsumableArray(arr) { return mngUsers__arrayWithoutHoles(arr) || mngUsers__iterableToArray(arr) || mngUsers__nonIterableSpread(); }

function mngUsers__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function mngUsers__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function mngUsers__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function mngUsers__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { mngUsers__defineProperty(target, key, source[key]); }); } return target; }

function mngUsers__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var mngUsers_initialState = {
  ids: [],
  error: null,
  filter: null,
  hasMore: false,
  pending: false
};

function mngUsers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mngUsers_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["w" /* LIST_USERS_PENDING */]:
      {
        return mngUsers__objectSpread({}, mngUsers_initialState, {
          pending: true,
          filter: action.filter
        });
      }

    case actions["v" /* LIST_USERS_MORE_PENDING */]:
      {
        return mngUsers__objectSpread({}, state, {
          error: null,
          pending: true
        });
      }

    case actions["u" /* LIST_USERS_FAIL */]:
      {
        return mngUsers__objectSpread({}, state, {
          pending: false,
          error: action.error
        });
      }

    case actions["x" /* LIST_USERS_SUCCESS */]:
      {
        return mngUsers__objectSpread({}, state, {
          error: null,
          pending: false,
          hasMore: action.hasMore,
          ids: mngUsers__toConsumableArray(state.ids).concat(mngUsers__toConsumableArray(action.ids))
        });
      }

    case actions["_19" /* USER_REMOVED */]:
      {
        return mngUsers__objectSpread({}, state, {
          ids: state.ids.filter(function (id) {
            return id !== action.userId;
          })
        });
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_mngUsers = (mngUsers);
// CONCATENATED MODULE: ./redux/reducers/opps.js
function opps__toConsumableArray(arr) { return opps__arrayWithoutHoles(arr) || opps__iterableToArray(arr) || opps__nonIterableSpread(); }

function opps__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function opps__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function opps__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function opps__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { opps__defineProperty(target, key, source[key]); }); } return target; }

function opps__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var opps_initialState = {
  ids: [],
  error: null,
  pending: false
};

function opps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : opps_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["F" /* OPPS_PENDING */]:
      {
        return opps__objectSpread({}, opps_initialState, {
          pending: true
        });
      }

    case actions["E" /* OPPS_FAIL */]:
      {
        return opps__objectSpread({}, opps_initialState, {
          error: action.error
        });
      }

    case actions["G" /* OPPS_SUCCESS */]:
      {
        return opps__objectSpread({}, opps_initialState, {
          ids: action.ids
        }, action.opps);
      }

    case actions["K" /* OPP_CREATED */]:
      {
        var cat = action.cat,
            oppId = action.oppId,
            opp = action.opp;
        if (state[cat] && state[cat][oppId]) return state;
        return opps__objectSpread({}, state, opps__defineProperty({}, cat, opps__objectSpread({}, state[cat], opps__defineProperty({
          ids: opps__toConsumableArray(state[cat].ids).concat([oppId])
        }, oppId, opps__objectSpread({}, opp)))));
      }

    case actions["M" /* OPP_UPDATED */]:
      {
        var _cat = action.cat,
            _oppId = action.oppId,
            _opp = action.opp;
        return opps__objectSpread({}, state, opps__defineProperty({}, _cat, opps__objectSpread({}, state[_cat], opps__defineProperty({}, _oppId, opps__objectSpread({}, state[_cat][_oppId], _opp)))));
      }

    case actions["L" /* OPP_REMOVED */]:
      {
        var _objectSpread6;

        var _cat2 = action.cat,
            _oppId2 = action.oppId;
        if (!state[_cat2]) return state;
        return opps__objectSpread({}, state, opps__defineProperty({}, _cat2, opps__objectSpread({}, state[_cat2], (_objectSpread6 = {}, opps__defineProperty(_objectSpread6, _oppId2, null), opps__defineProperty(_objectSpread6, "ids", state[_cat2].ids.filter(function (id) {
          return id !== _oppId2;
        })), _objectSpread6))));
      }

    case actions["H" /* OPP_CAT_CREATED */]:
      {
        var catId = action.catId,
            _cat3 = action.cat;
        if (state[catId]) return state;
        return opps__objectSpread({}, state, opps__defineProperty({
          ids: opps__toConsumableArray(state.ids).concat([catId])
        }, catId, opps__objectSpread({}, _cat3, {
          ids: []
        })));
      }

    case actions["J" /* OPP_CAT_UPDATED */]:
      {
        var _catId = action.catId,
            _cat4 = action.cat;
        if (!state[_catId]) return state;
        return opps__objectSpread({}, state, opps__defineProperty({}, _catId, opps__objectSpread({}, state[_catId], _cat4)));
      }

    case actions["I" /* OPP_CAT_REMOVED */]:
      {
        var _objectSpread10;

        var _catId2 = action.catId;
        if (!state[_catId2]) return state;
        return opps__objectSpread({}, state, (_objectSpread10 = {}, opps__defineProperty(_objectSpread10, _catId2, null), opps__defineProperty(_objectSpread10, "ids", state.ids.filter(function (id) {
          return id !== _catId2;
        })), _objectSpread10));
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_opps = (opps);
// CONCATENATED MODULE: ./redux/reducers/page.js
function page__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { page__defineProperty(target, key, source[key]); }); } return target; }

function page__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var page_initialState = {
  error: null,
  progress: 0,
  pending: false
};

function page() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : page_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["Q" /* PAGE_PENDING */]:
      {
        return page__objectSpread({}, page_initialState, {
          pending: true
        });
      }

    case actions["N" /* PAGE_FAIL */]:
      {
        return page__objectSpread({}, page_initialState, {
          error: action.error
        });
      }

    case actions["R" /* PAGE_PROGRESS */]:
      {
        return page__objectSpread({}, state, {
          progress: action.progress
        });
      }

    case actions["T" /* PAGE_SUCCESS */]:
      {
        return page_initialState;
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_page = (page);
// CONCATENATED MODULE: ./redux/reducers/pages.js
function pages__toConsumableArray(arr) { return pages__arrayWithoutHoles(arr) || pages__iterableToArray(arr) || pages__nonIterableSpread(); }

function pages__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function pages__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function pages__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function pages__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { pages__defineProperty(target, key, source[key]); }); } return target; }

function pages__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var pages_initialState = {
  toList: [],
  error: null,
  curPage: null,
  pending: false,
  hasMore: false,
  sort: 'createdAt:-1'
};

function pages_page() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pages_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["y" /* LOAD_PAGES */]:
      {
        return pages__objectSpread({}, state, action.pages);
      }

    case actions["_18" /* SET_PAGE */]:
      {
        return pages__objectSpread({}, state, {
          curPage: action.pageId
        });
      }

    case actions["U" /* PAGE_UPDATED */]:
      {
        var id = action.pageId;
        if (!state[id]) return state;
        return pages__objectSpread({}, state, pages__defineProperty({}, id, pages__objectSpread({}, state[id], action.page)));
      }

    case actions["S" /* PAGE_REMOVED */]:
      {
        var _id2 = action.pageId;
        if (!state[_id2]) return state;
        return pages__objectSpread({}, state, pages__defineProperty({}, _id2, null));
      }

    case actions["O" /* PAGE_MOD_CREATED */]:
      {
        var _page = state[action.pageId];
        var mods = _page.mods;
        if (!mods) mods = [];
        var added = mods.some(function (_ref) {
          var user = _ref.user;
          return user === action.mod.user;
        });
        if (added) return state;
        return pages__objectSpread({}, state, pages__defineProperty({}, action.pageId, pages__objectSpread({}, _page, {
          mods: pages__toConsumableArray(mods).concat([action.mod])
        })));
      }

    case actions["P" /* PAGE_MOD_REMOVED */]:
      {
        var _page2 = state[action.pageId];
        var _mods = _page2.mods;

        if (_mods) {
          _mods = _mods.filter(function (_ref2) {
            var _id = _ref2._id;
            return _id !== action.modId;
          });
        }

        return pages__objectSpread({}, state, pages__defineProperty({}, action.pageId, pages__objectSpread({}, _page2, {
          mods: _mods
        })));
      }

    case actions["s" /* LIST_PAGES_PENDING */]:
      {
        return pages__objectSpread({}, state, {
          error: null,
          pending: true,
          sort: action.sort,
          toList: action.initial ? [] : state.toList
        });
      }

    case actions["r" /* LIST_PAGES_FAIL */]:
      {
        return pages__objectSpread({}, state, {
          pending: false,
          error: action.error
        });
      }

    case actions["t" /* LIST_PAGES_SUCCESS */]:
      {
        return pages__objectSpread({}, state, {
          error: null,
          pending: false,
          hasMore: action.hasMore,
          toList: pages__toConsumableArray(state.toList).concat(pages__toConsumableArray(action.toList))
        });
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var pages = (pages_page);
// CONCATENATED MODULE: ./redux/reducers/post.js
function post__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { post__defineProperty(target, key, source[key]); }); } return target; }

function post__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var post_initialState = {
  error: null,
  progress: 0,
  pending: false
};

function post_post() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : post_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["_3" /* POST_PENDING */]:
      {
        return post__objectSpread({}, post_initialState, {
          pending: true
        });
      }

    case actions["_2" /* POST_FAIL */]:
      {
        return post__objectSpread({}, post_initialState, {
          error: action.error
        });
      }

    case actions["_4" /* POST_PROGRESS */]:
      {
        return post__objectSpread({}, state, {
          progress: action.progress
        });
      }

    case actions["_6" /* POST_SUCCESS */]:
      {
        return post_initialState;
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_post = (post_post);
// EXTERNAL MODULE: ./redux/actions/posts/updateComment.js
var updateComment = __webpack_require__(16);

// CONCATENATED MODULE: ./redux/reducers/posts.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function posts__toConsumableArray(arr) { return posts__arrayWithoutHoles(arr) || posts__iterableToArray(arr) || posts__nonIterableSpread(); }

function posts__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function posts__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function posts__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function posts__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { posts__defineProperty(target, key, source[key]); }); } return target; }

function posts__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var posts_initialState = {
  ids: [],
  $sort: null,
  error: null,
  hasMore: false,
  pending: false,
  expanded: null,
  archived: false,
  reported: false
};

function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : posts_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["X" /* POSTS_PENDING */]:
      {
        return posts__objectSpread({}, posts_initialState, {
          pending: true,
          $sort: action.$sort,
          archived: action.archived,
          reported: action.reported
        });
      }

    case actions["W" /* POSTS_MORE_PENDING */]:
      {
        return posts__objectSpread({}, state, {
          error: null,
          pending: true
        });
      }

    case actions["V" /* POSTS_FAIL */]:
      {
        return posts__objectSpread({}, state, {
          pending: false,
          error: action.error
        });
      }

    case actions["Y" /* POSTS_SUCCESS */]:
      {
        return posts__objectSpread({}, state, {
          error: null,
          pending: false
        }, action.posts, {
          hasMore: action.hasMore,
          ids: posts__toConsumableArray(state.ids).concat(posts__toConsumableArray(action.ids))
        });
      }

    case actions["_7" /* POST_UPDATED */]:
      {
        var id = action.postId;
        var post = state[id];
        if (!post) return state;
        return posts__objectSpread({}, state, posts__defineProperty({}, id, posts__objectSpread({}, post, action.post)));
      }

    case actions["_0" /* POST_CREATED */]:
      {
        var _action$post = action.post,
            _id = _action$post._id,
            _post = _objectWithoutProperties(_action$post, ["_id"]);

        var hasMore = state.hasMore,
            ids = state.ids,
            $sort = state.$sort;
        var numIds = ids.length;

        if (state[_id]) {
          return posts__objectSpread({}, state, posts__defineProperty({}, _id, posts__objectSpread({}, state[_id], _post)));
        }

        if ($sort === 1) {
          // sorted old to new
          if (state.hasMore) return state;
          ids = posts__toConsumableArray(state.ids).concat([_id]);
        } else {
          if (hasMore && numIds > actions["_72" /* postsLimit */] || numIds === actions["_72" /* postsLimit */]) {
            var toRemove = ids.pop();
            delete state[toRemove];
            hasMore = true;
          }

          ids = [_id].concat(posts__toConsumableArray(state.ids));
        }

        return posts__objectSpread({}, state, posts__defineProperty({
          ids: ids,
          hasMore: hasMore
        }, _id, posts__objectSpread({}, _post, {
          comments: {},
          commentIds: [],
          totalComments: 0,
          commentsError: null,
          commentsPending: false
        })));
      }

    case actions["_5" /* POST_REMOVED */]:
      {
        var _ids = state.ids.filter(function (id) {
          return id !== action.postId;
        });

        delete state[action.postId];
        return posts__objectSpread({}, state, {
          ids: _ids,
          total: state.total - 1
        });
      }

    case actions["g" /* COMMENTS_PENDING */]:
      {
        var _id2 = action.postId;
        return posts__objectSpread({}, state, posts__defineProperty({}, _id2, posts__objectSpread({}, state[_id2], {
          commentsError: null,
          commentsPending: true
        })));
      }

    case actions["f" /* COMMENTS_FAIL */]:
      {
        var _id3 = action.postId;
        return posts__objectSpread({}, state, posts__defineProperty({}, _id3, posts__objectSpread({}, state[_id3], {
          commentsPending: false,
          commentsError: action.error
        })));
      }

    case actions["h" /* COMMENTS_SUCCESS */]:
      {
        var _id4 = action.postId;

        var _post2 = state[_id4] || {};

        var comments = _post2.comments || {};
        var commentIds = _post2.commentIds || [];
        return posts__objectSpread({}, state, posts__defineProperty({}, _id4, posts__objectSpread({}, _post2, {
          commentsError: null,
          commentsPending: false,
          totalComments: action.total,
          moreComments: action.total > commentIds.length + action.commentIds.length,
          comments: posts__objectSpread({}, comments, action.comments),
          commentIds: posts__toConsumableArray(action.commentIds).concat(posts__toConsumableArray(commentIds))
        })));
      }

    case actions["e" /* COMMENTS_COLLAPSED */]:
      {
        var _id5 = action.postId;
        var _post3 = state[_id5];
        var _commentIds = _post3.commentIds,
            _comments = _post3.comments;
        if (_commentIds.length <= actions["_59" /* numInitialComments */]) return state;
        var moreComments = _commentIds.length > actions["_59" /* numInitialComments */];

        var _toRemove = _commentIds.length - actions["_59" /* numInitialComments */];

        _commentIds.splice(0, _toRemove).forEach(function (oldId) {
          return delete _comments[oldId];
        });

        return posts__objectSpread({}, state, posts__defineProperty({}, _id5, posts__objectSpread({}, _post3, {
          comments: _comments,
          commentIds: _commentIds,
          moreComments: moreComments
        })));
      }

    case actions["i" /* COMMENT_CREATED */]:
      {
        var _id6 = action.postId;
        var _post4 = state[_id6];
        if (!_post4) return state;
        var _comments2 = _post4.comments,
            _commentIds2 = _post4.commentIds,
            _moreComments = _post4.moreComments,
            totalComments = _post4.totalComments;
        var _numIds = _commentIds2.length;
        var comment = action.comment;
        var newId = comment._id;
        if (_comments2[newId]) return state;
        delete comment._id;
        delete comment.post;
        _comments2[newId] = comment;

        if (_moreComments && _numIds > actions["_59" /* numInitialComments */] || _numIds === actions["_59" /* numInitialComments */]) {
          var _toRemove2 = _commentIds2[0];
          delete _comments2[_toRemove2];

          _commentIds2.splice(0, 1);

          _moreComments = true;
        }

        _commentIds2.push(newId);

        return posts__objectSpread({}, state, posts__defineProperty({}, _id6, posts__objectSpread({}, _post4, {
          comments: _comments2,
          commentIds: _commentIds2,
          moreComments: _moreComments,
          totalComments: totalComments + 1
        })));
      }

    case updateComment["a" /* UPDATE_COMMENT */]:
      {
        var postId = action.postId,
            commentId = action.commentId;
        var _post5 = state[postId];

        if (!_post5 || !_post5.comments[commentId]) {
          return state;
        }

        return posts__objectSpread({}, state, posts__defineProperty({}, postId, posts__objectSpread({}, _post5, {
          comments: posts__objectSpread({}, _post5.comments, posts__defineProperty({}, commentId, posts__objectSpread({}, _post5.comments[commentId], action.comment)))
        })));
      }

    case actions["j" /* COMMENT_REMOVED */]:
      {
        var _postId = action.postId,
            _commentId = action.commentId;
        var _post6 = state[_postId];
        if (!_post6 || !_post6.comments[_commentId]) return state;

        var _commentIds3 = _post6.commentIds.filter(function (id) {
          return id !== _commentId;
        });

        delete _post6.comments[_commentId];
        return posts__objectSpread({}, state, posts__defineProperty({}, _postId, posts__objectSpread({}, _post6, {
          commentIds: _commentIds3,
          totalComments: _post6.totalComments - 1
        })));
      }

    case actions["_1" /* POST_EXPANDED */]:
      {
        return posts__objectSpread({}, state, {
          expanded: action.postId
        });
      }

    case actions["Z" /* POST_COLLAPSED */]:
      {
        return posts__objectSpread({}, state, {
          expanded: null
        });
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_posts = (posts);
// CONCATENATED MODULE: ./redux/reducers/users.js
function users__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { users__defineProperty(target, key, source[key]); }); } return target; }

function users__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var users_initialState = {
  error: null,
  curUser: null,
  pending: false,
  doSetup: false,
  avatarError: null,
  avatarProgress: 0
};

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : users_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["z" /* LOAD_USERS */]:
      {
        return users__objectSpread({}, state, action.users);
      }

    case actions["B" /* LOGIN_PENDING */]:
      {
        return users__objectSpread({}, state, {
          error: false,
          curUser: null,
          pending: true
        });
      }

    case actions["A" /* LOGIN_FAIL */]:
      {
        return users__objectSpread({}, state, {
          curUser: null,
          pending: false,
          error: action.error
        });
      }

    case actions["C" /* LOGIN_SUCCESS */]:
      {
        return users__objectSpread({}, state, {
          error: null,
          pending: false,
          doSetup: false,
          curUser: action.userId
        });
      }

    case actions["D" /* LOGOUT */]:
      {
        return users_initialState;
      }

    case actions["q" /* DO_SETUP */]:
      {
        return users__objectSpread({}, users_initialState, {
          doSetup: true
        });
      }

    case actions["_20" /* USER_UPDATED */]:
      {
        var userId = action.userId,
            user = action.user;
        if (!state[userId]) return state;
        return users__objectSpread({}, state, users__defineProperty({}, userId, users__objectSpread({}, state[userId], user)));
      }

    case actions["_19" /* USER_REMOVED */]:
      {
        return users__objectSpread({}, state, users__defineProperty({}, action.userId, null));
      }

    case actions["b" /* AVATAR_PROGRESS */]:
      {
        return users__objectSpread({}, state, {
          avatarProgress: action.progress
        });
      }

    case actions["a" /* AVATAR_FAIL */]:
      {
        return users__objectSpread({}, state, {
          avatarError: action.error
        });
      }

    case actions["c" /* AVATAR_SUCCESS */]:
      {
        return users__objectSpread({}, state, {
          avatarProgress: 0,
          avatarError: null
        });
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_users = (users);
// CONCATENATED MODULE: ./redux/reducers/resources.js
function resources__toConsumableArray(arr) { return resources__arrayWithoutHoles(arr) || resources__iterableToArray(arr) || resources__nonIterableSpread(); }

function resources__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function resources__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function resources__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function resources__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { resources__defineProperty(target, key, source[key]); }); } return target; }

function resources__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var resources_initialState = {
  ids: [],
  error: null,
  pending: false
};

function resources() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resources_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["_9" /* RESOURCES_PENDING */]:
      {
        return resources__objectSpread({}, resources_initialState, {
          pending: true
        });
      }

    case actions["_8" /* RESOURCES_FAIL */]:
      {
        return resources__objectSpread({}, resources_initialState, {
          error: action.error
        });
      }

    case actions["_10" /* RESOURCES_SUCCESS */]:
      {
        return resources__objectSpread({}, resources_initialState, {
          ids: action.ids
        }, action.resources);
      }

    case actions["_11" /* RESOURCE_CREATED */]:
      {
        var id = action.resourceId;
        return resources__objectSpread({}, state, resources__defineProperty({
          ids: resources__toConsumableArray(state.ids).concat([id])
        }, id, resources__objectSpread({}, action.resource)));
      }

    case actions["_13" /* RESOURCE_UPDATED */]:
      {
        var _id2 = action.resourceId;
        return resources__objectSpread({}, state, resources__defineProperty({}, _id2, resources__objectSpread({}, state[_id2], action.resource)));
      }

    case actions["_12" /* RESOURCE_REMOVED */]:
      {
        var _objectSpread4;

        var _id3 = action.resourceId;
        if (!state[_id3]) return state;
        return resources__objectSpread({}, state, (_objectSpread4 = {}, resources__defineProperty(_objectSpread4, _id3, null), resources__defineProperty(_objectSpread4, "ids", state.ids.filter(function (_id) {
          return _id !== _id3;
        })), _objectSpread4));
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_resources = (resources);
// CONCATENATED MODULE: ./redux/reducers/search.js
function search__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { search__defineProperty(target, key, source[key]); }); } return target; }

function search__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var search_initialState = {
  error: null,
  results: [],
  searchQ: '',
  pending: false
};

function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : search_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["_15" /* SEARCH_PENDING */]:
      {
        return search__objectSpread({}, state, {
          error: null,
          pending: true
        });
      }

    case actions["_14" /* SEARCH_FAIL */]:
      {
        return search__objectSpread({}, state, {
          pending: false,
          error: action.error
        });
      }

    case actions["_16" /* SEARCH_SUCCESS */]:
      {
        var searchQ = action.searchQ,
            results = action.results;
        return search__objectSpread({}, search_initialState, {
          searchQ: searchQ,
          results: results
        });
      }

    default:
      {
        return state;
      }
  }
}

/* harmony default export */ var reducers_search = (search);
// CONCATENATED MODULE: ./redux/store.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return store_initializeStore; });












var reducers = Object(external__redux_["combineReducers"])({
  contact: reducers_contact,
  dialog: reducers_dialog,
  mngUsers: reducers_mngUsers,
  opps: reducers_opps,
  page: reducers_page,
  pages: pages,
  post: reducers_post,
  posts: reducers_posts,
  resources: reducers_resources,
  search: reducers_search,
  users: reducers_users
});
var middleware;

if (false) {
  var logger = require('redux-logger').default;

  middleware = applyMiddleware(logger);
}

var store_initializeStore = function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(external__redux_["createStore"])(reducers, initialState, middleware);
};

var getStore = function getStore() {
  return typeof window === 'undefined' ? global.reduxStore : window.reduxStore;
};

/* harmony default export */ var store = __webpack_exports__["a"] = (getStore);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./util/getApp.js
var getApp = __webpack_require__(7);

// EXTERNAL MODULE: ./redux/actions/index.js + 41 modules
var actions = __webpack_require__(2);

// CONCATENATED MODULE: ./feathers/services/avatarsService.js


var avatarsService = getApp["a" /* default */].service('avatars');

if (typeof window !== 'undefined') {
  avatarsService.on('created', function (_ref) {
    var _id = _ref._id,
        file = _ref.file;
    return Object(actions["_99" /* userUpdated */])({
      _id: _id,
      avatar: file
    });
  });
  avatarsService.on('removed', function (_ref2) {
    var _id = _ref2._id;
    return Object(actions["_99" /* userUpdated */])({
      _id: _id,
      avatar: null
    });
  });
}
// CONCATENATED MODULE: ./feathers/services/usersService.js


var usersService = getApp["a" /* default */].service('users');

if (typeof window !== 'undefined') {
  usersService.on('patched', function (user) {
    return Object(actions["_99" /* userUpdated */])(user);
  });
  usersService.on('removed', function (user) {
    return Object(actions["_98" /* userRemoved */])(user);
  });
}
// CONCATENATED MODULE: ./feathers/services/restrictsService.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var restrictsService = getApp["a" /* default */].service('restricts');

if (typeof window !== 'undefined') {
  restrictsService.on('created', function (_ref) {
    var _id = _ref._id,
        restricts = _objectWithoutProperties(_ref, ["_id"]);

    return Object(actions["_99" /* userUpdated */])({
      _id: _id,
      restricts: restricts
    });
  });
  restrictsService.on('patched', function (_ref2) {
    var _id = _ref2._id,
        restricts = _objectWithoutProperties(_ref2, ["_id"]);

    return Object(actions["_99" /* userUpdated */])({
      _id: _id,
      restricts: restricts
    });
  });
  restrictsService.on('removed', function (_ref3) {
    var _id = _ref3._id;
    return Object(actions["_99" /* userUpdated */])({
      _id: _id,
      restricts: {}
    });
  });
}
// CONCATENATED MODULE: ./feathers/services/pagesService.js


var pagesService = getApp["a" /* default */].service('pages');

if (typeof window !== 'undefined') {
  pagesService.on('patched', function (page) {
    return Object(actions["_67" /* pageUpdated */])(page);
  });
  pagesService.on('removed', function (page) {
    return Object(actions["_66" /* pageRemoved */])(page._id);
  });
}
// CONCATENATED MODULE: ./feathers/services/postsService.js


var postsService = getApp["a" /* default */].service('posts');

if (typeof window !== 'undefined') {
  postsService.on('created', function (post) {
    return Object(actions["_69" /* postCreated */])(post);
  });
  postsService.on('patched', function (post) {
    return Object(actions["_71" /* postUpdated */])(post);
  });
  postsService.on('removed', function (post) {
    return Object(actions["_70" /* postRemoved */])(post);
  });
}
// CONCATENATED MODULE: ./feathers/services/commentsService.js


var commentsService = getApp["a" /* default */].service('comments');

if (typeof window !== 'undefined') {
  commentsService.on('created', function (comment) {
    return Object(actions["_25" /* commentCreated */])(comment);
  });
  commentsService.on('patched', function (comment) {
    return Object(actions["_27" /* commentUpdated */])(comment);
  });
  commentsService.on('removed', function (comment) {
    return Object(actions["_26" /* commentRemoved */])(comment);
  });
}
// CONCATENATED MODULE: ./feathers/services/pageThumbsService.js


var pageThumbsService = getApp["a" /* default */].service('page-thumbs');

if (typeof window !== 'undefined') {
  pageThumbsService.on('created', function (_ref) {
    var _id = _ref._id,
        file = _ref.file;
    return Object(actions["_67" /* pageUpdated */])({
      _id: _id,
      thumb: file
    });
  });
}
// CONCATENATED MODULE: ./feathers/services/modsService.js


var modsService = getApp["a" /* default */].service('mods');

if (typeof window !== 'undefined') {
  modsService.on('created', function (mod) {
    return Object(actions["_57" /* modCreated */])(mod);
  });
  modsService.on('removed', function (mod) {
    return Object(actions["_58" /* modRemoved */])(mod);
  });
}
// CONCATENATED MODULE: ./feathers/services/resourcesService.js


var resourcesService = getApp["a" /* default */].service('resources');

if (typeof window !== 'undefined') {
  resourcesService.on('created', function (resource) {
    return Object(actions["_85" /* resourceCreated */])(resource);
  });
  resourcesService.on('patched', function (resource) {
    return Object(actions["_87" /* resourceUpdated */])(resource);
  });
  resourcesService.on('removed', function (resource) {
    return Object(actions["_86" /* resourceRemoved */])(resource);
  });
}
// CONCATENATED MODULE: ./feathers/services/oppsCatsService.js


var oppsCatsService = getApp["a" /* default */].service('opps-cats');

if (typeof window !== 'undefined') {
  oppsCatsService.on('created', function (cat) {
    return Object(actions["_60" /* oppCatCreated */])(cat);
  });
  oppsCatsService.on('patched', function (cat) {
    return Object(actions["_62" /* oppCatUpdated */])(cat);
  });
  oppsCatsService.on('removed', function (cat) {
    return Object(actions["_61" /* oppCatRemoved */])(cat);
  });
}
// CONCATENATED MODULE: ./feathers/services/oppsService.js


var oppsService = getApp["a" /* default */].service('opps');

if (typeof window !== 'undefined') {
  oppsService.on('created', function (opp) {
    return Object(actions["_63" /* oppCreated */])(opp);
  });
  oppsService.on('patched', function (opp) {
    return Object(actions["_65" /* oppUpdated */])(opp);
  });
  oppsService.on('removed', function (opp) {
    return Object(actions["_64" /* oppRemoved */])(opp);
  });
}
// CONCATENATED MODULE: ./feathers/services/contactService.js


var contactService = getApp["a" /* default */].service('contact');

if (typeof window !== 'undefined') {
  contactService.on('created', function (msg) {
    return Object(actions["_28" /* contactCreated */])(msg);
  });
  contactService.on('removed', function (msg) {
    return Object(actions["_30" /* contactRemoved */])(msg);
  });
}
// CONCATENATED MODULE: ./feathers/services/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return avatarsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "l", function() { return usersService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "k", function() { return restrictsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return pagesService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return postsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return commentsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return pageThumbsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return modsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return resourcesService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return oppsCatsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return oppsService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return contactService; });













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./redux/store.js + 11 modules
var redux_store = __webpack_require__(0);

// EXTERNAL MODULE: ./util/getError.js
var getError = __webpack_require__(8);

// EXTERNAL MODULE: ./feathers/services/index.js + 12 modules
var services = __webpack_require__(1);

// CONCATENATED MODULE: ./redux/actions/doSearch.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // action types

var SEARCH_FAIL = 'SEARCH_FAIL';
var SEARCH_PENDING = 'SEARCH_PENDING';
var SEARCH_SUCCESS = 'SEARCH_SUCCESS'; // action methods

var searchTimeout,
    searchIdx = 0;
var searchTime = 275; // time to wait doing search

var doSearch_doSearch = function doSearch(searchQ) {
  var store = Object(redux_store["a" /* default */])();
  clearTimeout(searchTimeout);
  searchIdx++;
  var curIdx = searchIdx;

  if (!searchQ.length) {
    return store.dispatch({
      type: SEARCH_SUCCESS,
      searchQ: searchQ,
      results: []
    });
  }

  searchTimeout = setTimeout(function () {
    store.dispatch({
      type: SEARCH_PENDING
    });
    var $select = ['_id'];
    var $limit = 3; // only get 3 from each

    var pagesQ = {
      $limit: $limit,
      $select: $select,
      default: false,
      $sort: {
        name: 1
      },
      name: {
        $search: searchQ
      }
    };
    var userSearch = searchQ.indexOf('@') > -1 ? searchQ.replace('@', '') : searchQ;
    var usersQ = {
      $limit: $limit,
      $select: $select,
      $sort: {
        firstName: 1
      },
      $or: ['firstName', 'lastName', 'username']
    };
    usersQ.$or = usersQ.$or.map(function (field) {
      return _defineProperty({}, field, {
        $search: userSearch
      });
    });

    if (userSearch.indexOf(' ') > -1) {
      // if the search contains a space try searching by first and last
      var userParts = userSearch.split(' ');
      usersQ.$or.push({
        firstName: {
          $search: userParts[0]
        }
      });
      usersQ.$or.push({
        lastName: {
          $search: userParts[1]
        }
      });
    }

    var pageIds = [];
    var userIds = [];
    var results = [];
    services["h" /* pagesService */].find({
      query: pagesQ
    }).then(function (res) {
      res.data.forEach(function (_ref2) {
        var _id = _ref2._id;
        return pageIds.push(_id);
      });
      if (!res.total) usersQ.$limit *= 2;
    }).then(function () {
      return loadPages_loadPages(pageIds.concat());
    }).then(function () {
      return services["l" /* usersService */].find({
        query: usersQ
      });
    }).then(function (res) {
      res.data.forEach(function (_ref3) {
        var _id = _ref3._id;
        return userIds.push(_id);
      });
    }).then(function () {
      return Object(loadUsers["b" /* loadUsers */])(userIds.concat());
    }).then(function () {
      var _store$getState = store.getState(),
          pages = _store$getState.pages,
          users = _store$getState.users;

      pageIds.forEach(function (_id) {
        if (pages[_id]) {
          var _pages$_id = pages[_id],
              name = _pages$_id.name,
              thumb = _pages$_id.thumb;
          results.push({
            type: 'page',
            _id: _id,
            name: name,
            thumb: thumb
          });
        }
      });
      userIds.forEach(function (_id) {
        if (users[_id]) {
          var _users$_id = users[_id],
              firstName = _users$_id.firstName,
              lastName = _users$_id.lastName,
              username = _users$_id.username,
              avatar = _users$_id.avatar;
          results.push({
            type: 'user',
            _id: _id,
            avatar: avatar,
            username: username,
            lastName: lastName,
            firstName: firstName
          });
        }
      });
    }).then(function () {
      if (searchIdx !== curIdx) return;
      store.dispatch({
        type: SEARCH_SUCCESS,
        searchQ: searchQ,
        results: results
      });
    }).catch(function (err) {
      store.dispatch({
        type: SEARCH_FAIL,
        error: Object(getError["a" /* default */])(err, 'An error occurred during search')
      });
    });
  }, searchTime);
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./redux/actions/setDialog.js

 // action types

var SET_DIALOG = 'SET_DIALOG';
var CLEAR_DIALOG = 'CLEAR_DIALOG'; // action methods

var setDialog_setDialog = function setDialog(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Confirm...' : _ref$title,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Are you sure?' : _ref$message,
      _ref$button1Txt = _ref.button1Txt,
      button1Txt = _ref$button1Txt === void 0 ? 'Confirm' : _ref$button1Txt,
      _ref$button2Txt = _ref.button2Txt,
      button2Txt = _ref$button2Txt === void 0 ? 'Cancel' : _ref$button2Txt,
      _ref$button1Act = _ref.button1Act,
      button1Act = _ref$button1Act === void 0 ? function () {} : _ref$button1Act,
      _ref$button2Act = _ref.button2Act,
      button2Act = _ref$button2Act === void 0 ? function () {} : _ref$button2Act;
  Object(redux_store["a" /* default */])().dispatch({
    type: SET_DIALOG,
    payload: {
      title: title,
      message: message,
      button1Txt: button1Txt,
      button2Txt: button2Txt,
      button1Act: button1Act,
      button2Act: button2Act,
      activePath: router__default.a.route
    }
  });
};
var setDialog_clearDialog = function clearDialog() {
  Object(redux_store["a" /* default */])().dispatch({
    type: CLEAR_DIALOG
  });
};
// CONCATENATED MODULE: ./redux/actions/contact/loadContact.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



 // action types

var CONTACT_PENDING = 'CONTACT_PENDING';
var CONTACT_FAIL = 'CONTACT_FAIL';
var CONTACT_SUCCESS = 'CONTACT_SUCCESS';
var CONTACT_MORE_PENDING = 'CONTACT_MORE_PENDING'; // action methods

var contactLimit = 24;
var loadContact_loadContact = function loadContact(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial,
      _ref$$sort = _ref.$sort,
      $sort = _ref$$sort === void 0 ? {
    createdAt: -1
  } : _ref$$sort;
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      contact = _store$getState.contact,
      users = _store$getState.users;

  var ids = contact.ids;

  if (!users.curUser || !users[users.curUser].isAdmin) {
    return Promise.resolve();
  }

  var query = {
    $sort: $sort,
    $limit: contactLimit,
    $skip: initial ? 0 : ids.length
  };
  store.dispatch({
    type: initial ? CONTACT_PENDING : CONTACT_MORE_PENDING
  });
  return services["c" /* contactService */].find({
    query: query
  }).then(function (res) {
    var msgs = {};
    var newIds = res.data.map(function (_ref2) {
      var _id = _ref2._id,
          msg = _objectWithoutProperties(_ref2, ["_id"]);

      msgs[_id] = msg;
      return _id;
    });
    store.dispatch({
      type: CONTACT_SUCCESS,
      msgs: msgs,
      ids: newIds,
      hasMore: res.total > ids.length + newIds.length
    });
  }).catch(function (err) {
    store.dispatch({
      type: CONTACT_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred loading the messages')
    });
  });
};
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(13);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./util/config.js
var util_config = __webpack_require__(5);
var config_default = /*#__PURE__*/__webpack_require__.n(util_config);

// CONCATENATED MODULE: ./redux/actions/contact/createContact.js
function createContact__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



 // action types

var CONTACT_CREATED = 'CONTACT_CREATED'; // action methods

var createContact_createContact = function createContact(_ref) {
  var name = _ref.name,
      email = _ref.email,
      msg = _ref.msg;
  var axiosInst = external__axios__default.a.create({
    baseURL: util_config["serverUrl"],
    headers: {
      Authorization: localStorage['jwt']
    }
  });
  return axiosInst.post('/contact', {
    name: name,
    email: email,
    msg: msg
  });
};
var createContact_contactCreated = function contactCreated(_ref2) {
  var _id = _ref2._id,
      msg = createContact__objectWithoutProperties(_ref2, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: CONTACT_CREATED,
    msgId: _id,
    msg: msg
  });
};
// CONCATENATED MODULE: ./redux/actions/contact/removeContact.js

 // action types

var CONTACT_REMOVED = 'CONTACT_REMOVED'; // action methods

var removeContact_removeContact = function removeContact(_id) {
  return services["c" /* contactService */].remove(_id);
};
var removeContact_removeContactRange = function removeContactRange(from, to) {
  var query = {
    createdAt: {
      $lte: to,
      $gte: from
    }
  };
  return services["c" /* contactService */].remove(null, {
    query: query
  });
};
var removeContact_contactRemoved = function contactRemoved(_ref) {
  var _id = _ref._id;
  Object(redux_store["a" /* default */])().dispatch({
    type: CONTACT_REMOVED,
    msgId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/mngUsers/listUsers.js
function listUsers__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // action types

var LIST_USERS_FAIL = 'LIST_USERS_FAIL';
var LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS';
var LIST_USERS_PENDING = 'LIST_USERS_PENDING';
var LIST_USERS_MORE_PENDING = 'LIST_USERS_MORE_PENDING'; // action methods

var listUsers_listUsers = function listUsers(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial,
      filter = _ref.filter;
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      mngUsers = _store$getState.mngUsers,
      users = _store$getState.users;

  var curUser = users.curUser;
  var ids = mngUsers.ids;

  if (!users[curUser] || !users[curUser].isAdmin) {
    return Promise.resolve(); // fail gracefully
  }

  var hasMore;
  var curIds = [];
  var query = {
    $limit: 32,
    $select: ['_id'],
    $sort: {
      lastName: 1
    },
    $skip: initial ? 0 : ids.length
  };
  var toSearch = {};

  if (filter) {
    filter.split(',').forEach(function (search) {
      search = search.trim();

      if (search.substr(0, 1) === '@') {
        search = search.substr(1);
      }

      toSearch[search] = true;
    });
    toSearch = Object.keys(toSearch);
    var fields = ['firstName', 'lastName', 'username'];
    var $or = [];
    toSearch.forEach(function ($search) {
      fields.forEach(function (field) {
        $or.push(listUsers__defineProperty({}, field, {
          $search: $search
        }));
      });
    });
    query.$or = $or;
  }

  store.dispatch({
    type: initial ? LIST_USERS_PENDING : LIST_USERS_MORE_PENDING,
    filter: filter
  });
  return services["l" /* usersService */].find({
    query: query
  }).then(function (res) {
    res.data.forEach(function (_ref2) {
      var _id = _ref2._id;
      return curIds.push(_id + '');
    });
    hasMore = res.total > res.data.length + ids.length;
  }).then(function () {
    return Object(loadUsers["b" /* loadUsers */])(curIds.concat());
  }).then(function () {
    store.dispatch({
      type: LIST_USERS_SUCCESS,
      hasMore: hasMore,
      ids: curIds
    });
  }).catch(function (err) {
    store.dispatch({
      type: LIST_USERS_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred listing users')
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/loadOpps.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { loadOpps__defineProperty(target, key, source[key]); }); } return target; }

function loadOpps__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // action types

var OPPS_PENDING = 'OPPS_PENDING';
var OPPS_FAIL = 'OPPS_FAIL';
var OPPS_SUCCESS = 'OPPS_SUCCESS'; // action methods

var sharedQuery = {
  $limit: util_config["maxResults"],
  $sort: {
    createdAt: 1
  }
};
var loadOpps_getCatsOpps = function getCatsOpps(catIds, opps) {
  if (!catIds.length) return Promise.resolve();
  var cat = catIds.pop() + '';

  var query = _objectSpread({}, sharedQuery, {
    cat: cat
  });

  return services["f" /* oppsService */].find({
    query: query
  }).then(function (res) {
    res.data.forEach(function (_ref) {
      var _id = _ref._id,
          desc = _ref.desc,
          link = _ref.link;
      opps[cat].ids.push(_id);
      opps[cat][_id] = {
        desc: desc,
        link: link
      };
    });
  }).then(function () {
    return getCatsOpps(catIds, opps);
  });
};
var loadOpps_loadOpps = function loadOpps() {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      users = _store$getState.users;

  if (!users.curUser) return Promise.resolve();
  store.dispatch({
    type: OPPS_PENDING
  });
  var catIds = [];
  var opps = {};
  return services["e" /* oppsCatsService */].find({
    query: sharedQuery
  }).then(function (res) {
    res.data.forEach(function (_ref2) {
      var _id = _ref2._id,
          name = _ref2.name;
      catIds.push(_id);
      opps[_id] = {
        name: name,
        ids: []
      };
    });
  }).then(function () {
    return loadOpps_getCatsOpps(catIds.concat(), opps);
  }).then(function () {
    return store.dispatch({
      type: OPPS_SUCCESS,
      ids: catIds,
      opps: opps
    });
  }).catch(function (err) {
    return store.dispatch({
      type: OPPS_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred loading opportunities')
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/createOpp.js
function createOpp__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var OPP_CREATED = 'OPP_CREATED'; // action methods

var createOpp_createOpp = function createOpp(_ref) {
  var cat = _ref.cat,
      desc = _ref.desc,
      link = _ref.link;
  return services["f" /* oppsService */].create({
    cat: cat,
    desc: desc,
    link: link
  });
};
var createOpp_oppCreated = function oppCreated(_ref2) {
  var _id = _ref2._id,
      cat = _ref2.cat,
      opp = createOpp__objectWithoutProperties(_ref2, ["_id", "cat"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_CREATED,
    cat: cat,
    oppId: _id,
    opp: opp
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/createOppCat.js
function createOppCat__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var OPP_CAT_CREATED = 'OPP_CAT_CREATED'; // action methods

var createOppCat_createOppCat = function createOppCat(_ref) {
  var name = _ref.name;
  return services["e" /* oppsCatsService */].create({
    name: name
  });
};
var createOppCat_oppCatCreated = function oppCatCreated(_ref2) {
  var _id = _ref2._id,
      cat = createOppCat__objectWithoutProperties(_ref2, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_CAT_CREATED,
    catId: _id,
    cat: cat
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/removeOpp.js

 // action types

var OPP_REMOVED = 'OPP_REMOVED'; // action methods

var removeOpp_removeOpp = function removeOpp(_id) {
  return services["f" /* oppsService */].remove(_id);
};
var removeOpp_oppRemoved = function oppRemoved(_ref) {
  var _id = _ref._id,
      cat = _ref.cat;
  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_REMOVED,
    cat: cat,
    oppId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/removeOppCat.js

 // action types

var OPP_CAT_REMOVED = 'OPP_CAT_REMOVED'; // action methods

var removeOppCat_removeOppCat = function removeOppCat(_id) {
  return services["e" /* oppsCatsService */].remove(_id);
};
var removeOppCat_oppCatRemoved = function oppCatRemoved(_ref) {
  var _id = _ref._id;
  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_CAT_REMOVED,
    catId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/updateOpp.js
function updateOpp__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var OPP_UPDATED = 'OPP_UPDATED'; // action methods

var updateOpp_updateOpp = function updateOpp(_ref) {
  var _id = _ref._id,
      opp = updateOpp__objectWithoutProperties(_ref, ["_id"]);

  return services["f" /* oppsService */].patch(_id, opp);
};
var updateOpp_oppUpdated = function oppUpdated(_ref2) {
  var _id = _ref2._id,
      cat = _ref2.cat,
      opp = updateOpp__objectWithoutProperties(_ref2, ["_id", "cat"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_UPDATED,
    cat: cat,
    oppId: _id,
    opp: opp
  });
};
// CONCATENATED MODULE: ./redux/actions/opps/updateOppCat.js
function updateOppCat__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var OPP_CAT_UPDATED = 'OPP_CAT_UPDATED'; // action methods

var updateOppCat_updateOppCat = function updateOppCat(_ref) {
  var _id = _ref._id,
      cat = updateOppCat__objectWithoutProperties(_ref, ["_id"]);

  return services["e" /* oppsCatsService */].patch(_id, cat);
};
var updateOppCat_oppCatUpdated = function oppCatUpdated(_ref2) {
  var _id = _ref2._id,
      cat = updateOppCat__objectWithoutProperties(_ref2, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: OPP_CAT_UPDATED,
    catId: _id,
    cat: cat
  });
};
// EXTERNAL MODULE: ./util/getBatch.js
var getBatch = __webpack_require__(15);

// CONCATENATED MODULE: ./redux/actions/pages/loadPages.js
function loadPages__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function loadPages__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { loadPages__defineProperty(target, key, source[key]); }); } return target; }

function loadPages__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // action types

var LOAD_PAGES = 'LOAD_PAGES'; // action methods

var loadPages_loadPages = function loadPages() {
  var pageIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var store = Object(redux_store["a" /* default */])();

  if (!Array.isArray(pageIds)) {
    if (pageIds) pageIds = [pageIds];else return Promise.reject();
  }

  var _store$getState = store.getState(),
      pages = _store$getState.pages;

  var fetchBatch = function fetchBatch() {
    var batch = Object(getBatch["a" /* default */])(pageIds, pages);
    if (!batch.length) return Promise.resolve();
    var $or = batch.map(function (_id) {
      return {
        _id: _id
      };
    });
    var query = {
      $or: $or,
      $limit: $or.limit
    };

    var modsQuery = loadPages__objectSpread({}, query, {
      $or: $or.map(function (_ref) {
        var _id = _ref._id;
        return {
          page: _id
        };
      })
    });

    var modsToLoad = {};
    var curPages = {};
    return services["h" /* pagesService */].find({
      query: query
    }).then(function (res) {
      res.data.forEach(function (page) {
        var _id = page._id;
        delete page._id;
        curPages[_id] = page;
      });
    }).then(function () {
      return services["d" /* modsService */].find({
        query: modsQuery
      });
    }).then(function (res) {
      res.data.forEach(function (_ref2) {
        var page = _ref2.page,
            mod = loadPages__objectWithoutProperties(_ref2, ["page"]);

        if (!curPages[page].mods) {
          curPages[page].mods = [];
        }

        modsToLoad[mod.user] = true;
        curPages[page].mods.push(mod);
      });
    }).then(function () {
      return Object(loadUsers["b" /* loadUsers */])(Object.keys(modsToLoad));
    }).then(function () {
      return services["g" /* pageThumbsService */].find({
        query: query
      });
    }).then(function (res) {
      res.data.forEach(function (thumb) {
        curPages[thumb._id].thumb = thumb.file;
      });
    }).then(function () {
      store.dispatch({
        type: LOAD_PAGES,
        pages: curPages
      });
    }).then(function () {
      return fetchBatch();
    });
  };

  return fetchBatch();
};
// CONCATENATED MODULE: ./util/getSort.js
function getSort__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// convert string sort to query $sort object
var getSort = function getSort(sort) {
  if (sort.indexOf(':') < 0) return null;
  sort = sort.split(':');
  return getSort__defineProperty({}, sort[0], sort[1]);
};

/* harmony default export */ var util_getSort = (getSort);
// CONCATENATED MODULE: ./redux/actions/pages/listPages.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function listPages__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





 // action types

var LIST_PAGES_PENDING = 'LIST_PAGES_PENDING';
var LIST_PAGES_FAIL = 'LIST_PAGES_FAIL';
var LIST_PAGES_SUCCESS = 'LIST_PAGES_SUCCESS'; // action methods

var listPages_listPages = function listPages(_ref) {
  var _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? null : _ref$sort,
      _ref$$limit = _ref.$limit,
      $limit = _ref$$limit === void 0 ? 16 : _ref$$limit,
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial;
  var store = Object(redux_store["a" /* default */])();

  var _store$getState$pages = store.getState().pages,
      toList = _store$getState$pages.toList,
      pages = listPages__objectWithoutProperties(_store$getState$pages, ["toList"]);

  if (!sort) {
    sort = pages.sort;
  }

  store.dispatch({
    type: LIST_PAGES_PENDING,
    sort: sort,
    initial: initial
  });
  var query = {
    $limit: $limit,
    default: false,
    $select: ['_id'],
    $sort: util_getSort(sort),
    $skip: initial ? 0 : toList.length
  };
  var ids = [],
      hasMore = false;
  return services["h" /* pagesService */].find({
    query: query
  }).then(function (res) {
    hasMore = query.$skip + res.data.length < res.total;
    ids = res.data.map(function (_ref2) {
      var _id = _ref2._id;
      return _id;
    });
    return loadPages_loadPages(_toConsumableArray(ids));
  }).then(function () {
    store.dispatch({
      type: LIST_PAGES_SUCCESS,
      toList: ids,
      hasMore: hasMore
    });
  }).catch(function (err) {
    store.dispatch({
      type: LIST_PAGES_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred loading pages')
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/pages/createMod.js
function createMod__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



 // action types

var PAGE_MOD_CREATED = 'PAGE_MOD_CREATED'; // action methods

var createMod_createMod = function createMod(username) {
  var _getStore$getState = Object(redux_store["a" /* default */])().getState(),
      pages = _getStore$getState.pages;

  var page = pages.curPage;
  var user;
  return services["l" /* usersService */].find({
    query: {
      username: {
        $search: username
      }
    }
  }).then(function (res) {
    if (!res.total) {
      throw new Error('user not found');
    }

    user = res.data[0]._id;
  }).then(function () {
    return services["d" /* modsService */].create({
      user: user,
      page: page
    });
  }); // don't catch so caller can
};
var createMod_modCreated = function modCreated(_ref) {
  var page = _ref.page,
      mod = createMod__objectWithoutProperties(_ref, ["page"]);

  Object(loadUsers["b" /* loadUsers */])([mod.user]).then(function () {
    Object(redux_store["a" /* default */])().dispatch({
      type: PAGE_MOD_CREATED,
      pageId: page,
      mod: mod
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/pages/removeMod.js

 // action types

var PAGE_MOD_REMOVED = 'PAGE_MOD_REMOVED'; // action methods

var removeMod_removeMod = function removeMod(_id) {
  return services["d" /* modsService */].remove(_id);
};
var removeMod_modRemoved = function modRemoved(_ref) {
  var _id = _ref._id,
      page = _ref.page;
  Object(redux_store["a" /* default */])().dispatch({
    type: PAGE_MOD_REMOVED,
    pageId: page,
    modId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/pages/removePage.js

 // action types

var PAGE_REMOVED = 'PAGE_REMOVED'; // action methods

var removePage_removePage = function removePage(_id) {
  return services["h" /* pagesService */].remove(_id);
};
var removePage_pageRemoved = function pageRemoved(_id) {
  Object(redux_store["a" /* default */])().dispatch({
    type: PAGE_REMOVED,
    pageId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/pages/setPage.js

 // action types

var SET_PAGE = 'SET_PAGE'; // action methods

var setPage_setPage = function setPage(pageId) {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      pages = _store$getState.pages,
      users = _store$getState.users;

  if (pages.curPage === pageId || !users.curUser) {
    return Promise.resolve();
  }

  return loadPages_loadPages(pageId).then(function () {
    store.dispatch({
      type: SET_PAGE,
      pageId: pageId
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/pages/updatePage.js
function updatePage__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





 // action types

var PAGE_PENDING = 'PAGE_PENDING';
var PAGE_FAIL = 'PAGE_FAIL';
var PAGE_PROGRESS = 'PAGE_PROGRESS';
var PAGE_SUCCESS = 'PAGE_SUCCESS';
var PAGE_UPDATED = 'PAGE_UPDATED'; // action methods

var updatePage_uploadPageThumb = function uploadPageThumb(_ref) {
  var thumb = _ref.thumb,
      page = _ref.page;
  var store = Object(redux_store["a" /* default */])();
  var fd = new FormData();
  fd.append('file', thumb);
  fd.append('page', page);
  var axiosInst = external__axios__default.a.create({
    baseURL: util_config["serverUrl"],
    headers: {
      Authorization: localStorage['jwt']
    }
  });
  var config = {
    onUploadProgress: function onUploadProgress(e) {
      var progress = Math.round(e.loaded / e.total * 100);
      store.dispatch({
        type: PAGE_PROGRESS,
        progress: progress
      });
    }
  };
  return axiosInst.post('page-thumbs', fd, config).then(function () {
    store.dispatch({
      type: PAGE_SUCCESS
    });
  });
}; // also handles creating pages

var updatePage_updatePage = function updatePage(_ref2) {
  var _id = _ref2._id,
      name = _ref2.name,
      desc = _ref2.desc,
      thumb = _ref2.thumb;
  var store = Object(redux_store["a" /* default */])();
  store.dispatch({
    type: PAGE_PENDING
  });
  var changes = {};
  if (name) changes.name = name;
  if (desc) changes.desc = desc;
  return new Promise(function (resolve, reject) {
    if (name || desc) {
      ;
      (_id ? services["h" /* pagesService */].patch(_id, changes) : services["h" /* pagesService */].create(changes)).then(function (res) {
        if (!_id) _id = res._id;
        resolve();
      }).catch(function (err) {
        store.dispatch({
          type: PAGE_FAIL,
          error: Object(getError["a" /* default */])(err, 'An error occurred updating the page')
        });
        reject(); // don't upload thumbnail if this fails
      });
    } else {
      resolve();
    }
  }).then(function () {
    return thumb && updatePage_uploadPageThumb({
      thumb: thumb,
      page: _id
    });
  }).then(function () {
    return !thumb && store.dispatch({
      type: PAGE_SUCCESS
    });
  }).then(function () {
    return _id;
  }).catch(function () {});
};
var updatePage_pageUpdated = function pageUpdated(_ref3) {
  var _id = _ref3._id,
      page = updatePage__objectWithoutProperties(_ref3, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: PAGE_UPDATED,
    pageId: _id,
    page: page
  });
};
// EXTERNAL MODULE: ./redux/actions/posts/createPost.js
var createPost = __webpack_require__(20);

// CONCATENATED MODULE: ./redux/actions/posts/expandPost.js
 // action types

var POST_EXPANDED = 'POST_EXPANDED';
var POST_COLLAPSED = 'POST_COLLAPSED'; // action method

var expandPost_expandPost = function expandPost(postId) {
  Object(redux_store["a" /* default */])().dispatch({
    type: POST_EXPANDED,
    postId: postId
  });
};
var expandPost_collapsePost = function collapsePost() {
  var store = Object(redux_store["a" /* default */])();
  var expanded = store.getState().posts.expanded;
  if (!expanded) return;
  store.dispatch({
    type: POST_COLLAPSED
  });
};
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(12);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// CONCATENATED MODULE: ./redux/actions/posts/loadPosts.js


function loadPosts__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { loadPosts__defineProperty(target, key, source[key]); }); } return target; }

function loadPosts__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





 // action types

var POSTS_FAIL = 'POSTS_FAIL';
var POSTS_PENDING = 'POSTS_PENDING';
var POSTS_SUCCESS = 'POSTS_SUCCESS';
var POSTS_MORE_PENDING = 'POSTS_MORE_PENDING'; // action methods

var curFetchId = 0;
var postsLimit = 10;
var loadPosts =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref) {
    var _ref$$sort, $sort, _ref$$limit, $limit, _ref$createdBy, createdBy, _ref$initial, initial, _ref$reported, reported, _ref$archived, archived, store, _store$getState, pages, posts, users, page, $skip, query, $select, $or, res, _res, extraOr, curIds, curPosts, pagesToLoad, usersToLoad, hasMore, fetchId;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$$sort = _ref.$sort, $sort = _ref$$sort === void 0 ? -1 : _ref$$sort, _ref$$limit = _ref.$limit, $limit = _ref$$limit === void 0 ? postsLimit : _ref$$limit, _ref$createdBy = _ref.createdBy, createdBy = _ref$createdBy === void 0 ? null : _ref$createdBy, _ref$initial = _ref.initial, initial = _ref$initial === void 0 ? false : _ref$initial, _ref$reported = _ref.reported, reported = _ref$reported === void 0 ? false : _ref$reported, _ref$archived = _ref.archived, archived = _ref$archived === void 0 ? false : _ref$archived;
            store = Object(redux_store["a" /* default */])();
            _store$getState = store.getState(), pages = _store$getState.pages, posts = _store$getState.posts, users = _store$getState.users;

            if (users.curUser) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            if (!initial) {
              archived = posts.archived;
              reported = posts.reported;
            }

            page = pages.curPage;
            $skip = initial ? 0 : posts.ids.length;
            query = {
              page: page,
              $skip: $skip,
              $limit: $limit,
              archived: archived,
              $sort: {
                createdAt: initial ? $sort : posts.$sort
              } // load posts that have reported or archived comments

            };
            $select = ['post'];
            $or = {};

            if (!archived) {
              _context.next = 16;
              break;
            }

            _context.next = 14;
            return services["b" /* commentsService */].find({
              query: {
                archived: archived,
                $select: $select
              }
            }).catch(function () {});

          case 14:
            res = _context.sent;
            res.data.forEach(function (_ref3) {
              var post = _ref3.post;
              return $or[post] = true;
            });

          case 16:
            if (!reported) {
              _context.next = 23;
              break;
            }

            query.reported = true;
            delete query.archived;
            _context.next = 21;
            return services["b" /* commentsService */].find({
              query: {
                reported: reported,
                $select: $select
              }
            }).catch(function () {});

          case 21:
            _res = _context.sent;

            _res.data.forEach(function (_ref4) {
              var post = _ref4.post;
              return $or[post] = true;
            });

          case 23:
            $or = Object.keys($or);

            if ($or.length) {
              query.$or = $or.map(function (_id) {
                return {
                  _id: _id
                };
              });
              extraOr = {
                archived: archived
              };
              if (reported) extraOr.reported = true;
              $or.push(extraOr);
              delete query.archived;
              delete query.reported;
            }

            if (createdBy) {
              query.createdBy = createdBy;
            }

            if (page === util_config["homePageId"]) {
              delete query.page;
            }

            curIds = [];
            curPosts = {};
            pagesToLoad = {};
            usersToLoad = {};
            store.dispatch(loadPosts__objectSpread({
              type: initial ? POSTS_PENDING : POSTS_MORE_PENDING,
              $sort: $sort
            }, initial ? {
              archived: archived,
              reported: reported
            } : {}));
            curFetchId++;
            fetchId = curFetchId;
            return _context.abrupt("return", services["i" /* postsService */].find({
              query: query
            }).then(function (res) {
              // Ignore current posts if new ones have been requested
              if (fetchId !== curFetchId) return;
              $skip += res.data.length;
              hasMore = $skip < res.total;
              res.data.forEach(function (post) {
                var _id = post._id;
                _id += ''; // _id is an ObjectId() instance during ssr

                delete post._id;
                curIds.push(_id);
                post.comments = {};
                post.commentIds = [];
                pagesToLoad[post.page] = true;
                usersToLoad[post.createdBy] = true;
                curPosts[_id] = post;
              });
              return loadPages_loadPages(Object.keys(pagesToLoad)).then(function () {
                return Object(loadUsers["b" /* loadUsers */])(Object.keys(usersToLoad));
              }).then(function () {
                store.dispatch({
                  hasMore: hasMore,
                  ids: curIds,
                  posts: curPosts,
                  type: POSTS_SUCCESS
                });
              }).then(function () {
                return populateComments({
                  postIds: curIds.concat(),
                  query: {
                    reported: reported,
                    archived: archived
                  }
                });
              });
            }).catch(function (err) {
              store.dispatch({
                type: POSTS_FAIL,
                error: Object(getError["a" /* default */])(err, 'An error occurred fetching posts')
              });
            }));

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadPosts(_x) {
    return _ref2.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./redux/actions/posts/loadComments.js
function loadComments__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { loadComments__defineProperty(target, key, source[key]); }); } return target; }

function loadComments__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var numInitialComments = 3; // action types

var COMMENTS_PENDING = 'COMMENTS_PENDING';
var COMMENTS_FAIL = 'COMMENTS_FAIL';
var COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'; // action methods

var loadComments_loadComments = function loadComments(_ref) {
  var _ref$$sort = _ref.$sort,
      $sort = _ref$$sort === void 0 ? -1 : _ref$$sort,
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial,
      _ref$$limit = _ref.$limit,
      $limit = _ref$$limit === void 0 ? 12 : _ref$$limit,
      _ref$postId = _ref.postId,
      postId = _ref$postId === void 0 ? '' : _ref$postId;
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      posts = _store$getState.posts;

  var archived = posts.archived,
      reported = posts.reported;
  $sort = {
    createdAt: $sort
  };
  var query = {
    $sort: $sort,
    archived: archived,
    post: postId,
    $limit: initial ? numInitialComments : $limit,
    $skip: initial ? 0 : posts[postId].commentIds.length
  };
  if (archived || reported) delete query.archived;
  if (reported) query.reported = true;

  if (!initial) {
    store.dispatch({
      type: COMMENTS_PENDING,
      postId: postId
    });
  }

  var commentIds = [];
  var curComments = {};
  var usersToLoad = {};
  var total;
  return services["b" /* commentsService */].find({
    query: query
  }).then(function (res) {
    total = res.total;
    res.data.forEach(function (comment) {
      var _id = comment._id;
      delete comment._id;
      delete comment.post;
      curComments[_id] = comment;
      usersToLoad[comment.createdBy] = true;
      commentIds.push(_id);
    });
    commentIds.reverse();
  }).then(function () {
    return Object(loadUsers["b" /* loadUsers */])(Object.keys(usersToLoad));
  }).then(function () {
    store.dispatch({
      type: COMMENTS_SUCCESS,
      total: total,
      postId: postId,
      commentIds: commentIds,
      comments: curComments
    });
  }).catch(function (err) {
    store.dispatch({
      type: COMMENTS_FAIL,
      postId: postId,
      error: Object(getError["a" /* default */])(err, 'An error occurred fetching comments')
    });
  });
};
var populateComments = function populateComments(_ref2) {
  var _ref2$postIds = _ref2.postIds,
      postIds = _ref2$postIds === void 0 ? [] : _ref2$postIds,
      _ref2$query = _ref2.query,
      query = _ref2$query === void 0 ? {} : _ref2$query;

  var loadOne = function loadOne() {
    if (!postIds.length) return Promise.resolve();
    var postId = postIds.pop();
    return loadComments_loadComments(loadComments__objectSpread({
      initial: true,
      postId: postId
    }, query)).then(function () {
      return loadOne();
    });
  };

  return loadOne();
};
// EXTERNAL MODULE: ./redux/actions/posts/removePost.js
var removePost = __webpack_require__(21);

// CONCATENATED MODULE: ./redux/actions/posts/updatePost.js
function updatePost__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { updatePost__defineProperty(target, key, source[key]); }); } return target; }

function updatePost__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updatePost__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




 // action types

var POST_UPDATED = 'POST_UPDATED'; // action methods

var updatePost_updatePost = function updatePost(_ref) {
  var _id = _ref._id,
      changes = updatePost__objectWithoutProperties(_ref, ["_id"]);

  return services["i" /* postsService */].patch(_id, changes);
};
var updatePost_getUpdateType = function getUpdateType() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var itemType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      posts = _store$getState.posts;

  var archived = posts.archived,
      reported = posts.reported;
  var prevPostId = itemType === 'post' ? item._id : item.post;
  var prevPost = posts[prevPostId];
  var prevItem;

  if (prevPost) {
    prevItem = itemType === 'post' ? prevPost : prevPost.comments[item._id];
  } // check if post's state changed or if content just changed


  if (prevItem && prevItem.archived === item.archived && prevItem.reported === item.reported) {
    return 'update';
  }

  if (reported && typeof item.reported !== 'undefined') {
    if (item.reported) {
      // if prevItem exists update it
      return prevItem ? 'update' : 'new';
    }

    return updatePost_hasValidComments(item._id) ? 'update' : 'remove';
  }

  if (archived) {
    return item.archived ? 'new' : 'remove';
  } else if (item.archived) {
    return 'remove';
  }

  return 'update';
};
var updatePost_hasValidComments = function hasValidComments(_id) {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState2 = store.getState(),
      posts = _store$getState2.posts;

  var archived = posts.archived,
      reported = posts.reported;
  if (!posts[_id]) return;
  if (!archived && !reported) return;
  var which = 'reported';
  if (!reported) which = 'archived';
  var _posts$_id = posts[_id],
      commentIds = _posts$_id.commentIds,
      comments = _posts$_id.comments;
  return commentIds.some(function (commentId) {
    return comments[commentId][which];
  });
};
var updatePost_postUpdated = function postUpdated(_ref2) {
  var _id = _ref2._id,
      post = updatePost__objectWithoutProperties(_ref2, ["_id"]);

  var store = Object(redux_store["a" /* default */])();
  var type = updatePost_getUpdateType(updatePost__objectSpread({
    _id: _id
  }, post));

  switch (type) {
    case 'new':
      {
        return loadPages_loadPages([post.page]).then(function () {
          Object(createPost["g" /* postCreated */])(updatePost__objectSpread({
            _id: _id
          }, post));
        });
      }

    case 'remove':
      {
        if (!updatePost_hasValidComments(_id)) {
          return Object(removePost["b" /* postRemoved */])({
            _id: _id,
            page: post.page
          });
        }

        return; // leave it since it has comments causing it to still be valid
      }

    case 'update':
      {
        return store.dispatch({
          type: POST_UPDATED,
          postId: _id,
          post: post
        });
      }
  }
};
// EXTERNAL MODULE: ./redux/actions/users/loadUsers.js
var loadUsers = __webpack_require__(14);

// CONCATENATED MODULE: ./redux/actions/posts/createComment.js
function createComment__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { createComment__defineProperty(target, key, source[key]); }); } return target; }

function createComment__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createComment__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




 // action types

var COMMENT_CREATED = 'COMMENT_CREATED'; // action methods

var createComment_createComment = function createComment(_ref) {
  var text = _ref.text,
      postId = _ref.postId;
  return services["b" /* commentsService */].create({
    text: text,
    post: postId
  });
};
var createComment_commentCreated = function commentCreated(_ref2) {
  var post = _ref2.post,
      comment = createComment__objectWithoutProperties(_ref2, ["post"]);

  var type = updatePost_getUpdateType(createComment__objectSpread({
    post: post
  }, comment), 'comment');

  if (type !== 'new' && type !== 'update') {
    return; // ignore since it's not valid in current state
  }

  Object(loadUsers["b" /* loadUsers */])([comment.createdBy]).then(function () {
    Object(redux_store["a" /* default */])().dispatch({
      type: COMMENT_CREATED,
      postId: post,
      comment: comment
    });
  });
};
// EXTERNAL MODULE: ./redux/actions/posts/updateComment.js
var updateComment = __webpack_require__(16);

// CONCATENATED MODULE: ./redux/actions/posts/removeComment.js


 // action types

var COMMENT_REMOVED = 'COMMENT_REMOVED'; // action methods

var removeComment_removeComment = function removeComment(commentId) {
  return services["b" /* commentsService */].remove(commentId);
};
var removeComment_commentRemoved = function commentRemoved(_ref) {
  var _id = _ref._id,
      post = _ref.post;
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      posts = _store$getState.posts;

  if (!posts[post]) return;
  Object(updateComment["b" /* checkRemovePost */])(post);
  store.dispatch({
    type: COMMENT_REMOVED,
    postId: post,
    commentId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/posts/collapseComments.js
 // action types

var COMMENTS_COLLAPSED = 'COMMENTS_COLLAPSED'; // action methods

var collapseComments_collapseComments = function collapseComments(postId) {
  Object(redux_store["a" /* default */])().dispatch({
    type: COMMENTS_COLLAPSED,
    postId: postId
  });
};
// CONCATENATED MODULE: ./redux/actions/resources/loadResources.js
function loadResources__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




 // action types

var RESOURCES_PENDING = 'RESOURCES_PENDING';
var RESOURCES_FAIL = 'RESOURCE_FAIL';
var RESOURCES_SUCCESS = 'RESOURCES_SUCCESS'; // action methods

var loadResources_loadResources = function loadResources() {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      users = _store$getState.users;

  if (!users.curUser) return Promise.resolve();
  var query = {
    $limit: util_config["maxResults"],
    $sort: {
      label: 1
    }
  };
  var resources = {};
  var ids = [];
  store.dispatch({
    type: RESOURCES_PENDING
  });
  return services["j" /* resourcesService */].find({
    query: query
  }).then(function (res) {
    res.data.forEach(function (_ref) {
      var _id = _ref._id,
          item = loadResources__objectWithoutProperties(_ref, ["_id"]);

      ids.push(_id);
      resources[_id] = item;
    });
    store.dispatch({
      type: RESOURCES_SUCCESS,
      ids: ids,
      resources: resources
    });
  }).catch(function (err) {
    store.dispatch({
      type: RESOURCES_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred loading resources')
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/resources/createResource.js
function createResource__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var RESOURCE_CREATED = 'RESOURCE_CREATED'; // action methods

var createResource_createResource = function createResource(_ref) {
  var label = _ref.label,
      link = _ref.link;
  return services["j" /* resourcesService */].create({
    label: label,
    link: link
  });
};
var createResource_resourceCreated = function resourceCreated(_ref2) {
  var _id = _ref2._id,
      resource = createResource__objectWithoutProperties(_ref2, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: RESOURCE_CREATED,
    resourceId: _id,
    resource: resource
  });
};
// CONCATENATED MODULE: ./redux/actions/resources/updateResource.js
function updateResource__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }


 // action types

var RESOURCE_UPDATED = 'RESOURCE_UPDATED'; // action methods

var updateResource_updateResource = function updateResource(_ref) {
  var _id = _ref._id,
      resource = updateResource__objectWithoutProperties(_ref, ["_id"]);

  return services["j" /* resourcesService */].patch(_id, resource);
};
var updateResource_resourceUpdated = function resourceUpdated(_ref2) {
  var _id = _ref2._id,
      resource = updateResource__objectWithoutProperties(_ref2, ["_id"]);

  Object(redux_store["a" /* default */])().dispatch({
    type: RESOURCE_UPDATED,
    resourceId: _id,
    resource: resource
  });
};
// CONCATENATED MODULE: ./redux/actions/resources/removeResource.js

 // action types

var RESOURCE_REMOVED = 'RESOURCE_REMOVED'; // action methods

var removeResource_removeResource = function removeResource(_id) {
  return services["j" /* resourcesService */].remove(_id);
};
var removeResource_resourceRemoved = function resourceRemoved(_ref) {
  var _id = _ref._id;
  Object(redux_store["a" /* default */])().dispatch({
    type: RESOURCE_REMOVED,
    resourceId: _id
  });
};
// EXTERNAL MODULE: ./util/getApp.js
var getApp = __webpack_require__(7);

// CONCATENATED MODULE: ./redux/actions/users/login.js




 // action types

var LOGIN_PENDING = 'LOGIN_PENDING';
var LOGIN_FAIL = 'LOGIN_FAIL';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGOUT = 'LOGOUT';
var DO_SETUP = 'DO_SETUP'; // action methods

var cookieName = 'jwt';

var setCookie = function setCookie(expires) {
  var date = new Date(expires * 1000);
  expires = '; expires=' + date.toUTCString();
  document.cookie = cookieName + '=' + localStorage['jwt'] + expires + '; path=/';
};

var eraseCookie = function eraseCookie() {
  document.cookie = cookieName + '=; Max-Age=-99999999; path=/';
};

var login_explainFail = function explainFail(error) {
  loginIdx++;
  Object(redux_store["a" /* default */])().dispatch({
    type: LOGIN_FAIL,
    error: error
  });
};
var loginIdx = 0;
var login_login = function login(_ref) {
  var doSetup = _ref.doSetup,
      email = _ref.email,
      password = _ref.password,
      silent = _ref.silent,
      userId = _ref.userId;
  var store = Object(redux_store["a" /* default */])();

  if (userId) {
    return Object(loadUsers["b" /* loadUsers */])(userId, true).then(function () {
      store.dispatch({
        type: LOGIN_SUCCESS,
        userId: userId
      });
    });
  }

  if (doSetup) {
    store.dispatch({
      type: DO_SETUP
    });
    return Promise.resolve();
  }

  var params = typeof email !== 'undefined' ? {
    email: email.toLowerCase(),
    password: password,
    strategy: 'local'
  } : undefined;

  if (params && localStorage['jwt']) {
    login_logout(true);
  }

  if (!silent) {
    store.dispatch({
      type: LOGIN_PENDING
    });
  }

  loginIdx++;
  var curIdx = loginIdx;
  return getApp["a" /* default */].authenticate(params).then(function (res) {
    return getApp["a" /* default */].passport.verifyJWT(res.accessToken);
  }).then(function (_ref2) {
    var userId = _ref2.userId,
        exp = _ref2.exp;
    return Object(loadUsers["b" /* loadUsers */])(userId, true).then(function () {
      return setCookie(exp);
    }).then(function () {
      return Object(redux_store["a" /* default */])().dispatch({
        type: LOGIN_SUCCESS,
        userId: userId
      });
    });
  }).catch(function (err) {
    if (loginIdx !== curIdx) return;
    Object(redux_store["a" /* default */])().dispatch({
      type: LOGIN_FAIL,
      error: silent ? null : Object(getError["a" /* default */])(err)
    });
  });
}; // login

var login_logout = function logout(noRedirect) {
  eraseCookie();

  if (!noRedirect || typeof noRedirect !== 'boolean') {
    router__default.a.push('/');
  }

  return getApp["a" /* default */].logout().catch(function () {}).then(function () {
    delete localStorage['jwt'];
    Object(redux_store["a" /* default */])().dispatch({
      type: LOGOUT
    });
  });
}; // logout
// CONCATENATED MODULE: ./redux/actions/users/loadRestricts.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




 // action methods

var loadRestricts_loadRestricts = function loadRestricts() {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState = store.getState(),
      users = _store$getState.users;

  var userIds = Object.keys(users);
  var ids = []; // load blank restricts for all users

  userIds.forEach(function (id) {
    if (_typeof(users[id]) === 'object' && users[id] && id !== users.curUser) {
      users[id].restricts = {};
      ids.push(id);
    }
  });

  var fetchBatch = function fetchBatch() {
    var batch = Object(getBatch["a" /* default */])(ids, users);
    if (!batch.length) return Promise.resolve();
    var $or = batch.map(function (_id) {
      return {
        _id: _id
      };
    });
    var query = {
      $or: $or,
      $limit: $or.length
    };
    var curUsers = {};
    batch.forEach(function (id) {
      curUsers[id] = users[id];
    });
    return services["k" /* restrictsService */].find({
      query: query
    }).then(function (res) {
      res.data.forEach(function (restricts) {
        var _id = restricts._id;
        delete restricts._id;
        curUsers[_id].restricts = restricts;
      });
    }).then(function () {
      store.dispatch({
        type: loadUsers["a" /* LOAD_USERS */],
        users: curUsers
      });
    }).then(function () {
      return fetchBatch();
    });
  };

  return fetchBatch();
}; // loadRestricts

var loadRestricts_clearRestricts = function clearRestricts() {
  var store = Object(redux_store["a" /* default */])();

  var _store$getState2 = store.getState(),
      users = _store$getState2.users;

  var userIds = Object.keys(users);
  userIds.forEach(function (id) {
    if (_typeof(users[id]) === 'object' && users[id] && id !== users.curUser) {
      users[id].restricts = {};
    }
  });
  store.dispatch({
    type: loadUsers["a" /* LOAD_USERS */],
    users: users
  });
}; // clearRestricts
// CONCATENATED MODULE: ./redux/actions/users/createAvatar.js



 // action types

var AVATAR_FAIL = 'AVATAR_FAIL';
var AVATAR_PROGRESS = 'AVATAR_PROGRESS';
var AVATAR_SUCCESS = 'AVATAR_SUCCESS'; // action methods

var createAvatar_createAvatar = function createAvatar(file) {
  var store = Object(redux_store["a" /* default */])();
  var fd = new FormData();
  fd.append('file', file);
  var axiosInst = external__axios__default.a.create({
    baseURL: util_config["serverUrl"],
    headers: {
      Authorization: localStorage['jwt']
    }
  });
  var config = {
    onUploadProgress: function onUploadProgress(e) {
      var progress = Math.round(e.loaded / e.total * 100);
      store.dispatch({
        type: AVATAR_PROGRESS,
        progress: progress
      });
    }
  };
  return axiosInst.post('/avatars', fd, config).then(function () {
    store.dispatch({
      type: AVATAR_SUCCESS
    });
  }).catch(function (err) {
    store.dispatch({
      type: AVATAR_FAIL,
      error: Object(getError["a" /* default */])(err, 'An error occurred uploading avatar')
    });
  });
};
// CONCATENATED MODULE: ./redux/actions/users/createRestrict.js
 // action methods

var createRestrict_createRestrict = function createRestrict(restricts) {
  return services["k" /* restrictsService */].create(restricts);
};
// CONCATENATED MODULE: ./redux/actions/users/removeAvatar.js

 // action methods

var removeAvatar_removeAvatar = function removeAvatar() {
  var _getStore$getState = Object(redux_store["a" /* default */])().getState(),
      users = _getStore$getState.users;

  return services["a" /* avatarsService */].remove(users.curUser);
};
var removeAvatar_removeAvatars = function removeAvatars(ids) {
  var query = {
    _id: {
      $in: ids
    }
  };
  return services["a" /* avatarsService */].remove(null, {
    query: query
  });
};
// CONCATENATED MODULE: ./redux/actions/users/createUser.js
 // action methods

var createUser_createUser = function createUser(user) {
  return services["l" /* usersService */].create(user);
};
// CONCATENATED MODULE: ./redux/actions/users/removeUser.js

 // action types

var USER_REMOVED = 'USER_REMOVED'; // action methods

var removeUser_removeUser = function removeUser(_id) {
  return services["l" /* usersService */].remove(_id);
};
var removeUser_removeUsers = function removeUsers(ids) {
  var query = {
    _id: {
      $in: ids
    }
  };
  return services["l" /* usersService */].remove(null, {
    query: query
  });
};
var removeUser_userRemoved = function userRemoved(_ref) {
  var _id = _ref._id;
  Object(redux_store["a" /* default */])().dispatch({
    type: USER_REMOVED,
    userId: _id
  });
};
// CONCATENATED MODULE: ./redux/actions/users/updateUser.js


function updateUser__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function updateUser__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



 // action types

var USER_UPDATED = 'USER_UPDATED'; // action methods

var updateUser_updateUser = function updateUser(_ref) {
  var _id = _ref._id,
      user = updateUser__objectWithoutProperties(_ref, ["_id"]);

  return services["l" /* usersService */].patch(_id, user);
};
var userUpdated =
/*#__PURE__*/
function () {
  var _ref3 = updateUser__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref2) {
    var _id, user, store, _store$getState, users, isAdmin;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref2._id, user = updateUser__objectWithoutProperties(_ref2, ["_id"]);
            store = Object(redux_store["a" /* default */])();
            _store$getState = store.getState(), users = _store$getState.users;

            if (!(_id === users.curUser && user.role)) {
              _context.next = 14;
              break;
            }

            isAdmin = user.role === 'admin';

            if (!(users[users.curUser].isAdmin !== isAdmin)) {
              _context.next = 14;
              break;
            }

            if (!isAdmin) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadRestricts_loadRestricts();

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.next = 13;
            return loadRestricts_clearRestricts();

          case 13:
            user.isAdmin = isAdmin;

          case 14:
            store.dispatch({
              type: USER_UPDATED,
              userId: _id,
              user: user
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function userUpdated(_x) {
    return _ref3.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./redux/actions/users/updateSettings.js

 // action methods

var updateSettings_updateSettings = function updateSettings() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var admin = settings.admin,
      posting = settings.posting,
      making_pages = settings.making_pages,
      updating_profile = settings.updating_profile;

  var _getStore$getState = Object(redux_store["a" /* default */])().getState(),
      users = _getStore$getState.users;

  var updateRestricts = [];
  var updateRoles = [];
  var newRole = admin ? 'admin' : 'user';
  ids.forEach(function (_id) {
    var _users$_id = users[_id],
        restricts = _users$_id.restricts,
        role = _users$_id.role;
    if (role !== newRole) updateRoles.push(_id);
    if (!restricts.posting !== posting || !restricts.making_pages !== making_pages || !restricts.updating_profile !== updating_profile) updateRestricts.push(_id);
  });

  if (!updateRestricts.length && !updateRoles.length) {
    return Promise.resolve();
  } // leave only restricts in settings


  delete settings.admin;
  Object.keys(settings).forEach(function (r) {
    return settings[r] = !settings[r];
  });
  return updateSettings_addRestricts(updateRestricts, settings, users).then(function () {
    return updateSettings_addRoles(updateRoles, admin ? 'admin' : 'user');
  });
};

var updateSettings_addRoles = function addRoles() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var role = arguments.length > 1 ? arguments[1] : undefined;
  if (!ids.length) return Promise.resolve();
  var id = ids.pop();
  return services["l" /* usersService */].patch(id, {
    role: role
  }).then(function () {
    return addRoles(ids, role);
  });
};

var updateSettings_addRestricts = function addRestricts() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var restricts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var users = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var remove = Boolean(!restricts.posting && !restricts.making_pages && !restricts.updating_profile);

  if (remove) {
    var query = {
      _id: {
        $in: ids
      }
    };
    return services["k" /* restrictsService */].remove(null, {
      query: query
    });
  }

  if (!ids.length) return Promise.resolve();
  var id = ids.pop();
  restricts._id = id;

  var next = function next() {
    return addRestricts(ids, restricts, users);
  };

  var hasRestricts = Boolean(Object.keys(users[id].restricts).length);
  var method = hasRestricts ? 'patch' : 'create';
  var params = hasRestricts ? [id, restricts] : [restricts];
  return services["k" /* restrictsService */][method].apply(services["k" /* restrictsService */], params).then(function () {
    return next();
  });
}; // addRestricts
// CONCATENATED MODULE: ./redux/actions/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_14", function() { return SEARCH_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_15", function() { return SEARCH_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_16", function() { return SEARCH_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_41", function() { return doSearch_doSearch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_17", function() { return SET_DIALOG; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_DIALOG; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_88", function() { return setDialog_setDialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_21", function() { return setDialog_clearDialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "n", function() { return CONTACT_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "l", function() { return CONTACT_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "p", function() { return CONTACT_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "m", function() { return CONTACT_MORE_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_29", function() { return contactLimit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_48", function() { return loadContact_loadContact; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "k", function() { return CONTACT_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_33", function() { return createContact_createContact; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_28", function() { return createContact_contactCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "o", function() { return CONTACT_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_76", function() { return removeContact_removeContact; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_77", function() { return removeContact_removeContactRange; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_30", function() { return removeContact_contactRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "u", function() { return LIST_USERS_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "x", function() { return LIST_USERS_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "w", function() { return LIST_USERS_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "v", function() { return LIST_USERS_MORE_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_46", function() { return listUsers_listUsers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "F", function() { return OPPS_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "E", function() { return OPPS_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "G", function() { return OPPS_SUCCESS; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return loadOpps_getCatsOpps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_49", function() { return loadOpps_loadOpps; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "K", function() { return OPP_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_35", function() { return createOpp_createOpp; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_63", function() { return createOpp_oppCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "H", function() { return OPP_CAT_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_36", function() { return createOppCat_createOppCat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_60", function() { return createOppCat_oppCatCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "L", function() { return OPP_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_79", function() { return removeOpp_removeOpp; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_64", function() { return removeOpp_oppRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "I", function() { return OPP_CAT_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_80", function() { return removeOppCat_removeOppCat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_61", function() { return removeOppCat_oppCatRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "M", function() { return OPP_UPDATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_91", function() { return updateOpp_updateOpp; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_65", function() { return updateOpp_oppUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "J", function() { return OPP_CAT_UPDATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_92", function() { return updateOppCat_updateOppCat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_62", function() { return updateOppCat_oppCatUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "y", function() { return LOAD_PAGES; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_50", function() { return loadPages_loadPages; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "s", function() { return LIST_PAGES_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "r", function() { return LIST_PAGES_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "t", function() { return LIST_PAGES_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_45", function() { return listPages_listPages; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "O", function() { return PAGE_MOD_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_34", function() { return createMod_createMod; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_57", function() { return createMod_modCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "P", function() { return PAGE_MOD_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_78", function() { return removeMod_removeMod; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_58", function() { return removeMod_modRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "S", function() { return PAGE_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_81", function() { return removePage_removePage; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_66", function() { return removePage_pageRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_18", function() { return SET_PAGE; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_89", function() { return setPage_setPage; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Q", function() { return PAGE_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "N", function() { return PAGE_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "R", function() { return PAGE_PROGRESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "T", function() { return PAGE_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "U", function() { return PAGE_UPDATED; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return updatePage_uploadPageThumb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_93", function() { return updatePage_updatePage; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_67", function() { return updatePage_pageUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_3", function() { return createPost["c" /* POST_PENDING */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_2", function() { return createPost["b" /* POST_FAIL */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_4", function() { return createPost["d" /* POST_PROGRESS */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_6", function() { return createPost["e" /* POST_SUCCESS */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_0", function() { return createPost["a" /* POST_CREATED */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_69", function() { return createPost["g" /* postCreated */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_37", function() { return createPost["f" /* createPost */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_1", function() { return POST_EXPANDED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Z", function() { return POST_COLLAPSED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_42", function() { return expandPost_expandPost; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_24", function() { return expandPost_collapsePost; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "V", function() { return POSTS_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "X", function() { return POSTS_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Y", function() { return POSTS_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "W", function() { return POSTS_MORE_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_72", function() { return postsLimit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_51", function() { return loadPosts; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_59", function() { return numInitialComments; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return COMMENTS_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return COMMENTS_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return COMMENTS_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_47", function() { return loadComments_loadComments; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_68", function() { return populateComments; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_5", function() { return removePost["a" /* POST_REMOVED */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_82", function() { return removePost["c" /* removePost */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_70", function() { return removePost["b" /* postRemoved */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_7", function() { return POST_UPDATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_94", function() { return updatePost_updatePost; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_44", function() { return updatePost_getUpdateType; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return updatePost_hasValidComments; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_71", function() { return updatePost_postUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return COMMENT_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_32", function() { return createComment_createComment; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_25", function() { return createComment_commentCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return COMMENT_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_75", function() { return removeComment_removeComment; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_26", function() { return removeComment_commentRemoved; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return updateComment["a" /* UPDATE_COMMENT */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_90", function() { return updateComment["d" /* updateComment */]; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return updateComment["b" /* checkRemovePost */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_27", function() { return updateComment["c" /* commentUpdated */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return COMMENTS_COLLAPSED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_23", function() { return collapseComments_collapseComments; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_9", function() { return RESOURCES_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_8", function() { return RESOURCES_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_10", function() { return RESOURCES_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_52", function() { return loadResources_loadResources; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_11", function() { return RESOURCE_CREATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_38", function() { return createResource_createResource; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_85", function() { return createResource_resourceCreated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_13", function() { return RESOURCE_UPDATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_95", function() { return updateResource_updateResource; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_87", function() { return updateResource_resourceUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_12", function() { return RESOURCE_REMOVED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_83", function() { return removeResource_removeResource; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_86", function() { return removeResource_resourceRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "B", function() { return LOGIN_PENDING; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "A", function() { return LOGIN_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "C", function() { return LOGIN_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "D", function() { return LOGOUT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "q", function() { return DO_SETUP; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_43", function() { return login_explainFail; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_55", function() { return login_login; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_56", function() { return login_logout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "z", function() { return loadUsers["a" /* LOAD_USERS */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_54", function() { return loadUsers["b" /* loadUsers */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_53", function() { return loadRestricts_loadRestricts; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_22", function() { return loadRestricts_clearRestricts; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return AVATAR_FAIL; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return AVATAR_PROGRESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return AVATAR_SUCCESS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_31", function() { return createAvatar_createAvatar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_39", function() { return createRestrict_createRestrict; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_73", function() { return removeAvatar_removeAvatar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_74", function() { return removeAvatar_removeAvatars; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_40", function() { return createUser_createUser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_19", function() { return USER_REMOVED; });
/* unused concated harmony import null */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return removeUser_removeUser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_84", function() { return removeUser_removeUsers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_98", function() { return removeUser_userRemoved; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_20", function() { return USER_UPDATED; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_97", function() { return updateUser_updateUser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_99", function() { return userUpdated; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "_96", function() { return updateSettings_updateSettings; });













































/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, typeof window !== 'undefined' ? window.publicConfig : app.get('publicConfig'));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return shadows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offScreen", function() { return offScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexRowCenter", function() { return flexRowCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexColCenter", function() { return flexColCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTapHighlight", function() { return noTapHighlight; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var colors = {
  whiteBg: '#f5f6f7',
  blackFg: '#343434',
  blueLight: '#56ccf2',
  blueDark: '#2f80eD',
  blueMix: '#43a6f0',
  blueGradient: 'linear-gradient(to bottom, #56ccf2, #2f80ed)',
  grey: '#e5e5e5',
  darkGrey: '#979797',
  yellow: '#fde72a',
  dullWhite: '#e8f1f2'
};
var shadows = {
  text: {
    textShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'
  },
  box: {
    boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.3)'
  },
  insetBox: {
    boxShadow: 'inset 1px 3px 6px rgba(0, 0, 0, 0.3)'
  }
};
var sizes = {
  navWidth: 248,
  maxBlockWidth: 450,
  mobileBreak: 808
};
var fonts = {
  nunito: "'Nunito', sans-serif"
};
var offScreen = {
  position: 'absolute',
  left: '-200%',
  top: '0'
};
var flexRowCenter = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
var flexColCenter = _objectSpread({}, flexRowCenter, {
  flexDirection: 'column'
});
var media = {
  greaterThan: function greaterThan(size) {
    return "@media (min-width: ".concat(size, "px)");
  },
  lessThan: function lessThan(size) {
    return "@media (max-width: ".concat(size - 1, "px)");
  }
};
var noTapHighlight = {
  outline: 'none',
  MsUserSelect: 'none',
  MozUserSelect: 'none',
  KhtmlUserSelect: 'none',
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.0)'
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// if server side rendering return global app instance
// else return feathers client instance
var getApp = function getApp() {
  if (typeof window !== 'undefined') {
    return __webpack_require__(25).default;
  }

  return global.app;
};

/* harmony default export */ __webpack_exports__["a"] = (getApp());

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getError = function getError(error, fallback) {
  var msg = fallback;

  if (_typeof(error) === 'object' && (error.message || error.response && error.response.data && error.response.data.message)) {
    msg = error.response ? error.response.data.message : error.message;
  } else if (typeof error === 'string') {
    msg = error;
  }

  switch (msg) {
    case 'Authentication timed out':
    case 'Socket connection timed out':
      {
        return 'Could not connect to the server';
      }

    case 'too many messages':
      {
        return 'You are sending too many messages';
      }

    default:
      {
        return msg;
      }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getError);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_getBatch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feathers_services__ = __webpack_require__(1);


 // action types

var LOAD_USERS = 'LOAD_USERS'; // action methods

var loadUsers = function loadUsers() {
  var userIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fromLogin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var store = Object(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */])();

  if (!Array.isArray(userIds)) {
    if (userIds) userIds = [userIds];else return Promise.reject('Array of ids not provided');
  }

  var isAdmin, userId;

  var _store$getState = store.getState(),
      users = _store$getState.users;

  if (!fromLogin) {
    var curUser = users[users.curUser];
    if (!curUser) return Promise.resolve(); // fail gracefully

    isAdmin = curUser.isAdmin;
  } else {
    userId = userIds[0];
  }

  var fetchBatch = function fetchBatch() {
    var batch = Object(__WEBPACK_IMPORTED_MODULE_1__util_getBatch__["a" /* default */])(userIds, users);
    if (!batch.length) return Promise.resolve();
    var $or = batch.map(function (_id) {
      return {
        _id: _id
      };
    });
    var query = {
      $or: $or,
      $limit: $or.length
    };
    var curUsers = {};
    return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["l" /* usersService */].find({
      query: query
    }).then(function (res) {
      if (fromLogin) {
        isAdmin = res.data[0].role === 'admin';
      }

      res.data.forEach(function (user) {
        var _id = user._id;
        delete user._id;
        delete user.password;
        delete user.email;

        if (fromLogin) {
          user.isAdmin = isAdmin;
        }

        curUsers[_id] = user;
        curUsers[_id].restricts = {};
      });
    }).then(function () {
      return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["a" /* avatarsService */].find({
        query: query
      });
    }).then(function (res) {
      res.data.forEach(function (avatar) {
        var _id = avatar._id,
            file = avatar.file;
        curUsers[_id].avatar = file;
      });
    }).then(function () {
      if (!isAdmin && fromLogin) {
        return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["k" /* restrictsService */].get(userId).then(function (restricts) {
          return {
            data: [restricts]
          };
        }).catch(function () {
          return {
            data: []
          };
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["k" /* restrictsService */].find({
        query: query
      }).catch(function () {
        return {
          data: []
        };
      });
    }).then(function (res) {
      res.data.forEach(function (restrict) {
        var _id = restrict._id;
        delete restrict._id;
        curUsers[_id].restricts = restrict;
      });
    }).then(function () {
      store.dispatch({
        type: LOAD_USERS,
        users: curUsers
      });
    }).then(function () {
      return fetchBatch();
    });
  };

  return fetchBatch();
}; // loadUsers

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config__);


var getBatch = function getBatch(ids, store) {
  var batch = [];

  while (ids.length > 0 && batch.length < __WEBPACK_IMPORTED_MODULE_0__config__["maxResults"]) {
    var id = ids.pop();
    if (!store[id]) batch.push(id);
  }

  return batch;
};

/* harmony default export */ __webpack_exports__["a"] = (getBatch);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkRemovePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return commentUpdated; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feathers_services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createPost__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__removePost__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_loadUsers__ = __webpack_require__(14);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






 // action types

var UPDATE_COMMENT = 'UPDATE_COMMENT'; // action methods

var updateComment = function updateComment(_ref) {
  var _id = _ref._id,
      changes = _objectWithoutProperties(_ref, ["_id"]);

  return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["b" /* commentsService */].patch(_id, changes);
};

var loadPost =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_id) {
    var store, _store$getState, posts, post;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])();
            _store$getState = store.getState(), posts = _store$getState.posts;

            if (!posts[_id]) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2__feathers_services__["i" /* postsService */].get(_id);

          case 6:
            post = _context.sent;
            _context.next = 9;
            return Object(__WEBPACK_IMPORTED_MODULE_6__users_loadUsers__["b" /* loadUsers */])([post.createdBy]);

          case 9:
            Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])().dispatch({
              type: __WEBPACK_IMPORTED_MODULE_4__createPost__["a" /* POST_CREATED */],
              post: post
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadPost(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var checkRemovePost = function checkRemovePost(_id) {
  var _getStore$getState = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])().getState(),
      posts = _getStore$getState.posts;

  var archived = posts.archived,
      reported = posts.reported;
  var post = posts[_id];
  if (!post) return;
  if (!archived && !reported) return;
  if (post.archived === archived && post.reported === reported) return;
  if (post.commentIds.length > 1) return;
  Object(__WEBPACK_IMPORTED_MODULE_5__removePost__["b" /* postRemoved */])(_objectSpread({}, post, {
    _id: _id
  }));
};
var commentUpdated = function commentUpdated(_ref3) {
  var _id = _ref3._id,
      post = _ref3.post,
      comment = _objectWithoutProperties(_ref3, ["_id", "post"]);

  var store = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])();
  var type = Object(__WEBPACK_IMPORTED_MODULE_3__actions__["_44" /* getUpdateType */])(_objectSpread({
    _id: _id,
    post: post
  }, comment), 'comment');

  switch (type) {
    case 'new':
      {
        return loadPost(post).then(function () {
          return Object(__WEBPACK_IMPORTED_MODULE_3__actions__["_25" /* commentCreated */])(_objectSpread({
            _id: _id,
            post: post
          }, comment));
        });
      }

    case 'remove':
      {
        checkRemovePost(post);
        return Object(__WEBPACK_IMPORTED_MODULE_3__actions__["_26" /* commentRemoved */])({
          _id: _id,
          post: post
        });
      }

    case 'update':
      {
        return loadPost(post).then(function () {
          store.dispatch({
            type: UPDATE_COMMENT,
            postId: post,
            commentId: _id,
            comment: comment
          });
        });
      }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return growIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chewMoveAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return chewTopAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chewBotAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return slideRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return slideLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return spin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return progClipRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return progRotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return progShowLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);

var growIn = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('growIn', {
  from: {
    opacity: 0,
    transform: 'scale(0)'
  },
  to: {
    opacity: 1,
    transform: 'scale(1)'
  }
});
var chewMoveAnim = function chewMoveAnim(animSize) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('chewMoveAnim', {
    from: {
      left: -1.5 * animSize
    },
    to: {
      left: '100%'
    }
  });
};
var chewTopAnim = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('chewTopAnim', {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(-40deg)'
  },
  '100%': {
    transform: 'rotate(0deg)'
  }
});
var chewBotAnim = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('chewBotAnim', {
  '0%': {
    transform: 'rotate(180deg)'
  },
  '50%': {
    transform: 'rotate(220deg)'
  },
  '100%': {
    transform: 'rotate(180deg)'
  }
});
var slideRight = function slideRight(slideLength) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('slideRight', {
    from: {
      marginRight: slideLength
    },
    to: {
      marginRight: 0
    }
  });
};
var slideLeft = function slideLeft(slideLength) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('slideLeft', {
    from: {
      marginLeft: slideLength
    },
    to: {
      marginLeft: 0
    }
  });
};
var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('fadeIn', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOut = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('fadeOut', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});
var spin = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('spin', {
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});
var progClipRotate = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('progClipRotate', {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(0deg)'
  },
  '50.01%': {
    transform: 'rotate(180deg)'
  },
  '100%': {
    transform: 'rotate(180deg)'
  }
});
var progRotateRight = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('progRotateRight', {
  '0%': {
    transform: 'rotate(-45deg)'
  },
  '100%': {
    transform: 'rotate(135deg)'
  }
});
var progShowLeft = Object(__WEBPACK_IMPORTED_MODULE_0_glamor__["keyframes"])('progShowLeft', {
  '0%': {
    opacity: 0
  },
  '49.99%': {
    opacity: 0
  },
  '50%': {
    opacity: 1
  },
  '100%': {
    opacity: 1
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_config__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var Avatar = function Avatar(_ref) {
  var avatar = _ref.avatar,
      src = _ref.src,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["avatar", "src", "style"]);

  return typeof avatar !== 'string' && !src ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome___default.a, _extends({
    icon: "user-circle",
    style: style
  }, props)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _extends({
    src: src || __WEBPACK_IMPORTED_MODULE_2__util_config__["uploadsUrl"] + avatar,
    style: _objectSpread({
      borderRadius: '100%'
    }, style)
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_keyframes__ = __webpack_require__(17);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var spinnerStyle = {
  width: 30,
  height: 30,
  margin: '0 auto',
  border: "3px solid ".concat(__WEBPACK_IMPORTED_MODULE_2__style_theme__["colors"].blueLight),
  borderLeft: 'none',
  borderBottom: 'none',
  borderRadius: '100%'
};

var Spinner = function Spinner(_ref) {
  var alt = _ref.alt,
      borderWidth = _ref.borderWidth,
      className = _ref.className,
      size = _ref.size,
      speed = _ref.speed,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["alt", "borderWidth", "className", "size", "speed", "style"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({}, props, {
    className: Object(__WEBPACK_IMPORTED_MODULE_1_glamor__["css"])(spinnerStyle) + (className ? " ".concat(className) : ''),
    style: _objectSpread({}, style, {
      width: size,
      borderWidth: borderWidth,
      height: size,
      borderColor: alt ? '#ffffff' : null,
      animation: "".concat(__WEBPACK_IMPORTED_MODULE_3__style_keyframes__["l" /* spin */], " ").concat(speed || 500, "ms linear infinite")
    })
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return POST_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return POST_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POST_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return postCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_getError__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feathers_services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__util_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_loadUsers__ = __webpack_require__(14);





 // action types

var POST_PENDING = 'POST_PENDING';
var POST_FAIL = 'POST_FAIL';
var POST_PROGRESS = 'POST_PROGRESS';
var POST_SUCCESS = 'POST_SUCCESS';
var POST_CREATED = 'POST_CREATED'; // action methods

var postCreated = function postCreated() {
  var post = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])();

  var _store$getState = store.getState(),
      pages = _store$getState.pages,
      posts = _store$getState.posts;

  var archived = posts.archived,
      reported = posts.reported;
  var curPage = pages.curPage;
  if (archived !== post.archived || reported !== post.reported) return;
  if (post.page !== curPage && curPage !== __WEBPACK_IMPORTED_MODULE_4__util_config__["homePageId"]) return;
  Object(__WEBPACK_IMPORTED_MODULE_5__users_loadUsers__["b" /* loadUsers */])([post.createdBy]).then(function () {
    store.dispatch({
      type: POST_CREATED,
      post: post
    });
  });
};
var createPost = function createPost(_ref) {
  var text = _ref.text,
      file = _ref.file;
  var store = Object(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */])();

  var _store$getState2 = store.getState(),
      post = _store$getState2.post,
      pages = _store$getState2.pages;

  var curPage = pages.curPage;
  if (post.pending || !text && !file) return;
  store.dispatch({
    type: POST_PENDING
  });

  var getPoster = function getPoster() {
    if (!file) {
      return __WEBPACK_IMPORTED_MODULE_3__feathers_services__["i" /* postsService */].create({
        text: text,
        page: curPage
      });
    } else {
      var fd = new FormData();
      fd.append('file', file);
      fd.append('page', curPage);
      if (text) fd.append('text', text);
      var axiosInst = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
        baseURL: __WEBPACK_IMPORTED_MODULE_4__util_config__["serverUrl"],
        headers: {
          Authorization: localStorage['jwt']
        }
      });
      var config = {
        onUploadProgress: function onUploadProgress(e) {
          var progress = Math.round(e.loaded / e.total * 100);
          store.dispatch({
            type: POST_PROGRESS,
            progress: progress
          });
        }
      };
      return axiosInst.post('posts', fd, config);
    }
  }; // getPoster()


  return getPoster().then(function () {
    store.dispatch({
      type: POST_SUCCESS
    });
  }).catch(function (err) {
    store.dispatch({
      type: POST_FAIL,
      error: Object(__WEBPACK_IMPORTED_MODULE_2__util_getError__["a" /* default */])(err, 'An error occurred while posting')
    });
  });
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POST_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postRemoved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feathers_services__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_config__);


 // action types

var POST_REMOVED = 'POST_REMOVED'; // action methods

var removePost = function removePost(postId) {
  return __WEBPACK_IMPORTED_MODULE_1__feathers_services__["i" /* postsService */].remove(postId);
};
var postRemoved = function postRemoved(_ref) {
  var _id = _ref._id,
      page = _ref.page;
  var store = Object(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */])();
  var curPage = store.getState().pages.curPage;

  if (curPage !== page && curPage !== __WEBPACK_IMPORTED_MODULE_2__util_config__["homePageId"]) {
    return; // removal is irrelevant currently
  }

  store.dispatch({
    type: POST_REMOVED,
    postId: _id
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_config__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var thumbStyle = _objectSpread({
  width: 96,
  height: 96
}, __WEBPACK_IMPORTED_MODULE_2__style_theme__["shadows"].box, {
  borderRadius: 96,
  background: '#ffffff'
});

var PageThumb = function PageThumb(_ref) {
  var _id = _ref._id,
      thumb = _ref.thumb,
      className = _ref.className,
      src = _ref.src,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["_id", "thumb", "className", "src", "style"]);

  var isNewsIcon = _id === __WEBPACK_IMPORTED_MODULE_3__util_config__["newsPageId"] && thumb === __WEBPACK_IMPORTED_MODULE_3__util_config__["defaultNewsThumb"];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _extends({}, props, {
    alt: "page thumb",
    className: Object(__WEBPACK_IMPORTED_MODULE_1_glamor__["css"])(thumbStyle) + (className ? ' ' + className : ''),
    src: src || __WEBPACK_IMPORTED_MODULE_3__util_config__["uploadsUrl"] + thumb,
    style: _objectSpread({
      width: 96
    }, isNewsIcon ? {
      height: 'auto',
      maxHeight: 96,
      borderRadius: 0,
      boxShadow: 'none',
      background: 'none'
    } : {}, style)
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (PageThumb);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_client__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feathersjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__feathersjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_config__);




var socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_3__util_config__["serverUrl"]);
socket.on('connect', function () {
  Object(__WEBPACK_IMPORTED_MODULE_2__redux_actions__["_55" /* login */])({
    silent: true
  });
});
socket.on('message', function (data) {
  if (data === 'too many login attempts') {
    Object(__WEBPACK_IMPORTED_MODULE_2__redux_actions__["_43" /* explainFail */])('Max login attempts reached. Try again in 5 minutes');
  }
});
var feathers = __WEBPACK_IMPORTED_MODULE_0__feathersjs_client___default()().configure(__WEBPACK_IMPORTED_MODULE_0__feathersjs_client___default.a.socketio(socket)).configure(__WEBPACK_IMPORTED_MODULE_0__feathersjs_client___default.a.authentication({
  path: '/auth',
  storageKey: 'jwt',
  storage: window.localStorage
}));
/* harmony default export */ __webpack_exports__["default"] = (feathers);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/client");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_keyframes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Spinner__ = __webpack_require__(19);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var slideLen = '-200%';
var slideSpeed = 300; // in milliseconds

var fieldStyle = _objectSpread({
  fontSize: 18,
  color: '#ffffff'
}, __WEBPACK_IMPORTED_MODULE_3__style_theme__["shadows"].text);

var formStyle = _objectSpread({
  maxWidth: 250,
  width: '95%',
  margin: '0 auto',
  padding: '10px 0',
  overflowX: 'hidden'
}, __WEBPACK_IMPORTED_MODULE_3__style_theme__["flexColCenter"], {
  '&.hideLeft .field': {
    marginLeft: slideLen
  },
  '&.hideRight .field': {
    marginRight: slideLen
  },
  '&.showRight .field': {
    animation: "".concat(Object(__WEBPACK_IMPORTED_MODULE_4__style_keyframes__["k" /* slideRight */])(slideLen), " ").concat(slideSpeed, "ms ease-in-out")
  },
  '&.showLeft .field': {
    animation: "".concat(Object(__WEBPACK_IMPORTED_MODULE_4__style_keyframes__["j" /* slideLeft */])(slideLen), " ").concat(slideSpeed, "ms ease-in-out")
  },
  '& .errorMsg': {
    textAlign: 'center',
    paddingTop: 5
  },
  '& .field': {
    width: '96%',
    height: 40,
    margin: '15px 0 0',
    transition: "margin ".concat(slideSpeed, "ms ease-in-out"),
    '&.icon': {
      position: 'relative',
      '& svg:nth-child(3)': {
        position: 'absolute',
        left: 6,
        bottom: 14,
        color: '#ffffff',
        opacity: 0.95,
        pointerEvents: 'none'
      },
      '& input': {
        left: 0,
        paddingLeft: 36,
        position: 'absolute'
      },
      '& .underline': {
        position: 'absolute',
        top: 32,
        left: 2
      }
    },
    // &.icon
    '&.extraIcon': {
      '& input': {
        paddingRight: 28
      },
      '& svg:nth-child(4)': {
        position: 'absolute',
        cursor: 'pointer',
        padding: 5,
        right: 2,
        top: 0
      }
    },
    // &.extraIcon
    '& input, & textarea': _objectSpread({}, fieldStyle, {
      outline: 0,
      padding: 4,
      width: '100%',
      border: 'none',
      background: 'transparent',
      '::placeholder': _objectSpread({}, fieldStyle, {
        opacity: 1
      }),
      ':focus ~ .underline': {
        background: '#ffffff',
        opacity: 1
      }
    }),
    '&.textarea': {
      height: 75,
      marginTop: 5,
      '& textarea': {
        width: 'calc(100% - 8px)',
        height: 65
      }
    },
    '& .underline': {
      width: '99%',
      height: 1,
      background: __WEBPACK_IMPORTED_MODULE_3__style_theme__["colors"].dullWhite,
      opacity: 0.5,
      boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.25)',
      transition: 'opacity 150ms ease-in-out'
    }
  },
  // .field
  '& button': _objectSpread({
    width: '96%',
    fontSize: 20,
    marginTop: 20
  }, __WEBPACK_IMPORTED_MODULE_3__style_theme__["shadows"].text, {
    padding: '4px 0'
  }, __WEBPACK_IMPORTED_MODULE_3__style_theme__["flexRowCenter"], {
    borderRadius: 15,
    color: __WEBPACK_IMPORTED_MODULE_3__style_theme__["colors"].blackFg,
    justifyContent: 'center',
    background: __WEBPACK_IMPORTED_MODULE_3__style_theme__["colors"].dullWhite
  })
});

var Form = function Form(_ref) {
  var maxWidth = _ref.maxWidth,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      error = _ref.error,
      pending = _ref.pending,
      head = _ref.head,
      submit = _ref.submit,
      props = _objectWithoutProperties(_ref, ["maxWidth", "style", "className", "children", "error", "pending", "head", "submit"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", _extends({
    method: "post",
    noValidate: true
  }, _objectSpread({}, props, {
    className: "".concat(Object(__WEBPACK_IMPORTED_MODULE_1_glamor__["css"])(formStyle), " ").concat(className || ''),
    style: _objectSpread({}, style, {
      maxWidth: maxWidth
    })
  })), head, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "errorMsg"
  }, error), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onClick: submit,
    className: pending ? '' : 'on'
  }, pending ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Spinner__["a" /* default */], {
    size: 24
  }) : [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    key: "text"
  }, "Submit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fortawesome_react_fontawesome___default.a, {
    style: {
      height: 18,
      margin: '-3px 0 0 4px'
    },
    key: "icon",
    icon: "chevron-right",
    preserveAspectRatio: "none"
  })]));
};

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var iconStyle = {
  width: 22,
  height: 22
};
var extraIconStyle = {
  width: 30,
  height: 30
};

var Field = function Field(_ref) {
  var type = _ref.type,
      icon = _ref.icon,
      extraIcon = _ref.extraIcon,
      extraIconProps = _ref.extraIconProps,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["type", "icon", "extraIcon", "extraIconProps", "id", "name", "placeholder"]);

  var className = 'field';
  if (icon) className += ' icon';
  if (extraIcon) className += ' extraIcon';
  if (type === 'textarea') className += ' textarea';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: className
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: name,
    className: "offscreen"
  }, placeholder), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(type === 'textarea' ? 'textarea' : 'input', _objectSpread({}, props, {
    name: name,
    placeholder: placeholder,
    id: id || name,
    type: type === 'textarea' ? null : type
  })), icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome___default.a, {
    icon: icon,
    style: iconStyle
  }) : null, extraIcon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome___default.a, _extends({
    icon: extraIcon,
    style: extraIconStyle
  }, extraIconProps)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "underline"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Field);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Field__ = __webpack_require__(29);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        password: '',
        pending: false,
        showPass: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleShowPass", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          showPass: !_this.state.showPass
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.id, e.target.value));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var _this$state = _this.state,
            email = _this$state.email,
            password = _this$state.password;
        var users = _this.props.users;
        if (users.pending) return;
        email = email.trim();
        password = password.trim();

        if (email.length === 0 || password.length === 0) {
          return;
        }

        Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions__["_55" /* login */])({
          email: email,
          password: password
        });
      }
    }), _temp));
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          email = _state.email,
          password = _state.password,
          showPass = _state.showPass;
      var _props = this.props,
          maxWidth = _props.maxWidth,
          className = _props.className,
          users = _props.users;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Form__["a" /* default */], _extends({
        submit: this.submit
      }, {
        maxWidth: maxWidth,
        className: className,
        error: users.error,
        pending: users.pending
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Field__["a" /* default */], {
        type: "email",
        name: "email",
        value: email,
        icon: "envelope",
        placeholder: "Email",
        onChange: this.handleChange
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Field__["a" /* default */], {
        icon: "lock",
        maxLength: "256",
        value: password,
        name: "password",
        placeholder: "Password",
        onChange: this.handleChange,
        type: showPass ? 'text' : 'password',
        extraIcon: showPass ? 'eye-slash' : 'eye',
        extraIconProps: {
          onClick: this.toggleShowPass
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var redirect = _ref2.redirect,
          users = _ref2.users;
      var error = users.error,
          pending = users.pending;

      if (!pending && !error && state.pending && redirect) {
        __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/home');
      }

      return pending !== state.pending ? {
        pending: pending
      } : null;
    }
  }]);

  return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (_ref3) {
  var users = _ref3.users;
  return {
    users: users
  };
})(LoginForm));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(3);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "glamor"
var external__glamor_ = __webpack_require__(4);
var external__glamor__default = /*#__PURE__*/__webpack_require__.n(external__glamor_);

// CONCATENATED MODULE: ./style/global.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // rehydrate must be called before any glamor calls
// or else styles will duplicate

if (typeof window !== 'undefined') {
  Object(external__glamor_["rehydrate"])(window.__NEXT_DATA__.ids);
} // these have to be imported after rehydrate or else it will duplicate


var _require = __webpack_require__(6),
    colors = _require.colors,
    fonts = _require.fonts,
    noTapHighlight = _require.noTapHighlight,
    shadows = _require.shadows;

__webpack_require__(32);

__webpack_require__(33);

external__glamor_["css"].insert("\n  *::selection {\n    background: orange;\n  }\n");
var navTarget = '#navExpanded:checked ~';
var expandTarget = "".concat(navTarget, " header div .expandBtn div");
external__glamor_["css"].global("".concat(expandTarget, ":nth-child(1)"), {
  transformOrigin: 8.5,
  transform: 'rotate(45deg)'
});
external__glamor_["css"].global("".concat(expandTarget, ":nth-child(2)"), {
  opacity: 0
});
external__glamor_["css"].global("".concat(expandTarget, ":nth-child(3)"), {
  transformOrigin: 8.5,
  transform: 'rotate(-45deg)'
});
external__glamor_["css"].global("".concat(navTarget, " div .Nav"), {
  overflow: 'auto',
  height: 'calc(100vh - 55px)'
});
external__glamor_["css"].global('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
});
external__glamor_["css"].global('body', {
  fontSize: 16,
  color: colors.blackFg,
  fontFamily: fonts.nunito,
  background: colors.whiteBg,
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased'
});
external__glamor_["css"].global('button, input, optgroup, select, textarea', {
  fontFamily: fonts.nunito
});
external__glamor_["css"].global('a', {
  color: 'inherit'
});
external__glamor_["css"].global('textarea', {
  resize: 'none'
});
external__glamor_["css"].global('button, .btn', _objectSpread({
  outline: 0,
  fontSize: 14,
  border: 'none'
}, shadows.box, {
  borderRadius: 3,
  color: '#ffffff',
  cursor: 'pointer'
}, noTapHighlight, {
  userSelect: 'none',
  padding: '5px 10px',
  textTransform: 'uppercase',
  background: colors.blueMix,
  transition: 'box-shadow 150ms ease-in-out'
}));
external__glamor_["css"].global('.btn-alt', {
  color: colors.blackFg,
  background: '#ffffff'
});
external__glamor_["css"].global('button:focus, .btn:focus', {
  outline: "1px dotted ".concat(colors.blackFg)
});
external__glamor_["css"].global('button:hover, .btn:hover', {
  boxShadow: '3px 6px 9px rgba(0, 0, 0, 0.3)'
});
external__glamor_["css"].global('button:active, .btn:active', {
  boxShadow: 'inset 1px 3px 6px rgba(0, 0, 0, 0.3)'
}); // setup h1-6 tags

var headerSizes = [40, 32, 28, 24, 20, 16];
headerSizes.forEach(function (fontSize, i) {
  external__glamor_["css"].global("h".concat(i + 1), {
    fontSize: fontSize
  });
});
external__glamor_["css"].global('.offscreen', {
  position: 'absolute',
  left: '-200%',
  top: 0
});
external__glamor_["css"].global('.errMsg', {
  textAlign: 'center',
  padding: '25px 10px'
});
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(9);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./style/theme.js
var theme = __webpack_require__(6);

// EXTERNAL MODULE: ./util/config.js
var config = __webpack_require__(5);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./redux/actions/index.js + 41 modules
var actions = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(22);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./comps/user/Avatar.js
var Avatar = __webpack_require__(18);

// EXTERNAL MODULE: ./comps/pages/PageThumb.js
var PageThumb = __webpack_require__(23);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(10);
var react_fontawesome__default = /*#__PURE__*/__webpack_require__.n(react_fontawesome_);

// CONCATENATED MODULE: ./comps/SearchBox.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchBox__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SearchBox__defineProperty(target, key, source[key]); }); } return target; }

function SearchBox__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var style = SearchBox__objectSpread({
  height: 30,
  flexGrow: 1,
  paddingLeft: 15
}, theme["flexRowCenter"], SearchBox__defineProperty({
  marginRight: 'auto',
  position: 'relative',
  borderLeft: '1px solid #ffffff',
  '& .searchIcon': {
    zIndex: 1,
    marginRight: -24,
    pointerEvents: 'none'
  },
  '& input': SearchBox__objectSpread({
    zIndex: 0,
    outline: 0,
    width: '100%',
    minWidth: 275,
    maxWidth: 360,
    border: 'none',
    fontSize: 17
  }, theme["shadows"].text, {
    color: '#ffffff',
    background: 'none',
    padding: '5px 3px 5px 32px',
    borderBottom: '1px solid transparent',
    transition: 'border 250ms ease-in-out',
    '::placeholder': SearchBox__objectSpread({
      opacity: 1
    }, theme["shadows"].text, {
      color: '#ffffff'
    }),
    ':focus': {
      borderBottom: '1px solid #ffffff'
    }
  }),
  // input
  '& .results': SearchBox__objectSpread({
    position: 'absolute',
    top: 35,
    left: 11,
    width: '100%',
    minWidth: 275,
    maxWidth: 395,
    borderRadius: 2,
    background: '#ffffff',
    color: theme["colors"].blackFg,
    textShadow: 'none'
  }, theme["shadows"].box, {
    '& .none': {
      padding: 3,
      textAlign: 'center'
    },
    '& a': {
      display: 'block',
      padding: '2px 0',
      textDecoration: 'none',
      borderBottom: "1px solid ".concat(theme["colors"].grey),
      ':hover': {
        background: theme["colors"].grey
      },
      '& div': SearchBox__objectSpread({}, theme["flexRowCenter"], {
        alignItems: 'flex-start'
      }),
      '& .thumb': {
        width: 40,
        height: 40,
        boxShadow: 'none',
        borderRadius: 40
      },
      '& p': {
        padding: '2px 2px 2px 5px',
        fontWeight: 700
      }
    } // a

  })
}, theme["media"].lessThan(theme["sizes"].mobileBreak), {
  display: 'none'
}));

var SearchBox_Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "clearSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var el = document.getElementById('Search');
        if (el) el.value = '';
        Object(actions["_41" /* doSearch */])('');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "search", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return Object(actions["_41" /* doSearch */])(e.target.value);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "searchKey", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        // clear on escape key
        if ((e.which || e.keyCode) === 27) {
          _this.clearSearch();
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        router__default.a.push(e.currentTarget.href);

        _this.clearSearch();
      }
    }), _temp));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var search = this.props.search;
      return external__react__default.a.createElement("div", {
        className: Object(external__glamor_["css"])(style) + ' .search'
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: "search",
        style: {
          height: 20
        },
        className: "searchIcon"
      }), external__react__default.a.createElement("input", {
        type: "text",
        id: "Search",
        maxLength: "48",
        onChange: this.search,
        onKeyDown: this.searchKey,
        defaultValue: search.searchQ,
        placeholder: "Search users and pages..."
      }), external__react__default.a.createElement("div", {
        className: "results"
      }, search.results.map(function (result) {
        var type = result.type,
            _id = result._id,
            thumb = result.thumb,
            name = result.name,
            avatar = result.avatar,
            firstName = result.firstName,
            lastName = result.lastName,
            username = result.username;
        var isPage = type === 'page';
        var href = (isPage ? '/page' : '/user') + '?id=' + _id;
        return external__react__default.a.createElement("a", {
          href: href,
          key: type + _id,
          onClick: _this2.handleClick
        }, isPage ? external__react__default.a.createElement("div", null, external__react__default.a.createElement(PageThumb["a" /* default */], _extends({
          thumb: thumb
        }, {
          className: "thumb",
          style: {
            width: null
          }
        })), external__react__default.a.createElement("p", null, name)) : external__react__default.a.createElement("div", null, external__react__default.a.createElement(Avatar["a" /* default */], _extends({
          className: "thumb"
        }, {
          avatar: avatar
        })), external__react__default.a.createElement("p", null, "".concat(firstName, " ").concat(lastName, " - @").concat(username))));
      })));
    }
  }]);

  return Search;
}(external__react_["Component"]);

/* harmony default export */ var SearchBox = (Object(external__react_redux_["connect"])(function (_ref2) {
  var search = _ref2.search;
  return {
    search: search
  };
})(SearchBox_Search));
// CONCATENATED MODULE: ./comps/Header.js
function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function Header__extends() { Header__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Header__extends.apply(this, arguments); }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Header__defineProperty(target, key, source[key]); }); } return target; }

function Header__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Header_style = Object(external__glamor_["css"])(Header__objectSpread({}, theme["shadows"].box, theme["shadows"].text, theme["flexRowCenter"], Header__defineProperty({
  width: '100%',
  color: '#ffffff',
  userSelect: 'none',
  padding: '0 15px 0 10px',
  background: theme["colors"].blueMix,
  '& .brand': {
    fontSize: 26,
    marginRight: 15
  },
  '& .account': Header__objectSpread({
    marginRight: 15,
    cursor: 'pointer'
  }, theme["flexRowCenter"], {
    userSelect: 'none',
    textShadow: 'none',
    position: 'relative',
    '&.active': {
      '& p svg': {
        transform: 'rotate(180deg)'
      },
      '& .dropdown': {
        height: 52
      }
    },
    '& p svg': {
      marginLeft: 5,
      transition: 'transform 250ms ease-in-out'
    },
    '& .dropdown': Header__objectSpread({
      overflow: 'hidden',
      position: 'absolute',
      top: 'calc(100% + 5px)',
      right: 0,
      height: 0,
      width: 150,
      textAlign: 'center',
      borderRadius: 3
    }, theme["shadows"].box, {
      transition: 'height 150ms ease-in-out',
      '& p': {
        background: '#ffffff',
        color: theme["colors"].blackFg,
        borderTop: "1px solid ".concat(theme["colors"].blackFg),
        padding: '5px 0',
        lineHeight: 1,
        ':nth-child(1)': {
          border: 'none'
        },
        ':hover': {
          background: theme["colors"].grey
        }
      }
    }) // .dropdown

  }),
  // .account
  '& .expandBtn': {
    display: 'none',
    margin: '0 15px 0 auto',
    '& div': Header__objectSpread({
      width: 33,
      height: 2,
      background: '#ffffff',
      margin: '4px 0',
      cursor: 'pointer',
      transform: 'rotate(0)',
      borderRadius: 1
    }, theme["noTapHighlight"], {
      transition: 'all 150ms ease-in-out'
    })
  }
}, theme["media"].lessThan(theme["sizes"].mobileBreak), {
  '& .account': {
    display: 'none'
  },
  '& .expandBtn': {
    display: 'block'
  }
})));

var Header_Header =
/*#__PURE__*/
function (_Component) {
  Header__inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    Header__classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Header__possibleConstructorReturn(_this, (_temp = _this = Header__possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Header__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        dropdown: false
      }
    }), Object.defineProperty(Header__assertThisInitialized(_this), "toggleDropdown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          dropdown: !_this.state.dropdown
        });
      }
    }), Object.defineProperty(Header__assertThisInitialized(_this), "checkDropdown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (!_this.accountEl || _this.accountEl.contains(e.target)) {
          return;
        }

        _this.setState({
          dropdown: false
        });
      }
    }), _temp));
  }

  Header__createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('click', this.checkDropdown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.checkDropdown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          dropdown = _state.dropdown,
          expanded = _state.expanded;
      var _props = this.props,
          basicHeader = _props.basicHeader,
          className = _props.className,
          users = _props.users;

      var _ref2 = users[users.curUser] || {},
          username = _ref2.username,
          avatar = _ref2.avatar;

      return external__react__default.a.createElement("header", {
        className: "".concat(Header_style, " ").concat(className || '')
      }, external__react__default.a.createElement("p", {
        className: "brand"
      }, config["brand"], " STUDENTLIFE"), username && !basicHeader ? external__react__default.a.createElement("div", {
        style: Header__objectSpread({
          flexGrow: 1
        }, theme["flexRowCenter"])
      }, external__react__default.a.createElement(SearchBox, null), external__react__default.a.createElement("div", {
        onClick: this.toggleDropdown,
        ref: function ref(el) {
          return _this2.accountEl = el;
        },
        className: 'account' + (dropdown ? ' active' : '')
      }, external__react__default.a.createElement(Avatar["a" /* default */], Header__extends({
        avatar: avatar
      }, {
        style: {
          width: 40,
          height: 40,
          marginRight: 10,
          borderRadius: 40
        }
      })), external__react__default.a.createElement("p", null, external__react__default.a.createElement("span", null, username), external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: "caret-down",
        style: {
          height: 16
        }
      })), external__react__default.a.createElement("div", {
        className: "dropdown"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/settings"
      }, external__react__default.a.createElement("p", null, "Account settings")), external__react__default.a.createElement("p", {
        onClick: actions["_56" /* logout */]
      }, "Log out"))), external__react__default.a.createElement("label", {
        htmlFor: "navExpanded",
        className: 'expandBtn' + (expanded ? ' active' : '')
      }, external__react__default.a.createElement("div", null), " ", external__react__default.a.createElement("div", null), " ", external__react__default.a.createElement("div", null))) : null);
    }
  }]);

  return Header;
}(external__react_["Component"]);

/* harmony default export */ var comps_Header = (Object(external__react_redux_["connect"])(function (_ref3) {
  var users = _ref3.users;
  return {
    users: users
  };
})(Header_Header));
// CONCATENATED MODULE: ./comps/Footer.js




var Footer_style = Object(external__glamor_["css"])({
  padding: '20px 10px 16px',
  textAlign: 'center',
  color: '#ffffff',
  background: '#212121',
  '& p': {
    lineHeight: 1,
    ':nth-child(1)': {
      fontSize: 22
    }
  },
  '& .links': {
    padding: '10px 0',
    '& a': {
      transition: 'opacity 175ms ease-in-out',
      margin: '0 7px',
      ':hover': {
        opacity: 0.75
      },
      '& svg': {
        color: '#ffffff'
      }
    }
  }
});
var Footer_iconStyle = {
  height: 32,
  width: 32
};
var icons = {
  facebook: ['fab', 'facebook-square'],
  other: 'globe',
  twitter: ['fab', 'twitter-square'],
  instagram: ['fab', 'instagram'],
  pinterest: ['fab', 'pinterest-square'],
  youtube: ['fab', 'youtube']
};

var Footer_Footer = function Footer(_ref) {
  var className = _ref.className;
  return external__react__default.a.createElement("footer", {
    className: "".concat(Footer_style, " ").concat(className || '')
  }, external__react__default.a.createElement("p", null, "STAY CONNECTED WITH ", config["brand"]), external__react__default.a.createElement("div", {
    className: "links"
  }, Object.keys(icons).map(function (key) {
    if (!config["links"][key] || config["links"][key].length === 0) return null;
    return external__react__default.a.createElement("a", {
      href: config["links"][key],
      rel: "noopener noreferrer",
      target: "_blank",
      key: key
    }, external__react__default.a.createElement("span", {
      className: "offscreen"
    }, config["brand"] + ' ' + key, " link"), external__react__default.a.createElement(react_fontawesome__default.a, {
      icon: icons[key],
      style: Footer_iconStyle
    }));
  })), external__react__default.a.createElement("p", null, "Original Programming and Design by: JJ Kasper & Keaton Henry"));
};

/* harmony default export */ var comps_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./comps/util/ActiveLink.js
function ActiveLink__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ActiveLink__defineProperty(target, key, source[key]); }); } return target; }

function ActiveLink__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      onClick = _ref.onClick,
      activeStyle = _ref.activeStyle,
      className = _ref.className,
      activeClassName = _ref.activeClassName,
      props = _objectWithoutProperties(_ref, ["children", "router", "onClick", "activeStyle", "className", "activeClassName"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(props.href);
    if (typeof onClick === 'function') onClick(e);
  };

  var active = Boolean(router.pathname === props.href);
  className = className || '';

  if (activeClassName && active) {
    className += " ".concat(activeClassName);
  }

  return external__react__default.a.createElement("a", ActiveLink__objectSpread({}, props, {
    className: className,
    onClick: handleClick,
    style: active ? activeStyle : null
  }), children);
};

/* harmony default export */ var util_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// CONCATENATED MODULE: ./comps/Nav.js
function Nav__extends() { Nav__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Nav__extends.apply(this, arguments); }

function Nav__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Nav__defineProperty(target, key, source[key]); }); } return target; }

function Nav__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var links = [{
  label: 'Home',
  icon: 'home',
  href: '/home'
}, {
  label: 'News',
  icon: 'bullhorn',
  href: '/news'
}, {
  label: 'Pages',
  icon: 'file-alt',
  href: '/page'
}, {
  label: 'Resources',
  icon: 'external-link-alt',
  href: '/resource'
}, {
  label: 'Opportunities',
  icon: 'handshake',
  href: '/opportunities'
}, {
  label: 'Admin panel',
  icon: 'cog',
  href: '/admin'
}, {
  label: 'Account settings',
  href: '/settings',
  mobile: true
}];

var navStyle = Nav__objectSpread({
  top: 55,
  left: 0,
  height: 0,
  zIndex: 5,
  width: '100%',
  display: 'flex'
}, theme["shadows"].text, Nav__defineProperty({
  overflow: 'hidden',
  color: '#ffffff',
  position: 'fixed',
  flexDirection: 'row',
  justifyContent: 'center',
  background: theme["colors"].blueMix,
  transition: 'height 175ms ease-in-out',
  '& a, & .item': {
    fontWeight: 700,
    textDecoration: 'none'
  },
  '& .wrapLinks': {
    width: '95%',
    textAlign: 'center'
  },
  '& .item': {
    width: '100%',
    display: 'block',
    padding: '8px 0',
    borderBottom: '1px solid #ffffff'
  },
  '& .label': {
    width: '100%'
  },
  '& .icon': {
    display: 'none'
  }
}, theme["media"].greaterThan(theme["sizes"].mobileBreak), {
  flexShrink: 0,
  position: 'inherit',
  zIndex: 4,
  background: theme["colors"].whiteBg,
  color: theme["colors"].blackFg,
  textShadow: 'none',
  display: 'inline-flex',
  width: theme["sizes"].navWidth,
  height: 'auto',
  '& .mob': {
    display: 'none !important'
  },
  '& a:hover, & a.active': {
    background: theme["colors"].grey
  },
  '& .wrapLinks': {
    top: 60,
    left: 0,
    position: 'fixed',
    width: theme["sizes"].navWidth - 1,
    borderRight: "1px solid ".concat(theme["colors"].grey)
  },
  '& .item': {
    width: '100%',
    display: 'flex',
    padding: '2px 0',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottom: 'none',
    '& .icon': Nav__objectSpread({
      width: 45,
      height: 35,
      flexShrink: 0
    }, theme["flexRowCenter"], {
      justifyContent: 'center'
    }),
    '& .label': Nav__objectSpread({
      height: 30,
      flexGrow: 1
    }, theme["flexRowCenter"])
  }
}));

var collapseNav = function collapseNav() {
  // update nav expanded state to collapsed
  var el = document.querySelector('#navExpanded');
  if (!el || !el.checked) return;
  el.click();
};

var Nav_Nav = function Nav(_ref) {
  var users = _ref.users,
      numMsgs = _ref.numMsgs,
      numReported = _ref.numReported;

  var _ref2 = users[users.curUser] || {},
      username = _ref2.username,
      role = _ref2.role;

  var iconStyle = {
    height: 30,
    width: 30
  };
  return external__react__default.a.createElement("div", {
    className: 'Nav ' + Object(external__glamor_["css"])(navStyle)
  }, external__react__default.a.createElement("div", {
    className: "wrapLinks"
  }, external__react__default.a.createElement("p", {
    className: "welcome item mob"
  }, "Logged in as, ", username), links.map(function (link) {
    var href = link.href,
        icon = link.icon,
        label = link.label,
        mobile = link.mobile;

    if (href === '/admin') {
      if (role !== 'admin') return null;

      if (numMsgs + numReported > 0) {
        label = external__react__default.a.createElement("span", null, label, external__react__default.a.createElement("span", {
          className: "adminNotifs"
        }, numMsgs + numReported));
      }
    }

    return external__react__default.a.createElement(util_ActiveLink, Nav__extends({
      key: href
    }, {
      href: href,
      onClick: collapseNav,
      activeClassName: 'active',
      className: 'item' + (mobile ? ' mob' : '')
    }), external__react__default.a.createElement("div", {
      className: "icon"
    }, icon ? external__react__default.a.createElement(react_fontawesome__default.a, {
      icon: icon,
      style: iconStyle
    }) : null), external__react__default.a.createElement("div", {
      className: "label"
    }, label));
  }), external__react__default.a.createElement("div", {
    className: "item mob"
  }, external__react__default.a.createElement("div", {
    className: "label",
    onClick: actions["_56" /* logout */]
  }, "Logout"))));
};

/* harmony default export */ var comps_Nav = (Object(external__react_redux_["connect"])(function (_ref3) {
  var users = _ref3.users;
  return {
    users: users
  };
})(Nav_Nav));
// EXTERNAL MODULE: ./comps/forms/LoginForm.js
var LoginForm = __webpack_require__(30);

// CONCATENATED MODULE: ./comps/Shortcuts.js
function Shortcuts__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Shortcuts__typeof = function _typeof(obj) { return typeof obj; }; } else { Shortcuts__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Shortcuts__typeof(obj); }

function Shortcuts__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Shortcuts__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Shortcuts__createClass(Constructor, protoProps, staticProps) { if (protoProps) Shortcuts__defineProperties(Constructor.prototype, protoProps); if (staticProps) Shortcuts__defineProperties(Constructor, staticProps); return Constructor; }

function Shortcuts__possibleConstructorReturn(self, call) { if (call && (Shortcuts__typeof(call) === "object" || typeof call === "function")) { return call; } return Shortcuts__assertThisInitialized(self); }

function Shortcuts__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Shortcuts__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Shortcuts__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Shortcuts__defineProperty(target, key, source[key]); }); } return target; }

function Shortcuts__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Shortcuts_style = Shortcuts__objectSpread({
  top: 0,
  left: 0,
  height: 0,
  zIndex: 10,
  opacity: 0,
  width: '100%'
}, theme["flexRowCenter"], {
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.6)',
  transition: 'opacity 150ms ease-in-out',
  '&.active': {
    opacity: 1,
    height: '100%'
  },
  '& .wrap': Shortcuts__objectSpread({
    width: '100%',
    height: '100%',
    maxWidth: 600,
    maxHeight: 400
  }, theme["shadows"].box, {
    overflow: 'auto',
    borderRadius: 4,
    margin: '-5% auto 0',
    position: 'relative',
    padding: '2px 10px 20px',
    background: theme["colors"].whiteBg,
    '& .close': {
      top: 0,
      right: 5,
      padding: 0,
      fontSize: 26,
      float: 'right',
      fontWeight: 700,
      cursor: 'pointer',
      background: 'none',
      position: 'absolute'
    },
    '& p': {
      padding: '8px 0',
      borderBottom: "1px solid ".concat(theme["colors"].blackFg),
      '& .title': {
        fontWeight: 700,
        textAlign: 'center'
      },
      '& span': {
        fontWeight: 700,
        borderRadius: 2,
        padding: '1px 5px',
        background: theme["colors"].grey
      }
    }
  })
});

var Shortcuts_keys = {
  navigation: [{
    keys: ['g', 'h'],
    msg: '%k then %k navigate to home'
  }, {
    keys: ['g', 'n'],
    msg: '%k then %k navigate to news'
  }, {
    keys: ['g', 'p'],
    msg: '%k then %k navigate to pages'
  }, {
    keys: ['g', 'r'],
    msg: '%k then %k navigate to resources'
  }, {
    keys: ['g', 'o'],
    msg: '%k then %k navigate to opportunities'
  }, {
    keys: ['g', 's'],
    msg: '%k then %k navigate to account settings'
  }, {
    keys: ['g', 'a'],
    msg: '%k then %k navigate to admin panel',
    admin: true
  }, {
    keys: ['g', 'l'],
    msg: '%k then %k logout'
  }],
  actions: [{
    keys: ['shift', 'p'],
    msg: '%k then %k focus new post box if present'
  }, {
    keys: ['shift', 's'],
    msg: '%k + %k focus search bar'
  }, {
    keys: ['e'],
    msg: 'When on a page that allows editing pressing %k will open edit area'
  }, {
    keys: ['d'],
    msg: 'When on a page with a single delete button %k will trigger it'
  }, {
    keys: ['?'],
    msg: '%k show this window'
  }]
};

var _ = function _(q) {
  return document.querySelector(q);
};

var Shortcuts_go = function go(path) {
  return router__default.a.push(path);
};

var click = function click(el) {
  el = _(el);
  el && setTimeout(function () {
    return el.click();
  }, 1);
};

var Shortcuts_focus = function focus(el) {
  el = _(el);
  el && setTimeout(function () {
    return el.focus();
  }, 1);
};

var Shortcuts_ShortcutKeys =
/*#__PURE__*/
function (_Component) {
  Shortcuts__inherits(ShortcutKeys, _Component);

  function ShortcutKeys() {
    var _ref;

    var _temp, _this;

    Shortcuts__classCallCheck(this, ShortcutKeys);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Shortcuts__possibleConstructorReturn(_this, (_temp = _this = Shortcuts__possibleConstructorReturn(this, (_ref = ShortcutKeys.__proto__ || Object.getPrototypeOf(ShortcutKeys)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        show: false
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "keyEvts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "prevKey", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "shift", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "hide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          show: false
        });
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "handleKey", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var tag = e.target.tagName;
        var key = e.which || e.keyCode;
        var prevG = Boolean(_this.prevKey === 71); // was prev key g

        var isInputEl = Boolean(tag === 'TEXTAREA' || tag === 'INPUT');

        if (key === 27) {
          // escape was pressed
          if (_this.state.show) {
            _this.setState({
              show: false
            });
          } else if (isInputEl) {
            e.target.blur();
          } else {
            click('#escape');
          }
        }

        if (isInputEl) return;

        if (prevG) {
          switch (key) {
            case 72:
              Shortcuts_go('/home');
              break;

            case 80:
              Shortcuts_go('/page');
              break;

            case 82:
              Shortcuts_go('/resource');
              break;

            case 79:
              Shortcuts_go('/opportunities');
              break;

            case 78:
              Shortcuts_go('/news');
              break;

            case 83:
              Shortcuts_go('/settings');
              break;

            case 65:
              Shortcuts_go('/admin');
              break;

            case 76:
              Object(actions["_56" /* logout */])();
              break;

            default:
              break;
          }
        }

        switch (key) {
          case 67:
            click('#create');
            break;

          case 68:
            click('#delete');
            break;

          case 69:
            click('#edit');
            break;

          default:
            break;
        }

        if (_this.shift) {
          switch (key) {
            case 191:
              _this.setState({
                show: true
              });

              break;

            case 83:
              Shortcuts_focus('#Search');
              break;

            case 80:
              Shortcuts_focus('#PostBox');
              break;

            default:
              break;
          }
        }

        if (key === 16) _this.shift = true;
        _this.prevKey = key;
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "handleKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var key = e.which || e.keyCode;
        if (key === 16) _this.shift = false;
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "setup", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.addEventListener('keydown', _this.handleKey);
        window.addEventListener('keyup', _this.handleKeyUp);
        _this.isSetup = true;
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "teardown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.removeEventListener('keydown', _this.handleKey);
        window.removeEventListener('keyup', _this.handleKeyUp);
        _this.isSetup = false;
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "checkKeyEvts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var users = _this.props.users;
        if (users.curUser && !_this.isSetup) _this.setup();else if (!users.curUser && _this.isSetup) _this.teardown();
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "componentDidUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.checkKeyEvts();
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.checkKeyEvts();
      }
    }), Object.defineProperty(Shortcuts__assertThisInitialized(_this), "componentWillUnmount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.teardown();
      }
    }), _temp));
  }

  Shortcuts__createClass(ShortcutKeys, [{
    key: "render",
    value: function render() {
      var users = this.props.users;
      var show = this.state.show;
      var user = users[users.curUser] || {};
      return external__react__default.a.createElement("div", {
        className: Object(external__glamor_["css"])(Shortcuts_style) + (!show ? '' : ' active')
      }, external__react__default.a.createElement("div", {
        className: "wrap"
      }, external__react__default.a.createElement("span", {
        onClick: this.hide,
        className: "close"
      }, "X"), external__react__default.a.createElement("p", null, "Keyboard shortcuts: (shortcuts do not work when focused on an input)"), function () {
        var toReturn = [];
        Object.keys(Shortcuts_keys).forEach(function (cat) {
          Shortcuts_keys[cat].forEach(function (kObj, idx) {
            if (kObj.admin && !user.isAdmin) return;
            var kRet = [];
            var msg = kObj.msg,
                keys = kObj.keys;
            var lastInsert = 0;
            msg.split('%k').forEach(function (part, pIdx) {
              if (part.trim().length === 0 || (lastInsert + pIdx) % 2 !== 0) {
                kRet.push(external__react__default.a.createElement("span", {
                  key: cat + '-' + pIdx
                }, keys[lastInsert]));
                lastInsert += 1;
              }

              kRet.push(part);
            });
            toReturn.push(external__react__default.a.createElement("p", {
              key: cat + idx
            }, kRet));
          });
        });
        return toReturn;
      }()));
    }
  }]);

  return ShortcutKeys;
}(external__react_["Component"]);

/* harmony default export */ var Shortcuts = (Object(external__react_redux_["connect"])(function (_ref2) {
  var users = _ref2.users;
  return {
    users: users
  };
})(Shortcuts_ShortcutKeys));
// CONCATENATED MODULE: ./comps/util/Dialog.js
function Dialog__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Dialog__defineProperty(target, key, source[key]); }); } return target; }

function Dialog__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Dialog_style = {
  top: 0,
  left: 0,
  height: 0,
  zIndex: 6,
  opacity: 0,
  width: '100%',
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.75)',
  transition: 'opacity 175ms ease-in-out',
  '&.active': {
    opacity: 1,
    height: '100%'
  },
  '& .box': Dialog__objectSpread({
    top: '-15%',
    left: 0,
    right: 0,
    bottom: 0,
    width: '95%',
    height: '100%',
    margin: 'auto',
    maxHeight: 150,
    borderRadius: 3
  }, theme["flexRowCenter"], {
    flexWrap: 'wrap',
    padding: '0 15px',
    position: 'absolute',
    background: '#ffffff',
    maxWidth: theme["sizes"].maxBlockWidth + 50,
    boxShadow: '3px 6px 9px rgba(0, 0, 0, 0.8)'
  }),
  '& h5, & p, & div': {
    width: '100%'
  },
  '& p': {
    margin: 'auto 0'
  },
  '& div': Dialog__objectSpread({}, theme["flexRowCenter"], {
    '& button': {
      ':nth-child(1)': {
        marginLeft: 'auto'
      },
      ':nth-child(2)': {
        marginLeft: 10
      }
    }
  })
};

var Dialog_execBtnAct = function execBtnAct(func) {
  Object(actions["_21" /* clearDialog */])();

  if (typeof func === 'function') {
    func();
  }
};

var Dialog_Dialog = function Dialog(_ref) {
  var dialog = _ref.dialog,
      router = _ref.router;
  var title = dialog.title,
      message = dialog.message,
      button1Txt = dialog.button1Txt,
      button2Txt = dialog.button2Txt,
      button1Act = dialog.button1Act,
      button2Act = dialog.button2Act,
      activePath = dialog.activePath;
  var addEscape = button2Txt === 'Cancel';
  var hasButton2 = typeof button2Txt === 'string';

  var button1Click = function button1Click() {
    return Dialog_execBtnAct(button1Act);
  };

  var button2Click = function button2Click() {
    return Dialog_execBtnAct(button2Act);
  };

  var isActive = title && router.route === activePath;
  if (title && !isActive) Object(actions["_21" /* clearDialog */])();
  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(Dialog_style) + (isActive ? ' active' : '')
  }, external__react__default.a.createElement("div", {
    className: "box"
  }, external__react__default.a.createElement("h5", null, title), external__react__default.a.createElement("p", null, message), external__react__default.a.createElement("div", null, external__react__default.a.createElement("button", {
    onClick: button1Click,
    id: isActive && !hasButton2 ? 'escape' : null
  }, button1Txt), hasButton2 && external__react__default.a.createElement("button", {
    autoFocus: true,
    className: "btn-alt",
    onClick: button2Click,
    id: addEscape ? 'escape' : null
  }, button2Txt))));
};

/* harmony default export */ var util_Dialog = (Object(router_["withRouter"])(Object(external__react_redux_["connect"])(function (_ref2) {
  var dialog = _ref2.dialog;
  return {
    dialog: dialog
  };
})(Dialog_Dialog)));
// CONCATENATED MODULE: ./comps/Layout.js
function Layout__extends() { Layout__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Layout__extends.apply(this, arguments); }

function Layout__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Layout__defineProperty(target, key, source[key]); }); } return target; }

function Layout__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Layout_Layout = function Layout(_ref) {
  var noNav = _ref.noNav,
      users = _ref.users,
      children = _ref.children,
      gradient = _ref.gradient,
      noFooter = _ref.noFooter,
      noHeader = _ref.noHeader,
      restrict = _ref.restrict,
      className = _ref.className,
      basicHeader = _ref.basicHeader;
  var showRestrict = Boolean(restrict && !users.curUser);
  var noGradient = {
    boxShadow: 'none !important',
    background: 'transparent !important'
  };
  var pgStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };
  var childStyle = Object(external__glamor_["css"])(Layout__objectSpread({
    flexGrow: 1,
    display: 'flex'
  }, !showRestrict ? {} : theme["flexRowCenter"]));
  var headerStyle = {
    top: 0,
    left: 0,
    zIndex: 5,
    height: 55,
    position: 'fixed'
  };
  var footerStyle = {
    minHeight: 55
  };

  if (gradient || showRestrict) {
    pgStyle = Object(external__glamor_["css"])(Layout__objectSpread({}, pgStyle, theme["shadows"].text, {
      color: '#ffffff',
      background: theme["colors"].blueGradient
    }));
    headerStyle = Object(external__glamor_["css"])(Layout__objectSpread({}, headerStyle, noGradient, {
      position: 'relative'
    }));
    footerStyle = Object(external__glamor_["css"])(Layout__objectSpread({}, footerStyle, noGradient));
  } else {
    pgStyle = Object(external__glamor_["css"])(Layout__objectSpread({}, pgStyle, {
      paddingTop: 55
    }));
    headerStyle = Object(external__glamor_["css"])(headerStyle);
    footerStyle = Object(external__glamor_["css"])(footerStyle);
  }

  return external__react__default.a.createElement("div", {
    className: 'pg ' + pgStyle
  }, external__react__default.a.createElement(Shortcuts, null), external__react__default.a.createElement(util_Dialog, null), external__react__default.a.createElement("input", {
    type: "checkbox",
    style: {
      display: 'none'
    },
    id: "navExpanded"
  }), !noHeader && external__react__default.a.createElement(comps_Header, Layout__extends({
    className: headerStyle
  }, {
    basicHeader: basicHeader
  })), external__react__default.a.createElement("div", {
    className: childStyle
  }, showRestrict ? external__react__default.a.createElement("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h5", null, "This page requires authentication.", external__react__default.a.createElement("br", null), "Please login to continue"), external__react__default.a.createElement(LoginForm["a" /* default */], {
    maxWidth: 350
  }))) : external__react__default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flexGrow: 1
    }
  }, !noNav && external__react__default.a.createElement(comps_Nav, null), external__react__default.a.createElement("div", {
    className: className,
    style: {
      flexGrow: 1
    }
  }, children))), !noFooter && external__react__default.a.createElement(comps_Footer, {
    className: footerStyle
  }));
};

/* harmony default export */ var comps_Layout = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(function (_ref2) {
  var users = _ref2.users;
  return {
    users: users
  };
})(Layout_Layout));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("glamor/reset");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamor__);

__WEBPACK_IMPORTED_MODULE_0_glamor__["css"].insert("\n/* vietnamese */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIOuaBTMnFcQIG.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofIO-aBTMnFcQIG.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v9/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v9/XRXW3I6Li01BKofAjsOUbuvIWzgPDEtj.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v9/XRXW3I6Li01BKofAjsOUb-vIWzgPDEtj.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v9/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // if a page is navigated to before logging in the data
// will not be able to be fetched, so watch for login
// to occurr and refetch getInitialProps

var withLoginReload = function withLoginReload(Comp, parseCtx, doUpdate) {
  var WithLogin =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithLogin, _Component);

    function WithLogin() {
      _classCallCheck(this, WithLogin);

      return _possibleConstructorReturn(this, (WithLogin.__proto__ || Object.getPrototypeOf(WithLogin)).apply(this, arguments));
    }

    _createClass(WithLogin, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var curUser = this.props.users.curUser;
        var update = false;

        if (typeof doUpdate === 'function') {
          update = doUpdate(this.props, prevProps);
        }

        if (prevProps.users.curUser !== curUser && curUser || update) {
          var ctx = {};

          if (typeof parseCtx === 'function') {
            ctx = parseCtx(_objectSpread({}, this.props, {
              didUpdate: true
            }));
          }

          WithLogin.getInitialProps(ctx);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Comp, this.props.compProps);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var props;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  props = {};

                  if (!ctx.didUpdate && typeof parseCtx === 'function') {
                    props = parseCtx(ctx);
                  }

                  _context.next = 4;
                  return Comp.getInitialProps(ctx);

                case 4:
                  props.compProps = _context.sent;
                  return _context.abrupt("return", props);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithLogin;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  return Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (_ref) {
    var users = _ref.users;
    return {
      users: users
    };
  })(WithLogin);
};

/* harmony default export */ __webpack_exports__["a"] = (withLoginReload);

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var ExtLink = function ExtLink(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), children);
};

/* harmony default export */ __webpack_exports__["a"] = (ExtLink);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDateFromVal; });
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var addZero = function addZero(digit) {
  digit += '';
  return digit.length === 1 ? '0' + digit : digit;
};

var getDateFromVal = function getDateFromVal(val) {
  val = val.split('-');
  val[1] = val[1].replace('0', '');
  val = val.join('-');
  return new Date(val);
};

var getDate = function getDate() {
  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var noTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  d = d instanceof Date ? d : new Date(d);
  var str = "".concat(months[d.getMonth()], " ").concat(d.getDate(), ", ").concat(d.getFullYear());

  if (!noTime) {
    var period = 'AM';
    var hour = d.getHours();
    var min = d.getMinutes();

    if (hour > 11) {
      hour = hour > 12 ? hour - 12 : hour;
      period = 'PM';
    } else if (hour === 0) {
      hour = '12';
    } // hour = addZero(hour)


    min = addZero(min);
    str += " ".concat(hour, ":").concat(min, " ").concat(period);
  }

  return str;
};

/* harmony default export */ __webpack_exports__["a"] = (getDate);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(3);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "glamor"
var external__glamor_ = __webpack_require__(4);
var external__glamor__default = /*#__PURE__*/__webpack_require__.n(external__glamor_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(9);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./redux/actions/index.js + 41 modules
var actions = __webpack_require__(2);

// EXTERNAL MODULE: ./comps/Spinner.js
var Spinner = __webpack_require__(19);

// EXTERNAL MODULE: ./util/config.js
var config = __webpack_require__(5);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./comps/posts/ExpandedView.js




var ExpandedView_style = {
  top: 0,
  left: 0,
  zIndex: 5,
  opacity: 0,
  height: '0',
  width: '100%',
  color: '#ffffff',
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.75)',
  transition: 'opacity 175ms ease-in-out',
  '&.active': {
    opacity: 1,
    height: '100%'
  },
  '& .close': {
    top: 15,
    right: 25,
    fontSize: 35,
    cursor: 'pointer',
    position: 'absolute'
  },
  '& img': {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    position: 'absolute'
  }
};

var ExpandedView_ExpandedView = function ExpandedView(_ref) {
  var posts = _ref.posts;
  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(ExpandedView_style) + (posts.expanded ? ' active' : '')
  }, external__react__default.a.createElement("div", {
    id: "escape",
    className: "close",
    onClick: actions["_24" /* collapsePost */],
    title: "Hide expanded view"
  }, "X"), posts.expanded ? external__react__default.a.createElement("img", {
    src: config["uploadsUrl"] + posts[posts.expanded].file,
    alt: "expanded post image"
  }) : null);
};

/* harmony default export */ var posts_ExpandedView = (ExpandedView_ExpandedView);
// EXTERNAL MODULE: ./style/theme.js
var theme = __webpack_require__(6);

// EXTERNAL MODULE: ./style/keyframes.js
var keyframes = __webpack_require__(17);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(22);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(10);
var react_fontawesome__default = /*#__PURE__*/__webpack_require__.n(react_fontawesome_);

// EXTERNAL MODULE: ./comps/util/ExtLink.js
var ExtLink = __webpack_require__(36);

// CONCATENATED MODULE: ./comps/posts/PostFile.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var viewerUrl = 'https://docs.google.com/viewer?url=';
var PostFile_style = {
  width: '100%',
  textAlign: 'center',
  margin: '10px 0',
  '& img': {
    width: 'auto',
    height: 'auto',
    maxHeight: 400,
    maxWidth: '98%',
    cursor: 'pointer'
  },
  // img
  '& a': _objectSpread({
    fontSize: 15
  }, theme["flexRowCenter"], {
    display: 'inline-flex',
    padding: '8px 10px',
    margin: '10px 5px 0',
    textDecoration: 'none',
    '& svg': {
      marginRight: 5
    },
    '& span': {
      height: 16
    }
  })
};
var btnIconStyle = {
  height: 16,
  width: 16
};

var PostFile_PostFile = function PostFile(_ref) {
  var _id = _ref._id,
      file = _ref.file;
  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(PostFile_style)
  }, function () {
    var icon = 'file',
        fileExt = file.split('.').pop();

    if (config["allowedExts"].images.indexOf(fileExt) > -1) {
      return external__react__default.a.createElement("img", {
        src: config["uploadsUrl"] + file,
        onClick: function onClick() {
          return Object(actions["_42" /* expandPost */])(_id);
        }
      });
    }

    switch (fileExt) {
      case 'pdf':
        icon += '-pdf';
        break;

      case 'xls':
      case 'xlsx':
        icon += '-excel';
        break;

      case 'doc':
      case 'docx':
        icon += '-word';
        break;

      case 'ppt':
      case 'pptx':
        icon += '-powerpoint';
        break;

      default:
        break;
    }

    return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", null, external__react__default.a.createElement(react_fontawesome__default.a, _extends({
      icon: icon
    }, {
      style: {
        height: 72,
        width: 72,
        color: '#555555'
      }
    }))), external__react__default.a.createElement(ExtLink["a" /* default */], {
      href: config["uploadsUrl"] + file,
      download: true,
      className: "btn"
    }, external__react__default.a.createElement(react_fontawesome__default.a, {
      icon: "download",
      style: btnIconStyle
    }), external__react__default.a.createElement("span", null, "Download")), external__react__default.a.createElement(ExtLink["a" /* default */], {
      href: viewerUrl + config["uploadsUrl"] + file,
      className: "btn"
    }, external__react__default.a.createElement(react_fontawesome__default.a, {
      icon: "eye",
      style: btnIconStyle
    }), external__react__default.a.createElement("span", null, "View")));
  }());
};

/* harmony default export */ var posts_PostFile = (PostFile_PostFile);
// CONCATENATED MODULE: ./comps/posts/PostText.js
function PostText__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PostText__defineProperty(target, key, source[key]); }); } return target; }

function PostText__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var PostText_style = {
  width: '100%',
  textAlign: 'center',
  padding: '5px 0 15px',
  wordBreak: 'break-word',
  '& textarea': {
    padding: 5,
    width: '100%',
    border: 'none',
    marginBottom: 10,
    borderBottom: "1px solid ".concat(theme["colors"].grey)
  },
  '& .buttons': PostText__objectSpread({
    width: '100%'
  }, theme["flexRowCenter"], {
    justifyContent: 'center',
    '& button': {
      margin: '0 5px'
    }
  })
};

var getEditId = function getEditId(_ref) {
  var _id = _ref._id,
      commentId = _ref.commentId;
  return 'edit' + (commentId ? 'Comment' + commentId : 'Post' + _id);
};

var PostText_turnOffEditing = function turnOffEditing(_ref2) {
  var _id = _ref2._id,
      commentId = _ref2.commentId;

  if (commentId) {
    return Object(actions["_27" /* commentUpdated */])({
      post: _id,
      _id: commentId,
      editing: false
    });
  }

  Object(actions["_71" /* postUpdated */])({
    _id: _id,
    editing: false
  });
};

var PostText_updatePostText = function updatePostText(_ref3) {
  var _id = _ref3._id,
      commentId = _ref3.commentId;
  PostText_turnOffEditing({
    _id: _id,
    commentId: commentId
  });
  var which, func, params;
  var text = document.querySelector('#' + getEditId({
    _id: _id,
    commentId: commentId
  }));
  if (!text) return;
  text = text.value.trim();
  if (!text.length) return;

  if (commentId) {
    which = 'comment';
    func = actions["_90" /* updateComment */];
    params = {
      post: _id,
      _id: commentId,
      text: text
    };
  } else {
    which = 'post';
    func = actions["_94" /* updatePost */];
    params = {
      _id: _id,
      text: text
    };
  }

  func(params).catch(function () {
    Object(actions["_88" /* setDialog */])({
      title: 'Error...',
      message: "An error occurred updating this ".concat(which, ". Please try again later"),
      button1Txt: 'OK',
      button2Txt: null
    });
  });
};

var PostText_PostText = function PostText(_ref4) {
  var _id = _ref4._id,
      commentId = _ref4.commentId,
      editing = _ref4.editing,
      text = _ref4.text;
  var editId = getEditId({
    _id: _id,
    commentId: commentId
  });

  var update = function update() {
    return PostText_updatePostText({
      _id: _id,
      commentId: commentId
    });
  };

  var turnOff = function turnOff() {
    return PostText_turnOffEditing({
      _id: _id,
      commentId: commentId
    });
  };

  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(PostText_style)
  }, editing ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("textarea", {
    autoFocus: true,
    id: editId,
    defaultValue: text,
    maxLength: config["maxPostText"]
  }), external__react__default.a.createElement("div", {
    className: "buttons"
  }, external__react__default.a.createElement("button", {
    onClick: update
  }, "Submit"), external__react__default.a.createElement("button", {
    onClick: turnOff,
    className: "btn-alt"
  }, "Cancel"))) : text);
};

/* harmony default export */ var posts_PostText = (PostText_PostText);
// EXTERNAL MODULE: ./comps/user/Avatar.js
var Avatar = __webpack_require__(18);

// CONCATENATED MODULE: ./comps/posts/PostOptions.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PostOptions__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PostOptions__defineProperty(target, key, source[key]); }); } return target; }

function PostOptions__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var PostOptions_style = {
  position: 'relative',
  '& svg': {
    cursor: 'pointer'
  },
  '& .options': PostOptions__objectSpread({
    top: 0,
    right: 30,
    height: 0,
    width: 115,
    zIndex: 3
  }, theme["shadows"].box, {
    borderRadius: 3,
    overflow: 'hidden',
    position: 'absolute',
    background: '#ffffff',
    transition: 'height 150ms ease-in-out',
    '&.active': {
      height: 'auto',
      minHeight: 25
    },
    '& .opt': {
      padding: '4px 0',
      cursor: 'pointer',
      userSelect: 'none',
      textAlign: 'center',
      borderBottom: "1px solid ".concat(theme["colors"].grey),
      ':hover': {
        background: theme["colors"].grey
      }
    }
  }) // .options

};

var PostOptions_PostOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(PostOptions, _Component);

  function PostOptions() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PostOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PostOptions.__proto__ || Object.getPrototypeOf(PostOptions)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        show: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleShow", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          show: !_this.state.show
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "askAndDo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var message = _ref2.message,
            errMessage = _ref2.errMessage,
            toDo = _ref2.toDo;

        _this.toggleShow();

        Object(actions["_88" /* setDialog */])({
          message: message,
          button1Act: function button1Act() {
            toDo().catch(function () {
              Object(actions["_88" /* setDialog */])({
                title: 'Error...',
                message: errMessage,
                button1Txt: 'OK',
                button2Txt: null
              });
            });
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "report", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            _id = _this$props._id,
            commentId = _this$props.commentId;
        var which = commentId ? 'comment' : 'post';

        _this.askAndDo({
          message: "Are you sure you want to report this ".concat(which, "?"),
          errMessage: "An error occurred reporting the ".concat(which),
          toDo: commentId ? function () {
            return Object(actions["_90" /* updateComment */])({
              _id: commentId,
              reported: true
            });
          } : function () {
            return Object(actions["_94" /* updatePost */])({
              _id: _id,
              reported: true
            });
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "unreport", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            _id = _this$props2._id,
            commentId = _this$props2.commentId;

        _this.askAndDo({
          message: 'Are you sure you want to dismiss this reporting?',
          errMessage: 'An error occurred dismissing the reporting',
          toDo: commentId ? function () {
            return Object(actions["_90" /* updateComment */])({
              _id: commentId,
              reported: false
            });
          } : function () {
            return Object(actions["_94" /* updatePost */])({
              _id: _id,
              reported: false
            });
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "archive", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props3 = _this.props,
            _id = _this$props3._id,
            commentId = _this$props3.commentId,
            users = _this$props3.users;
        var delWord = users[users.curUser].isAdmin ? 'archive' : 'delete';
        var altDelWord = delWord.substr(0, delWord.length - 1) + 'ing';
        var which = commentId ? 'comment' : 'post';

        _this.askAndDo({
          message: "Are you sure you want to ".concat(delWord, " this ").concat(which, "?"),
          errMessage: "An error occurred ".concat(altDelWord, " this ").concat(which),
          toDo: commentId ? function () {
            return Object(actions["_90" /* updateComment */])({
              _id: commentId,
              archived: true
            });
          } : function () {
            return Object(actions["_94" /* updatePost */])({
              _id: _id,
              archived: true
            });
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "edit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.toggleShow();

        var _this$props4 = _this.props,
            _id = _this$props4._id,
            commentId = _this$props4.commentId;

        if (commentId) {
          return Object(actions["_27" /* commentUpdated */])({
            post: _id,
            _id: commentId,
            editing: true
          });
        }

        Object(actions["_71" /* postUpdated */])({
          _id: _id,
          editing: true
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "delete", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props5 = _this.props,
            _id = _this$props5._id,
            commentId = _this$props5.commentId;
        var which = commentId ? 'comment' : 'post';

        _this.askAndDo({
          message: "Are you sure you want to delete this ".concat(which, ". This can not be undone."),
          errMessage: "An error occurred while deleting this ".concat(which),
          toDo: commentId ? function () {
            return Object(actions["_75" /* removeComment */])(commentId);
          } : function () {
            return Object(actions["_82" /* removePost */])(_id);
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "shouldHide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (!_this.mainEl || _this.mainEl.contains(e.target)) return;

        _this.setState({
          show: false
        });
      }
    }), _temp));
  }

  _createClass(PostOptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('click', this.shouldHide);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.shouldHide);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          reported = _props.reported,
          archived = _props.archived,
          createdBy = _props.createdBy,
          users = _props.users;
      var show = this.state.show;
      var isAdmin = users[users.curUser].isAdmin;
      var isAuthor = Boolean(createdBy === users.curUser);
      var reportText = 'Report',
          reportAct = this.report;

      if (reported) {
        reportAct = isAdmin ? this.unreport : null;
        reportText = isAdmin ? 'Dismiss report' : 'Reported';
      }

      return external__react__default.a.createElement("div", {
        className: Object(external__glamor_["css"])(PostOptions_style) + ' PostOptions',
        ref: function ref(el) {
          return _this2.mainEl = el;
        }
      }, external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: "ellipsis-v",
        style: {
          height: 20,
          width: 15
        },
        onClick: this.toggleShow
      }), external__react__default.a.createElement("div", {
        className: 'options' + (show ? ' active' : '')
      }, archived && reported || !archived && external__react__default.a.createElement("div", {
        onClick: reportAct,
        className: "opt"
      }, reportText), !archived && (isAuthor || isAdmin) ? external__react__default.a.createElement("div", {
        onClick: this.edit,
        className: "opt",
        id: show ? 'edit' : null
      }, "Edit") : null, !archived && (isAuthor || isAdmin) ? external__react__default.a.createElement("div", {
        className: "opt",
        onClick: this.archive,
        id: !isAdmin && show ? 'delete' : null
      }, isAdmin ? 'Archive' : 'Delete') : null, isAdmin ? external__react__default.a.createElement("div", {
        className: "opt",
        onClick: this.delete,
        id: isAdmin && show ? 'delete' : null
      }, "Delete") : null));
    }
  }]);

  return PostOptions;
}(external__react_["Component"]);

/* harmony default export */ var posts_PostOptions = (PostOptions_PostOptions);
// EXTERNAL MODULE: ./util/getDate.js
var getDate = __webpack_require__(37);

// CONCATENATED MODULE: ./comps/posts/PostMeta.js






var PostMeta_style = {
  width: '100%',
  display: 'flex',
  paddingBottom: 5,
  position: 'relative',
  '& .text': {
    fontSize: 15,
    marginLeft: 5,
    position: 'relative',
    wordWrap: 'break-word',
    width: 'calc(100% - 55px)',
    '& .name': {
      fontWeight: 700,
      paddingBottom: 1,
      width: 'calc(100% - 30px)',
      '& a': {
        textDecoration: 'none'
      }
    },
    '& .PostOptions': {
      top: 0,
      right: 0,
      padding: '8px 2px',
      position: 'absolute'
    }
  }
};

var PostMeta_PostMeta = function PostMeta(_ref) {
  var _id = _ref._id,
      commentId = _ref.commentId,
      users = _ref.users,
      createdBy = _ref.createdBy,
      createdAt = _ref.createdAt,
      reported = _ref.reported,
      archived = _ref.archived;

  var _ref2 = users[createdBy] || {},
      avatar = _ref2.avatar,
      firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      username = _ref2.username;

  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(PostMeta_style)
  }, external__react__default.a.createElement(Avatar["a" /* default */], {
    avatar: avatar,
    style: {
      height: 50,
      width: 50,
      borderRadius: 50
    }
  }), external__react__default.a.createElement("div", {
    className: "text"
  }, external__react__default.a.createElement("p", {
    className: "name"
  }, external__react__default.a.createElement(link__default.a, {
    href: '/user?id=' + createdBy
  }, external__react__default.a.createElement("a", null, firstName, " ", lastName, " - @", username))), external__react__default.a.createElement("p", null, Object(getDate["a" /* default */])(createdAt)), external__react__default.a.createElement(posts_PostOptions, {
    _id: _id,
    commentId: commentId,
    reported: reported,
    archived: archived,
    createdBy: createdBy,
    users: users
  })));
};

/* harmony default export */ var posts_PostMeta = (PostMeta_PostMeta);
// CONCATENATED MODULE: ./comps/posts/CommentItem.js





var CommentItem_style = {
  paddingTop: 5,
  width: '98%',
  margin: '0 0 0 2%',
  position: 'relative',
  background: '#ffffff',
  borderTop: "1px solid ".concat(theme["colors"].blackFg)
};

var CommentItem_CommentItem = function CommentItem(_ref) {
  var _id = _ref._id,
      text = _ref.text,
      users = _ref.users,
      editing = _ref.editing,
      archived = _ref.archived,
      reported = _ref.reported,
      commentId = _ref.commentId,
      createdAt = _ref.createdAt,
      createdBy = _ref.createdBy;
  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(CommentItem_style)
  }, external__react__default.a.createElement(posts_PostMeta, {
    _id: _id,
    commentId: commentId,
    users: users,
    createdAt: createdAt,
    createdBy: createdBy,
    reported: reported,
    archived: archived
  }), external__react__default.a.createElement(posts_PostText, {
    _id: _id,
    commentId: commentId,
    editing: editing,
    text: text
  }));
};

/* harmony default export */ var posts_CommentItem = (CommentItem_CommentItem);
// CONCATENATED MODULE: ./comps/posts/CommentBox.js
function CommentBox__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { CommentBox__defineProperty(target, key, source[key]); }); } return target; }

function CommentBox__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CommentBox_style = CommentBox__objectSpread({
  width: '100%'
}, theme["shadows"].box, {
  margin: '10px 0 0',
  borderRadius: 3
}, theme["flexRowCenter"], {
  background: '#ffffff',
  '& textarea': {
    height: 24,
    outline: 0,
    padding: '3px 8px',
    flexGrow: 1,
    fontSize: 16,
    lineHeight: 1,
    border: 'none',
    marginRight: 2
  },
  '& button': {
    margin: 3
  }
});

var CommentBox_submitReply = function submitReply(_id) {
  var el = document.querySelector('#reply' + _id);
  if (!el) return;
  var text = el.value.trim();
  if (!text.length) return;
  el.value = '';
  Object(actions["_32" /* createComment */])({
    postId: _id,
    text: text
  }).catch(function () {
    Object(actions["_88" /* setDialog */])({
      title: 'Error...',
      message: 'An error occurred while submitting your reply',
      button1Txt: 'OK',
      button2Txt: null
    });
  });
};

var CommentBox_CommentBox = function CommentBox(_ref) {
  var _id = _ref._id;
  return external__react__default.a.createElement("div", {
    className: Object(external__glamor_["css"])(CommentBox_style)
  }, external__react__default.a.createElement("textarea", {
    id: 'reply' + _id,
    maxLength: config["maxCmntText"],
    placeholder: "Reply to the post..."
  }), external__react__default.a.createElement("button", {
    onClick: function onClick() {
      return CommentBox_submitReply(_id);
    }
  }, "Submit"));
};

/* harmony default export */ var posts_CommentBox = (CommentBox_CommentBox);
// CONCATENATED MODULE: ./comps/posts/CommentsArea.js
function CommentsArea__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommentsArea__typeof = function _typeof(obj) { return typeof obj; }; } else { CommentsArea__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommentsArea__typeof(obj); }

function CommentsArea__extends() { CommentsArea__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CommentsArea__extends.apply(this, arguments); }

function CommentsArea__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentsArea__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommentsArea__createClass(Constructor, protoProps, staticProps) { if (protoProps) CommentsArea__defineProperties(Constructor.prototype, protoProps); if (staticProps) CommentsArea__defineProperties(Constructor, staticProps); return Constructor; }

function CommentsArea__possibleConstructorReturn(self, call) { if (call && (CommentsArea__typeof(call) === "object" || typeof call === "function")) { return call; } return CommentsArea__assertThisInitialized(self); }

function CommentsArea__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CommentsArea__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CommentsArea__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { CommentsArea__defineProperty(target, key, source[key]); }); } return target; }

function CommentsArea__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var CommentsArea_style = {
  '& .loadOlders': CommentsArea__objectSpread({
    marginBottom: 5,
    padding: '2px 0',
    fontWeight: 700
  }, theme["flexRowCenter"], {
    cursor: 'pointer',
    textAlign: 'right',
    userSelect: 'none'
  }),
  '& .error': {
    padding: '10px 0',
    textAlign: 'center'
  }
};

var CommentsArea_CommentsArea =
/*#__PURE__*/
function (_Component) {
  CommentsArea__inherits(CommentsArea, _Component);

  function CommentsArea() {
    var _ref;

    var _temp, _this;

    CommentsArea__classCallCheck(this, CommentsArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return CommentsArea__possibleConstructorReturn(_this, (_temp = _this = CommentsArea__possibleConstructorReturn(this, (_ref = CommentsArea.__proto__ || Object.getPrototypeOf(CommentsArea)).call.apply(_ref, [this].concat(args))), Object.defineProperty(CommentsArea__assertThisInitialized(_this), "loadMoreComments", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return Object(actions["_47" /* loadComments */])({
          postId: _this.props._id
        });
      }
    }), _temp));
  }

  CommentsArea__createClass(CommentsArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          _id = _props._id,
          commentIds = _props.commentIds,
          commentsError = _props.commentsError,
          commentsPending = _props.commentsPending,
          moreComments = _props.moreComments;
      if (!prevProps.commentIds.length) return;

      if (!commentIds.length && !commentsPending && !commentsError && moreComments) {
        Object(actions["_47" /* loadComments */])({
          initial: true,
          postId: _id
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          _id = _props2._id,
          users = _props2.users,
          canReply = _props2.canReply,
          comments = _props2.comments,
          commentIds = _props2.commentIds,
          moreComments = _props2.moreComments,
          commentsError = _props2.commentsError,
          commentsPending = _props2.commentsPending;
      return external__react__default.a.createElement("div", {
        className: Object(external__glamor_["css"])(CommentsArea_style),
        style: {
          marginTop: moreComments ? 0 : 10
        }
      }, moreComments ? external__react__default.a.createElement("div", {
        className: "loadOlders",
        onClick: commentsPending ? null : this.loadMoreComments
      }, external__react__default.a.createElement("p", {
        style: {
          marginLeft: 'auto'
        }
      }, "Load older comments"), commentsPending ? external__react__default.a.createElement(Spinner["a" /* default */], {
        size: 16,
        style: {
          margin: '0 5px'
        }
      }) : external__react__default.a.createElement(react_fontawesome__default.a, {
        icon: "chevron-up",
        style: {
          height: 16,
          margin: '0 0 -2px 5px'
        }
      })) : null, commentIds.map(function (commentId, i) {
        return external__react__default.a.createElement(posts_CommentItem, CommentsArea__extends({}, CommentsArea__objectSpread({
          _id: _id,
          users: users,
          commentId: commentId
        }, comments[commentId], {
          style: i === 0 ? {
            borderColor: 'transparent'
          } : null
        }), {
          key: commentId
        }));
      }), commentsError ? external__react__default.a.createElement("p", {
        className: "error"
      }, commentsError) : null, canReply && external__react__default.a.createElement(posts_CommentBox, {
        _id: _id
      }));
    }
  }]);

  return CommentsArea;
}(external__react_["Component"]);

/* harmony default export */ var posts_CommentsArea = (CommentsArea_CommentsArea);
// CONCATENATED MODULE: ./comps/posts/PostItem.js
function PostItem__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PostItem__defineProperty(target, key, source[key]); }); } return target; }

function PostItem__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }











var postStyle = {
  opacity: 0,
  width: '100%',
  textAlign: 'left',
  transform: 'scale(0)',
  margin: '0px auto 35px',
  maxWidth: theme["sizes"].maxBlockWidth,
  animation: "".concat(keyframes["f" /* growIn */], " 225ms ease forwards"),
  ':nth-child(1)': {
    marginTop: 0
  },
  '& .page': {
    minHeight: 16,
    fontWeight: 700,
    padding: '5px 0',
    '& a': {
      textDecoration: 'underline'
    }
  },
  // .page
  '& .box': {
    minHeight: 75,
    borderRadius: 4,
    background: '#ffffff',
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)'
  },
  // .box
  '& .totalComments': {
    width: '100%',
    padding: '0px 5px 5px',
    '& span': {
      fontWeight: 700,
      cursor: 'pointer'
    }
  }
};

var PostItem_PostItem = function PostItem(_ref) {
  var _id = _ref._id,
      text = _ref.text,
      file = _ref.file,
      page = _ref.page,
      users = _ref.users,
      pages = _ref.pages,
      style = _ref.style,
      editing = _ref.editing,
      reported = _ref.reported,
      archived = _ref.archived,
      createdAt = _ref.createdAt,
      createdBy = _ref.createdBy,
      className = _ref.className,
      commentIds = _ref.commentIds,
      totalComments = _ref.totalComments,
      commentStuff = _objectWithoutProperties(_ref, ["_id", "text", "file", "page", "users", "pages", "style", "editing", "reported", "archived", "createdAt", "createdBy", "className", "commentIds", "totalComments"]);

  return external__react__default.a.createElement("div", {
    className: className,
    style: style
  }, external__react__default.a.createElement("p", {
    className: "page"
  }, pages.curPage !== page ? external__react__default.a.createElement(link__default.a, {
    href: page === config["newsPageId"] ? '/news' : '/page?id=' + page
  }, external__react__default.a.createElement("a", null, "Posted to ", pages[page].name)) : pages.curPage === config["homePageId"] && 'Posted to Home'), external__react__default.a.createElement("div", {
    className: "box"
  }, external__react__default.a.createElement(posts_PostMeta, {
    users: users,
    _id: _id,
    createdBy: createdBy,
    createdAt: createdAt,
    reported: reported,
    archived: archived
  }), file && external__react__default.a.createElement(posts_PostFile, {
    file: file,
    _id: _id
  }), external__react__default.a.createElement(posts_PostText, {
    _id: _id,
    editing: editing,
    text: text
  }), external__react__default.a.createElement("div", {
    className: "totalComments"
  }, external__react__default.a.createElement("p", null, totalComments, " comment", totalComments !== 1 ? 's' : '', commentIds && commentIds.length > actions["_59" /* numInitialComments */] && [' - ', external__react__default.a.createElement("span", {
    key: "collapse",
    onClick: function onClick() {
      return Object(actions["_23" /* collapseComments */])(_id);
    }
  }, "Collapse comments")]))), external__react__default.a.createElement(posts_CommentsArea, PostItem__objectSpread({
    _id: _id,
    users: users,
    canReply: !archived,
    totalComments: totalComments,
    commentIds: commentIds
  }, commentStuff)));
};

/* harmony default export */ var posts_PostItem = (PostItem_PostItem);
// CONCATENATED MODULE: ./comps/posts/PostsArea.js
function PostsArea__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostsArea__typeof = function _typeof(obj) { return typeof obj; }; } else { PostsArea__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostsArea__typeof(obj); }

function PostsArea__extends() { PostsArea__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PostsArea__extends.apply(this, arguments); }

function PostsArea__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PostsArea__defineProperty(target, key, source[key]); }); } return target; }

function PostsArea__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PostsArea__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostsArea__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostsArea__createClass(Constructor, protoProps, staticProps) { if (protoProps) PostsArea__defineProperties(Constructor.prototype, protoProps); if (staticProps) PostsArea__defineProperties(Constructor, staticProps); return Constructor; }

function PostsArea__possibleConstructorReturn(self, call) { if (call && (PostsArea__typeof(call) === "object" || typeof call === "function")) { return call; } return PostsArea__assertThisInitialized(self); }

function PostsArea__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function PostsArea__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var PostsArea_style = {
  width: '100%',
  textAlign: 'center',
  padding: 10,
  paddingBottom: 25,
  '& .moreBtn': {
    margin: '10px auto'
  }
};

var PostsArea_PostsArea =
/*#__PURE__*/
function (_Component) {
  PostsArea__inherits(PostsArea, _Component);

  function PostsArea() {
    var _this;

    PostsArea__classCallCheck(this, PostsArea);

    _this = PostsArea__possibleConstructorReturn(this, (PostsArea.__proto__ || Object.getPrototypeOf(PostsArea)).call(this));
    Object.defineProperty(PostsArea__assertThisInitialized(_this), "loadMorePosts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return Object(actions["_51" /* loadPosts */])({});
      }
    });
    _this.state = {
      numAdded: 0,
      numPrev: 0
    };
    _this.className = Object(external__glamor_["css"])(PostsArea_style);
    _this.postClass = Object(external__glamor_["css"])(postStyle);
    return _this;
  }

  PostsArea__createClass(PostsArea, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var posts = this.props.posts;
      if (!prevProps.posts.ids.length) return;

      if (!posts.ids.length && !posts.pending && !posts.error && posts.hasMore) {
        this.loadMorePosts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          page = _props.page,
          pages = _props.pages,
          posts = _props.posts,
          users = _props.users;
      var numAdded = this.state.numAdded;
      var idxOffset = posts.ids.length - numAdded; // prevent rendering posts during page change
      // because this can cause posts to mount on previous page
      // and then be remounted when the page actually changes

      if (page !== pages.curPage) return null;
      return external__react__default.a.createElement("div", {
        className: this.className
      }, external__react__default.a.createElement(posts_ExpandedView, {
        posts: posts
      }), posts.ids.map(function (_id, idx) {
        if (numAdded) {
          idx = idx > idxOffset ? idx - idxOffset : 0;
        }

        return external__react__default.a.createElement(posts_PostItem, PostsArea__extends({}, PostsArea__objectSpread({}, posts[_id], {
          _id: _id,
          pages: pages,
          users: users,
          className: _this2.postClass,
          style: {
            animationDelay: idx * 50 + 'ms'
          }
        }), {
          key: _id
        }));
      }), !posts.ids.length && !posts.pending && !posts.error && external__react__default.a.createElement("p", null, "There are no posts here yet"), posts.error && external__react__default.a.createElement("p", {
        style: {
          marginTop: 20
        }
      }, posts.error), posts.pending && external__react__default.a.createElement(Spinner["a" /* default */], {
        style: {
          marginTop: 20
        },
        size: posts.ids.length ? 24 : 36
      }), posts.hasMore && !posts.pending && external__react__default.a.createElement("button", {
        className: "moreBtn",
        onClick: this.loadMorePosts
      }, "Load more"));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var numPrev = state.numPrev;
      var numCur = props.posts.ids.length;

      if (numCur !== numPrev) {
        return {
          numPrev: numCur,
          numAdded: numCur > numPrev ? numCur - numPrev : 0
        };
      }

      return null;
    }
  }]);

  return PostsArea;
}(external__react_["Component"]);

/* harmony default export */ var posts_PostsArea = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(function (_ref) {
  var pages = _ref.pages,
      posts = _ref.posts,
      users = _ref.users;
  return {
    pages: pages,
    posts: posts,
    users: users
  };
})(PostsArea_PostsArea));

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AdminRestrict =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminRestrict, _Component);

  function AdminRestrict() {
    _classCallCheck(this, AdminRestrict);

    return _possibleConstructorReturn(this, (AdminRestrict.__proto__ || Object.getPrototypeOf(AdminRestrict)).apply(this, arguments));
  }

  _createClass(AdminRestrict, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          users = _props.users,
          children = _props.children;

      var _ref = users[users.curUser] || {},
          isAdmin = _ref.isAdmin;

      if (isAdmin) return children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "errMsg"
      }, "You do not have valid permission to access this page");
    }
  }]);

  return AdminRestrict;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_ref2) {
  var users = _ref2.users;
  return {
    users: users
  };
})(AdminRestrict));

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comps_Layout__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comps_posts_PostsArea__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comps_AdminRestrict__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_withLoginReload__ = __webpack_require__(34);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Archived =
/*#__PURE__*/
function (_Component) {
  _inherits(Archived, _Component);

  function Archived() {
    _classCallCheck(this, Archived);

    return _possibleConstructorReturn(this, (Archived.__proto__ || Object.getPrototypeOf(Archived)).apply(this, arguments));
  }

  _createClass(Archived, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__comps_Layout__["a" /* default */], {
        restrict: true
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__comps_AdminRestrict__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
        style: {
          padding: 10
        }
      }, "Archived items"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__comps_posts_PostsArea__["a" /* default */], {
        page: __WEBPACK_IMPORTED_MODULE_2__util_config__["homePageId"]
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions__["_89" /* setPage */])(__WEBPACK_IMPORTED_MODULE_2__util_config__["homePageId"]);

              case 2:
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__redux_actions__["_51" /* loadPosts */])({
                  initial: true,
                  archived: true
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Archived;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__util_withLoginReload__["a" /* default */])(Archived));

/***/ })
/******/ ]);