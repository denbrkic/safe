import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './Status.scss';

const Status = (props) => {
    return (
        <Wrapper componentName="Status">
            <span>{ props.text }</span>
        </Wrapper>
    );
}

export default Status;
