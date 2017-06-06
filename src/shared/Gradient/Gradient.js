import React, { Component } from 'react';
import {LinearGradient} from 'expo';

export class Gradient extends Component {
    render() {
        return (
            <LinearGradient
                colors={this.props.colors}
                start={[this.props.start.x, this.props.start.y]}
                end={[this.props.end.x, this.props.end.y]}
                style={this.props.style}
            >
                {this.props.children}
            </LinearGradient>
        )
    }
}