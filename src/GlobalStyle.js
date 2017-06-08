import { Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export const styles = {
    globalContainer: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT
    }
};
