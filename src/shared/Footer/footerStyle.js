import {colors2} from '../../Colors';
import { Dimensions } from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;

export const styles = {
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: colors2['footerBackgroundColor'],
        left: 0,
        right: 0,
        bottom: 0,
        height: HEIGHT_DEVICE / 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerBorderTop: {
        borderTopWidth: 2,
        borderTopColor: colors2['mainGreen'],
        width: '85%',
        position: 'absolute',
        top: 0
    }
};