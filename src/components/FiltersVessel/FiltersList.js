import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { Font } from 'expo';

import { FilterGroup } from './FilterGroup';
import { filterGroup } from '../../utils/FilterGroupHelperData';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';
import { colors } from '../../Colors';

import { FiltersCheckbox } from './FiltersCheckbox';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class FiltersList extends Component {

    constructor() {
        super();
        this.state = {
            fontLoaded: false,
            activeFilterGroup: false,
            activeFilterGroup2: false,
            activeFilterGroup3: false,
            activeFilterGroup4: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    onClickExpandGroup(groups) {
        switch (groups) {
            case 'groups':
                this.setState({
                    activeFilterGroup: this.state.activeFilterGroup ? false : true
                });
                break;
            case 'segment':
                this.setState({
                    activeFilterGroup2: this.state.activeFilterGroup2 ? false : true
                });
                break;
            case 'company':
                this.setState({
                    activeFilterGroup3: this.state.activeFilterGroup3 ? false : true
                });
                break;
            case 'vesselType':
                this.setState({
                    activeFilterGroup4: this.state.activeFilterGroup4 ? false : true
                });
                break;
            default:
                return groups
        }
    }

    iconRender(groups) {
        let arrowUp = <Icon name="keyboard_arrow_up" size={25} color={colors['grayColor']}/>;
        let arrowDown = <Icon name="keyboard_arrow_down" size={25} color={colors['grayColor']}/>;

        switch (groups) {
            case 'groups':
                return this.state.activeFilterGroup ? arrowUp : arrowDown;
            break;
            case 'segment':
                return this.state.activeFilterGroup2 ? arrowUp : arrowDown;
                break;
            case 'company':
                return this.state.activeFilterGroup3 ? arrowUp : arrowDown;
                break;
            case 'vesselType':
                return this.state.activeFilterGroup4 ? arrowUp : arrowDown;
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
                    renderFilterList={this.state.activeFilterGroup ? this.renderFilterList('groups') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'groups')}
                    Icon={this.iconRender('groups')}
                />

                <FilterGroup
                    heading='Filter by segment'
                    renderFilterList={this.state.activeFilterGroup2 ? this.renderFilterList('segment') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'segment')}
                    Icon={this.iconRender('segment')}
                />

                <FilterGroup
                    heading='Filter by company'
                    renderFilterList={this.state.activeFilterGroup3 ? this.renderFilterList('company') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'company')}
                    Icon={this.iconRender('company')}
                />

                <FilterGroup
                    heading='Filter by vessel type'
                    renderFilterList={this.state.activeFilterGroup4 ? this.renderFilterList('vesselType') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'vesselType')}
                    Icon={this.iconRender('vesselType')}
                />
            </ScrollView>
        );
    }
}

export default FiltersList;
