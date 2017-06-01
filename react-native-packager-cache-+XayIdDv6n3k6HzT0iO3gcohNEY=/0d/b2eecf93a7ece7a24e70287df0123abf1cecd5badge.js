Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/badge/badge.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var Badge = function Badge(props) {
  var containerStyle = props.containerStyle,
      textStyle = props.textStyle,
      wrapperStyle = props.wrapperStyle,
      onPress = props.onPress,
      component = props.component,
      value = props.value,
      children = props.children,
      element = props.element,
      attributes = babelHelpers.objectWithoutProperties(props, ['containerStyle', 'textStyle', 'wrapperStyle', 'onPress', 'component', 'value', 'children', 'element']);


  if (element) return element;

  var Component = _reactNative.View;
  var childElement = _react2.default.createElement(
    _reactNative.Text,
    { style: [styles.text, textStyle && textStyle], __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    },
    value
  );

  if (children) {
    childElement = children;
  }

  if (children && value) {
    console.error('Badge can only contain either child element or value');
  }

  if (!component && onPress) {
    Component = _reactNative.TouchableOpacity;
  }

  if (_react2.default.isValidElement(component)) {
    Component = component;
  }

  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container && wrapperStyle && wrapperStyle], __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    },
    _react2.default.createElement(
      Component,
      babelHelpers.extends({
        style: [styles.badge, containerStyle && containerStyle],
        onPress: onPress
      }, attributes, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }),
      childElement
    )
  );
};

Badge.propTypes = {
  containerStyle: _reactNative.View.propTypes.style,
  wrapperStyle: _reactNative.View.propTypes.style,
  textStyle: _reactNative.Text.propTypes.style,
  children: _propTypes2.default.element,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onPress: _propTypes2.default.func,
  component: _propTypes2.default.func,
  element: _propTypes2.default.element
};

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  badge: {
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: _colors2.default.grey1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    color: 'white'
  }
});

exports.default = Badge;