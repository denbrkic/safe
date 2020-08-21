import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import './ControlPanel.scss';
import {connect} from 'react-redux';
import {fetchSerialNumber} from '../../actions/safe';

export class ControlPanel extends Component {

    componentDidMount() {
        this.props.onFetchSerialNumber(33);
    }

    render() {
        return (
            <Wrapper componentName="ControlPanel">
                
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    states: state.data.states
});

const mapDispatchToProps = (dispatch) => ({
    onFetchSerialNumber: (payload) => dispatch(fetchSerialNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
