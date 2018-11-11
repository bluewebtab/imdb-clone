webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(162);

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

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TEST_DISPATCH = exports.TEST_DISPATCH = 'TEST_DISPATCH';

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(106);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(109);

var _store = __webpack_require__(277);

var _store2 = _interopRequireDefault(_store);

var _moviesData = __webpack_require__(111);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _Register = __webpack_require__(271);

var _Register2 = _interopRequireDefault(_Register);

var _Login = __webpack_require__(270);

var _Login2 = _interopRequireDefault(_Login);

var _MovieSection = __webpack_require__(274);

var _MovieSection2 = _interopRequireDefault(_MovieSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Header from './pages/Header'


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _MovieSection2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = undefined;

var _types = __webpack_require__(168);

//Register User
var registerUser = exports.registerUser = function registerUser(userData) {
  return {
    type: _types.TEST_DISPATCH,
    payload: userData
  };
};

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextFieldGroup = __webpack_require__(272);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _reactRouterDom = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {

      email: '',
      password: '',

      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var user = {

        email: this.state.email,
        password: this.state.password

      };
      console.log(user);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'left-split col-xs-6' }),
        _react2.default.createElement(
          'div',
          { className: 'right-split col-xs-6' },
          _react2.default.createElement(
            'div',
            { className: 'loginForm' },
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'display-4 ' },
                  'Movizz'
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'display-5' },
                  'Sign in to your account'
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6' },
                        'Email'
                      ),
                      _react2.default.createElement('input', {
                        type: 'email',
                        className: 'form-control',
                        name: 'email',
                        value: this.state.email,
                        onChange: this.onChange
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6' },
                        'Password'
                      ),
                      _react2.default.createElement('input', {
                        type: 'password',
                        className: 'form-control form-control-lg',
                        value: this.state.password,
                        onChange: this.onChange,
                        name: 'password' })
                    ),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(106);

var _axios = __webpack_require__(162);

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(279);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(109);

var _authActions = __webpack_require__(269);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

    _this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2

      };

      this.props.registerUser(newUser);

      // axios.post('/api/users/register', newUser)
      //   .then(res => console.log(res.data))
      //   .catch(err => this.setState({errors: err.response.data}))
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;
      var user = this.props.auth.user;


      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'left-split col-xs-6' }),
        _react2.default.createElement(
          'div',
          { className: 'right-split col-xs-6' },
          _react2.default.createElement(
            'div',
            { className: 'registerForm' },
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'display-4 ' },
                  'Movizz'
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'display-5' },
                  'Create account'
                ),
                _react2.default.createElement(
                  'form',
                  { noValidate: true, onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6 ' },
                        'Name'
                      ),
                      _react2.default.createElement('input', {
                        type: 'text',
                        className: (0, _classnames2.default)('form-control', {
                          'is-invalid': errors.name
                        }),
                        name: 'name',
                        value: this.state.name,
                        onChange: this.onChange
                      }),
                      errors.name && _react2.default.createElement(
                        'div',
                        { className: 'invalid-feedback' },
                        errors.name
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6' },
                        'Email'
                      ),
                      _react2.default.createElement('input', {
                        type: 'email',
                        className: (0, _classnames2.default)('form-control', {
                          'is-invalid': errors.email
                        }),

                        name: 'email',
                        value: this.state.email,
                        onChange: this.onChange
                      }),
                      errors.email && _react2.default.createElement(
                        'div',
                        { className: 'invalid-feedback' },
                        errors.email
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6' },
                        'Password'
                      ),
                      _react2.default.createElement('input', {
                        type: 'password',
                        className: (0, _classnames2.default)('form-control', {
                          'is-invalid': errors.email
                        }),
                        value: this.state.password,
                        onChange: this.onChange,
                        name: 'password'
                      }),
                      errors.password && _react2.default.createElement(
                        'div',
                        { className: 'invalid-feedback' },
                        errors.password
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group start-xs' },
                      _react2.default.createElement(
                        'h1',
                        { className: 'display-6' },
                        'Confirm password'
                      ),
                      _react2.default.createElement('input', {
                        type: 'password',
                        className: (0, _classnames2.default)('form-control', {
                          'is-invalid': errors.password2
                        }),
                        value: this.state.password2,
                        onChange: this.onChange,
                        name: 'password2' }),
                      errors.password2 && _react2.default.createElement(
                        'div',
                        { className: 'invalid-feedback' },
                        errors.password2
                      )
                    ),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.propTypes = {
  registerUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser })(Register);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(111);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _reactRouterDom = __webpack_require__(106);

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
              _reactRouterDom.Link,
              { to: '/', className: 'compName' },
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
                    _reactRouterDom.Link,
                    { to: '/login', className: 'linkButton' },
                    'Login'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'four' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register', className: 'linkButton' },
                    'Register'
                  )
                ),
                _react2.default.createElement('hr', null)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: ' movieTitle' },
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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(63);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(111);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _Header = __webpack_require__(273);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieSection = function (_Component) {
  _inherits(MovieSection, _Component);

  function MovieSection() {
    var _this2 = this;

    _classCallCheck(this, MovieSection);

    var _this = _possibleConstructorReturn(this, (MovieSection.__proto__ || Object.getPrototypeOf(MovieSection)).call(this));

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
    _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var search, newMovies;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              search = new _moviesData2.default();
              _context2.next = 3;
              return search.discoverMovies();

            case 3:
              console.log(search.result);
              newMovies = search.result;

              _this.setState({
                movies: newMovies
              });

              console.log(_this.state);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this.state = {
      movies: ''

    };
    _this.hitButton = _this.hitButton.bind(_this);
    _this.newMovies = _this.newMovies.bind(_this);
    return _this;
  }

  _createClass(MovieSection, [{
    key: 'newMovies',
    value: function newMovies() {
      var newMovies = Object.values(this.state.movies);
      return newMovies.map(function (movie, index) {
        return _react2.default.createElement(
          'li',
          { key: index, className: 'singleMovie' },
          _react2.default.createElement('img', { src: 'https://image.tmdb.org/t/p/w200' + movie.poster_path })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'movieSection' },
          _react2.default.createElement(
            'section',
            { className: 'row center-xs' },
            _react2.default.createElement(
              'section',
              { className: 'search-area col-xs-12' },
              _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'h1',
              { className: 'popularTitle col-xs-3' },
              ' What\'s Popular Now'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'ul',
                { className: 'moviesArea' },
                this.newMovies()
              )
            )
          )
        )
      );
    }
  }]);

  return MovieSection;
}(_react.Component);

exports.default = MovieSection;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.TEST_DISPATCH:
      return _extends({}, state, {
        user: action.payload
      });
    default:
      return state;
  }
};

var _types = __webpack_require__(168);

var initialState = {
  isAuthenticated: false,
  user: {}
};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(81);

var _authReducer = __webpack_require__(275);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default
});

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(81);

var _reduxThunk = __webpack_require__(619);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(276);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var middleware = [_reduxThunk2.default];

var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

exports.default = store;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);
module.exports = __webpack_require__(250);


/***/ })

},[628]);