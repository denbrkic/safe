import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import SerialNumber from '../../presentation/SerialNumber/SerialNumber';
import Screen from '../Screen/Screen';
import './Panel.scss';
import Keypad from '../Keypad/Keypad';
import { connect } from 'react-redux';

export class Panel extends Component {
    render() {
        return (
            <Wrapper componentName="Panel">
                <Screen />
                <Keypad />
                <SerialNumber sn={this.props.serialNumber} />
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    serialNumber: state.safe.serialNumber
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
