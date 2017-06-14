import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

export const Dropdown = (props) => {
    const {
        dropdownStyle, options,
        onSelect, dropdownTextStyle,
        textStyle, defaultValue,
        dropdownTextHighlightStyle, renderSeparator
    } = props;

    return (
        <ModalDropdown
            dropdownStyle={dropdownStyle}
            options={options}
            onSelect={onSelect}
            dropdownTextStyle={dropdownTextStyle}
            textStyle={textStyle}
            defaultValue={defaultValue}
            dropdownTextHighlightStyle={dropdownTextHighlightStyle}
            renderSeparator={renderSeparator}
        />
    )
};