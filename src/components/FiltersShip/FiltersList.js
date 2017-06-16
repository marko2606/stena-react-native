import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native'
import { Font } from 'expo';

import CheckBox from 'react-native-check-box'

import { FilterGroup } from './FilterGroup';
import { filterGroup2 } from '../../utils/FilterDropdownGroup';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';
import { colors } from '../../Colors';
import { styles } from './FiltersShipStyle';

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

    checkedImage() {
        const { checkedImageContainer, checkedImageView } = styles;
        return (
            <View style={checkedImageContainer}>
                <View style={checkedImageView}/>
            </View>
        )
    }

    unCheckedImage() {
        const { checkedImageContainer } = styles;
        return <View style={checkedImageContainer}/>
    }

    renderFilterList(groups) {
        const { checkBoxMain, leftTextCheckbox } = styles;

        return filterGroup2.map((filter) => {
            if(filter.type === groups) {
                return (
                    <View key={filter.id} >
                        <CheckBox
                            style={checkBoxMain}
                            onClick={()=> null}
                            isChecked={false}
                            leftText={filter.group}
                            leftTextStyle={leftTextCheckbox}
                            checkedImage={this.checkedImage()}
                            unCheckedImage={this.unCheckedImage()}
                        />
                    </View>
                )
            }
        })
    }

    onClickExpandGroup(groups) {
        if (groups === 'groups') {
            this.setState({
                activeFilterGroup: this.state.activeFilterGroup ? false : true
            })
        } else if (groups === 'segment') {
            this.setState({
                activeFilterGroup2: this.state.activeFilterGroup2 ? false : true
            })
        } else if (groups === 'company') {
            this.setState({
                activeFilterGroup3: this.state.activeFilterGroup3 ? false : true
            })
        } else if (groups === 'vesselType') {
            this.setState({
                activeFilterGroup4: this.state.activeFilterGroup4 ? false : true
            })
        }
    }

    iconRender(groups) {
        let arrowUp = <Icon name="keyboard_arrow_up" size={25} color={colors['grayColor']}/>;
        let arrowDown = <Icon name="keyboard_arrow_down" size={25} color={colors['grayColor']}/>;

        if (groups === 'groups') {
            return this.state.activeFilterGroup ? arrowUp : arrowDown
        } else if (groups === 'segment') {
            return this.state.activeFilterGroup2 ? arrowUp : arrowDown
        } else if (groups === 'company') {
            return this.state.activeFilterGroup3 ? arrowUp : arrowDown
        } else if (groups === 'vesselType') {
            return this.state.activeFilterGroup4 ? arrowUp : arrowDown
        }

    }

    render() {

        if (!this.state.fontLoaded) {
            return null;
        }

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
