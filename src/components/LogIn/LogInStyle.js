import {colors2} from '../../Colors';

export const styles = {
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1Container: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#AB2416',
        marginBottom: 30,
        marginTop: -15
    },
    h1: {
        fontSize: 32,
        color: '#FFFFFF',
        padding: 0,
        marginBottom: -7,
        fontWeight: '900',
        backgroundColor: 'transparent'
    },
    welcomeText: {
        color: '#FFFFFF',
        fontWeight: '100',
        backgroundColor: 'transparent'
    },
    SOPText: {
        width: '80%',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '600',
        backgroundColor: 'transparent'
    },
    image: {
        marginTop: 30,
        marginBottom: 30,
        width: '80%'
    },
    input: {
        alignSelf: 'center',
        height: 40,
        width: '80%',
        textAlign: 'center',
        fontWeight: "100",
        borderWidth: 0.5,
        borderColor: 'rgba(29, 166, 138, .5)',
        marginBottom: 10,
        backgroundColor: '#0C252E',
    },
    logInButton: {
        marginTop: 20,
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#1DA68A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1
    },
    logInButtonView: {
        backgroundColor: '#1DA68A',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    logInButtonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
    footer: {
        width: '80%',
        flexDirection: 'row',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    footerSection: {
        width: '50%',
        justifyContent: 'space-between'
    },
    footerItemLeft: {
        color: '#FFFFFF',
        fontWeight: '100',
        textAlign: 'left',
        fontSize: 10,
        backgroundColor: 'transparent'
    },
    footerItemRight: {
        color: '#FFFFFF',
        fontWeight: '100',
        textAlign: 'right',
        fontSize: 10,
        backgroundColor: 'transparent'
    },
    gradient: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    loginIcon: {
        color: colors2['redWarning'],
        paddingBottom: 15
    }
};