import { Dimensions } from 'react-native';
import {colors2} from '../../Colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = {
    container: {
        flex: 1
    },
    box: {
        backgroundColor: colors2['primaryColor'],
        flex: 1
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: SCREEN_HEIGHT
    }
};