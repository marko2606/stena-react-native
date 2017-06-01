Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/components/AlertsNotifications/AlertNotifications.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var AlertNotifications = function (_React$Component) {
    babelHelpers.inherits(AlertNotifications, _React$Component);

    function AlertNotifications() {
        babelHelpers.classCallCheck(this, AlertNotifications);

        var _this = babelHelpers.possibleConstructorReturn(this, (AlertNotifications.__proto__ || Object.getPrototypeOf(AlertNotifications)).call(this));

        _this.state = {};
        return _this;
    }

    babelHelpers.createClass(AlertNotifications, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    'Alerts'
                )
            );
        }
    }]);
    return AlertNotifications;
}(_react2.default.Component);

exports.default = AlertNotifications;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});