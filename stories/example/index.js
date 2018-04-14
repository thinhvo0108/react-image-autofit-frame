import React from 'react';

import AutofitImage from '../../src';

const Example = ({
    containerElementWidth,
    containerElementHeight,
    ...props
}) => {
    const containerStyle = {
        width: containerElementWidth,
        height: containerElementHeight,
        border: '2px solid #cccccc'
    };
    return (
        <div style={containerStyle}>
            <AutofitImage {...props} />
        </div>
    );
};

export default Example;