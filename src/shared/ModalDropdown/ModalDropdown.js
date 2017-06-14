import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

export const Dropdown = (props) => {
    return (
        <ModalDropdown
            dropdownStyle={props.dropdownStyle}
            options={props.options}
            onSelect={props.onSelect}
            dropdownTextStyle={props.dropdownTextStyle}
            textStyle={props.textStyle}
            defaultValue={props.defaultValue}
            dropdownTextHighlightStyle={props.dropdownTextHighlightStyle}
            renderSeparator={props.renderSeparator}
        />
    )
};