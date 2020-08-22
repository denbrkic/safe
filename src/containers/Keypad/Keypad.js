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
    verifyPassword
} from '../../actions/safe';

export class Keypad extends Component {

    state = {
        isMatch: false
    }

    componentDidMount() {
        this.props.onDisplayState(this.props.currentStateId);
    }

    onKeyClickCallback = (key) => {
        if (this.props.keyInputDisabled === false) {
            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length < 6 && !isNaN(key)) {
                // The panel is ready for password input
                this.props.onUpdateScreenContents(key);
            }

            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length === 6 && key === 'L') {
                // Set the new password and lock the door
                this.props.onToggleKeyInput();  // disable keys
                this.props.onSetNewPassword();
                this.props.onChangeState(2);
                this.props.onDisplayState(2);
                // Start locking...
                setTimeout(() => {
                    this.props.onChangeState(3);
                    this.props.onDisplayState(3);
                    this.props.onToggleKeyInput();  // enable keys
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
                        this.props.onChangeState(4);
                        this.props.onDisplayState(4);
                        // Start unlocking...
                        setTimeout(() => {
                            this.props.onChangeState(1);
                            this.props.onDisplayState(1);
                            this.props.onToggleKeyInput();  // enable keys
                        }, 3000);
                    } else {
                        // No Match
                        if (this.props.currentScreenContents === '000000') {
                            // Enter service mode
                            setTimeout(() => {
                                this.props.onChangeState(6);
                                this.props.onDisplayState(6);
                                this.props.onToggleKeyInput();  // enable keys
                            }, 1200);
                        } else {
                            // Error
                            this.props.onChangeState(5);
                            this.props.onDisplayState(5);
                            // Go back to password verification
                            setTimeout(() => {
                                this.props.onChangeState(3);
                                this.props.onDisplayState(3);
                                this.props.onToggleKeyInput();  // enable keys
                            }, 1200);
                        }
                    }
                }, 1200);
            }

            if (this.props.currentStateId === 6 && this.props.currentScreenContents.length < 13) {
                // Service mode
                this.props.onUpdateScreenContents(key);
            }
        }
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
    isMatch: state.safe.isMatch
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateScreenContents: (payload) => dispatch(updateScreenContents(payload)),
    onToggleKeyInput: () => dispatch(toggleKeyInput()),
    onSetNewPassword: () => dispatch(setNewPassword()),
    onDisplayState: (payload) => dispatch(displayState(payload)),
    onChangeState: (payload) => dispatch(changeState(payload)),
    onVerifyPassword: (payload) => dispatch(verifyPassword(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
