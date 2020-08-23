import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Status from '../../presentation/Status/Status';
import Indicator from '../../presentation/Indicator/Indicator';
import './Screen.scss';
import { connect } from 'react-redux';

export class Screen extends Component {
    render() {
        return (
            <Wrapper componentName="Screen">
                <div id="screen-switch" className={`Screen--switch ${this.props.isDeviceOn ? 'Screen--switch-on' : 'Screen--switch-off'}`}>
                    <Indicator text={ this.props.currentIndicator } />
                    <Status text={ this.props.currentScreenContents } />
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    currentScreenContents: state.safe.currentScreenContents,
    currentIndicator: state.safe.currentIndicator,
    isDeviceOn: state.safe.isDeviceOn
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
