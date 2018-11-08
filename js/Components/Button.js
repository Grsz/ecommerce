import React from 'react';
import { connect } from 'react-redux';

const Button = ({ props, dispatch }) => {
    const { element, onClick, title, ...otherProps } = props;
    return React.createElement(element, {
        ...otherProps,
        onClick: onClick ? () => dispatch((onClick)()) : undefined
    }, title)
};

export default connect()(Button)