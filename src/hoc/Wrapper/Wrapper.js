import React from 'react';

const Wrapper = (props) => {
    return (
        <div className={props.componentName}>
            {props.children}
        </div>
    )
}

export default Wrapper;
