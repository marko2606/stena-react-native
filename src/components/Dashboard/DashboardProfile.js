import React from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../Images';
import {Gradient} from '../../shared/Gradient/Gradient';

import {colors} from '../../Colors';
import {styles} from './DashboardStyle';

export const DashboardProfile = () => {
    const {dashboardProfileGradient, dashboardProfileImage, dashboardProfileUsername} = styles;
    return (
        <View>
            <Gradient
                colors={[colors['gradientPrimaryColor1'], colors['gradientPrimaryColor2'], colors['gradientPrimaryColor3']]}
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.5, y: 1.0}}
                style={dashboardProfileGradient}
            >
                <Image style={dashboardProfileImage} source={{uri: images['profile']}}/>
            </Gradient>
            <Text style={dashboardProfileUsername}>PETER BJORKBORG</Text>
        </View>
    )
};
