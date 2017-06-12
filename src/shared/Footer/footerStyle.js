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
    footerBorderTopGradient: {
        position: 'absolute',
        left: 10,
        right: 10,
        top: 0,
        height: 1
    }
};