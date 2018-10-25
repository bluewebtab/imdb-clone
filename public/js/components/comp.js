webpackJsonp([0],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(232);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moviesData = function () {
  function moviesData(query) {
    _classCallCheck(this, moviesData);

    this.query = query;
  }

  _createClass(moviesData, [{
    key: 'getResults',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '55235c76109068a112aaa3dcd3a08bda';
                _context.prev = 2;
                _context.next = 5;
                return (0, _axios2.default)('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&query=' + this.query);

              case 5:
                res = _context.sent;

                this.result = res.data.results;
                // console.log(this.result);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                alert(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function getResults() {
        return _ref.apply(this, arguments);
      }

      return getResults;
    }()
  }, {
    key: 'discoverMovies',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '55235c76109068a112aaa3dcd3a08bda';
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _axios2.default)('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

              case 5:
                res = _context2.sent;

                this.result = res.data.results;
                // console.log(this.result);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                alert(_context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function discoverMovies() {
        return _ref2.apply(this, arguments);
      }

      return discoverMovies;
    }()
  }]);

  return moviesData;
}();

exports.default = moviesData;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(97);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(99);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(250);

var _Header2 = _interopRequireDefault(_Header);

var _moviesData = __webpack_require__(153);

var _moviesData2 = _interopRequireDefault(_moviesData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this2 = this;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var search;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = new _moviesData2.default();
              _context.next = 3;
              return search.discoverMovies();

            case 3:

              console.log(search.result);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(97);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(99);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(153);

var _moviesData2 = _interopRequireDefault(_moviesData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _this2 = this;

    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.hitButton = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, search;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = 'Blade Runner';

              if (!query) {
                _context.next = 6;
                break;
              }

              search = new _moviesData2.default(query);
              _context.next = 5;
              return search.getResults();

            case 5:

              console.log(search.result);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.state = {};
    _this.hitButton = _this.hitButton.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'head' },
          _react2.default.createElement(
            'div',
            { className: 'navbar' },
            _react2.default.createElement(
              'div',
              { className: 'compName' },
              'Moviizz'
            ),
            _react2.default.createElement(
              'div',
              { className: 'rightArea' },
              _react2.default.createElement(
                'ul',
                { className: 'rightInfo' },
                _react2.default.createElement(
                  'li',
                  { className: 'one' },
                  _react2.default.createElement(
                    'a',
                    { onClick: this.hitButton },
                    'Movies'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'two' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'TV Shows'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'three' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'Login'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'four' },
                  _react2.default.createElement(
                    'a',
                    null,
                    'Register'
                  )
                ),
                _react2.default.createElement('hr', null)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'movieTitle' },
            _react2.default.createElement(
              'h3',
              null,
              'Blade Runner 2049'
            ),
            _react2.default.createElement(
              'a',
              { className: 'trailerBtn' },
              'Trailer'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(229);


/***/ })

},[578]);