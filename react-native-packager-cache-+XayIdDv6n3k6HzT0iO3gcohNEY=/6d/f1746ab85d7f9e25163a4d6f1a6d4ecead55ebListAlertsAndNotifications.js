Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/pages/AlertsNotifications/ListAlertsAndNotifications.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var ListAlertsAndNotifications = function (_React$Component) {
    babelHelpers.inherits(ListAlertsAndNotifications, _React$Component);

    function ListAlertsAndNotifications() {
        babelHelpers.classCallCheck(this, ListAlertsAndNotifications);

        var _this = babelHelpers.possibleConstructorReturn(this, (ListAlertsAndNotifications.__proto__ || Object.getPrototypeOf(ListAlertsAndNotifications)).call(this));

        _this.state = {
            loading: false,
            data: [{
                key: 1,
                name: 'Stena 1',
                status: 'active',
                activeClick: false
            }, {
                key: 2,
                name: 'Stena 2',
                status: 'active',
                activeClick: false
            }, {
                key: 3,
                name: 'Stena 3',
                status: 'active',
                activeClick: false
            }, {
                key: 4,
                name: 'Stena 4',
                status: 'active',
                activeClick: false
            }, {
                key: 5,
                name: 'Stena 5',
                status: 'active',
                activeClick: false
            }, {
                key: 6,
                name: 'Stena 6',
                status: 'active',
                activeClick: false
            }, {
                key: 7,
                name: 'Stena 7',
                status: 'active',
                activeClick: false
            }, {
                key: 8,
                name: 'Stena 8',
                status: 'active',
                activeClick: false
            }, {
                key: 9,
                name: 'Stena 9',
                status: 'active',
                activeClick: false
            }, {
                key: 10,
                name: 'Stena 10',
                status: 'active',
                activeClick: false
            }],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
        return _this;
    }

    babelHelpers.createClass(ListAlertsAndNotifications, [{
        key: 'onClickShowMore',
        value: function onClickShowMore(item) {
            var _this2 = this;

            var itemKey = item.key;

            return this.state.data.map(function (vessel) {
                if (vessel.key == itemKey) {
                    _this2.setState({
                        data: [babelHelpers.extends({}, item, {
                            activeClick: item.activeClick ? false : true
                        })]
                    });
                }
            });
        }
    }, {
        key: 'moreInfoAfterClick',
        value: function moreInfoAfterClick(item) {
            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                    }
                },
                _react2.default.createElement(
                    _reactNative.Text,
                    { style: { color: 'white', marginTop: 10, marginLeft: 10, marginBottom: 10 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                        }
                    },
                    'Vessel status is - ',
                    item.status,
                    '.'
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                        }
                    },
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'clear',
                        color: 'rgb(32, 177, 151)',
                        iconStyle: { marginLeft: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 106
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.iconsText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 111
                            }
                        },
                        'DISMISS'
                    ),
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'location-searching',
                        color: 'rgb(32, 177, 151)',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 113
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.iconsText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 117
                            }
                        },
                        'LOCATE'
                    ),
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'line-style',
                        color: 'rgb(32, 177, 151))',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.iconsText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 123
                            }
                        },
                        'DETAILS'
                    )
                )
            );
        }
    }, {
        key: '_renderItem',
        value: function _renderItem(item) {
            var _this3 = this;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.touchableContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        style: styles.touchableAlert,
                        onPress: function onPress() {
                            return _this3.onClickShowMore(item);
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 132
                        }
                    },
                    _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'warning',
                        color: 'rgb(156, 57, 53)',
                        iconStyle: { marginLeft: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136
                        }
                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { flexDirection: 'column', marginLeft: -30 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 142
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: 'white' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 143
                                }
                            },
                            item.name
                        ),
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: { color: 'rgb(146, 164, 170)', fontSize: 10 }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 146
                                }
                            },
                            'SPEED OVER 15% INSTRUCTED'
                        )
                    ),
                    item.activeClick ? _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'keyboard-arrow-up',
                        color: 'rgb(146, 164, 170)',
                        iconStyle: { marginRight: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 151
                        }
                    }) : _react2.default.createElement(_reactNativeElements.Icon, {
                        name: 'keyboard-arrow-down',
                        color: 'rgb(146, 164, 170)',
                        iconStyle: { marginRight: 10 },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 157
                        }
                    })
                ),
                item.activeClick ? this.moreInfoAfterClick(item) : null
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                },
                _react2.default.createElement(_reactNative.FlatList, {
                    data: this.state.data,
                    renderItem: function renderItem(_ref) {
                        var item = _ref.item;

                        return _this4._renderItem(item);
                    },
                    keyExtractor: function keyExtractor(item) {
                        return item.key;
                    },
                    extraData: this.state,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 177
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
    },
    iconsText: {
        fontSize: 10,
        color: 'white',
        marginLeft: -40,
        paddingRight: 10
    }
});