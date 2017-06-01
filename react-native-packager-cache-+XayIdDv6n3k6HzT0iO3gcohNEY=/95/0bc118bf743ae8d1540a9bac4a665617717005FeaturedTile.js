Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/tile/FeaturedTile.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Text = require('../text/Text');

var _Text2 = babelHelpers.interopRequireDefault(_Text);

var _Icon = require('../icons/Icon');

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var FeaturedTile = function FeaturedTile(props) {
  var title = props.title,
      icon = props.icon,
      caption = props.caption,
      imageSrc = props.imageSrc,
      containerStyle = props.containerStyle,
      imageContainerStyle = props.imageContainerStyle,
      overlayContainerStyle = props.overlayContainerStyle,
      iconContainerStyle = props.iconContainerStyle,
      titleStyle = props.titleStyle,
      captionStyle = props.captionStyle,
      attributes = babelHelpers.objectWithoutProperties(props, ['title', 'icon', 'caption', 'imageSrc', 'containerStyle', 'imageContainerStyle', 'overlayContainerStyle', 'iconContainerStyle', 'titleStyle', 'captionStyle']);
  var width = props.width,
      height = props.height;


  if (!width) {
    width = _reactNative.Dimensions.get('window').width;
  }
  if (!height) {
    height = width * 0.8;
  }

  var styles = _reactNative.StyleSheet.create({
    container: {
      width: width,
      height: height
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
      width: width,
      height: height
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 45,
      paddingBottom: 40,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    text: {
      color: '#ffffff',
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 15,
      textAlign: 'center'
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }
  });

  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    babelHelpers.extends({
      style: [styles.container, containerStyle && containerStyle]
    }, attributes, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }),
    _react2.default.createElement(
      _reactNative.Image,
      {
        source: imageSrc,
        style: [styles.imageContainer, imageContainerStyle && imageContainerStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      },
      _react2.default.createElement(
        _reactNative.View,
        {
          style: [styles.overlayContainer, overlayContainerStyle && overlayContainerStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          {
            style: [styles.iconContainer, iconContainerStyle && iconContainerStyle],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          icon && _react2.default.createElement(_Icon2.default, babelHelpers.extends({}, icon, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          }))
        ),
        _react2.default.createElement(
          _Text2.default,
          { h4: true, style: [styles.text, titleStyle && titleStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          title
        ),
        _react2.default.createElement(
          _Text2.default,
          { style: [styles.text, captionStyle && captionStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          caption
        )
      )
    )
  );
};

FeaturedTile.propTypes = {
  title: _propTypes2.default.string,
  icon: _propTypes2.default.object,
  caption: _propTypes2.default.string,
  imageSrc: _reactNative.Image.propTypes.source.isRequired,
  onPress: _propTypes2.default.func,
  containerStyle: _reactNative.View.propTypes.style,
  iconContainerStyle: _reactNative.View.propTypes.style,
  imageContainerStyle: _reactNative.View.propTypes.style,
  overlayContainerStyle: _reactNative.View.propTypes.style,
  titleStyle: _reactNative.Text.propTypes.style,
  captionStyle: _reactNative.Text.propTypes.style,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

exports.default = FeaturedTile;