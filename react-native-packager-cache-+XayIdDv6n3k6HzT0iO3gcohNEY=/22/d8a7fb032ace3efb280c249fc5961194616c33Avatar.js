Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/avatar/Avatar.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Icon = require('../icons/Icon');

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var Avatar = function Avatar(props) {
  var component = props.component,
      onPress = props.onPress,
      onLongPress = props.onLongPress,
      containerStyle = props.containerStyle,
      icon = props.icon,
      iconStyle = props.iconStyle,
      source = props.source,
      small = props.small,
      medium = props.medium,
      large = props.large,
      xlarge = props.xlarge,
      avatarStyle = props.avatarStyle,
      rounded = props.rounded,
      title = props.title,
      titleStyle = props.titleStyle,
      overlayContainerStyle = props.overlayContainerStyle,
      activeOpacity = props.activeOpacity,
      attributes = babelHelpers.objectWithoutProperties(props, ['component', 'onPress', 'onLongPress', 'containerStyle', 'icon', 'iconStyle', 'source', 'small', 'medium', 'large', 'xlarge', 'avatarStyle', 'rounded', 'title', 'titleStyle', 'overlayContainerStyle', 'activeOpacity']);
  var width = props.width,
      height = props.height;


  if (small) {
    width = 34;
    height = 34;
  } else if (medium) {
    width = 50;
    height = 50;
  } else if (large) {
    width = 75;
    height = 75;
  } else if (xlarge) {
    width = 150;
    height = 150;
  } else if (!width && !height) {
    width = 34;
    height = 34;
  } else if (!width) {
    width = height;
  } else if (!height) {
    height = width;
  }

  var titleSize = width / 2;
  var iconSize = width / 2;

  var Component = onPress || onLongPress ? _reactNative.TouchableOpacity : _reactNative.View;
  if (component) {
    Component = component;
  }

  var renderContent = function renderContent() {
    if (source) {
      return _react2.default.createElement(_reactNative.Image, {
        style: [styles.avatar, rounded && { borderRadius: width / 2 }, avatarStyle && avatarStyle],
        source: source,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      });
    } else if (title) {
      return _react2.default.createElement(
        _Text2.default,
        { style: [styles.title, titleStyle && titleStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        title
      );
    } else if (icon) {
      return _react2.default.createElement(_Icon2.default, {
        style: iconStyle && iconStyle,
        color: icon.color || 'white',
        name: icon.name || 'user',
        size: icon.size || iconSize,
        type: icon.type && icon.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      });
    }
  };

  var styles = _reactNative.StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      backgroundColor: 'transparent'
    },
    avatar: {
      width: width,
      height: height
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: width,
      height: height
    },
    title: {
      color: '#ffffff',
      fontSize: titleSize,
      backgroundColor: 'rgba(0,0,0,0)',
      textAlign: 'center'
    }
  });

  return _react2.default.createElement(
    Component,
    babelHelpers.extends({
      onPress: onPress,
      onLongPress: onLongPress,
      activeOpacity: activeOpacity,
      style: [styles.container, containerStyle && containerStyle]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    }),
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.overlayContainer, rounded && { borderRadius: width / 2 }, overlayContainerStyle && overlayContainerStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      },
      renderContent()
    )
  );
};

Avatar.propTypes = {
  component: _propTypes2.default.func,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  onPress: _propTypes2.default.func,
  onLongPress: _propTypes2.default.func,
  containerStyle: _propTypes2.default.any,
  source: _reactNative.Image.propTypes.source,
  avatarStyle: _propTypes2.default.any,
  rounded: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  titleStyle: _reactNative.Text.propTypes.style,
  overlayContainerStyle: _propTypes2.default.any,
  activeOpacity: _propTypes2.default.number,
  icon: _propTypes2.default.object,
  iconStyle: _reactNative.Text.propTypes.style,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  xlarge: _propTypes2.default.bool
};

exports.default = Avatar;