import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './Key.scss';

const Key = (props) => {
    const onKeyClick = () => {
        props.cb(props.digit);
    }

    return (
        <Wrapper componentName="Key" on>
            <div className="Key--digit" onClick={ onKeyClick }>
                { props.digit }
            </div>
        </Wrapper>
    )
}

export default Key;
