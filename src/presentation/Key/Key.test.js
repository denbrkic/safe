import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import Key from './Key';

describe('Key component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            digit: '7'
        };

        wrapper = shallow(<Key { ...props } />);
    });

    test('should contain the text passed by the prop', () => {
        expect(wrapper.find('.Key--digit').text()).toBe(props.digit);
    });
});
