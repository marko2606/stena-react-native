import { Platform, NativeModules, Dimensions } from 'react-native';
const { StatusBarManager } = NativeModules;
import {colors2} from '../../Colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export const styles = {
    container: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT
    },

    pickerContainer: {
        marginTop: 20,
        backgroundColor: colors2['footerBackgroundColor'],
        borderWidth: 1,
        borderColor: colors2['mainGreenOpacity']
    },
    pickerStyle: {
        color: colors2['gray']
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
        color: colors2['white']
    },
    footerIconTitleWarning: {
        color: colors2['redWarning']
    },
    footerIcon: {
        alignSelf: 'center',
        color: colors2['white']
    },
    footerIconWarning: {
        alignSelf: 'center',
        color: colors2['redWarning']
    },
    /* --- ListAlertsAndNotifications --- */
    listContainer: {
        marginBottom: HEIGHT_DEVICE / 15,
        marginTop: 5,
        flex: 1
    },
    touchableContainer: {
        backgroundColor: colors2['primaryColor'],
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderWidth: 1,
        borderColor: colors2['mainGreenOpacity']
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    touchableContent: {
        flexDirection: 'column'
    },
    detailContent: {
        color: colors2['gray'],
        fontSize: 10
    },
    titleContent: {
        color: colors2['white']
    },
    vesselInformationText: {
        color: colors2['white'],
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
        color: colors2['white'],
        marginLeft: -40,
        paddingRight: 10
    },

    /* --- Top buttons ---- */
    topButtons: {
        flexDirection: 'row',
        paddingTop: 10
    },
    buttonsStyle: {
        height: 40,
        width: '50%',
        borderWidth: 1,
        borderColor: colors2['mainGreen'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors2['white'],
        backgroundColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
};