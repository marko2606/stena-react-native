import React, {Component} from 'react';
import {View} from 'react-native';
import {DashboardElement} from './DashboardElement';
import {menu} from '../../utils/MenuHelper';
import _ from 'lodash';

import {styles} from './DashboardStyle';

export class DashboardList extends Component {
    render() {
        const rows = _.chunk(menu, 3);

        return (
            <View>
                {rows.map((row, i) => {
                        return (
                            <View style={styles.dashboardListContainer} key={i}>
                                {row.map((menuItem, k) => {
                                    return <DashboardElement
                                        title={menuItem.title} icon={menuItem.icon} counter={menuItem.counter} key={k}/>
                                })}
                            </View>
                        )
                    }
                )}
            </View>
        )
    }
}