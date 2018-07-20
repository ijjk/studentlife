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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread({}, typeof window !== 'undefined' ? window.publicConfig : app.get('publicConfig'));

/***/ }),
/* 6 */,
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
/* 10 */,
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
/* 17 */,
/* 18 */,
/* 19 */,
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
/* 22 */,
/* 23 */,
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(12);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(3);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(51);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: ./redux/store.js + 11 modules
var store = __webpack_require__(0);

// CONCATENATED MODULE: ./util/withRedux.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var isServer = typeof window === 'undefined';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    global.reduxStore = Object(store["b" /* initializeStore */])(initialState);
    return global.reduxStore;
  } // Create store if unavailable on the client and set it on the window object


  if (!window.reduxStore) {
    window.reduxStore = Object(store["b" /* initializeStore */])(initialState);
  }

  return window.reduxStore;
}

/* harmony default export */ var withRedux = (function (App) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(AppWithRedux, _Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
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

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, (AppWithRedux.__proto__ || Object.getPrototypeOf(AppWithRedux)).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return external__react__default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(external__react_["Component"])
  );
});
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(9);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./redux/actions/index.js + 41 modules
var actions = __webpack_require__(2);

// EXTERNAL MODULE: external "@fortawesome/fontawesome"
var fontawesome_ = __webpack_require__(44);
var fontawesome__default = /*#__PURE__*/__webpack_require__.n(fontawesome_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUser"
var faUser_ = __webpack_require__(52);
var faUser__default = /*#__PURE__*/__webpack_require__.n(faUser_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faIdCard"
var faIdCard_ = __webpack_require__(53);
var faIdCard__default = /*#__PURE__*/__webpack_require__.n(faIdCard_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faEnvelope"
var faEnvelope_ = __webpack_require__(54);
var faEnvelope__default = /*#__PURE__*/__webpack_require__.n(faEnvelope_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faChevronLeft"
var faChevronLeft_ = __webpack_require__(55);
var faChevronLeft__default = /*#__PURE__*/__webpack_require__.n(faChevronLeft_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faChevronRight"
var faChevronRight_ = __webpack_require__(56);
var faChevronRight__default = /*#__PURE__*/__webpack_require__.n(faChevronRight_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faChevronUp"
var faChevronUp_ = __webpack_require__(57);
var faChevronUp__default = /*#__PURE__*/__webpack_require__.n(faChevronUp_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faGlobe"
var faGlobe_ = __webpack_require__(58);
var faGlobe__default = /*#__PURE__*/__webpack_require__.n(faGlobe_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUserCircle"
var faUserCircle_ = __webpack_require__(59);
var faUserCircle__default = /*#__PURE__*/__webpack_require__.n(faUserCircle_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faSearch"
var faSearch_ = __webpack_require__(60);
var faSearch__default = /*#__PURE__*/__webpack_require__.n(faSearch_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faCaretDown"
var faCaretDown_ = __webpack_require__(61);
var faCaretDown__default = /*#__PURE__*/__webpack_require__.n(faCaretDown_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faLock"
var faLock_ = __webpack_require__(62);
var faLock__default = /*#__PURE__*/__webpack_require__.n(faLock_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faEye"
var faEye_ = __webpack_require__(63);
var faEye__default = /*#__PURE__*/__webpack_require__.n(faEye_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faEyeSlash"
var faEyeSlash_ = __webpack_require__(64);
var faEyeSlash__default = /*#__PURE__*/__webpack_require__.n(faEyeSlash_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFile"
var faFile_ = __webpack_require__(65);
var faFile__default = /*#__PURE__*/__webpack_require__.n(faFile_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faHome"
var faHome_ = __webpack_require__(66);
var faHome__default = /*#__PURE__*/__webpack_require__.n(faHome_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faBullhorn"
var faBullhorn_ = __webpack_require__(67);
var faBullhorn__default = /*#__PURE__*/__webpack_require__.n(faBullhorn_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faCalendarAlt"
var faCalendarAlt_ = __webpack_require__(68);
var faCalendarAlt__default = /*#__PURE__*/__webpack_require__.n(faCalendarAlt_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFileAlt"
var faFileAlt_ = __webpack_require__(69);
var faFileAlt__default = /*#__PURE__*/__webpack_require__.n(faFileAlt_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faExternalLinkAlt"
var faExternalLinkAlt_ = __webpack_require__(70);
var faExternalLinkAlt__default = /*#__PURE__*/__webpack_require__.n(faExternalLinkAlt_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faHandshake"
var faHandshake_ = __webpack_require__(71);
var faHandshake__default = /*#__PURE__*/__webpack_require__.n(faHandshake_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faCog"
var faCog_ = __webpack_require__(72);
var faCog__default = /*#__PURE__*/__webpack_require__.n(faCog_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faTrash"
var faTrash_ = __webpack_require__(73);
var faTrash__default = /*#__PURE__*/__webpack_require__.n(faTrash_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faEllipsisV"
var faEllipsisV_ = __webpack_require__(74);
var faEllipsisV__default = /*#__PURE__*/__webpack_require__.n(faEllipsisV_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFilePdf"
var faFilePdf_ = __webpack_require__(75);
var faFilePdf__default = /*#__PURE__*/__webpack_require__.n(faFilePdf_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFileWord"
var faFileWord_ = __webpack_require__(76);
var faFileWord__default = /*#__PURE__*/__webpack_require__.n(faFileWord_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFileExcel"
var faFileExcel_ = __webpack_require__(77);
var faFileExcel__default = /*#__PURE__*/__webpack_require__.n(faFileExcel_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faFilePowerpoint"
var faFilePowerpoint_ = __webpack_require__(78);
var faFilePowerpoint__default = /*#__PURE__*/__webpack_require__.n(faFilePowerpoint_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faDownload"
var faDownload_ = __webpack_require__(79);
var faDownload__default = /*#__PURE__*/__webpack_require__.n(faDownload_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUserPlus"
var faUserPlus_ = __webpack_require__(80);
var faUserPlus__default = /*#__PURE__*/__webpack_require__.n(faUserPlus_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faExclamationCircle"
var faExclamationCircle_ = __webpack_require__(81);
var faExclamationCircle__default = /*#__PURE__*/__webpack_require__.n(faExclamationCircle_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faList"
var faList_ = __webpack_require__(82);
var faList__default = /*#__PURE__*/__webpack_require__.n(faList_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUsers"
var faUsers_ = __webpack_require__(83);
var faUsers__default = /*#__PURE__*/__webpack_require__.n(faUsers_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faUndo"
var faUndo_ = __webpack_require__(84);
var faUndo__default = /*#__PURE__*/__webpack_require__.n(faUndo_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-solid/faPencilAlt"
var faPencilAlt_ = __webpack_require__(85);
var faPencilAlt__default = /*#__PURE__*/__webpack_require__.n(faPencilAlt_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faFacebookSquare"
var faFacebookSquare_ = __webpack_require__(86);
var faFacebookSquare__default = /*#__PURE__*/__webpack_require__.n(faFacebookSquare_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faTwitterSquare"
var faTwitterSquare_ = __webpack_require__(87);
var faTwitterSquare__default = /*#__PURE__*/__webpack_require__.n(faTwitterSquare_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faPinterestSquare"
var faPinterestSquare_ = __webpack_require__(88);
var faPinterestSquare__default = /*#__PURE__*/__webpack_require__.n(faPinterestSquare_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faInstagram"
var faInstagram_ = __webpack_require__(89);
var faInstagram__default = /*#__PURE__*/__webpack_require__.n(faInstagram_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-free-brands/faYoutube"
var faYoutube_ = __webpack_require__(90);
var faYoutube__default = /*#__PURE__*/__webpack_require__.n(faYoutube_);

// CONCATENATED MODULE: ./util/icons.js
/*
  This file is dynamically generated. Edit ../genIcons.js instead
*/

fontawesome__default.a.config.autoAddCss = false;







































fontawesome__default.a.library.add(faUser__default.a, faIdCard__default.a, faEnvelope__default.a, faChevronLeft__default.a, faChevronRight__default.a, faChevronUp__default.a, faGlobe__default.a, faUserCircle__default.a, faSearch__default.a, faCaretDown__default.a, faLock__default.a, faEye__default.a, faEyeSlash__default.a, faFile__default.a, faHome__default.a, faBullhorn__default.a, faCalendarAlt__default.a, faFileAlt__default.a, faExternalLinkAlt__default.a, faHandshake__default.a, faCog__default.a, faTrash__default.a, faEllipsisV__default.a, faFilePdf__default.a, faFileWord__default.a, faFileExcel__default.a, faFilePowerpoint__default.a, faDownload__default.a, faUserPlus__default.a, faExclamationCircle__default.a, faList__default.a, faUsers__default.a, faUndo__default.a, faPencilAlt__default.a, faFacebookSquare__default.a, faTwitterSquare__default.a, faPinterestSquare__default.a, faInstagram__default.a, faYoutube__default.a);
// CONCATENATED MODULE: ./pages/_app.js


function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app__inherits(MyApp, _App);

  function MyApp() {
    _app__classCallCheck(this, MyApp);

    return _app__possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _app__createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          reduxStore = _props.reduxStore;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: reduxStore
      }, external__react__default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, _app$get, doSetup;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!(typeof window === 'undefined')) {
                  _context.next = 12;
                  break;
                }

                if (!ctx.req.userId) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return Object(actions["_55" /* login */])({
                  userId: ctx.req.userId
                });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _app$get = app.get('publicConfig'), doSetup = _app$get.doSetup;

                if (!doSetup) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return Object(actions["_55" /* login */])({
                  doSetup: doSetup
                });

              case 12:
                if (!Component.getInitialProps) {
                  _context.next = 16;
                  break;
                }

                _context.next = 15;
                return Component.getInitialProps(ctx);

              case 15:
                pageProps = _context.sent;

              case 16:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 17:
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

  return MyApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withRedux(_app_MyApp));

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUser");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faIdCard");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faEnvelope");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faChevronLeft");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faChevronRight");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faChevronUp");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faGlobe");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUserCircle");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faSearch");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faCaretDown");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faLock");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faEye");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faEyeSlash");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFile");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faHome");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faBullhorn");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faCalendarAlt");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFileAlt");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faExternalLinkAlt");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faHandshake");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faCog");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faTrash");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faEllipsisV");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFilePdf");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFileWord");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFileExcel");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faFilePowerpoint");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faDownload");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUserPlus");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faExclamationCircle");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faList");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUsers");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faUndo");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faPencilAlt");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faFacebookSquare");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faTwitterSquare");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faPinterestSquare");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faInstagram");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-brands/faYoutube");

/***/ })
/******/ ]);