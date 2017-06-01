'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-tab-navigator/Tab.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Layout = require('./Layout');

var _Layout2 = babelHelpers.interopRequireDefault(_Layout);

var Tab = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(Tab, _React$Component);

  function Tab(props, context) {
    babelHelpers.classCallCheck(this, Tab);

    var _this = babelHelpers.possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props, context));

    _this._handlePress = _this._handlePress.bind(_this);
    return _this;
  }

  babelHelpers.createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          badge = _props.badge;

      var icon = null;
      if (_react2.default.Children.count(this.props.children) > 0) {
        icon = _react2.default.Children.only(this.props.children);
      }

      if (title) {
        title = _react2.default.createElement(
          _reactNative.Text,
          {
            numberOfLines: 1,
            allowFontScaling: !!this.props.allowFontScaling,
            style: [styles.title, this.props.titleStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          title
        );
      }

      if (badge) {
        badge = _react2.default.cloneElement(badge, {
          style: [styles.badge, badge.props.style]
        });
      }

      var tabStyle = [styles.container, title ? null : styles.untitledContainer, this.props.style];
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: this.props.testID,
          activeOpacity: this.props.hidesTabTouch ? 1.0 : 0.8,
          onPress: this._handlePress,
          style: tabStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          icon,
          badge
        ),
        title
      );
    }
  }, {
    key: '_handlePress',
    value: function _handlePress(event) {
      if (this.props.onPress) {
        this.props.onPress(event);
      }
    }
  }]);
  return Tab;
}(_react2.default.Component), _class.propTypes = {
  testID: _react.PropTypes.string,
  title: _react.PropTypes.string,
  titleStyle: _reactNative.Text.propTypes.style,
  badge: _react.PropTypes.element,
  onPress: _react.PropTypes.func,
  hidesTabTouch: _react.PropTypes.bool,
  allowFontScaling: _react.PropTypes.bool,
  style: _reactNative.View.propTypes.style
}, _temp);
exports.default = Tab;


var styles = _reactNative.StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -6,
    right: -10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  untitledContainer: {
    paddingBottom: 13
  },
  title: {
    color: '#929292',
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
    marginBottom: 1 + _Layout2.default.pixel
  }
});