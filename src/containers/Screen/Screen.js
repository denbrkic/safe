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
                <Indicator text={this.props.currentIndicator} />
                <Status text={this.props.currentScreenContents} />
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    currentScreenContents: state.safe.currentScreenContents,
    currentIndicator: state.safe.currentIndicator
});

const mapDispatchToProps = (dispatch) => ({
    //onFetchSerialNumber: (payload) => dispatch(fetchSerialNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
