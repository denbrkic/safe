import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Key from '../../presentation/Key/Key';
import './Keypad.scss';
import {connect} from 'react-redux';
import {
    updateScreenContents, 
    toggleKeyInput,
    setNewPassword,
    displayState,
    changeState,
    verifyPassword,
    verifyMasterPassword,
    deviceOn
} from '../../actions/safe';

export class Keypad extends Component {

    endInputTimeout = null;
    deviceTimeout = null;

    componentDidMount() {
        this.props.onDisplayState(this.props.currentStateId);
    }

    updateState = (stateId, toggleKeys = true) => {
        if (toggleKeys) {
            this.props.onToggleKeyInput();
        }
        this.props.onChangeState(stateId);
        this.props.onDisplayState(stateId);
    }

    onKeyClickCallback = (key) => {
        if (this.deviceTimeout !== null) {
            clearTimeout(this.deviceTimeout);
        }

        if (!this.props.isDeviceOn) {
            this.props.onDeviceOn(true);
        }
        
        if (this.props.keyInputDisabled === false) {
            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length < 6 && !isNaN(key)) {
                // The panel is ready for password input
                this.props.onUpdateScreenContents(key);
            }

            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length === 6 && key === 'L') {
                // Set the new password and lock the door
                this.props.onSetNewPassword();
                this.updateState(2);
                // Start locking...
                setTimeout(() => {
                    this.updateState(3);
                }, 3000);
            }

            if (this.props.currentStateId === 3 && this.props.currentScreenContents.length < 5 && !isNaN(key)) {
                // Input your password to unlock
                this.props.onUpdateScreenContents(key);
            }

            if (this.props.currentStateId === 3 && this.props.currentScreenContents.length === 5) {
                // Verify the password
                this.props.onUpdateScreenContents(key);
                this.props.onToggleKeyInput();  // disable keys
                setTimeout(() => {
                    this.props.onVerifyPassword();
                    if (this.props.isMatch) {
                        // There is a match
                        this.updateState(4, false);
                        // Start unlocking...
                        setTimeout(() => {
                            this.updateState(1);
                        }, 3000);
                    } else {
                        // No Match
                        if (this.props.currentScreenContents === '000000') {
                            // Enter service mode
                            setTimeout(() => {
                                this.updateState(6);
                            }, 1200);
                        } else {
                            // Error
                            this.updateState(5, false);
                            // Go back to password verification
                            setTimeout(() => {
                                this.updateState(3);
                            }, 1200);
                        }
                    }
                }, 1200);
            }

            if (this.props.currentStateId === 6 && this.props.currentScreenContents.length <= 13) {
                // Service mode
                if (this.endInputTimeout !== null) {
                    clearTimeout(this.endInputTimeout);
                }
                this.props.onUpdateScreenContents(key);

                this.endInputTimeout = setTimeout(() => {
                    this.updateState(7);
                    this.props.onVerifyMasterPassword();
                    if (this.props.isMasterCodeMatch) {
                        // There is a match
                        this.updateState(4, false);
                        // Start unlocking...
                        setTimeout(() => {
                            this.updateState(1);
                        }, 3000);
                    } else {
                        // Error
                        this.updateState(5, false);
                        // Go back to password verification
                        setTimeout(() => {
                            this.updateState(3);
                        }, 1200);
                    }
                }, 1200);
            }
        }

        // Turn the device off after x seconds of inactivity...
        this.deviceTimeout = setTimeout(() => {
            this.props.onDeviceOn(false);
        }, 15000);
    }

    render() {
        return (
            <Wrapper componentName="Keypad">
                
                <div>
                    <Key digit="7" cb={this.onKeyClickCallback} />
                    <Key digit="8" cb={this.onKeyClickCallback} />
                    <Key digit="9" cb={this.onKeyClickCallback} />
                </div>
                <div>
                    <Key digit="4" cb={this.onKeyClickCallback} />
                    <Key digit="5" cb={this.onKeyClickCallback} />
                    <Key digit="6" cb={this.onKeyClickCallback} />
                </div>
                <div>
                    <Key digit="1" cb={this.onKeyClickCallback} />
                    <Key digit="2" cb={this.onKeyClickCallback} />
                    <Key digit="3" cb={this.onKeyClickCallback} />
                </div>
                <div>
                    <Key digit="*" cb={this.onKeyClickCallback} />
                    <Key digit="0" cb={this.onKeyClickCallback} />
                    <Key digit="L" cb={this.onKeyClickCallback} />
                </div>
                
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    currentStateId: state.safe.currentStateId,
    currentScreenContents: state.safe.currentScreenContents,
    keyInputDisabled: state.safe.keyInputDisabled,
    isMatch: state.safe.isMatch,
    isMasterCodeMatch: state.safe.isMasterCodeMatch,
    isDeviceOn: state.safe.isDeviceOn
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateScreenContents: (payload) => dispatch(updateScreenContents(payload)),
    onToggleKeyInput: () => dispatch(toggleKeyInput()),
    onSetNewPassword: () => dispatch(setNewPassword()),
    onDisplayState: (payload) => dispatch(displayState(payload)),
    onChangeState: (payload) => dispatch(changeState(payload)),
    onVerifyPassword: (payload) => dispatch(verifyPassword(payload)),
    onVerifyMasterPassword: (payload) => dispatch(verifyMasterPassword(payload)),
    onDeviceOn: (payload) => dispatch(deviceOn(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
