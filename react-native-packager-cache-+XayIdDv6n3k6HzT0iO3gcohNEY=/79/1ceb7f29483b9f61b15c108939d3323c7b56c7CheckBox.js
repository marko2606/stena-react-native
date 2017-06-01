Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/checkbox/CheckBox.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _fonts = require('../config/fonts');

var _fonts2 = babelHelpers.interopRequireDefault(_fonts);

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var _FontAwesome = require('@expo/vector-icons/FontAwesome');

var _FontAwesome2 = babelHelpers.interopRequireDefault(_FontAwesome);

var _getIconType = require('../helpers/getIconType');

var _getIconType2 = babelHelpers.interopRequireDefault(_getIconType);

var CheckBox = function CheckBox(props) {
  var component = props.component,
      checked = props.checked,
      iconRight = props.iconRight,
      title = props.title,
      center = props.center,
      right = props.right,
      containerStyle = props.containerStyle,
      textStyle = props.textStyle,
      onIconPress = props.onIconPress,
      onLongIconPress = props.onLongIconPress,
      checkedIcon = props.checkedIcon,
      uncheckedIcon = props.uncheckedIcon,
      iconType = props.iconType,
      checkedColor = props.checkedColor,
      uncheckedColor = props.uncheckedColor,
      checkedTitle = props.checkedTitle,
      fontFamily = props.fontFamily,
      attributes = babelHelpers.objectWithoutProperties(props, ['component', 'checked', 'iconRight', 'title', 'center', 'right', 'containerStyle', 'textStyle', 'onIconPress', 'onLongIconPress', 'checkedIcon', 'uncheckedIcon', 'iconType', 'checkedColor', 'uncheckedColor', 'checkedTitle', 'fontFamily']);


  var Icon = _FontAwesome2.default;
  if (iconType) {
    Icon = (0, _getIconType2.default)(iconType);
  }
  var Component = component || _reactNative.TouchableOpacity;
  var iconName = uncheckedIcon;
  if (checked) {
    iconName = checkedIcon;
  }
  return _react2.default.createElement(
    Component,
    babelHelpers.extends({
      style: [styles.container, containerStyle && containerStyle]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }),
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.wrapper, right && { justifyContent: 'flex-end' }, center && { justifyContent: 'center' }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      },
      !iconRight && _react2.default.createElement(Icon, {
        color: checked ? checkedColor : uncheckedColor,
        name: iconName,
        size: 24,
        onLongPress: onLongIconPress,
        onPress: onIconPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }),
      _react2.default.createElement(
        _Text2.default,
        {
          style: [styles.text, textStyle && textStyle, fontFamily && { fontFamily: fontFamily }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        checked ? checkedTitle || title : title
      ),
      iconRight && _react2.default.createElement(Icon, {
        color: checked ? checkedColor : uncheckedColor,
        name: iconName,
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })
    )
  );
};

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  checkedColor: 'green',
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o'
};

CheckBox.propTypes = {
  component: _propTypes2.default.any,
  checked: _propTypes2.default.bool,
  iconRight: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  center: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  containerStyle: _reactNative.View.propTypes.style,
  textStyle: _reactNative.Text.propTypes.style,
  checkedIcon: _propTypes2.default.string,
  uncheckedIcon: _propTypes2.default.string,
  iconType: _propTypes2.default.string,
  checkedColor: _propTypes2.default.string,
  uncheckedColor: _propTypes2.default.string,
  checkedTitle: _propTypes2.default.string,
  onIconPress: _propTypes2.default.func,
  onLongIconPress: _propTypes2.default.func,
  fontFamily: _propTypes2.default.string
};

var styles = _reactNative.StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3
  },
  text: babelHelpers.extends({
    marginLeft: 10,
    marginRight: 10,
    color: _colors2.default.grey1
  }, _reactNative.Platform.select({
    ios: {
      fontWeight: 'bold'
    },
    android: babelHelpers.extends({}, _fonts2.default.android.bold)
  }))
});

exports.default = CheckBox;