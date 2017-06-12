import React from 'react';
import { DashboardProfile } from './DashboardProfile';
import { DashboardList } from './DashboardList';

import { Gradient } from '../../shared/';
import { styles } from './DashboardStyle';
import { colors2 } from '../../Colors';

const Dashboard = () => {
    const { linearGradient } = styles;
     return (
         <Gradient
             colors={[colors2['primaryColor2'], colors2['primaryColor']]}
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