import React from 'react';
import PropTypes from 'prop-types';
import RadioForm from 'react-native-simple-radio-button';

const propTypes = {
    /** List of choices to display via radio buttons */
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })).isRequired,

    /** Callback to fire when selecting a radio button */
    onPress: PropTypes.func.isRequired,
};

const RadioButtons = props => (
    <RadioForm
        radio_props={props.items}
        onPress={val => props.onPress(val)}
        initial={-1}
        buttonColor="#dddddd"
        selectedButtonColor="#cccccc"
    />
);

RadioButtons.propTypes = propTypes;

export default RadioButtons;
