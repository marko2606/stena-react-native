import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './LogInStyle';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Icon
                iconStyle={{
                    marginTop: 50
                }}
                name='flag'
                type='font-awesome'
                color='#E31D1A'
            />
            <View style={styles.h1Container}>
                <Text style={styles.h1}>Stena Bulk</Text>
            </View>
            <Text style={styles.welcomeText}>WELCOME TO</Text>
            <Text style={[{fontSize: props.SOPFontSize}, styles.SOPText]}>
                STENA OPERATIONAL PLATFORM
            </Text>
        </View>
    )
};

export default Header;