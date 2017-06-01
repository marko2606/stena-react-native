Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/icons/Icon.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _getIconType = require('../helpers/getIconType');

var _getIconType2 = babelHelpers.interopRequireDefault(_getIconType);

var Icon = function Icon(props) {
  var type = props.type,
      name = props.name,
      size = props.size,
      color = props.color,
      iconStyle = props.iconStyle,
      component = props.component,
      underlayColor = props.underlayColor,
      reverse = props.reverse,
      raised = props.raised,
      containerStyle = props.containerStyle,
      reverseColor = props.reverseColor,
      onPress = props.onPress,
      attributes = babelHelpers.objectWithoutProperties(props, ['type', 'name', 'size', 'color', 'iconStyle', 'component', 'underlayColor', 'reverse', 'raised', 'containerStyle', 'reverseColor', 'onPress']);


  var Component = _reactNative.View;
  if (onPress) {
    Component = _reactNative.TouchableHighlight;
  }
  if (component) {
    Component = component;
  }
  var Icon = void 0;
  if (!type) {
    Icon = (0, _getIconType2.default)('material');
  } else {
    Icon = (0, _getIconType2.default)(type);
  }
  return _react2.default.createElement(
    Component,
    babelHelpers.extends({
      underlayColor: reverse ? color : underlayColor || color,
      style: [(reverse || raised) && styles.button, (reverse || raised) && {
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4
      }, raised && styles.raised, {
        backgroundColor: reverse ? color : raised ? 'white' : 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
      }, containerStyle && containerStyle],
      onPress: onPress
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }),
    _react2.default.createElement(Icon, {
      style: [{ backgroundColor: 'transparent' }, iconStyle && iconStyle],
      size: size,
      name: name,
      color: reverse ? reverseColor : color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    })
  );
};

Icon.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  size: _propTypes2.default.number,
  color: _propTypes2.default.string,
  component: _propTypes2.default.element,
  underlayColor: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  raised: _propTypes2.default.bool,
  containerStyle: _reactNative.View.propTypes.style,
  iconStyle: _reactNative.Text.propTypes.style,
  onPress: _propTypes2.default.func,
  reverseColor: _propTypes2.default.string
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white'
};

var styles = _reactNative.StyleSheet.create({
  button: {
    margin: 7
  },
  raised: babelHelpers.extends({}, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      elevation: 2
    }
  }))
});

exports.default = Icon;