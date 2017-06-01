Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _AlertNotifications = require('./src/pages/AlertsNotifications/AlertNotifications');

var _AlertNotifications2 = babelHelpers.interopRequireDefault(_AlertNotifications);

var StatusBarManager = _reactNative.NativeModules.StatusBarManager;

var STATUSBAR_HEIGHT = _reactNative.Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, paddingTop: STATUSBAR_HEIGHT }, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        _react2.default.createElement(_AlertNotifications2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;