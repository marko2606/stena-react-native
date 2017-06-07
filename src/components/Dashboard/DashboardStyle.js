import {colors} from '../../Colors';

export const styles = {
    dashboardElementContainer: {
        alignItems: 'center'
    },
    dashboardElementTitle: {
        color: colors['whiteColor'],
        fontSize: 14,
        flexGrow: 1,
        paddingTop: 10,
        textAlign: 'center'
    },
    dashboardElementIcon: {
        color: colors['primaryColor']
    },
    dashboardListContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    dashboardProfileImage: {
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: colors['gradientPrimaryColor2'],
        borderRadius: 50,
        height: 100,
        marginTop: 5,
        width: 100
    },
    dashboardProfileUsername: {
        alignSelf: 'center',
        color: colors['whiteColor'],
        fontSize: 22
    },
    dashboardProfileGradient: {
        alignSelf: 'center',
        borderRadius: 55,
        height: 110,
        marginTop: 15,
        marginBottom: 10,
        width: 110
    }
};