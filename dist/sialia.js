(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("riot"), require("lodash"), require("moment"), require("jquery"), require("dragula"), require("bluebutton"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["riot", "lodash", "moment", "jquery", "dragula", "bluebutton", "bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["sialia"] = factory(require("riot"), require("lodash"), require("moment"), require("jquery"), require("dragula"), require("bluebutton"), require("bootstrap"));
	else
		root["sialia"] = factory(root["riot"], root["lodash"], root["moment"], root["jquery"], root["dragula"], root["bluebutton"], root["bootstrap"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__115__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(42)('wks');
var uid = __webpack_require__(28);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(40);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(44));
__export(__webpack_require__(108));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(41)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var has = __webpack_require__(17);
var SRC = __webpack_require__(28)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(5).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash = __webpack_require__(1);
var $ = __webpack_require__(45);
function getElementIndex(node) {
    var children = lodash.filter([].slice.call(node.parentNode.childNodes), { nodeType: 1 });
    return Array.prototype.indexOf.call(children, node);
}
exports.getElementIndex = getElementIndex;
function bootstrapize(html) {
    var $html = $('<div />');
    $html.html(html);
    var $all = $html.find('*').removeAttr('width border xmlns');
    $all.filter('table')
        .addClass('table table-bordered table-striped');
    return $html.html();
}
exports.bootstrapize = bootstrapize;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(5);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(11);
var ctx = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(80);
var toPrimitive = __webpack_require__(79);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(1);
function updateSortOrder(sections) {
    _.each(sections, function (v, k) {
        v.sort = k;
    });
    return sections;
}
exports.updateSortOrder = updateSortOrder;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(18).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(28);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(72);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(21);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var invoke = __webpack_require__(57);
var html = __webpack_require__(35);
var cel = __webpack_require__(27);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(19)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(73);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(11);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(8);
var $iterCreate = __webpack_require__(76);
var setToStringTag = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(29) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(111));
__export(__webpack_require__(20));
__export(__webpack_require__(110));
__export(__webpack_require__(109));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(43);
var _ = __webpack_require__(1);
var PreferencesService = /** @class */ (function () {
    function PreferencesService() {
    }
    PreferencesService.prototype.save = function (opts) {
        var enabled = _.filter(opts.sections, function (item) {
            return item.enabled;
        });
        var sortOrder = _.map(opts.sections, function (item) {
            return item.key;
        });
        var pref = this.getPreferences(opts.pref.type);
        pref.enabledSectionKeys = _.map(enabled, function (item) {
            return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;
        var storageId = 'doc_' + opts.pref.type.templateId;
        localStorage.setItem(storageId, JSON.stringify(pref));
    };
    PreferencesService.prototype.getPreferences = function (docType) {
        var id = docType.templateId, storageId = 'doc_' + id, prefString = localStorage.getItem(storageId), pref = JSON.parse(prefString), isSet = pref !== null;
        if (!isSet) {
            pref = {
                id: id,
                isSet: isSet,
                type: docType,
                enabledSectionKeys: null,
                sortedSectionKeys: null
            };
        }
        return new models_1.Preferences(pref);
    };
    return PreferencesService;
}());
exports.PreferencesService = PreferencesService;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(1);
_.mixin({
    move: function (array, fromIndex, toIndex) {
        array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
        return array;
    }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = {
    'aa': 'Afar',
    'aar': 'Afar',
    'ab': 'Abkhazian',
    'abk': 'Abkhazian',
    'af': 'Afrikaans',
    'afr': 'Afrikaans',
    'am': 'Amharic',
    'amh': 'Amharic',
    'ar': 'Arabic',
    'ara': 'Arabic',
    'as': 'Assamese',
    'asm': 'Assamese',
    'ay': 'Aymara',
    'aym': 'Aymara',
    'az': 'Azerbaijani',
    'aze': 'Azerbaijani',
    'ba': 'Bashkir',
    'bak': 'Bashkir',
    'be': 'Byelorussian (Belarusian)',
    'bel': 'Byelorussian (Belarusian)',
    'bg': 'Bulgarian',
    'bul': 'Bulgarian',
    'bh': 'Bihari',
    'bih': 'Bihari',
    'bi': 'Bislama',
    'bis': 'Bislama',
    'bn': 'Bengali (Bangla)',
    'ben': 'Bengali (Bangla)',
    'bo': 'Tibetan',
    'bod': 'Tibetan',
    'br': 'Breton',
    'bre': 'Breton',
    'ca': 'Catalan',
    'cat': 'Catalan',
    'co': 'Corsican',
    'cos': 'Corsican',
    'cs': 'Czech',
    'ces': 'Czech',
    'cy': 'Welsh',
    'cym': 'Welsh',
    'da': 'Danish',
    'dan': 'Danish',
    'de': 'German',
    'deu': 'German',
    'dz': 'Bhutani',
    'dzo': 'Bhutani',
    'el': 'Greek',
    'ell': 'Greek',
    'en': 'English',
    'eng': 'English',
    'eo': 'Esperanto',
    'epo': 'Esperanto',
    'es': 'Spanish',
    'spa': 'Spanish',
    'et': 'Estonian',
    'est': 'Estonian',
    'eu': 'Basque',
    'euq': 'Basque',
    'fa': 'Farsi',
    'fas': 'Farsi',
    'fi': 'Finnish',
    'fin': 'Finnish',
    'fj': 'Fijian',
    'fij': 'Fijian',
    'fo': 'Faeroese',
    'fr': 'French',
    'fra': 'French',
    'fy': 'Frisian',
    'fry': 'Frisian',
    'ga': 'Irish',
    'gle': 'Irish',
    'gd': 'Gaelic (Scottish)',
    'gla': 'Gaelic (Scottish)',
    'gl': 'Galician',
    'glg': 'Galician',
    'gn': 'Guarani',
    'grn': 'Guarani',
    'gu': 'Gujarati',
    'guj': 'Gujarati',
    // marker - need iso 639-2 for remaining langages
    'gv': 'Gaelic (Manx)',
    'ha': 'Hausa',
    'he': 'Hebrew',
    'hi': 'Hindi',
    'hr': 'Croatian',
    'hu': 'Hungarian',
    'hy': 'Armenian',
    'ia': 'Interlingua',
    'id': 'Indonesian',
    'ie': 'Interlingue',
    'ik': 'Inupiak',
    'is': 'Icelandic',
    'it': 'Italian',
    'iu': 'Inuktitut',
    'ja': 'Japanese',
    // 'ja': 'Javanese',
    'ka': 'Georgian',
    'kk': 'Kazakh',
    'kl': 'Greenlandic',
    'km': 'Cambodian',
    'kn': 'Kannada',
    'ko': 'Korean',
    'ks': 'Kashmiri',
    'ku': 'Kurdish',
    'ky': 'Kirghiz',
    'la': 'Latin',
    'li': 'Limburgish ( Limburger)',
    'ln': 'Lingala',
    'lo': 'Laothian',
    'lt': 'Lithuanian',
    'lv': 'Latvian (Lettish)',
    'mg': 'Malagasy',
    'mi': 'Maori',
    'mk': 'Macedonian',
    'ml': 'Malayalam',
    'mn': 'Mongolian',
    'mo': 'Moldavian',
    'mr': 'Marathi',
    'ms': 'Malay',
    'mt': 'Maltese',
    'my': 'Burmese',
    'na': 'Nauru',
    'ne': 'Nepali',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'oc': 'Occitan',
    'om': 'Oromo (Afan, Galla)',
    'or': 'Oriya',
    'pa': 'Punjabi',
    'pl': 'Polish',
    'ps': 'Pashto (Pushto)',
    'pt': 'Portuguese',
    'qu': 'Quechua',
    'rm': 'Rhaeto-Romance',
    'rn': 'Kirundi (Rundi)',
    'ro': 'Romanian',
    'ru': 'Russian',
    'rw': 'Kinyarwanda (Ruanda)',
    'sa': 'Sanskrit',
    'sd': 'Sindhi',
    'sg': 'Sangro',
    'sh': 'Serbo-Croatian',
    'si': 'Sinhalese',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'sm': 'Samoan',
    'sn': 'Shona',
    'so': 'Somali',
    'sq': 'Albanian',
    'sr': 'Serbian',
    'ss': 'Siswati',
    'st': 'Sesotho',
    'su': 'Sundanese',
    'sv': 'Swedish',
    'sw': 'Swahili (Kiswahili)',
    'ta': 'Tamil',
    'te': 'Telugu',
    'tg': 'Tajik',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'tk': 'Turkmen',
    'tl': 'Tagalog',
    'tn': 'Setswana',
    'to': 'Tonga',
    'tr': 'Turkish',
    'ts': 'Tsonga',
    'tt': 'Tatar',
    'tw': 'Twi',
    'ug': 'Uighur',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'vo': 'Volapük',
    'wo': 'Wolof',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    // 'zh': 'Chinese (Simplified)',
    // 'zh': 'Chinese (Traditional)',
    'zh': 'Chinese',
    'zu': 'Zulu',
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var riot_1 = __webpack_require__(0);
var models_1 = __webpack_require__(43);
var services_1 = __webpack_require__(7);
var Sialia = /** @class */ (function () {
    function Sialia(config) {
        this.documentService = new services_1.DocumentsService();
        this.instance = riot_1.default.mount('sialia')[0];
        if (config)
            this.configure(config);
    }
    Sialia.prototype.configure = function (config) {
        // backwards compatibility
        this.documents = (config.docs || []).map(function (x) { return ({
            name: x['Name'] || x.name,
            url: x['Url'] || x.name
        }); });
        this.documentService.setHeaders(__assign({}, (config.headers || {})));
        if (this.documents[0]) {
            this.open(this.documents[0]);
        }
    };
    Sialia.prototype.open = function (documentOrString) {
        var _this = this;
        var document = documentOrString;
        if (!models_1.isDocument(documentOrString)) {
            document = { url: documentOrString };
        }
        if (document) {
            return this.documentService.open(document).then(function (options) {
                options.documents = _this.documents || [document];
                _this.instance.opts = options;
                _this.instance.update();
            });
        }
        this.close();
        return Promise.resolve();
    };
    Sialia.prototype.close = function () {
        this.instance.opts = {};
        this.instance.update();
    };
    return Sialia;
}());
exports.Sialia = Sialia;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(21);
var perform = __webpack_require__(32);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(16);
var core = __webpack_require__(5);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(34);
var promiseResolve = __webpack_require__(31);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(33).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(19)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(30);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(8);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(8);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var call = __webpack_require__(60);
var isArrayIter = __webpack_require__(59);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(37);
var getIterFn = __webpack_require__(58);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var global = __webpack_require__(2);
var ctx = __webpack_require__(15);
var classof = __webpack_require__(30);
var $export = __webpack_require__(16);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(62);
var forOf = __webpack_require__(61);
var speciesConstructor = __webpack_require__(34);
var task = __webpack_require__(33).set;
var microtask = __webpack_require__(56)();
var newPromiseCapabilityModule = __webpack_require__(21);
var perform = __webpack_require__(32);
var userAgent = __webpack_require__(55);
var promiseResolve = __webpack_require__(31);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(54)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(53)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(52)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(64);
var Iterators = __webpack_require__(8);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(66);
var getKeys = __webpack_require__(38);
var redefine = __webpack_require__(11);
var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(8);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(68);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(70);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(38);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(74);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(35).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(75);
var descriptor = __webpack_require__(40);
var setToStringTag = __webpack_require__(22);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(77)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(41)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(30);
var test = {};
test[__webpack_require__(3)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(78);
__webpack_require__(67);
__webpack_require__(63);
__webpack_require__(51);
__webpack_require__(50);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('vitals', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('smoking-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('results', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('procedures', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('problems', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(0)
    

riot.tag2('medications', '<panel section="{opts.section}" data="{opts.data}"> <div each="{opts.data.entries}"> <div class="row"> <div class="col-md-12"> <div class="header-row"> {text} <span class="header-date pull-right"> <span class="header-small">{date_range.start_display} - {date_range.end_display} </span> </div> </div> </div> <div class="row"> <div class="col-md-12"> </div> </div> <div class="row"> <div class="col-md-4"> <table class="table table-borderless"> <tbody> <tr> <th> <span class="header-small">Admin</span> </th> <td> <span>{administration.name} [{administration.code}]</span> </td> </tr> <tr> <th> <span class="header-small">Schedule</span> </th> <td> <span>{schedule.type} {schedule.period_value}{schedule.period_unit}</span> </td> </tr> <tr> <th> <span class="header-small">Dose</span> </th> <td> <span>{dose_quantity.value} {dose_quantity.unit}</span> </td> </tr> <tr> <th scope="row"> <span class="header-small">Rate</span> </th> <td> <span>{rate_quantity.value} {rate_quantity.unit}</span> </td> </tr> </tbody> </table> </div> <div class="col-md-4"> <table class="table table-borderless"> <tbody> <tr> <th> <span class="header-small">Route</span> </th> <td> <span>{route.name}</span> </td> </tr> <tr> <th> <span class="header-small">Vehicle</span> </th> <td> <span>{vehicle.name} [{vehicle.code_system_name} {vehicle.code}]</span> </td> </tr> <tr> <th> <span class="header-small">Prescriber</span> </th> <td> <span>{prescriber.organization}</span> </td> </tr> <tr> </tr> </tbody> </table> </div> <div class="col-md-4"> <span class="header-small"><b>Reason</b></span> <p class="reasons">{reason.name}</p> </div> </div> </div> </panel>', '', '', function(opts) {

        this.on('update', function() {
            _.each(opts.data.entries, function(e) {
                e.date_range.start_display =  moment__WEBPACK_IMPORTED_MODULE_0___default()(e.date_range.start).format('MMM D, YYYY');
                e.date_range.end_display =  moment__WEBPACK_IMPORTED_MODULE_0___default()(e.date_range.end).format('MMM D, YYYY');
            });
        })

});

    
  

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('instructions', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunizations', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});
    
  

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunization-declines', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('functional-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('encounters', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('chief-complaint', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('care-plan', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('allergies', '<panel section="{opts.section}" data="{opts.data}"> <div class="row" if="{opts.data.entries.length}"> <div each="{opts.data.entries}" class="col-sm-4"> <div class="alert alert-mild clearfix " role="alert"> <h4>{allergen.name}</h4> <div class="pull-left">{reaction.name}</div> <div class="pull-right">{severity}</div> </div> </div> </div> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _utilities_lang__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utilities_lang__WEBPACK_IMPORTED_MODULE_3__);

    var riot = __webpack_require__(0)
    




riot.tag2('demographics', '<div class="panel panel-default" id="demographics"> <div class="panel-heading"> <h2><name name="{opts.demographics.name}"></name></h2> <a href="#" class="toggle-body" onclick="{toggle}"> <i class="fa fa-chevron-down {fa-rotate-180: visible}" title="Show/hide"></i> </a> <ul class="fa-ul"> <li class="dob"> <i class="fa fa-li fa-birthday-cake" title="DOB"></i> <p>{formatDate(opts.demographics.dob)}</p> </li> <li class="guardian" if="{opts.demographics.guardian.name.family}"> <i class="fa fa-li fa-child" title="Guardian"></i> <name name="{opts.demographics.guardian.name}"></name> <span class="text-muted">(guardian)</span> </li> </ul> </div> <div class="panel-body" show="{visible}"> <ul class="fa-ul"> <li class="narrative"> <i class="fa fa-li" class="{\'fa-female\': opts.demographics.gender === \'female\', \'fa-male\': opts.demographics.gender === \'male\'}" title="Demographics"></i> <p> <strong>{opts.demographics.name.given[0]}</strong> is a <strong>{opts.demographics.marital_status} {opts.demographics.race} {opts.demographics.gender}</strong> whose religion is <strong>{opts.demographics.religion || \'unspecified\'}</strong> and speaks <strong>{formatLanguage(opts.demographics.language)}</strong>. </p> </li> <li if="{addressNotEmpty(opts.demographics.address)}"> <i class="fa fa-li fa-map-marker" title="Address"></i> <address class="address"> <span if="{opts.demographics.address.street[0]}">{opts.demographics.address.street[0]}<br><span> <span if="{opts.demographics.address.city}">{opts.demographics.address.city},</span> {opts.demographics.address.state} {opts.demographics.address.zip} </address> </li> <li if="{opts.demographics.phone}"> <i class="fa fa-li fa-phone" title="Phone"></i> <address class="phone"> {formatPhone(opts.demographics.phone)}</address> </li> <li if="{opts.demographics.provider.organization}"> <i class="fa fa-li fa-building" title="Provider"></i> <p>{opts.demographics.provider.organization}</p> </li> </ul> </div> </div>', '', '', function(opts) {
    this.visible = true;

    this.toggle = function(e) {
      e.preventDefault();
      this.visible = !this.visible;
    }

    this.addressNotEmpty = function(address) {
      return opts.demographics.address.street[0]
        || opts.demographics.address.city
        || opts.demographics.address.state
        || opts.demographics.address.zip;
    };

    this.formatDate = function(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MMM D, YYYY');
    };

    this.formatPhone = function(phone) {

      var p = '';
      // which phone?
      if (phone.work) {
        p = phone.work
      }
      if (phone.home) {
        p = phone.home;
      }
      if (phone.cell) {
        p = phone.cell;
      }

      var clean = "";
      //_.(p).forEach(function(value) {
        //clean = clean + value;
      //});
      for (var i = 0, len = p.length; i < len; i++) {
        if (!isNaN(p[i])) {
          clean = clean + p[i];
        }
      }

      if (clean.length > 10) {
        if (clean[0] == '1') {
          clean = clean.slice(1);
        }
      }

      var pretty = '';
      if (clean.length == 10) {
        var c = clean;
        pretty = '(' + c[0] + c[1] + c[2] + ') ' + c[3] + c[4] + c[5] + '-' + c[6] + c[7] + c[8] + c[9];
      }
      return pretty;
    };

    this.formatLanguage = function(languageCode) {
      return languageCode && _utilities_lang__WEBPACK_IMPORTED_MODULE_3__["languages"][languageCode.toLowerCase()] || 'an unknown language';
    };

    // religion: http://www.hl7.org/documentcenter/public_temp_44EED454-1C23-BA17-0CCDE88B4D98F6FD/standards/vocabulary/vocabulary_tables/infrastructure/vocabulary/ReligiousAffiliation.html
});

    
  

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('generic', '<panel section="{opts.section}" data="{opts.data}"> <raw content="{opts.data.text}" if="{opts.data.text}"></raw> <empty if="{!opts.data.text}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('empty', '<span class="text-muted">This section is empty.</span>', '', '', function(opts) {
});

    
  

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('nonxml', '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"> Document Attachment </h3> </div> <div class="panel-body"> The clinical document you are viewing has an attached document <b>{opts.nonxml.reference}</b>. Please download the document through your EMR. <br> </div>', '', '', function(opts) {
});
    
  

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(0)
    

riot.tag2('raw', '<span></span>', '', '', function(opts) {
    this.root.innerHTML = Object(_utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_0__["bootstrapize"])(opts.content);
    this.on('update', function() {
      this.root.innerHTML = Object(_utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_0__["bootstrapize"])(opts.content);
    }.bind(this));
});

    
  

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('ccda-section', '<allergies if="{opts.current.tagName == \'allergies\'}" section="{opts.current}" data="{data}"></allergies> <medications if="{opts.current.tagName == \'medications\'}" section="{opts.current}" data="{data}"></medications> <generic if="{opts.current.tagName == \'generic\'}" section="{opts.current}" data="{data}"></generic>', '', '', function(opts) {
    var options = {
      section: opts.current,
      data: opts.parent.opts.data[opts.current.key]
    };

    var self = this;
    this.parent = opts.parent;
    this.current = opts.current;
    this.data = self.parent.opts.data[self.current.key];
    this.on('update', function() {
      self.data = self.parent.opts.data[self.current.key];
    });
});

    
  

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

    var riot = __webpack_require__(0)
    

riot.tag2('panel', '<div class="panel panel-{opts.state ? opts.state : \'default\'}" id="{opts.section.key}"> <div class="panel-heading section-toggle" onclick="{toggleSection}"> <h3 class="panel-title"> <i class="fa fa-{opts.section.icon} section-icon" aria-hidden="true" if="{!opts.hideicon}"></i> {opts.section.display} <span class="text-muted" if="{isEmpty()}">(empty)</span> <span class="pull-right"> <i class="fa fa-chevron-down {fa-rotate-180: opts.section.enabled}" aria-hidden="true"></i> </span> </h3> </div> <div class="panel-body"> <yield></yield> </div> </div>', '', 'class="{opts.section.tagName}" class="{fade: isEmpty(), expanded: isEnabled(), collapsed: !isEnabled()}"', function(opts) {
    var current;

    this.on('update', function() {
      if (opts.data !== current) {
        current = opts.data;
        if(this.isEmpty()) opts.section.enabled = false;
      }
    }.bind(this));

    this.isEmpty = function() {
      return !opts.data.text;
    }

    this.isEnabled = function() {
      return opts.section.enabled || opts.enabled;
    }

    this.toggleSection = function(e) {
      e.preventDefault();
      opts.section.enabled = !opts.section.enabled;
    }
});

    
  

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_services__WEBPACK_IMPORTED_MODULE_1__);

    var riot = __webpack_require__(0)
    



riot.tag2('header', '<nav id="headerMenu" class="navbar navbar-expand-lg navbar-default fixed-top"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <span class="navbar-brand" if="{opts.data}"> {opts.data.document.title} - <name name="{opts.data.demographics.name}" class="text-muted"></name> </span> <span class="navbar-brand" if="{!opts.data}"> Loading... </span> </div> <div class="collapse navbar-collapse" id="navbar-collapse-1"> <ul class="nav navbar-nav navbar-right" id="jump-nav"> <li if="{opts.documents && opts.documents.length === 1 && opts.documents[0].name}"> <span class="navbar-text"> {opts.documents[0].name} </span> </li> <li class="dropdown" if="{opts.documents && opts.documents.length > 1}"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Documents <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li each="{opts.documents}" class="{active: active}"> <a href="#" onclick="{load}"> {name} </a> </li> </ul> </li> <li class="dropdown" if="{opts.sections && opts.sections.length}"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Jump to </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li> <a href="#">Top</a> </li> <li role="separator" class="divider"></li> <li each="{opts.sections}"> <a href="#{key}"> <i class="fa fa-{icon}" aria-hidden="true"></i> {display} </a> </li> </ul> </li> <li class="{active: this.parent.showPreferences}" if="{opts.sections}"> <a href="#" onclick="{showPreferences}"> <i class="fa fa-lg fa-cog"></i> </a> </li> </ul> </div> </div> </nav>', '', '', function(opts) {
    var self = this;
    self.service = new _services__WEBPACK_IMPORTED_MODULE_1__["DocumentsService"]();

    if (opts.documents && opts.documents.length)
      opts.documents[0].active = true;

    self.load = function(e) {
      e.preventDefault();
      self.toggleActive(e.item);
      self.service.open(e.item).then(function(options) {
        if (!options) return;
        self.parent.showPreferences = !options.pref.isSet;
        self.parent.opts = Object.assign(self.parent.opts, options);
        self.parent.update();
      });
    }

    self.showPreferences = function(e) {
      e.preventDefault();
      self.parent.showPreferences = true;
      self.parent.update();
    }

    self.toggleActive = function(document) {
      lodash__WEBPACK_IMPORTED_MODULE_0__["each"](self.opts.documents, function(d) {
        d.active = false;
      });
      document.active = true;
    }

    self.on('update', function() {
      var noneSelected = self.opts.documents && self.opts.documents.filter(function(x) { return x.active; }).length === 0;
      if (noneSelected && self.opts.documents.length)
        self.opts.documents[0].active = true;
    });
});

    
  

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('name', '<span>{opts.name.given[0]} {opts.name.family}{possesive}</span>', '', '', function(opts) {
    if (opts.possesive) {
      this.possesive = opts.name.family.slice(-1) === 's' ? '\'' : '\'s';
    }
});

    
  

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SECTIONS = [
    { key: 'allergies', display: 'Allergies', tagName: 'generic', icon: 'pagelines' },
    { key: 'care_plan', display: 'Care Plan', tagName: 'generic', icon: 'sticky-note-o' },
    { key: 'chief_complaint', display: 'Chief Complaint', tagName: 'generic', icon: 'bullhorn' },
    { key: 'encounters', display: 'Encounters', tagName: 'generic', icon: 'stethoscope' },
    { key: 'functional_statuses', display: 'Functional Status', tagName: 'generic', icon: 'wheelchair' },
    { key: 'immunizations', display: 'Immunizations', tagName: 'generic', icon: 'eyedropper' },
    { key: 'instructions', display: 'Patient Instructions', tagName: 'generic', icon: 'user-md' },
    { key: 'medications', display: 'Medications', tagName: 'generic', icon: 'medkit' },
    { key: 'problems', display: 'Problems', tagName: 'generic', icon: 'exclamation-triangle' },
    { key: 'procedures', display: 'Procedures', tagName: 'generic', icon: 'hospital-o' },
    { key: 'results', display: 'Results', tagName: 'generic', icon: 'flask' },
    { key: 'smoking_status', display: 'Smoking Status', tagName: 'generic', icon: 'fire' },
    { key: 'vitals', display: 'Vitals', tagName: 'generic', icon: 'heartbeat' },
];
exports.IGNORE_SECTIONS = ['document', 'demographics', 'json', 'immunization_declines'];


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__107__;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(45);
var _ = __webpack_require__(1);
var bluebutton = __webpack_require__(107);
var config_1 = __webpack_require__(106);
var preferences_service_1 = __webpack_require__(44);
var DocumentsService = /** @class */ (function () {
    function DocumentsService() {
        this.config = {};
    }
    DocumentsService.prototype.setHeaders = function (headers) {
        this.config.headers = headers;
    };
    DocumentsService.prototype.getSections = function (bb, sections, ignoreSections, pref) {
        var allSections = [];
        _.each(bb.data, function (val, key) {
            if (_.includes(ignoreSections, key))
                return;
            var match = _.find(sections, function (s) { return s.key === key; });
            if (match) {
                match.sort = pref.indexOfSection(key);
                allSections.push(match);
            }
            else
                allSections.push({
                    key: key,
                    display: val.displayName || key,
                    tagName: 'generic',
                    icon: 'asterisk',
                    sort: pref.indexOfSection(key)
                });
        });
        // sort by name first, then by sort order
        allSections = _.sortBy(allSections, function (s) { return s.display.toLowerCase(); });
        allSections = _.sortBy(allSections, function (s) { return s.sort; });
        // init sort and enabled
        _.each(allSections, function (val, index) {
            val.enabled = pref.isSectionEnabled(val.key);
        });
        return allSections;
    };
    DocumentsService.prototype.fetch = function (document) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $.get({
                url: document.url,
                headers: _this.config.headers || {},
                dataType: 'text',
                success: function (content) { return resolve(content); },
                error: function (err) { return reject(err); }
            });
        });
    };
    DocumentsService.prototype.open = function (document) {
        var _this = this;
        if (document.content)
            return Promise.resolve(this.load(document.content));
        return this.fetch(document).then(function (x) { return _this.load(x); });
    };
    DocumentsService.prototype.load = function (data) {
        var bb = bluebutton(data);
        if (!bb.data)
            throw 'BlueButton could not parse the file.';
        var pref = new preferences_service_1.PreferencesService().getPreferences(bb.data.document.type);
        return {
            sections: this.getSections(bb, config_1.SECTIONS, config_1.IGNORE_SECTIONS, pref),
            data: bb.data,
            pref: pref,
        };
    };
    return DocumentsService;
}());
exports.DocumentsService = DocumentsService;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(1);
var Preferences = /** @class */ (function () {
    function Preferences(pref) {
        this.id = pref.id;
        this.type = pref.type;
        this.enabledSectionKeys = pref.enabledSectionKeys || [];
        this.sortedSectionKeys = pref.sortedSectionKeys || [];
        this.isSet = pref.isSet;
    }
    Preferences.prototype.isSectionEnabled = function (key) {
        return _.some(this.enabledSectionKeys, function (k) {
            return k === key;
        });
    };
    Preferences.prototype.indexOfSection = function (key) {
        return this.sortedSectionKeys.indexOf(key);
    };
    return Preferences;
}());
exports.Preferences = Preferences;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ViewerOptions = /** @class */ (function () {
    function ViewerOptions() {
    }
    return ViewerOptions;
}());
exports.ViewerOptions = ViewerOptions;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isDocument(arg) {
    return arg.url !== undefined;
}
exports.isDocument = isDocument;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_lodashmixins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _models_section__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_section__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_services__WEBPACK_IMPORTED_MODULE_5__);

    var riot = __webpack_require__(0)
    






riot.tag2('preferences', '<h2> <button class="btn btn-primary pull-right" type="button" name="button" onclick="{save}">Save</button> Which sections would you like to see? <small> <a href="#" onclick="{enableAll}">all</a> | <a href="#" onclick="{disableAll}">none</a> (drag to sort)</small> </h2> <p class="alert-info" if="{!opts.pref.isSet}"> This is the first time you are setting up your section preferences for <b>{opts.pref.type.type} {opts.pref.type.displayName}</b> documents. You can order and select sections that are relevant for the care you are providing and we will save these for future use. </p> <ul class="list-group" id="preferences"> <preference-section each="{opts.sections}"></preference-section> </div>', '', '', function(opts) {
    var self = this;
    this.preferencesService = new _services__WEBPACK_IMPORTED_MODULE_5__["PreferencesService"]();

    this.on('mount', function () {
      Object(_models_section__WEBPACK_IMPORTED_MODULE_3__["updateSortOrder"])();
      var container = document.getElementById('preferences');
      dragula__WEBPACK_IMPORTED_MODULE_0___default()([container], {direction: 'vertical'}).on('drop', drop);
    });

    function drop(el) {
      var from = lodash__WEBPACK_IMPORTED_MODULE_1__["findIndex"](opts.sections, { key: el.key });
      var to = Object(_utilities_htmlhelpers__WEBPACK_IMPORTED_MODULE_4__["getElementIndex"])(el);
      lodash__WEBPACK_IMPORTED_MODULE_1__["move"](opts.sections, from, to);
      Object(_models_section__WEBPACK_IMPORTED_MODULE_3__["updateSortOrder"])();
      self.preferencesService.save(opts);
      self.update();
    }

    this.enableAll = function(e) {
      e.preventDefault();
      lodash__WEBPACK_IMPORTED_MODULE_1__["each"](opts.sections, function(s) {
        s.enabled = true;
      });
    }

    this.disableAll = function(e) {
      e.preventDefault();
      lodash__WEBPACK_IMPORTED_MODULE_1__["each"](opts.sections, function(s) {
        s.enabled = false;
      });
    }

    this.save = function(e) {
      e.preventDefault();
      this.parent.showPreferences = false;
      this.preferencesService.save(opts);
      riot.update();
    }

});

riot.tag2('preference-section', '<li class="list-group-item preferences-section text-right"> <label class="checkbox-inline pull-left"> <input type="checkbox" checked="{enabled}" onchange="{change}"> <i class="fa fa-{icon}"></i> {display} </label> <i class="fa fa-bars" title="Drag to sort"></i> </div>', '', '', function(opts) {
    this.root.key = this.key;

    this.change = function(e) {
      e.item.enabled = e.target.checked;
      this.update();
    }
});

    
  

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('sialia', '<header data="{opts.data}" sections="{opts.sections}" documents="{opts.documents}"></header> <div class="container-fluid sialia-body" if="{opts.data}"> <div class="row"> <div class="col-lg-3 col-sm-4 hidden-xs" id="placeholder"></div> <div class="col-lg-3 col-sm-4" id="left"> <demographics demographics="{opts.data.demographics}"></demographics> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showPreferences && !showNonXml}"> <preferences sections="{opts.sections}" pref="{opts.pref}"></preferences> </div> <div class="col-lg-9 col-sm-8" id="right" if="{!showPreferences && !showNonXml}"> <ccda-section each="{section in opts.sections}" current="{section}" parent="{parent}"></ccda-section> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showNonXml}"> <nonxml nonxml="{data.document.type.nonXmlBody}"></nonxml> </div> </div> </div>', '', '', function(opts) {
    var self = this;

    this.on('update', function() {
      // ML - Not showing preferences when the body type is nonXmL.  We just want to show
      // a link to the document.
      self.showNonXml = self.data && self.data.document.type.nonXmlBody.type;
    });
});

    
  

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(113);
__webpack_require__(112);
__webpack_require__(105);
__webpack_require__(104);
__webpack_require__(103);
__webpack_require__(102);
__webpack_require__(101);
__webpack_require__(100);
__webpack_require__(99);
__webpack_require__(98);
__webpack_require__(97);
__webpack_require__(96);
__webpack_require__(95);
__webpack_require__(94);
__webpack_require__(93);
__webpack_require__(92);
__webpack_require__(91);
__webpack_require__(90);
__webpack_require__(89);
__webpack_require__(88);
__webpack_require__(87);
__webpack_require__(86);
__webpack_require__(85);
__webpack_require__(84);
__webpack_require__(83);


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__115__;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(121);
__webpack_require__(115);
__webpack_require__(114);
__webpack_require__(82);
__export(__webpack_require__(49));


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=sialia.js.map