Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/node_modules/react-native-elements/src/form/FormInput.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('../config/colors');

var _colors2 = babelHelpers.interopRequireDefault(_colors);

var _normalizeText = require('../helpers/normalizeText');

var _normalizeText2 = babelHelpers.interopRequireDefault(_normalizeText);

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width;

var FormInput = function (_Component) {
  babelHelpers.inherits(FormInput, _Component);

  function FormInput() {
    babelHelpers.classCallCheck(this, FormInput);
    return babelHelpers.possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
  }

  babelHelpers.createClass(FormInput, [{
    key: 'focus',
    value: function focus() {
      var ref = this.props.textInputRef;
      this.refs[ref].focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      var ref = this.props.textInputRef;
      this.refs[ref].blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerStyle = _props.containerStyle,
          inputStyle = _props.inputStyle,
          textInputRef = _props.textInputRef,
          containerRef = _props.containerRef,
          selectionColor = _props.selectionColor,
          attributes = babelHelpers.objectWithoutProperties(_props, ['containerStyle', 'inputStyle', 'textInputRef', 'containerRef', 'selectionColor']);

      return _react2.default.createElement(
        _reactNative.View,
        {
          ref: containerRef,
          style: [styles.container, containerStyle && containerStyle],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        _react2.default.createElement(_reactNative.TextInput, babelHelpers.extends({
          ref: textInputRef,
          selectionColor: selectionColor || _colors2.default.grey3,
          style: [styles.input, inputStyle && inputStyle]
        }, attributes, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }))
      );
    }
  }]);
  return FormInput;
}(_react.Component);

FormInput.propTypes = {
  containerStyle: _reactNative.View.propTypes.style,
  inputStyle: _reactNative.Text.propTypes.style,
  selectionColor: _propTypes2.default.string,
  textInputRef: _propTypes2.default.string,
  containerRef: _propTypes2.default.string
};

var styles = _reactNative.StyleSheet.create({
  container: babelHelpers.extends({
    marginLeft: 15,
    marginRight: 15
  }, _reactNative.Platform.select({
    ios: {
      borderBottomColor: _colors2.default.grey4,
      borderBottomWidth: 1,
      marginLeft: 20,
      marginRight: 20
    }
  })),
  input: babelHelpers.extends({}, _reactNative.Platform.select({
    android: {
      height: 46
    },
    ios: {
      height: 36
    }
  }), {
    width: width,
    color: _colors2.default.grey3,
    fontSize: (0, _normalizeText2.default)(14)
  })
});

exports.default = FormInput;