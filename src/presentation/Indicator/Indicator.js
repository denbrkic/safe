import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './Indicator.scss';

const Indicator = (props) => {
    return (
        <Wrapper componentName="Indicator">
            <span>{props.text}</span>
        </Wrapper>
    );
}

export default Indicator;
