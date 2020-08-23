import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()});

import Indicator from './Indicator';

describe('Indicator component', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            text: 'Unlocked'
        };

        wrapper = shallow(<Indicator { ...props } />);
    });

    test('should contain the text passed by the prop', () => {
        expect(wrapper.find('span').text()).toBe(props.text);
    });
});
