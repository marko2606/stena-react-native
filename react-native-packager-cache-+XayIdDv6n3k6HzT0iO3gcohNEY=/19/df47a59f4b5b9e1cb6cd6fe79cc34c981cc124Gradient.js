Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gradient = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/components/Gradient.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _expo = require('expo');

var SCREEN_HEIGHT = _reactNative.Dimensions.get('window').height;

var Gradient = exports.Gradient = function Gradient(props) {
    return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        _react2.default.createElement(_reactNative.View, { style: { backgroundColor: 'rgb(13, 40, 50)', flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }),
        _react2.default.createElement(
            _expo.LinearGradient,
            {
                colors: ['rgba(27,84,106,0.8)', 'transparent'],
                style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: SCREEN_HEIGHT
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            },
            props.children
        )
    );
};