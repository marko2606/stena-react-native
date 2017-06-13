import { Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;

import {colors} from '../../Colors';

export const styles = {
    dashboardElementContainer: {
        alignItems: 'center'
    },
    dashboardElementTitle: {
        color: colors['whiteColor'],
        fontSize: 12,
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
        borderRadius: 45,
        height: 90,
        marginTop: 5,
        width: 90
    },
    dashboardProfileUsername: {
        alignSelf: 'center',
        color: colors['whiteColor'],
        fontSize: 20
    },
    dashboardProfileGradient: {
        alignSelf: 'center',
        borderRadius: 50,
        height: 100,
        marginTop: 15,
        marginBottom: 10,
        width: 100
    }
};