import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native'
import { Font } from 'expo';
import { connect } from 'react-redux';

import { FilterGroup } from './FilterGroup';
import { filterGroup2 } from '../../utils/FilterDropdownGroup';

import { changeFilterGroup } from './filters-action';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../../utils/config.json';
import { colors } from '../../Colors';

const Icon = createIconSetFromIcoMoon(icoMoonConfig, "icomoon");

class FiltersList extends Component {

    constructor() {
        super();
        this.state = {
            fontLoaded: false,
            activeFilterGroup: false,
            activeFilterGroup2: false,
            activeFilterGroup3: false,
            activeFilterGroup4: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'icomoon': require('../../assets/fonts/icomoon.ttf')
        });

        this.setState({fontLoaded: true});
    }

    renderFilterList(groups) {
        return filterGroup2.map((filter) => {
            if(filter.type == groups) {
                return (
                    <View
                        key={filter.id}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingLeft: 30 }}
                    >
                        <Text style={{ color: 'white', fontSize: 13 }}>{filter.group}</Text>
                        <View style={{ height: 14, width: 14, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#28FFCA' }}/>
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

    iconRender() {
        let arrowUp = <Icon name="keyboard_arrow_up" size={25} color={colors['grayColor']}/>;
        let arrowDown = <Icon name="keyboard_arrow_down" size={25} color={colors['grayColor']}/>;

        return (
            this.state.activeFilterGroup ? arrowUp : arrowDown
        )
    }

    render() {

        if (!this.state.fontLoaded) {
            return null;
        }

        return (
            <ScrollView style={{ padding: 5 }}>
                <FilterGroup
                    heading='Filter by groups'
                    renderFilterList={this.state.activeFilterGroup ? this.renderFilterList('groups') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'groups')}
                    Icon={this.iconRender()}
                />

                <FilterGroup
                    heading='Filter by segment'
                    renderFilterList={this.state.activeFilterGroup2 ? this.renderFilterList('segment') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'segment')}
                    Icon={this.iconRender()}
                />

                <FilterGroup
                    heading='Filter by company'
                    renderFilterList={this.state.activeFilterGroup3 ? this.renderFilterList('company') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'company')}
                    Icon={this.iconRender()}
                />

                <FilterGroup
                    heading='Filter by vessel type'
                    renderFilterList={this.state.activeFilterGroup4 ? this.renderFilterList('vesselType') : null}
                    onPress={this.onClickExpandGroup.bind(this, 'vesselType')}
                    Icon={this.iconRender()}
                />
            </ScrollView>
        );
    }
}


const mapStateToProps = state => {
    return {
        activeFilterGroup: state.filtersGroupReducer.activeFilterGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilterActivity: () => {
            changeFilterGroup(dispatch)
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);




/*

<ScrollView style={{ padding: 5 }}>
    <FilterGroup
        heading='Filter by groups'
        renderFilterList={this.state.activeFilterGroup ? this.renderFilterList() : null}
        onPress={this.onClickExpandGroup.bind(this, 'groups')}
        Icon={this.iconRender()}
    />

    <FilterGroup
        heading='Filter by segment'
        renderFilterList={this.state.activeFilterGroup ? this.renderFilterList() : null}
        onPress={this.onClickExpandGroup.bind(this, 'segment')}
        Icon={this.iconRender()}
    />

    <FilterGroup
        heading='Filter by company'
        renderFilterList={this.state.activeFilterGroup ? this.renderFilterList() : null}
        onPress={this.onClickExpandGroup.bind(this, 'company')}
        Icon={this.iconRender()}
    />

    <FilterGroup
        heading='Filter by vessel type'
        renderFilterList={this.state.activeFilterGroup ? this.renderFilterList() : null}
        onPress={this.onClickExpandGroup.bind(this, 'vesselType')}
        Icon={this.iconRender()}
    />
</ScrollView>*/
