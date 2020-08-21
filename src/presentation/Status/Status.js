import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './Status.scss';

// limit to 14 digits

const Status = (props) => {
    return (
        <Wrapper componentName="Status">
            <span>{props.text}</span>
        </Wrapper>
    );
}

export default Status;
