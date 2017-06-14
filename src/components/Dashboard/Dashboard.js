import React from 'react';
import { DashboardProfile } from './DashboardProfile';
import { DashboardList } from './DashboardList';

import { Gradient } from '../../shared/';
import { styles } from './DashboardStyle';
import { colors } from '../../Colors';

const Dashboard = () => {
    const { linearGradient } = styles;
     return (
         <Gradient
             colors={[colors['gradientPrimaryColor1'], colors['gradientPrimaryColor2'], colors['gradientPrimaryColor3']]}
             style={linearGradient}
             start={{x: 0.0, y: 0.25}}
             end={{x: 0.5, y: 1.0}}
         >
             <DashboardProfile/>
             <DashboardList/>
         </Gradient>
     )
};

export default Dashboard;