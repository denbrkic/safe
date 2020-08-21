import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './SerialNumber.scss';

const SerialNumber = (props) => {
    return (
        <Wrapper componentName="SerialNumber">
            <span className="SerialNumber--text">S/N: {props.sn}</span>
        </Wrapper>
    )
}

export default SerialNumber;
