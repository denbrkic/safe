import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Key from '../../presentation/Key/Key';
import './Keypad.scss';
import {connect} from 'react-redux';
//import {fetchSerialNumber} from '../../actions/safe';

export class Keypad extends Component {

    render() {
        return (
            <Wrapper componentName="Keypad">
                
                <div>
                    <Key digit="7" />
                    <Key digit="8" />
                    <Key digit="9" />
                </div>
                <div>
                    <Key digit="4" />
                    <Key digit="5" />
                    <Key digit="6" />
                </div>
                <div>
                    <Key digit="1" />
                    <Key digit="2" />
                    <Key digit="3" />
                </div>
                <div>
                    <Key digit="*" />
                    <Key digit="0" />
                    <Key digit="L" />
                </div>
                
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    //states: state.data.safe.states
});

const mapDispatchToProps = (dispatch) => ({
    //onFetchSerialNumber: (payload) => dispatch(fetchSerialNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
