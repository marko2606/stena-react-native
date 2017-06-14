import { Platform, NativeModules, Dimensions } from 'react-native';
const { StatusBarManager } = NativeModules;
import {colors} from '../../Colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export const styles = {
    container: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT
    },

    /* --- Picker - Dropdown --- */
    pickerContainer: {
        marginTop: 20,
        backgroundColor: colors['primaryColor2'],
        borderWidth: 1,
        borderColor: colors['primaryColor1Opacity'],
        flexDirection: 'row'
    },
    dropdownStyle: {
        alignItems: 'center',
        width: '92%',
        height: '60%',
        backgroundColor: 'transparent',
        borderWidth: 0,
        flexDirection: 'row'
    },
    dropdownTextStyle: {
        fontSize: 16,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: colors['whiteColor'],
        backgroundColor: colors['primaryColor2'],
        borderBottomWidth: 0.5,
        borderBottomColor: colors['primaryColor1Opacity']
    },
    textStyle: {
        color: colors['grayColor'],
        padding: 12,
        fontSize: 13,
        borderColor: 'red'
    },
    dropdownTextHighlightStyle: {
        color: colors['primaryColor1']
    },

    /* --- Footer --- */
    footerContainer: {
        justifyContent: 'center'
    },
    footerIconContainer: {
        flexDirection: 'row'
    },
    footerIconWrapper: {
        width: '50%'
    },
    footerIconTitle: {
        fontSize: 10,
        textAlign: 'center',
        color: colors['whiteColor']
    },
    footerIconTitleWarning: {
        color: colors['warningColor']
    },
    footerIcon: {
        alignSelf: 'center',
        color: colors['whiteColor']
    },
    footerIconWarning: {
        alignSelf: 'center',
        color: colors['warningColor']
    },
    /* --- ListAlertsAndNotifications --- */
    listContainer: {
        marginBottom: HEIGHT_DEVICE / 15,
        marginTop: 5,
        flex: 1
    },
    touchableContainer: {
        backgroundColor: colors['primaryColor2'],
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderWidth: 1,
        borderColor: colors['primaryColor1Opacity']
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    touchableContent: {
        flexDirection: 'column'
    },
    detailContent: {
        color: colors['grayColor'],
        fontSize: 10
    },
    titleContent: {
        color: colors['whiteColor']
    },
    vesselInformationText: {
        color: colors['whiteColor'],
        marginTop: 10,
        marginBottom: 10
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconsText: {
        fontSize: 10,
        color: colors['whiteColor'],
        marginLeft: -40,
        paddingRight: 10
    },

    /* --- Top buttons ---- */
    topButtons: {
        flexDirection: 'row'
    },
    buttonsStyle: {
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: colors['primaryColor1'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors['whiteColor'],
        backgroundColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
};