import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSerialNumber} from '../../actions/safe';

export class ControlPanel extends Component {

    componentDidMount() {
        this.props.onFetchSerialNumber(33);
    }

    render() {
        return (
            <div>
                
            </div>
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
