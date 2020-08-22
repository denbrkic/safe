import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Key from '../../presentation/Key/Key';
import './Keypad.scss';
import {connect} from 'react-redux';
import {
    updateScreenContents, 
    toggleKeyInput,
    setNewPassword,
    displayState
} from '../../actions/safe';

export class Keypad extends Component {

    componentDidMount() {
        this.props.onDisplayState(this.props.currentStateId);
    }

    onKeyClickCallback = (key) => {
        if (this.props.keyInputDisabled === false) {
            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length < 6 && !isNaN(key)) {
                this.props.onUpdateScreenContents(key);
            }

            if (this.props.currentStateId === 1 && this.props.currentScreenContents.length === 6 && key === 'L') {
                this.props.onToggleKeyInput();
                this.props.onSetNewPassword();
                console.log('keyboard disabled');
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
    keyInputDisabled: state.safe.keyInputDisabled
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateScreenContents: (payload) => dispatch(updateScreenContents(payload)),
    onToggleKeyInput: () => dispatch(toggleKeyInput()),
    onSetNewPassword: () => dispatch(setNewPassword()),
    onDisplayState: (payload) => dispatch(displayState(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
