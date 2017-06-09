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
        top: HEIGHT_DEVICE - 65,
        alignItems: 'center'
    },
    footerBorderTop: {
        borderTopWidth: 2,
        borderTopColor: colors2['mainGreen'],
        width: '85%'
    }
};