Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/pages/AlertsNotifications/ListAlertsAndNotifications.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var vessels = [{
    key: 1,
    name: 'Stena 1',
    status: 'active'
}, {
    key: 2,
    name: 'Stena 2',
    status: 'active'
}, {
    key: 3,
    name: 'Stena 3',
    status: 'active'
}, {
    key: 4,
    name: 'Stena 4',
    status: 'active'
}, {
    key: 5,
    name: 'Stena 5',
    status: 'active'
}, {
    key: 6,
    name: 'Stena 6',
    status: 'active'
}, {
    key: 7,
    name: 'Stena 7',
    status: 'active'
}, {
    key: 8,
    name: 'Stena 8',
    status: 'active'
}, {
    key: 9,
    name: 'Stena 9',
    status: 'active'
}, {
    key: 10,
    name: 'Stena 10',
    status: 'active'
}];

var ListAlertsAndNotifications = function (_React$Component) {
    babelHelpers.inherits(ListAlertsAndNotifications, _React$Component);

    function ListAlertsAndNotifications() {
        babelHelpers.classCallCheck(this, ListAlertsAndNotifications);

        var _this = babelHelpers.possibleConstructorReturn(this, (ListAlertsAndNotifications.__proto__ || Object.getPrototypeOf(ListAlertsAndNotifications)).call(this));

        _this.state = {
            activeClick: false
        };

        return _this;
    }

    babelHelpers.createClass(ListAlertsAndNotifications, [{
        key: 'onClickShowMoreInfo',
        value: function onClickShowMoreInfo() {
            return _react2.default.createElement(
                _reactNative.Text,
                { style: { color: 'white', marginTop: 10 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                },
                'More information about vessel'
            );
        }
    }, {
        key: '_renderItem',
        value: function _renderItem(_ref) {
            var item = _ref.item;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.touchableContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        style: styles.touchableAlert,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    },
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'warning',
                        color: 'rgb(156, 57, 53)',
                        iconStyle: { marginLeft: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { flexDirection: 'column', marginLeft: -30 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: 'white' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 91
                                }
                            },
                            item.name
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: 'rgb(146, 164, 170)', fontSize: 10 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 94
                                }
                            },
                            'SPEED OVER 15% INSTRUCTED'
                        )
                    ),
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'keyboard-arrow-down',
                        color: 'rgb(146, 164, 170)',
                        iconStyle: { marginRight: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        }
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                },
                _react2.default.createElement(_reactNative.FlatList, {
                    data: vessels,
                    renderItem: this._renderItem,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                    }
                })
            );
        }
    }]);
    return ListAlertsAndNotifications;
}(_react2.default.Component);

exports.default = ListAlertsAndNotifications;


var styles = _reactNative.StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 40,
        marginTop: 10,
        flex: 1
    },
    touchableContainer: {
        backgroundColor: 'rgb(11, 41, 53)',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(32, 177, 151, 0.5)'
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});