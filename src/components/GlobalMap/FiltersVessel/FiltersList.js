import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { Font } from 'expo';

import { FilterGroup } from './FilterGroup';
import { filterGroup } from '../../../utils/FilterGroupHelperData';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../../utils/config.json';
import { colors } from '../../../Colors';

import { FiltersCheckbox } from './FiltersCheckbox';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class FiltersList extends Component {

    constructor() {
        super();
        this.state = {
            fontLoaded: false,
            vesselTypeGroup: false,
            vesselTypeGroup2: false,
            vesselTypeGroup3: false,
            vesselTypeGroup4: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    onClickExpandGroup(groups) {
        let { vesselTypeGroup, vesselTypeGroup2, vesselTypeGroup3, vesselTypeGroup4 } = this.state;

        switch (groups) {
            case 'groups':
                this.setState({
                    vesselTypeGroup: vesselTypeGroup ? false : true
                });
                break;
            case 'segment':
                this.setState({
                    vesselTypeGroup2: vesselTypeGroup2 ? false : true
                });
                break;
            case 'company':
                this.setState({
                    vesselTypeGroup3: vesselTypeGroup3 ? false : true
                });
                break;
            case 'vesselType':
                this.setState({
                    vesselTypeGroup4: vesselTypeGroup4 ? false : true
                });
                break;
            default:
                return groups
        }
    }

    iconRender(groups) {
        let arrowSize = 25;
        let arrowUp = <Icon name="keyboard_arrow_up" size={arrowSize} color={colors['grayColor']}/>;
        let arrowDown = <Icon name="keyboard_arrow_down" size={arrowSize} color={colors['grayColor']}/>;

        let { vesselTypeGroup, vesselTypeGroup2, vesselTypeGroup3, vesselTypeGroup4 } = this.state;

        switch (groups) {
            case 'groups':
                return vesselTypeGroup ? arrowUp : arrowDown;
            break;
            case 'segment':
                return vesselTypeGroup2 ? arrowUp : arrowDown;
                break;
            case 'company':
                return vesselTypeGroup3 ? arrowUp : arrowDown;
                break;
            case 'vesselType':
                return vesselTypeGroup4 ? arrowUp : arrowDown;
                break;
            default:
                return groups
        }
    }

    renderFilterList(groups) {
        return filterGroup.map((filter) => {
            if(filter.type === groups) {
                return (
                    <View key={filter.id} >
                        <FiltersCheckbox
                            vesselsName={filter.group}
                            numberOfVessels={filter.id}
                        />
                    </View>
                )
            }
        })
    }

    render() {
        if (!this.state.fontLoaded) return null;

        return (
            <ScrollView>
                <FilterGroup
                    heading='Filter by groups'
                    renderFilterList={this.state.vesselTypeGroup ? this.renderFilterList('groups') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'groups')}
                    Icon={this.iconRender('groups')}
                />

                <FilterGroup
                    heading='Filter by segment'
                    renderFilterList={this.state.vesselTypeGroup2 ? this.renderFilterList('segment') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'segment')}
                    Icon={this.iconRender('segment')}
                />

                <FilterGroup
                    heading='Filter by company'
                    renderFilterList={this.state.vesselTypeGroup3 ? this.renderFilterList('company') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'company')}
                    Icon={this.iconRender('company')}
                />

                <FilterGroup
                    heading='Filter by vessel type'
                    renderFilterList={this.state.vesselTypeGroup4 ? this.renderFilterList('vesselType') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'vesselType')}
                    Icon={this.iconRender('vesselType')}
                />
            </ScrollView>
        );
    }
}

export default FiltersList;
