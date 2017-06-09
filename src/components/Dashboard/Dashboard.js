import React from 'react';
import { View } from 'react-native';
import { DashboardProfile } from './DashboardProfile';
import { DashboardList } from './DashboardList';

export const Dashboard = () =>
    <View>
        <DashboardProfile/>
        <DashboardList/>
    </View>;