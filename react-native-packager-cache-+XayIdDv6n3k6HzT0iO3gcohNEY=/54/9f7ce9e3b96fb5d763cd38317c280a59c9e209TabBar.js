'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-tab-navigator/TabBar.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Layout = require('./Layout');

var _Layout2 = babelHelpers.interopRequireDefault(_Layout);

var TabBar = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(TabBar, _React$Component);

  function TabBar() {
    babelHelpers.classCallCheck(this, TabBar);
    return babelHelpers.possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
  }

  babelHelpers.createClass(TabBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.Animated.View,
        babelHelpers.extends({}, this.props, { style: [styles.container, this.props.style], __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        this.props.children,
        _react2.default.createElement(_reactNative.View, { style: [styles.shadow, this.props.shadowStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      );
    }
  }]);
  return TabBar;
}(_react2.default.Component), _class.propTypes = babelHelpers.extends({}, _reactNative.Animated.View.propTypes, {
  shadowStyle: _reactNative.View.propTypes.style
}), _temp);
exports.default = TabBar;


var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: _Layout2.default.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: _Layout2.default.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: _reactNative.Platform.OS === 'android' ? 0 : -_Layout2.default.pixel
  }
});