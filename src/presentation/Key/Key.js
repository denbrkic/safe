import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './Key.scss';

const Key = (props) => {
    return (
        <Wrapper componentName="Key">
            <span className="Key--digit">
                {props.digit}
            </span>
        </Wrapper>
    )
}

export default Key;
