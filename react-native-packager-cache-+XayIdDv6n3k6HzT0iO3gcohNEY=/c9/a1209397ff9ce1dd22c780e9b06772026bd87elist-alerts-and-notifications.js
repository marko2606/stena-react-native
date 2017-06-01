Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/pages/AlertsNotifications/list-alerts-and-notifications.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var listAlertsAndNotifications = function (_React$Component) {
    babelHelpers.inherits(listAlertsAndNotifications, _React$Component);

    function listAlertsAndNotifications() {
        babelHelpers.classCallCheck(this, listAlertsAndNotifications);
        return babelHelpers.possibleConstructorReturn(this, (listAlertsAndNotifications.__proto__ || Object.getPrototypeOf(listAlertsAndNotifications)).apply(this, arguments));
    }

    babelHelpers.createClass(listAlertsAndNotifications, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                _react2.default.createElement(_reactNative.FlatList, {
                    data: [{ key: 'a' }, { key: 'b' }],
                    renderItem: function renderItem(_ref) {
                        var item = _ref.item;
                        return _react2.default.createElement(
                            _reactNative.Text,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            item.key
                        );
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                })
            );
        }
    }]);
    return listAlertsAndNotifications;
}(_react2.default.Component);

exports.default = listAlertsAndNotifications;


var styles = _reactNative.StyleSheet.create({});