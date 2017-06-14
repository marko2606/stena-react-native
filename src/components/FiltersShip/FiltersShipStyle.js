import {colors} from '../../Colors';

export const styles = {
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
    }
};