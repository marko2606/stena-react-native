import React from 'react';
import {LinearGradient} from 'expo';

export const Gradient = (props) => {
    return (
        <LinearGradient
            colors={props.colors}
            start={[props.start.x, props.start.y]}
            end={[props.end.x, props.end.y]}
            style={props.style}
        >
            {props.children}
        </LinearGradient>
    )
};