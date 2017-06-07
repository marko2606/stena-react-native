import {colors2} from '../../Colors';

export const styles = {
    container: {
        flex: 1
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
        marginBottom: 65,
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
        borderColor: colors2['borderColorFlatListItem']
    },
    touchableAlert: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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