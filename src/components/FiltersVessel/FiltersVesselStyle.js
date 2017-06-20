import { colors } from '../../Colors';

export const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: colors['gradientPrimaryColor2'],
        paddingBottom: 30
    },

    /* --- Footer --- */
    footerIconContainer: {
        flexDirection: 'row',
    },
    footerIconWrapper: {
        justifyContent: 'center',
        flexDirection: 'column',
        width: '25%'
    },
    footerIconTitle: {
        fontSize: 10,
        textAlign: 'center',
        color: colors['whiteColor']
    },
    footerIconTitleWarning: {
        color: colors['primaryColor1']
    },
    footerIcon: {
        alignSelf: 'center',
        color: colors['whiteColor']
    },
    footerIconWarning: {
        alignSelf: 'center',
        color: colors['primaryColor1']
    },

    /* --- Checkbox --- */
    checkBoxMain: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 10
    },
    leftTextContainer: {
        flexDirection: 'row'
    },
    leftTextVesselName: {
        color: colors['whiteColor'],
        fontSize: 12
    },
    leftTextNumberOfVessels: {
        color: colors['grayColor'],
        fontSize: 11,
        paddingLeft: 5
    },
    checkedImageContainer: {
        height: 15,
        width: 15,
        backgroundColor: 'transparent',
        borderWidth: 0.6,
        borderColor: colors['primaryColor1'],
        position: 'absolute',
        right: 0
    },
    checkedImageView: {
        flex: 1,
        margin: 1,
        backgroundColor: colors['primaryColor1']
    },

    /* --- Filter Group --- */
    filterGroupContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors['gradientPrimaryColor1'],
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    filterGroupView: {
        flexDirection: 'row'
    },
    textHeading: {
        color: colors['whiteColor'],
        fontSize: 18,
        paddingLeft: 5
    }
};