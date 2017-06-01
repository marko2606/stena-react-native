Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Zocial = require('@expo/vector-icons/Zocial');

var _Zocial2 = babelHelpers.interopRequireDefault(_Zocial);

var _Octicons = require('@expo/vector-icons/Octicons');

var _Octicons2 = babelHelpers.interopRequireDefault(_Octicons);

var _MaterialIcons = require('@expo/vector-icons/MaterialIcons');

var _MaterialIcons2 = babelHelpers.interopRequireDefault(_MaterialIcons);

var _MaterialCommunityIcons = require('@expo/vector-icons/MaterialCommunityIcons');

var _MaterialCommunityIcons2 = babelHelpers.interopRequireDefault(_MaterialCommunityIcons);

var _Ionicons = require('@expo/vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _Foundation = require('@expo/vector-icons/Foundation');

var _Foundation2 = babelHelpers.interopRequireDefault(_Foundation);

var _EvilIcons = require('@expo/vector-icons/EvilIcons');

var _EvilIcons2 = babelHelpers.interopRequireDefault(_EvilIcons);

var _Entypo = require('@expo/vector-icons/Entypo');

var _Entypo2 = babelHelpers.interopRequireDefault(_Entypo);

var _FontAwesome = require('@expo/vector-icons/FontAwesome');

var _FontAwesome2 = babelHelpers.interopRequireDefault(_FontAwesome);

var _SimpleLineIcons = require('@expo/vector-icons/SimpleLineIcons');

var _SimpleLineIcons2 = babelHelpers.interopRequireDefault(_SimpleLineIcons);

exports.default = function (type) {
  switch (type) {
    case 'zocial':
      return _Zocial2.default;
    case 'octicon':
      return _Octicons2.default;
    case 'material':
      return _MaterialIcons2.default;
    case 'material-community':
      return _MaterialCommunityIcons2.default;
    case 'ionicon':
      return _Ionicons2.default;
    case 'foundation':
      return _Foundation2.default;
    case 'evilicon':
      return _EvilIcons2.default;
    case 'entypo':
      return _Entypo2.default;
    case 'font-awesome':
      return _FontAwesome2.default;
    case 'simple-line-icon':
      return _SimpleLineIcons2.default;
    default:
      return _MaterialIcons2.default;
  }
};