import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Status from '../../presentation/Status/Status';
import Indicator from '../../presentation/Indicator/Indicator';
import './Screen.scss';
import {connect} from 'react-redux';
import {fetchSerialNumber} from '../../actions/safe';

export class Screen extends Component {
    render() {
        return (
            <Wrapper componentName="Screen">
                <Indicator text="Unlocked" />
                <Status text="123456789012345" />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    //states: state.data.states
});

const mapDispatchToProps = (dispatch) => ({
    //onFetchSerialNumber: (payload) => dispatch(fetchSerialNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
