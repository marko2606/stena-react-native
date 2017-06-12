import { Platform, NativeModules, Dimensions } from 'react-native';
const { StatusBarManager } = NativeModules;
import {colors2} from '../../Colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export const styles = {
    container: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT
    },

    /* Liner Gradient */
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: SCREEN_HEIGHT
    },

    pickerContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        backgroundColor: colors2['footerBackgroundColor']
    },
    pickerStyle: {
        color: colors2['gray']
    },

    /* --- Footer --- */
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerIconContainer: {
        flexDirection: 'row'
    },

    /* --- ListAlertsAndNotifications --- */
    listContainer: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: HEIGHT_DEVICE / 15,
        marginTop: 5,
        flex: 1
    },
    touchableContainer: {
        backgroundColor: colors2['primaryColor'],
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: colors2['mainGreenOpacity']
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    touchableContent: {
        flexDirection: 'column',
        marginLeft: -30
    },
    detailContent: {
        color: colors2['gray'],
        fontSize: 10
    },
    titleContent: {
        color: colors2['white']
    },
    vesselInformationText : {
        color: colors2['white'],
        marginTop: 10,
        marginLeft: 10,
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
        justifyContent: 'center',
        paddingTop: 10
    },
    buttonsStyle: {
        height: 40,
        width: '45%',
        borderWidth: 1,
        borderColor: colors2['mainGreen'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors2['white'],
        backgroundColor: 'transparent'
    }
};