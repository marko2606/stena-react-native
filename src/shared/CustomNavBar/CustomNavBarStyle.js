import {colors} from '../../Colors';

export const styles = {
    navbarContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 50,
        backgroundColor: colors['gradientPrimaryColor2'],
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors['primaryColor'],
        flexDirection: 'row'
    },
    navbarTitle: {
        color: colors['whiteColor'],
        textAlign: 'center',
        fontSize: 14
    },
    navbarIcon: {
        color: colors['whiteColor']
    },
    indentLeft: {
        paddingLeft: 12
    },
    indentRight: {
        paddingRight: 12
    }
};
