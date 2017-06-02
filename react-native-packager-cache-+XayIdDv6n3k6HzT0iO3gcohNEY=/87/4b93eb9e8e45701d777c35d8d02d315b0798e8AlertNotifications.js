Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
var _jsxFileName = '/home/nemanja/WebstormProjects/stena-react-native/src/pages/AlertsNotifications/AlertNotifications.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var _Gradient = require('../../components/Gradient');

var _FooterAlertsNotifications = require('../../components/FooterAlertsNotifications');

var _ListAlertsAndNotifications = require('./ListAlertsAndNotifications');

var _ListAlertsAndNotifications2 = babelHelpers.interopRequireDefault(_ListAlertsAndNotifications);

var AlertNotifications = function (_React$Component) {
    babelHelpers.inherits(AlertNotifications, _React$Component);

    function AlertNotifications() {
        babelHelpers.classCallCheck(this, AlertNotifications);

        var _this = babelHelpers.possibleConstructorReturn(this, (AlertNotifications.__proto__ || Object.getPrototypeOf(AlertNotifications)).call(this));

        _this.state = {
            selectedFilterAlerts: 'initial'
        };
        return _this;
    }

    babelHelpers.createClass(AlertNotifications, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Gradient.Gradient,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.container, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.topButtons, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { style: [styles.buttonsStyle, { backgroundColor: 'rgb(32, 177, 151)' }], __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: styles.buttonText, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 28
                                    }
                                },
                                'ACTIVE'
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { style: styles.buttonsStyle, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            },
                            _react2.default.createElement(
                                _reactNative.Text,
                                { style: styles.buttonText, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32
                                    }
                                },
                                'DISMISSED'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.pickerContainer, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        _react2.default.createElement(
                            _reactNative.Picker,
                            {
                                selectedValue: this.state.selectedFilterAlerts,
                                onValueChange: function onValueChange(filter) {
                                    return _this2.setState({ selectedFilterAlerts: filter });
                                },
                                style: { color: 'rgb(146, 164, 170)' },
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 38
                                }
                            },
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'Filter Alerts by group...', value: 'initial', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'ALL VESSELS', value: 'allVessels', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'MY FLEET', value: 'myFleet', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'SUEZMAX', value: 'suezmax', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'STENA BULK', value: 'stenaBulk', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'STENA WECO', value: 'stenaWeco', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'GOLDEN STENA WECO', value: 'goldenStenaWeco', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            }),
                            _react2.default.createElement(_reactNative.Picker.Item, { label: 'STENA LNG', value: 'stenaLng', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(_ListAlertsAndNotifications2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    })
                ),
                _react2.default.createElement(
                    _FooterAlertsNotifications.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        _react2.default.createElement(_reactNativeElements.Icon, {
                            name: 'warning',
                            color: 'rgb(156, 57, 53)',
                            iconStyle: { marginTop: 6 },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        }),
                        _react2.default.createElement(_reactNativeElements.Icon, {
                            name: 'notifications-active',
                            color: 'white',
                            iconStyle: { marginTop: 6 },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        })
                    )
                )
            );
        }
    }]);
    return AlertNotifications;
}(_react2.default.Component);

exports.default = AlertNotifications;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    },
    buttonsStyle: {
        height: 40,
        width: '45%',
        borderWidth: 1,
        borderColor: 'rgb(32, 177, 151)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'transparent'
    },

    pickerContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        backgroundColor: 'rgb(11, 41, 53)'
    }
});